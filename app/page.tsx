import Image from "next/image";
import {
  ArrowDownRight, Box, Check, ChevronRight, Layers3, MapPin,
  PackageCheck, PenTool, Plane, Printer, Ruler, ShieldCheck, Sparkles, Wrench,
} from "lucide-react";
import { QuoteForm } from "./quote-form";

const services = [
  { icon: Printer, title: "Druk z gotowego modelu", text: "STL, 3MF i inne popularne formaty. Realizujemy również projekty z MakerWorld, Thingiverse, Printables i Cults3D — zgodnie z licencją modelu.", number: "01" },
  { icon: PenTool, title: "Projektowanie 3D", text: "Od szkicu, zdjęcia lub opisu do gotowego modelu i wydruku. Projekt dopasowujemy do funkcji, materiału i warunków pracy.", number: "02" },
  { icon: Wrench, title: "Części techniczne", text: "Uchwyty, obudowy, mocowania, adaptery i części zamienne dopasowane do konkretnego zastosowania.", number: "03" },
  { icon: Ruler, title: "Prototypy", text: "Pojedyncze egzemplarze i krótkie serie dla firm, konstruktorów oraz klientów indywidualnych.", number: "04" },
  { icon: Plane, title: "Modelarstwo RC", text: "Lekkie i precyzyjne części do samolotów, dronów oraz innych modeli — także w LW-PLA.", number: "05" },
  { icon: Sparkles, title: "Elementy użytkowe", text: "Organizery, akcesoria domowe, dekoracje i spersonalizowane przedmioty tworzone na zamówienie.", number: "06" },
];

