import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Materiały do druku 3D: PLA, PETG, ABS, ASA i LW-PLA",
  description: "Porównanie materiałów do druku 3D FDM: PLA, PETG, ABS, ASA i LW-PLA. Właściwości, zastosowania i pomoc w wyborze tworzywa.",
  alternates: { canonical: "/materialy-druk-3d" },
};

const materials = [
  { name: "PLA", use: "Modele, dekoracje, organizery i elementy użytkowe do wnętrz", strengths: "Estetyczny, sztywny, dobry do dokładnych detali", limits: "Nie jest pierwszym wyborem do wysokiej temperatury i silnie obciążonych części" },
  { name: "PETG", use: "Uchwyty, obudowy, adaptery i części funkcjonalne", strengths: "Wytrzymały, lekko elastyczny, odporny na wilgoć", limits: "Powierzchnia może być mniej matowa niż w PLA" },
  { name: "ABS", use: "Elementy techniczne i obudowy pracujące w podwyższonej temperaturze", strengths: "Odporny na uderzenia i temperaturę", limits: "Dobór wymaga uwzględnienia skurczu i warunków użytkowania" },
  { name: "ASA", use: "Części zewnętrzne, uchwyty i obudowy narażone na pogodę", strengths: "Odporność na promieniowanie UV i warunki atmosferyczne", limits: "Wybór konstrukcji zależy od obciążeń oraz temperatury pracy" },
  { name: "LW-PLA", use: "Lekkie części lotnicze i elementy do modelarstwa RC", strengths: "Bardzo niska masa i możliwość regulacji spienienia", limits: "Nie zastępuje materiałów technicznych w każdym zastosowaniu" },
];

export default function MaterialsGuide() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Materiały do druku 3D: PLA, PETG, ABS, ASA i LW-PLA",
    description: metadata.description,
    author: { "@id": "https://drukforma3d.pl/#business" },
    publisher: { "@id": "https://drukforma3d.pl/#business" },
    mainEntityOfPage: "https://drukforma3d.pl/materialy-druk-3d",
  };

  return (
    <main>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="content-page">
        <header className="content-hero">
          <nav className="breadcrumbs" aria-label="Okruszki"><Link href="/">Strona główna</Link><ChevronRight /><span>Materiały do druku 3D</span></nav>
          <span className="kicker">Praktyczny przewodnik</span>
          <h1>Jaki materiał wybrać do druku 3D?</h1>
          <p>Dobry wybór tworzywa zaczyna się od warunków pracy części. Liczą się obciążenia, temperatura, wilgoć, promieniowanie UV, masa i oczekiwany wygląd.</p>
          <Link className="btn-primary content-cta" href="/#wycena">Opisz zastosowanie — pomożemy wybrać <ArrowRight size={18} /></Link>
        </header>
        <div className="content-body single-column">
          <section className="wide-block prose-block">
            <span className="kicker">Porównanie materiałów</span>
            <h2>Najważniejsze różnice</h2>
            <p>Nie istnieje jeden najlepszy materiał do każdego projektu. PLA sprawdza się w estetycznych elementach do wnętrz, PETG w wielu częściach funkcjonalnych, ABS i ASA w bardziej wymagających zastosowaniach, a LW-PLA tam, gdzie kluczowa jest niska masa.</p>
            <div className="material-table-wrap"><table className="guide-table"><thead><tr><th>Materiał</th><th>Najczęstsze zastosowanie</th><th>Mocne strony</th><th>Na co uważać</th></tr></thead><tbody>{materials.map((item) => <tr key={item.name}><th>{item.name}</th><td>{item.use}</td><td>{item.strengths}</td><td>{item.limits}</td></tr>)}</tbody></table></div>
          </section>
          <section className="wide-block choice-grid">
            <div><span className="kicker">Do wnętrz</span><h2>PLA lub PETG</h2><p>PLA wybieramy, gdy liczy się estetyka i sztywność. PETG lepiej znosi wilgoć, uderzenia i codzienne użytkowanie.</p></div>
            <div><span className="kicker">Na zewnątrz</span><h2>Najczęściej ASA</h2><p>ASA jest dobrym kandydatem do części wystawionych na pogodę i promieniowanie UV. Ostateczny wybór zależy także od obciążenia.</p></div>
            <div><span className="kicker">Do części technicznych</span><h2>PETG, ABS lub ASA</h2><p>Decydują temperatura, sztywność, udarność i środowisko pracy. Konstrukcja modelu jest równie ważna jak sam materiał.</p></div>
            <div><span className="kicker">Do modeli latających</span><h2>LW-PLA</h2><p>Spieniany materiał pomaga ograniczyć masę części, szczególnie w modelarstwie lotniczym.</p></div>
          </section>
          <section className="wide-block final-cta"><div><span className="kicker light">Nie wiesz, co wybrać?</span><h2>Dobierzemy materiał do zadania</h2><p>Prześlij model lub opis warunków pracy. Wskażemy rozsądne rozwiązanie i przygotujemy wycenę.</p></div><Link className="btn-primary" href="/#wycena">Poproś o wycenę <ArrowRight size={18} /></Link></section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
