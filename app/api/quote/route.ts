import { env } from "cloudflare:workers";

export const runtime = "edge";

const MAX_FILE_SIZE = 25 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set(["stl", "3mf", "obj", "step", "stp", "zip"]);

function field(form: FormData, name: string, max = 4000) {
  const value = form.get(name);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function bytesToBase64(bytes: Uint8Array) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return btoa(binary);
}

export async function POST(request: Request) {
  try {
    const bindings = env as unknown as {
      GOOGLE_APPS_SCRIPT_URL?: string;
      GOOGLE_APPS_SCRIPT_SECRET?: string;
    };
    if (!bindings.GOOGLE_APPS_SCRIPT_URL || !bindings.GOOGLE_APPS_SCRIPT_SECRET) {
      throw new Error("Quote delivery is not configured.");
    }

    const form = await request.formData();
    const name = field(form, "name", 100);
    const email = field(form, "email", 160).toLowerCase();
    const message = field(form, "message", 4000);
    if (!name || !email.includes("@") || message.length < 10 || field(form, "consent", 10) !== "yes") {
      return Response.json({ error: "Uzupełnij wymagane pola formularza." }, { status: 400 });
    }

    const upload = form.get("file");
    let file: { name: string; type: string; size: number; base64: string } | null = null;
    if (upload instanceof File && upload.size > 0) {
      const extension = upload.name.split(".").pop()?.toLowerCase() || "";
      if (!ALLOWED_EXTENSIONS.has(extension)) {
        return Response.json({ error: "Nieobsługiwany format pliku." }, { status: 400 });
      }
      if (upload.size > MAX_FILE_SIZE) {
        return Response.json({ error: "Plik przekracza limit 25 MB." }, { status: 413 });
      }
      file = {
        name: upload.name.slice(0, 220),
        type: upload.type || "application/octet-stream",
        size: upload.size,
        base64: bytesToBase64(new Uint8Array(await upload.arrayBuffer())),
      };
    }

    const response = await fetch(bindings.GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        secret: bindings.GOOGLE_APPS_SCRIPT_SECRET,
        quote: {
          id: crypto.randomUUID(),
          name,
          email,
          message,
          projectType: field(form, "projectType", 100),
          material: field(form, "material", 100),
          projectUrl: field(form, "projectUrl", 1000),
          submittedAt: new Date().toISOString(),
        },
        file,
      }),
      redirect: "follow",
    });
    const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!response.ok || !result?.ok) {
      throw new Error(result?.error || `Google delivery failed (${response.status}).`);
    }
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Quote submission failed", error);
    return Response.json({ error: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie za chwilę." }, { status: 500 });
  }
}
