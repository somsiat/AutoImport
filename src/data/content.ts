/** Tresci powtarzane na kilku podstronach. Docelowo moze to zasilac CMS. */

export const steps = [
  {
    title: 'Rozmowa i budżet',
    body: 'Ustalamy model, rocznik, budżet całkowity „pod klucz” i przeznaczenie auta. Mówimy wprost, co realnie da się kupić za daną kwotę.',
  },
  {
    title: 'Wyszukiwanie na aukcjach',
    body: 'Codziennie przeglądamy Copart, IAAI i oferty dealerskie. Dostajesz krótką listę aut z historią VIN, raportem szkód i naszą oceną kosztu naprawy.',
  },
  {
    title: 'Licytacja',
    body: 'Licytujemy na naszych kontach do ustalonego wcześniej limitu. Nie przebijamy go bez Twojej zgody — nigdy.',
  },
  {
    title: 'Transport do portu',
    body: 'Auto jedzie lawetą do portu (Newark, Savannah, Houston). Wysyłamy zdjęcia z placu przed załadunkiem.',
  },
  {
    title: 'Fracht morski',
    body: 'Kontener lub RoRo do Bremerhaven, Rotterdamu albo Gdyni. Rejs trwa zwykle 4–6 tygodni.',
  },
  {
    title: 'Odprawa celna i akcyza',
    body: 'Zajmujemy się cłem 10%, VAT-em 23%, akcyzą oraz tłumaczeniami dokumentów. Dostajesz komplet papierów gotowy do rejestracji.',
  },
  {
    title: 'Naprawa i przegląd',
    body: 'Nasz warsztat przywraca auto do stanu jezdnego, po czym przechodzi badanie techniczne w okręgowej stacji kontroli.',
  },
  {
    title: 'Odbiór',
    body: 'Odbierasz auto na miejscu albo dowozimy je pod dom w całej Polsce. Komplet dokumentów do rejestracji w cenie.',
  },
] as const;

export const benefits = [
  {
    title: 'Stała cena ustalona przed licytacją',
    body: 'Przed zakupem podpisujemy wycenę „pod klucz”: auto, transport, cło, akcyza, naprawa. Bez dopłat po fakcie.',
  },
  {
    title: 'Weryfikacja historii i szkód',
    body: 'Każde auto sprawdzamy w Carfax/AutoCheck i oceniamy zakres uszkodzeń na podstawie zdjęć oraz oględzin na placu.',
  },
  {
    title: 'Własny warsztat blacharsko-lakierniczy',
    body: 'Nie zlecamy naprawy na zewnątrz, więc kontrolujemy jakość i termin. Na naprawę dajemy gwarancję.',
  },
  {
    title: 'Pełna obsługa formalności',
    body: 'Odprawa celna, akcyza, tłumaczenia, przegląd. Otrzymujesz teczkę dokumentów i jedziesz do wydziału komunikacji.',
  },
  {
    title: 'Relacja z każdego etapu',
    body: 'Zdjęcia i status auta na WhatsAppie — od placu aukcyjnego, przez port, aż po warsztat.',
  },
  {
    title: 'Oszczędność 20–40%',
    body: 'Tyle zwykle wynosi różnica względem porównywalnego egzemplarza z polskiego rynku. Wyliczamy ją dla Twojego modelu przed decyzją.',
  },
] as const;

