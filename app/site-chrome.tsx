import { ArrowDownRight, Layers3 } from "lucide-react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="DrukForma 3D — strona główna"><span className="brand-mark"><Layers3 size={20} strokeWidth={2.4} /></span><span>DRUKFORMA <span>3D</span></span></Link>
      <nav aria-label="Główna nawigacja"><Link href="/#uslugi">Usługi</Link><Link href="/materialy-druk-3d">Materiały</Link><Link href="/faq">FAQ</Link><Link href="/#kontakt">Kontakt</Link></nav>
      <Link className="header-cta" href="/#wycena">Wyceń projekt <ArrowDownRight size={16} /></Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="kontakt">
      <Link className="brand footer-brand" href="/"><span className="brand-mark"><Layers3 size={20} /></span><span>DRUKFORMA <span>3D</span></span></Link>
      <p>Druk 3D na zamówienie — od pomysłu do gotowego elementu.</p>
      <div><Link href="/#uslugi">Usługi</Link><Link href="/materialy-druk-3d">Materiały</Link><Link href="/faq">FAQ</Link><Link href="/#wycena">Wycena</Link></div>
      <small>© {new Date().getFullYear()} DrukForma 3D · Dąbrowa Górnicza</small>
    </footer>
  );
}
