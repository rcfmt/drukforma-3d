"use client";

import { FormEvent, useRef, useState } from "react";
import { CheckCircle2, FileBox, Link2, LoaderCircle, Paperclip, Send, X } from "lucide-react";

const MAX_FILE_SIZE = 25 * 1024 * 1024;

export function QuoteForm() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    if (file && file.size > MAX_FILE_SIZE) { setStatus("error"); setError("Plik jest większy niż 25 MB. Dodaj link do pliku w opisie."); return; }
    setStatus("loading");
    try {
      const form = event.currentTarget;
      const response = await fetch("/api/quote", { method: "POST", body: new FormData(form) });
      const data = await response.json() as { error?: string };
      if (!response.ok) throw new Error(data.error || "Nie udało się wysłać formularza.");
      form.reset(); setFile(null); setStatus("success");
    } catch (err) { setStatus("error"); setError(err instanceof Error ? err.message : "Spróbuj ponownie za chwilę."); }
  }

  if (status === "success") return <div className="quote-form success-state"><CheckCircle2 /><span>Zgłoszenie wysłane</span><h3>Dziękujemy!</h3><p>Materiały dotarły. Przeanalizujemy projekt i skontaktujemy się z Tobą w sprawie wyceny.</p><button type="button" onClick={() => setStatus("idle")}>Wyślij kolejne zgłoszenie</button></div>;

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="form-head"><span>Formularz wyceny</span><FileBox /></div>
      <div className="field-row"><label>Imię i nazwisko<input name="name" required maxLength={100} placeholder="Jan Kowalski" /></label><label>E-mail<input name="email" type="email" required maxLength={160} placeholder="jan@email.pl" /></label></div>
      <div className="field-row"><label>Rodzaj projektu<select name="projectType" defaultValue=""><option value="" disabled>Wybierz</option><option>Druk z gotowego modelu</option><option>Projektowanie i druk</option><option>Część techniczna</option><option>Prototyp</option><option>Modelarstwo RC</option><option>Inne</option></select></label><label>Preferowany materiał<select name="material" defaultValue="Nie wiem — proszę o pomoc"><option>Nie wiem — proszę o pomoc</option><option>PLA</option><option>PETG</option><option>ABS</option><option>ASA</option><option>LW-PLA</option></select></label></div>
      <label>Link do modelu lub projektu<span className="input-icon"><Link2 size={17} /><input name="projectUrl" type="url" maxLength={1000} placeholder="https://makerworld.com/..." /></span></label>
      <label>Opis projektu<textarea name="message" required minLength={10} maxLength={4000} rows={5} placeholder="Opisz przeznaczenie elementu, przybliżone wymiary, liczbę sztuk i inne ważne informacje..." /></label>
      <label className="file-drop"><input ref={fileRef} name="file" type="file" accept=".stl,.3mf,.obj,.step,.stp,.zip" onChange={(event) => setFile(event.target.files?.[0] || null)} />{file ? <><Paperclip /><span><strong>{file.name}</strong><small>{(file.size / 1024 / 1024).toFixed(1)} MB</small></span><button type="button" aria-label="Usuń plik" onClick={(event) => { event.preventDefault(); setFile(null); if (fileRef.current) fileRef.current.value = ""; }}><X /></button></> : <><Paperclip /><span><strong>Dodaj plik modelu</strong><small>STL, 3MF, OBJ, STEP lub ZIP · maks. 25 MB</small></span></>}</label>
      <label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>Zgadzam się na przetwarzanie podanych danych w celu przygotowania i obsługi wyceny.</span></label>
      {status === "error" && <p className="form-error" role="alert">{error}</p>}
      <button className="submit-btn" disabled={status === "loading"} type="submit">{status === "loading" ? <><LoaderCircle className="spin" /> Wysyłanie…</> : <>Wyślij do wyceny <Send size={17} /></>}</button>
    </form>
  );
}