export const faq = [
  {
    q: 'Ile kosztuje sprowadzenie samochodu z USA?',
    a: 'Do ceny zakupu na aukcji doliczyć trzeba transport lądowy w USA (300–800 USD), fracht morski (1200–2000 USD), cło 10%, VAT 23% oraz akcyzę (3,1% dla silników do 2.0 i 18,6% powyżej). Łącznie koszty importu to zwykle 12–18 tysięcy złotych plus koszt naprawy. Każdą wycenę przygotowujemy indywidualnie przed licytacją.',
  },
  {
    q: 'Jak długo trwa sprowadzenie auta z USA do Polski?',
    a: 'Od licytacji do odbioru mija zazwyczaj 8–12 tygodni: około 2 tygodnie na transport do portu w USA, 4–6 tygodni rejsu, 1–2 tygodnie na odprawę celną oraz czas naprawy zależny od zakresu uszkodzeń.',
  },
  {
    q: 'Czy samochody z USA są bezpieczne po naprawie?',
    a: 'Tak, o ile uszkodzenia nie naruszyły struktury nośnej. Dlatego odrzucamy auta z uszkodzeniami konstrukcyjnymi, po pożarze i po zalaniu. Każde naprawiane auto przechodzi badanie techniczne i pomiar geometrii, a na naprawę dajemy gwarancję.',
  },
  {
    q: 'Czy mogę sprowadzić samochód bez wpłacania zaliczki?',
    a: 'Do licytacji potrzebna jest zaliczka zabezpieczająca depozyt aukcyjny — zwykle 10% ustalonego limitu. Pozostałą kwotę rozliczamy etapami: po zakupie, po dopłynięciu do portu i przy odbiorze.',
  },
  {
    q: 'Jakie samochody najlepiej sprowadzać z USA?',
    a: 'Najkorzystniej wychodzą modele z dużymi, wolnossącymi silnikami oraz auta rzadkie w Europie: Ford Mustang, Dodge Ram, Jeep Wrangler, Chevrolet Camaro, Tesla Model 3 i Y. Przy popularnych w Europie dieslach różnica cenowa zwykle nie pokrywa kosztów importu — i mówimy o tym otwarcie.',
  },
  {
    q: 'Czy da się sprowadzić samochód elektryczny?',
    a: 'Tak, a Tesle bywają szczególnie opłacalne. Trzeba pamiętać o adapterze do europejskich ładowarek oraz o tym, że część funkcji łączności wymaga aktywacji na rynek europejski. Sprawdzamy to przed zakupem.',
  },
  {
    q: 'Co z gwarancją i rejestracją w Polsce?',
    a: 'Przekazujemy komplet dokumentów: tytuł własności, fakturę, dokumenty odprawy celnej SAD, potwierdzenie zapłaty akcyzy, tłumaczenia przysięgłe i badanie techniczne. Z tym pakietem rejestracja w wydziale komunikacji to formalność.',
  },
] as const;

export const projects = [
  {
    title: 'Ford Mustang GT 5.0',
    year: 2019,
    auction: 'Copart, Newark',
    damage: 'Uszkodzony przód, poduszki niewystrzelone',
    priceUsa: '18 400 USD',
    totalPl: '142 000 zł',
    marketPl: '189 000 zł',
    days: 74,
  },
  {
    title: 'Jeep Wrangler Unlimited Sahara',
    year: 2020,
    auction: 'IAAI, Houston',
    damage: 'Uszkodzony bok, rama nienaruszona',
    priceUsa: '21 900 USD',
    totalPl: '168 000 zł',
    marketPl: '215 000 zł',
    days: 81,
  },
  {
    title: 'Tesla Model 3 Long Range',
    year: 2021,
    auction: 'Copart, Savannah',
    damage: 'Uszkodzony tył, bateria sprawna',
    priceUsa: '19 200 USD',
    totalPl: '151 000 zł',
    marketPl: '182 000 zł',
    days: 68,
  },
  {
    title: 'Dodge Ram 1500 Laramie',
    year: 2018,
    auction: 'Copart, Dallas',
    damage: 'Grad, brak uszkodzeń mechanicznych',
    priceUsa: '16 700 USD',
    totalPl: '134 000 zł',
    marketPl: '178 000 zł',
    days: 70,
  },
  {
    title: 'Chevrolet Camaro 2SS',
    year: 2017,
    auction: 'IAAI, Atlanta',
    damage: 'Uszkodzony przód i chłodnica',
    priceUsa: '14 300 USD',
    totalPl: '119 000 zł',
    marketPl: '156 000 zł',
    days: 79,
  },
  {
    title: 'Toyota Tundra TRD Pro',
    year: 2019,
    auction: 'Copart, Phoenix',
    damage: 'Uszkodzone zawieszenie',
    priceUsa: '23 500 USD',
    totalPl: '176 000 zł',
    marketPl: '221 000 zł',
    days: 85,
  },
] as const;

export const stats = [
  { value: '850+', label: 'sprowadzonych aut' },
  { value: '10 lat', label: 'na rynku importu' },
  { value: '8–12', label: 'tygodni od licytacji do odbioru' },
  { value: '4,9/5', label: 'średnia ocena klientów' },
] as const;

export const testimonials = [
  {
    name: 'Marcin K.',
    city: 'Wrocław',
    car: 'Ford Mustang GT 2019',
    text: 'Wycena zgadzała się co do złotówki z tym, co ustaliliśmy przed licytacją. Zdjęcia z każdego etapu dostawałem na WhatsAppie, więc wiedziałem, co się dzieje z autem.',
  },
  {
    name: 'Anna W.',
    city: 'Poznań',
    car: 'Tesla Model 3 2021',
    text: 'Bałam się formalności przy elektryku, ale dostałam gotową teczkę dokumentów. Rejestracja zajęła mi jedną wizytę w urzędzie.',
  },
  {
    name: 'Tomasz L.',
    city: 'Gdańsk',
    car: 'Jeep Wrangler 2020',
    text: 'Odradzili mi pierwsze auto, które sam wybrałem, bo miało naruszoną ramę. Drugie okazało się strzałem w dziesiątkę. Doceniam, że nie sprzedali mi czegokolwiek.',
  },
] as const;
