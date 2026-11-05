import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { getServicePage, servicePages } from "../../service-pages";
import { SiteFooter, SiteHeader } from "../../site-chrome";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/uslugi/${page.slug}` },
    openGraph: { title: page.title, description: page.description, url: `/uslugi/${page.slug}` },
  };
}

export default async function ServiceDetail({ params }: PageProps) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const url = `https://drukforma3d.pl/uslugi/${page.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.title,
        description: page.description,
        url,
        provider: { "@id": "https://drukforma3d.pl/#business" },
        areaServed: ["Dąbrowa Górnicza", "województwo śląskie", "Polska"],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://drukforma3d.pl" },
          { "@type": "ListItem", position: 2, name: "Usługi", item: "https://drukforma3d.pl/#uslugi" },
          { "@type": "ListItem", position: 3, name: page.shortTitle, item: url },
        ],
      },
    ],
  };

  return (
    <main>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <article className="content-page">
        <header className="content-hero">
          <nav className="breadcrumbs" aria-label="Okruszki"><Link href="/">Strona główna</Link><ChevronRight /><Link href="/#uslugi">Usługi</Link><ChevronRight /><span>{page.shortTitle}</span></nav>
          <span className="kicker">DrukForma 3D · Dąbrowa Górnicza</span>
          <h1>{page.title}</h1>
          <p>{page.lead}</p>
          <Link className="btn-primary content-cta" href="/#wycena">Poproś o bezpłatną wycenę <ArrowRight size={18} /></Link>
        </header>

        <div className="content-body">
          <section className="prose-block">
            <span className="kicker">Usługa dopasowana do projektu</span>
            <h2>Od założeń do gotowego elementu</h2>
            {page.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <aside className="benefit-panel">
            <h2>Co otrzymujesz</h2>
            <ul>{page.benefits.map((benefit) => <li key={benefit}><Check size={17} />{benefit}</li>)}</ul>
          </aside>

          <section className="wide-block">
            <span className="kicker">Przykładowe zastosowania</span>
            <h2>Co możemy wykonać?</h2>
            <div className="application-grid">{page.applications.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div>
          </section>

          <section className="wide-block process-block">
            <span className="kicker">Przejrzysty proces</span>
            <h2>Jak przebiega realizacja?</h2>
            <ol>{page.process.map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}</ol>
          </section>

          <section className="wide-block faq-block">
            <span className="kicker">Najczęstsze pytania</span>
            <h2>FAQ</h2>
            {page.faq.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
            <Link className="text-link" href="/faq">Zobacz wszystkie pytania i odpowiedzi <ArrowRight size={16} /></Link>
          </section>

          <section className="wide-block final-cta">
            <div><span className="kicker light">Masz plik, szkic lub pomysł?</span><h2>Wyceńmy Twój projekt</h2><p>Prześlij materiały przez formularz. Sprawdzimy możliwość wykonania i wrócimy z indywidualną propozycją.</p></div>
            <Link className="btn-primary" href="/#wycena">Przejdź do formularza <ArrowRight size={18} /></Link>
          </section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