const materials = [
  { name: "PLA", tag: "Uniwersalny", text: "Estetyczne elementy dekoracyjne i przedmioty codziennego użytku.", color: "#ff6b35" },
  { name: "PETG", tag: "Funkcjonalny", text: "Wytrzymałe części o dobrej odporności mechanicznej i chemicznej.", color: "#f5b942" },
  { name: "ABS", tag: "Techniczny", text: "Odporne na uderzenia elementy pracujące w podwyższonej temperaturze.", color: "#a8b2bd" },
  { name: "ASA", tag: "Na zewnątrz", text: "Części odporne na pogodę i promieniowanie UV.", color: "#e8edf2" },
  { name: "LW-PLA", tag: "Ultralekki", text: "Lekki materiał idealny do modelarstwa lotniczego i RC.", color: "#79b8ff" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="DrukForma 3D — strona główna"><span className="brand-mark"><Layers3 size={20} strokeWidth={2.4} /></span><span>DRUKFORMA <span>3D</span></span></a>
        <nav aria-label="Główna nawigacja"><a href="#uslugi">Usługi</a><a href="#materialy">Materiały</a><a href="#proces">Jak to działa</a><a href="#kontakt">Kontakt</a></nav>
        <a className="header-cta" href="#wycena">Wyceń projekt <ArrowDownRight size={16} /></a>
      </header>

      <section className="hero" id="top">
        <Image className="hero-image" src="/assets/hero-3d-printer.png" alt="Drukarka 3D FDM drukująca precyzyjny element techniczny" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow"><span /> Dąbrowa Górnicza · wysyłka w całej Polsce</div>
          <h1>Twój pomysł.<br />Nasz <em>wydruk.</em></h1>
          <p>Profesjonalny druk 3D FDM i projektowanie modeli na zamówienie. Od szkicu lub pliku STL do gotowego elementu.</p>
          <div className="hero-actions"><a className="btn-primary" href="#wycena">Bezpłatna wycena <ChevronRight size={18} /></a><a className="btn-ghost" href="#uslugi">Zobacz możliwości</a></div>
        </div>
        <div className="hero-stats" aria-label="Najważniejsze informacje"><div><strong>FDM</strong><span>technologia druku</span></div><div><strong>5</strong><span>rodzajów materiału</span></div><div><strong>PL</strong><span>wysyłka w całej Polsce</span></div></div>
        <a className="scroll-cue" href="#uslugi" aria-label="Przewiń do usług"><ArrowDownRight /></a>
      </section>

      <section className="section services" id="uslugi">
        <div className="section-heading"><div><span className="kicker">Co możemy dla Ciebie zrobić</span><h2>Od pomysłu do<br /><em>gotowego elementu</em></h2></div><p>Łączymy projektowanie z precyzyjnym drukiem FDM. Doradzimy materiał, parametry i konstrukcję, aby część naprawdę spełniała swoje zadanie.</p></div>
        <div className="service-grid">{services.map(({ icon: Icon, title, text, number }) => <article className="service-card" key={title}><span className="service-number">{number}</span><Icon className="service-icon" size={30} /><h3>{title}</h3><p>{text}</p><span className="card-line" /></article>)}</div>
      </section>

      <section className="machines">
        <div className="machine-copy"><span className="kicker light">Zaplecze techniczne</span><h2>Mały detal.<br />Duży format.</h2><p>Dwie uzupełniające się drukarki pozwalają realizować zarówno precyzyjne części, jak i projekty o większych gabarytach.</p></div>
        <div className="machine-list"><article><span>01</span><div><h3>Bambu Lab P2S</h3><p>Precyzja, szybkość i powtarzalność dla wymagających elementów.</p></div><Printer /></article><article><span>02</span><div><h3>Elegoo Neptune 3 Max</h3><p>Duży obszar roboczy do realizacji większych projektów.</p></div><Box /></article></div>
      </section>

      <section className="section materials" id="materialy">
        <div className="section-heading compact"><div><span className="kicker">Dobierzemy odpowiedni materiał</span><h2>Materiał ma<br /><em>znaczenie</em></h2></div><p>Każdy projekt ma inne wymagania. Dobierzemy tworzywo do obciążeń, temperatury, warunków zewnętrznych i oczekiwanego wyglądu.</p></div>
        <div className="material-list">{materials.map((item, index) => <article className="material-row" key={item.name}><span className="material-index">0{index + 1}</span><span className="filament-dot" style={{ "--filament": item.color } as React.CSSProperties} /><h3>{item.name}</h3><span className="material-tag">{item.tag}</span><p>{item.text}</p></article>)}</div>
      </section>

      <section className="process" id="proces"><div className="process-title"><span className="kicker light">Prosty proces</span><h2>Jak wygląda<br />realizacja?</h2></div><div className="process-steps"><article><span>1</span><div><h3>Wyślij materiały</h3><p>Dodaj plik, link, zdjęcie, szkic lub po prostu opisz, czego potrzebujesz.</p></div></article><article><span>2</span><div><h3>Otrzymaj wycenę</h3><p>Przeanalizujemy projekt, dobierzemy materiał i przedstawimy indywidualną ofertę.</p></div></article><article><span>3</span><div><h3>Druk i dostawa</h3><p>Po akceptacji drukujemy element. Odbierzesz go osobiście lub wyślemy pod wskazany adres.</p></div></article></div></section>

      <section className="quote-section" id="wycena">
        <div className="quote-intro"><span className="kicker">Bezpłatna, niezobowiązująca wycena</span><h2>Masz model?<br />A może tylko <em>pomysł?</em></h2><p>Prześlij plik STL lub 3MF, wklej link do znalezionego projektu albo opisz potrzebny element. Wrócimy do Ciebie z propozycją wykonania.</p><ul><li><Check size={16} /> Dobór materiału i parametrów</li><li><Check size={16} /> Indywidualna wycena</li><li><Check size={16} /> Odbiór osobisty lub wysyłka</li></ul><div className="location"><MapPin /><div><strong>Dąbrowa Górnicza</strong><span>woj. śląskie · wysyłka w całej Polsce</span></div></div></div>
        <QuoteForm />
      </section>

      <section className="trust-strip"><div><ShieldCheck /><span><strong>Bezpieczne zgłoszenie</strong>Twoje pliki służą wyłącznie do wyceny</span></div><div><PackageCheck /><span><strong>Wysyłka w całej Polsce</strong>Solidnie zapakowany gotowy element</span></div><div><Layers3 /><span><strong>Pomoc techniczna</strong>Materiał i konstrukcja dobrane do zadania</span></div></section>
      <footer id="kontakt"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Layers3 size={20} /></span><span>DRUKFORMA <span>3D</span></span></a><p>Druk 3D na zamówienie — od pomysłu do gotowego elementu.</p><div><a href="#uslugi">Usługi</a><a href="#materialy">Materiały</a><a href="#wycena">Wycena</a></div><small>© {new Date().getFullYear()} DrukForma 3D · Dąbrowa Górnicza</small></footer>
    </main>
  );
}
