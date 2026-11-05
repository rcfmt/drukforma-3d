import { env } from "cloudflare:workers";
import { getDb } from "@/db";
import { quoteRequests } from "@/db/schema";

export const runtime = "edge";
const MAX_FILE_SIZE = 25 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set(["stl", "3mf", "obj", "step", "stp", "zip"]);

function field(form: FormData, name: string, max = 4000) {
  const value = form.get(name);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let uploadedKey: string | null = null;
  try {
    const form = await request.formData();
    const name = field(form, "name", 100);
    const email = field(form, "email", 160).toLowerCase();
    const message = field(form, "message", 4000);
    if (!name || !email.includes("@") || message.length < 10 || field(form, "consent", 10) !== "yes") return Response.json({ error: "Uzupełnij wymagane pola formularza." }, { status: 400 });
    const id = crypto.randomUUID();
    const upload = form.get("file");
    let fileName: string | null = null;
    let fileSize: number | null = null;
    if (upload instanceof File && upload.size > 0) {
      const extension = upload.name.split(".").pop()?.toLowerCase() || "";
      if (!ALLOWED_EXTENSIONS.has(extension)) return Response.json({ error: "Nieobsługiwany format pliku." }, { status: 400 });
      if (upload.size > MAX_FILE_SIZE) return Response.json({ error: "Plik przekracza limit 25 MB." }, { status: 413 });
      fileName = upload.name.slice(0, 220); fileSize = upload.size;
      uploadedKey = `quotes/${id}/${fileName.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
      await env.BUCKET.put(uploadedKey, upload.stream(), { httpMetadata: { contentType: upload.type || "application/octet-stream" }, customMetadata: { quoteId: id, originalName: fileName } });
    }
    await getDb().insert(quoteRequests).values({ id, name, email, message, projectType: field(form, "projectType", 100) || null, material: field(form, "material", 100) || null, projectUrl: field(form, "projectUrl", 1000) || null, fileKey: uploadedKey, fileName, fileSize, createdAt: new Date() });
    return Response.json({ ok: true, id });
  } catch (error) {
    if (uploadedKey) await env.BUCKET.delete(uploadedKey).catch(() => undefined);
    console.error("Quote submission failed", error);
    return Response.json({ error: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie za chwilę." }, { status: 500 });
  }
}
