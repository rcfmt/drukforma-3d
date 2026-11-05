export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  lead: string;
  intro: string[];
  benefits: string[];
  applications: string[];
  process: string[];
  faq: { question: string; answer: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "druk-3d-na-zamowienie-dabrowa-gornicza",
    title: "Druk 3D na zamówienie w Dąbrowie Górniczej",
    shortTitle: "Druk 3D Dąbrowa Górnicza",
    description: "Druk 3D FDM na zamówienie w Dąbrowie Górniczej. PLA, PETG, ABS, ASA i LW-PLA. Odbiór osobisty lub wysyłka InPost w całej Polsce.",
    lead: "Lokalna realizacja, indywidualna wycena i pomoc w wyborze materiału — od pliku STL do gotowego elementu.",
    intro: [
      "DrukForma 3D realizuje wydruki FDM dla klientów prywatnych i firm z Dąbrowy Górniczej, Zagłębia i całej Polski. Możesz przesłać gotowy plik STL lub 3MF, link do legalnie udostępnionego modelu albo sam opis potrzebnego elementu.",
      "Dobieramy materiał i parametry do zastosowania części. Małe elementy wykonujemy z naciskiem na dokładność i powtarzalność, a większe projekty możemy realizować dzięki możliwości druku wielkoformatowego.",
    ],
    benefits: ["Bezpłatna wycena na podstawie pliku, linku lub opisu", "PLA, PETG, ABS, ASA i LW-PLA", "Odbiór osobisty w Dąbrowie Górniczej", "Bezpieczna wysyłka InPost w całej Polsce"],
    applications: ["Uchwyty i mocowania", "Obudowy i adaptery", "Organizery i akcesoria", "Prototypy", "Elementy dekoracyjne", "Części do modeli RC"],
    process: ["Przesyłasz model, link albo opis projektu.", "Sprawdzamy geometrię, zastosowanie i dobieramy materiał.", "Otrzymujesz wycenę i ustalenia przed rozpoczęciem druku.", "Po akceptacji drukujemy, kontrolujemy i przekazujemy lub wysyłamy część."],
    faq: [
      { question: "Czy można odebrać wydruk osobiście?", answer: "Tak. Odbiór osobisty jest możliwy w Dąbrowie Górniczej po wcześniejszym ustaleniu terminu." },
      { question: "Czy przyjmujecie pliki STL i 3MF?", answer: "Tak. Formularz przyjmuje STL, 3MF, OBJ, STEP, STP oraz ZIP. Możesz też wkleić link do projektu." },
    ],
  },
  {
    slug: "druk-3d-dla-firm-slask",
    title: "Druk 3D dla firm na Śląsku",
    shortTitle: "Druk 3D dla firm",
    description: "Druk 3D FDM dla firm na Śląsku: prototypy, oprzyrządowanie, obudowy, uchwyty, adaptery i krótkie serie.",
    lead: "Szybkie prototypowanie i funkcjonalne elementy FDM dla utrzymania ruchu, konstruktorów oraz małych i średnich firm.",
    intro: [
      "Druk 3D pozwala szybko sprawdzić projekt, wykonać brakujący uchwyt lub przygotować krótką serię elementów bez kosztownego oprzyrządowania produkcyjnego. Wspieramy firmy z województwa śląskiego na etapie prototypu i realizacji części użytkowych.",
      "Możemy pracować z gotowym modelem lub przygotować geometrię na podstawie szkicu, zdjęcia i wymiarów. Materiał dobieramy do obciążeń, temperatury i środowiska pracy.",
    ],
    benefits: ["Prototypy do weryfikacji kształtu i montażu", "Krótkie serie bez formy wtryskowej", "Elementy pomocnicze i oprzyrządowanie", "Indywidualna dokumentacja ustaleń"],
    applications: ["Przyrządy montażowe", "Obudowy elektroniki", "Uchwyty czujników", "Adaptery", "Modele demonstracyjne", "Części testowe"],
    process: ["Przekazujesz model CAD, plik lub opis potrzeby.", "Ustalamy funkcję, tolerancje, materiał i liczbę sztuk.", "Przygotowujemy wycenę oraz założenia realizacji.", "Po akceptacji wykonujemy prototyp lub serię i organizujemy dostawę."],
    faq: [
      { question: "Czy wykonujecie krótkie serie?", answer: "Tak. FDM dobrze sprawdza się przy prototypach i małych seriach, gdy wykonanie formy nie jest ekonomiczne." },
      { question: "Czy możecie zaprojektować część dla firmy?", answer: "Tak. Projekt może powstać na podstawie szkicu, wymiarów, zdjęć lub opisu funkcji elementu." },
    ],
  },
  {
    slug: "projektowanie-modeli-3d",
    title: "Projektowanie modeli 3D na zamówienie",
    shortTitle: "Projektowanie 3D",
    description: "Projektowanie modeli 3D na zamówienie na podstawie szkicu, zdjęcia, wymiarów lub opisu. Projekt przygotowany do druku FDM.",
    lead: "Zamieniamy pomysł, szkic albo uszkodzony element w model przygotowany do praktycznego druku 3D.",
    intro: [
      "Nie musisz mieć gotowego pliku STL. Opisz zastosowanie, prześlij zdjęcia, szkic i najważniejsze wymiary, a przygotujemy model dostosowany do technologii FDM.",
      "Projektowanie obejmuje nie tylko kształt. Uwzględniamy kierunek druku, grubości ścian, miejsca mocowania, luzy montażowe i właściwości wybranego materiału.",
    ],
    benefits: ["Model zaprojektowany pod druk FDM", "Możliwość dopasowania do istniejącej części", "Konsultacja materiału i konstrukcji", "Od modelu do gotowego wydruku w jednym miejscu"],
    applications: ["Obudowy", "Zaślepki", "Mocowania", "Adaptery", "Organizery", "Personalizowane akcesoria"],
    process: ["Przekazujesz opis, szkic, zdjęcia i wymiary.", "Ustalamy funkcję oraz najważniejsze wymagania.", "Powstaje model zoptymalizowany do druku.", "Po akceptacji wykonujemy wydruk testowy lub docelowy."],
    faq: [
      { question: "Czy wystarczy zdjęcie uszkodzonej części?", answer: "Zdjęcie pomaga, ale do poprawnego dopasowania potrzebne są również wymiary lub dostęp do elementu wzorcowego." },
      { question: "Czy otrzymam gotowy plik modelu?", answer: "Zakres przekazania plików ustalamy indywidualnie w wycenie przed rozpoczęciem projektu." },
    ],
  },
  {
    slug: "czesci-zamienne",
    title: "Części zamienne i techniczne z druku 3D",
    shortTitle: "Części zamienne 3D",
    description: "Projektowanie i druk 3D części zamiennych, uchwytów, mocowań, obudów i adapterów z PLA, PETG, ABS lub ASA.",
    lead: "Odtwarzamy proste elementy, których nie można już kupić, i projektujemy nowe części do konkretnego zastosowania.",
    intro: [
      "Druk 3D jest praktycznym rozwiązaniem dla niedostępnych plastikowych uchwytów, zaślepek, pokręteł, adapterów i obudów. Każdy element analizujemy pod kątem obciążenia i warunków pracy.",
      "Nie każda część powinna być drukowana. Elementów krytycznych dla bezpieczeństwa, bardzo silnie obciążonych lub pracujących poza zakresem materiału nie realizujemy bez odpowiedniej analizy zastosowania.",
    ],
    benefits: ["Dopasowanie do istniejącego urządzenia", "Możliwość poprawy słabych punktów oryginału", "Materiały do wnętrz i zastosowań zewnętrznych", "Pojedyncze sztuki i małe serie"],
    applications: ["Zatrzaski i zaślepki", "Uchwyty", "Pokrętła", "Mocowania", "Adaptery", "Obudowy"],
    process: ["Przesyłasz zdjęcia, wymiary i opis zastosowania.", "Oceniamy, czy druk FDM jest odpowiednią technologią.", "Projektujemy lub sprawdzamy model i dobieramy materiał.", "Wykonujemy część, sprawdzamy wymiary i przekazujemy do testu."],
    faq: [
      { question: "Czy druk 3D zastąpi każdą część plastikową?", answer: "Nie. Możliwość wykonania zależy od obciążeń, temperatury, dokładności i znaczenia części dla bezpieczeństwa." },
      { question: "Jaki materiał nadaje się na część techniczną?", answer: "Często wybieramy PETG, ABS lub ASA, ale ostateczny wybór zależy od temperatury, warunków zewnętrznych i obciążenia." },
    ],
  },
  {
    slug: "prototypy-fdm",
    title: "Prototypy FDM i krótkie serie",
    shortTitle: "Prototypy FDM",
    description: "Prototypy FDM, modele testowe i krótkie serie. Szybka weryfikacja kształtu, montażu i funkcji przed produkcją.",
    lead: "Sprawdź wymiary, ergonomię i montaż na fizycznym modelu, zanim zainwestujesz w produkcję docelową.",
    intro: [
      "Prototyp FDM pozwala szybko przejść od modelu cyfrowego do fizycznej części. Można zweryfikować dopasowanie, dostęp do złączy, sposób montażu, wygląd i podstawową funkcję projektu.",
      "W zależności od celu prototyp może być ekonomicznym modelem poglądowym albo funkcjonalnym elementem wykonanym z mocniejszego materiału i ustawień druku.",
    ],
    benefits: ["Szybka weryfikacja projektu", "Łatwe wprowadzanie kolejnych wersji", "Niższy koszt zmian przed produkcją", "Możliwość wykonania krótkiej serii"],
    applications: ["Modele montażowe", "Obudowy testowe", "Modele prezentacyjne", "Wzorniki", "Elementy ergonomiczne", "Serie pilotażowe"],
    process: ["Określamy, co prototyp ma zweryfikować.", "Dobieramy dokładność, materiał i orientację druku.", "Wykonujemy model i przekazujemy go do testów.", "Na podstawie uwag można przygotować poprawioną wersję."],
    faq: [
      { question: "Ile iteracji może mieć prototyp?", answer: "Liczba iteracji zależy od projektu. Każdą wersję i jej zakres wyceniamy przejrzyście przed realizacją." },
      { question: "Czy prototyp może być częścią użytkową?", answer: "Tak, jeśli materiał i konstrukcja odpowiadają warunkom pracy. Cel prototypu ustalamy przed drukiem." },
    ],
  },
  {
    slug: "modelarstwo-rc",
    title: "Druk 3D części do modelarstwa RC",
    shortTitle: "Modelarstwo RC",
    description: "Lekkie części drukowane 3D do samolotów, dronów i modeli RC. LW-PLA, PLA i PETG, projektowanie elementów na zamówienie.",
    lead: "Lekkie elementy, mocowania i akcesoria do samolotów, dronów oraz innych modeli RC.",
    intro: [
      "W modelarstwie RC liczy się masa, sztywność i łatwość naprawy. Drukujemy elementy z gotowych modeli oraz projektujemy proste części dopasowane do konkretnej konstrukcji.",
      "LW-PLA pozwala ograniczyć masę części lotniczych, natomiast PLA i PETG sprawdzają się w mocowaniach, przyrządach i akcesoriach, zależnie od obciążeń i temperatury.",
    ],
    benefits: ["Dostęp do lekkiego LW-PLA", "Realizacja z legalnie udostępnionych modeli", "Personalizowane mocowania i adaptery", "Możliwość wykonania zapasowych części"],
    applications: ["Elementy samolotów RC", "Mocowania elektroniki", "Uchwyty anten", "Adaptery", "Przyrządy montażowe", "Akcesoria warsztatowe"],
    process: ["Przesyłasz model lub opisujesz część i jej zastosowanie.", "Ustalamy oczekiwaną masę, sztywność i sposób montażu.", "Dobieramy materiał oraz parametry druku.", "Wykonujemy część i organizujemy odbiór lub wysyłkę."],
    faq: [
      { question: "Czy drukujecie całe modele samolotów?", answer: "Możliwość realizacji zależy od modelu, licencji, rozmiaru i materiału. Prześlij link lub pliki do indywidualnej oceny." },
      { question: "Kiedy warto użyć LW-PLA?", answer: "LW-PLA sprawdza się tam, gdzie priorytetem jest niska masa, szczególnie w elementach lotniczych. Nie zastępuje jednak materiałów technicznych w każdym zastosowaniu." },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
