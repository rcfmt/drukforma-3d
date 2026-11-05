import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "FAQ — druk 3D na zamówienie",
  description: "Odpowiedzi na pytania o wycenę druku 3D, formaty STL i 3MF, materiały, projektowanie, czas realizacji, odbiór i wysyłkę.",
  alternates: { canonical: "/faq" },
};

const questions = [
  { q: "Co przesłać do wyceny druku 3D?", a: "Najlepiej plik STL, 3MF, OBJ, STEP lub STP. Możesz też wkleić adres URL do legalnie udostępnionego modelu albo przesłać ZIP. Jeśli model jeszcze nie istnieje, opisz zastosowanie i dodaj zdjęcia, szkic oraz wymiary." },
  { q: "Czy mogę zamówić projekt bez gotowego modelu 3D?", a: "Tak. Model możemy przygotować na podstawie opisu, szkicu, zdjęć i wymiarów. Zakres projektu oraz sposób przekazania plików ustalamy przed rozpoczęciem pracy." },
  { q: "Jak obliczana jest cena wydruku?", a: "Cena zależy między innymi od wymiarów i geometrii, ilości materiału, czasu pracy urządzenia, wymaganej jakości, obróbki oraz liczby sztuk. Dlatego każdą realizację wyceniamy indywidualnie." },
  { q: "Jakie materiały są dostępne?", a: "Drukujemy z PLA, PETG, ABS, ASA i LW-PLA. Materiał dobieramy do temperatury, obciążeń, warunków zewnętrznych, masy i oczekiwanego wyglądu części." },
  { q: "Czy wykonujecie duże wydruki?", a: "Tak, oferujemy druk wielkoformatowy. W zależności od geometrii element może powstać w całości albo w częściach zaprojektowanych do późniejszego połączenia." },
  { q: "Czy realizujecie pojedyncze sztuki i krótkie serie?", a: "Tak. Wykonujemy zarówno pojedyncze elementy i prototypy, jak i niewielkie serie. Przy większej liczbie sztuk sprawdzamy powtarzalność oraz najbardziej ekonomiczny układ realizacji." },
  { q: "Jak długo trwa realizacja?", a: "Termin zależy od wielkości, czasu druku, materiału, liczby sztuk i aktualnego obłożenia. Przewidywany termin podajemy razem z wyceną przed rozpoczęciem realizacji." },
  { q: "Czy wysyłacie wydruki w całej Polsce?", a: "Tak. Możliwa jest wysyłka na terenie całej Polski oraz odbiór osobisty w Dąbrowie Górniczej po wcześniejszym ustaleniu." },
  { q: "Czy każdy element można wykonać metodą FDM?", a: "Nie. Ograniczeniem mogą być wymagane tolerancje, obciążenia, temperatura, kontakt z żywnością lub znaczenie części dla bezpieczeństwa. Przed wyceną oceniamy, czy FDM jest odpowiednią technologią." },
  { q: "Czy moje pliki są bezpieczne?", a: "Pliki przesłane przez formularz wykorzystujemy do analizy i przygotowania wyceny. Jeśli projekt wymaga dodatkowych ustaleń dotyczących poufności, opisz to w wiadomości." },
];

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return (
    <main>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="content-page">
        <header className="content-hero">
          <nav className="breadcrumbs" aria-label="Okruszki"><Link href="/">Strona główna</Link><ChevronRight /><span>FAQ</span></nav>
          <span className="kicker">Pytania i odpowiedzi</span>
          <h1>Wszystko, co warto wiedzieć przed wyceną</h1>
          <p>Krótko i konkretnie o plikach, projektowaniu, materiałach, cenie, terminie i dostawie.</p>
        </header>
        <div className="content-body single-column">
          <section className="wide-block faq-block faq-page-list">{questions.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
          <section className="wide-block final-cta"><div><span className="kicker light">Masz inne pytanie?</span><h2>Opisz swój projekt</h2><p>Formularz pozwala przesłać plik lub wkleić adres URL. Odpowiemy wraz z indywidualną wyceną.</p></div><Link className="btn-primary" href="/#wycena">Przejdź do formularza <ArrowRight size={18} /></Link></section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
