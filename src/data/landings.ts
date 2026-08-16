/**
 * Landingi pod frazy dlugiego ogona. Kazdy ma wlasny URL, tytul, H1 i unikalna
 * tresc - to najtanszy sposob na ruch w tej niszy, bo konkurencja celuje glownie
 * we fraze glowna. Nowy landing = nowy wpis w tej tablicy, bez pisania kodu.
 */

export interface Landing {
  slug: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: { heading: string; body: string[] }[];
  bullets?: { heading: string; items: string[] };
}

export const landings: Landing[] = [
  {
    slug: 'import-samochodow-z-usa-warszawa',
    title: 'Import samochodów z USA — Warszawa i Mazowsze',
    description:
      'Sprowadzamy samochody z USA dla klientów z Warszawy i Mazowsza. Własny warsztat, odbiór auta na miejscu, pełna obsługa celna i akcyza. Wycena w 2 godziny.',
    h1: 'Import samochodów z USA — Warszawa',
    lead: 'Obsługujemy klientów z Warszawy i całego Mazowsza. Auto odbierasz osobiście na naszym placu albo dowozimy je pod wskazany adres w mieście.',
    sections: [
      {
        heading: 'Dlaczego warszawscy klienci sprowadzają auta z USA',
        body: [
          'Warszawski rynek wtórny jest drogi, a podaż aut z dużymi silnikami i pickupów praktycznie nie istnieje. Za Forda Mustanga GT z 2019 roku w stołecznych komisach zapłacisz około 190 tysięcy złotych — sprowadzony przez nas egzemplarz w porównywalnym stanie zamyka się w 145 tysiącach.',
          'Druga rzecz to konfiguracja. Auta na rynek amerykański mają bogatsze wyposażenie standardowe, bo tam sprzedaje się je z pełnymi pakietami. W Polsce ten sam model bywa dostępny wyłącznie w wersji podstawowej.',
        ],
      },
      {
        heading: 'Jak wygląda współpraca z Warszawy',
        body: [
          'Pierwsza rozmowa może odbyć się u nas w biurze albo zdalnie — wystarczy telefon i WhatsApp. Ustalamy model, budżet całkowity i limit licytacji, a potem wysyłamy propozycje z aukcji.',
          'Po dopłynięciu auta do portu w Gdyni lub Bremerhaven zajmujemy się odprawą i naprawą. Odbiór odbywa się na naszym placu, gdzie możesz sprawdzić auto na miejscu, albo dowozimy je pod dom — w granicach Warszawy bez dodatkowej opłaty.',
        ],
      },
    ],
    bullets: {
      heading: 'Co obejmuje obsługa dla klientów z Warszawy',
      items: [
        'Spotkanie w biurze lub konsultacja zdalna, jak wolisz',
        'Odbiór auta z placu albo dowóz pod adres w Warszawie w cenie',
        'Naprawa w naszym warsztacie blacharsko-lakierniczym',
        'Badanie techniczne w warszawskiej okręgowej stacji kontroli pojazdów',
        'Komplet dokumentów do rejestracji w stołecznym wydziale komunikacji',
      ],
    },
  },
  {
    slug: 'sprowadzanie-samochodow-z-kanady',
    title: 'Sprowadzanie samochodów z Kanady',
    description:
      'Import auta z Kanady: niższe przebiegi, lepsza historia serwisowa i te same procedury celne co przy USA. Licytujemy na kanadyjskich aukcjach Copart i Impact.',
    h1: 'Sprowadzanie samochodów z Kanady',
    lead: 'Kanada to rynek często pomijany przez importerów, a bywa korzystniejszy od amerykańskiego: auta mają niższe przebiegi i lepiej udokumentowaną historię serwisową.',
    sections: [
      {
        heading: 'Czym import z Kanady różni się od USA',
        body: [
          'Procedura celna jest identyczna — cło 10%, akcyza i VAT liczone tak samo, bo dla polskiego urzędu liczy się import spoza Unii, nie konkretny kraj. Różnice są w samym rynku.',
          'Kanadyjskie auta mają zwykle niższe roczne przebiegi i częściej pełną historię serwisową w systemie CarProof, kanadyjskim odpowiedniku Carfaksu. Prędkościomierze są tam metryczne, więc nie trzeba ich przeliczać, a dokumentacja jest dwujęzyczna: angielska i francuska.',
          'Minusem jest sól drogowa. W prowincjach takich jak Ontario czy Quebec zimy są ostre, a nadwozia korodują szybciej niż w Kalifornii czy Arizonie. Dlatego każde kanadyjskie auto oglądamy pod kątem korozji podwozia, zanim zaproponujemy je klientowi.',
        ],
      },
      {
        heading: 'Skąd i jak transportujemy',
        body: [
          'Licytujemy na kanadyjskich oddziałach Copart oraz Impact Auto Auctions. Auta wysyłamy z portów w Halifaksie i Montrealu, a przy zakupach z zachodniej Kanady taniej wychodzi transport lądowy do portu w USA i fracht stamtąd.',
          'Rejs z wschodniej Kanady do Europy trwa zwykle 3–5 tygodni, czyli krócej niż z portów na Zatoce Meksykańskiej.',
        ],
      },
    ],
    bullets: {
      heading: 'Modele, które warto sprowadzać z Kanady',
      items: [
        'Toyota Tundra i Tacoma — niższe przebiegi niż w USA',
        'Subaru Outback i Forester w wersjach na rynek kanadyjski',
        'Honda Ridgeline, praktycznie niedostępna w Europie',
        'Ford F-150 w bogatych wersjach Lariat i Platinum',
        'Tesla Model Y z metrycznym oprogramowaniem',
      ],
    },
  },
  {
    slug: 'samochody-z-copart',
    title: 'Samochody z Copart — licytacja z Polski',
    description:
      'Licytujemy na Copart na własnych kontach dealerskich. Weryfikacja VIN, ocena szkody, transport i odprawa celna. Bez licencji i depozytu po Twojej stronie.',
    h1: 'Samochody z aukcji Copart',
    lead: 'Copart to największa aukcja samochodów powypadkowych w USA — około 175 tysięcy pozycji dostępnych w każdym momencie. Problem w tym, że osoba prywatna z Polski nie może na niej licytować bez pośrednika.',
    sections: [
      {
        heading: 'Dlaczego potrzebujesz pośrednika',
        body: [
          'Znaczna część aukcji Copart jest dostępna wyłącznie dla kupujących z licencją dealerską wydaną w danym stanie. Do pozostałych potrzebne jest konto z wpłaconym depozytem oraz amerykański numer podatkowy do rozliczenia zakupu.',
          'Licytujemy na własnych kontach dealerskich, więc nie musisz zakładać konta, wpłacać depozytu do Copart ani martwić się rozliczeniem z aukcją. Ustalasz z nami limit i to on jest jedyną granicą — nie przebijamy go bez Twojej zgody.',
        ],
      },
      {
        heading: 'Jak wybieramy auta na Copart',
        body: [
          'Każdą pozycję sprawdzamy w trzech krokach: historia VIN w Carfax lub AutoCheck, analiza zdjęć aukcyjnych pod kątem uszkodzeń struktury nośnej, a przy droższych autach oględziny na placu przez naszego człowieka w USA.',
          'Odrzucamy auta po pożarze, po zalaniu oraz z tytułem Certificate of Destruction i Parts Only, bo ich rejestracja w Polsce jest niemożliwa lub nieopłacalna. O tym, jak czytać opisy aukcyjne, pisaliśmy szerzej na blogu.',
        ],
      },
    ],
    bullets: {
      heading: 'Co robimy przy zakupie z Copart',
      items: [
        'Codzienny przegląd aukcji pod Twój model i budżet',
        'Raport VIN oraz ocena kosztu naprawy przed licytacją',
        'Licytacja na naszym koncie dealerskim do ustalonego limitu',
        'Rozliczenie z aukcją i odbiór auta z placu w ciągu 3 dni roboczych',
        'Transport do portu, fracht morski i odprawa celna w Polsce',
      ],
    },
  },
];
