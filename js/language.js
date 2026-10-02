(function () {
  'use strict';

  const translations = {
    'Kadeřnictví': 'Salon fryzjerski',
    'O nás': 'O salonie',
    'Služby': 'Usługi',
    'Ceník': 'Cennik',
    'Školení': 'Szkolenia',
    'Svatby': 'Śluby',
    'Galerie': 'Galeria',
    'Kontakt': 'Kontakt',
    'Rezervace': 'Rezerwacja',
    'Osobní vlasová péče': 'Indywidualna pielęgnacja włosów',
    'Třinec': 'Trzyniec',
    'Střih, barva a Head Spa. Péče navržená kolem vás.': 'Strzyżenie, koloryzacja i Head Spa. Pielęgnacja dopasowana do Ciebie.',
    'Rezervovat termín': 'Zarezerwuj wizytę',
    'Objevit služby': 'Poznaj usługi',
    'Návštěvy po objednání': 'Wizyty po wcześniejszej rezerwacji',
    'Soukromé parkování': 'Prywatny parking',
    'Objevte salon': 'Poznaj salon',
    'Předchozí fotografie': 'Poprzednie zdjęcie',
    'Další fotografie': 'Następne zdjęcie',
    'Fotografie 1': 'Zdjęcie 1',
    'Fotografie 2': 'Zdjęcie 2',
    'Fotografie kadeřnictví': 'Zdjęcia salonu',
    'Ovládání fotografií': 'Sterowanie zdjęciami',
    'Osobní péče · Třinec': 'Indywidualna pielęgnacja · Trzyniec',
    '5.0 / 5 · 78 hodnocení na Notino': '5,0 / 5 · 78 opinii w Notino',
    'Krása vlasů začíná osobním přístupem': 'Piękno włosów zaczyna się od indywidualnego podejścia',
    'Každá návštěva začíná rozhovorem o vašich představách a potřebách vlasů. Společně vybereme střih, barvu i péči tak, aby výsledek přirozeně ladil s vaším stylem a každodenním životem.': 'Każda wizyta zaczyna się od rozmowy o Twoich oczekiwaniach i potrzebach włosów. Wspólnie dobierzemy strzyżenie, kolor i pielęgnację, aby efekt pasował do Twojego stylu i codziennego życia.',
    'Pracuji s profesionální vlasovou kosmetikou': 'Pracuję na profesjonalnych kosmetykach do włosów',
    'a cílenou péčí': 'oraz specjalistycznej pielęgnacji',
    '. Produkty vybírám podle aktuálního stavu vlasů a výsledku, kterého chceme dosáhnout.': '. Dobieram produkty do aktualnej kondycji włosów i efektu, który chcemy uzyskać.',
    'Salon se nachází mezi firmou GINGER a psím salonem ART. na 1. Máje 123 ve starém Třinci. Vchod vedle firmy GINGER. K dispozici je soukromé parkoviště s vyhrazenými místy.': 'Salon znajduje się przy ulicy 1. máje 123 w Starym Trzyńcu, między firmą GINGER a salonem dla psów ART. Wejście obok firmy GINGER. Na miejscu dostępny jest prywatny parking z wyznaczonymi miejscami.',
    'Let zkušeností': 'Lat doświadczenia',
    'Spokojených klientů': 'Zadowolonych klientów',
    'Kvalitní produkty': 'Wysokiej jakości produkty',
    'Péče vybraná pro vás': 'Pielęgnacja dobrana do Ciebie',
    'Od každodenní péče k výjimečným chvílím': 'Od codziennej pielęgnacji po wyjątkowe chwile',
    'Dámské střihy': 'Strzyżenie damskie',
    'Střih navržený podle vašich rysů, typu vlasů a způsobu, jak je nosíte každý den.': 'Strzyżenie dopasowane do Twoich rysów, rodzaju włosów i codziennego stylu.',
    'Pánské střihy': 'Strzyżenie męskie',
    'Čisté linie a pečlivé provedení střihu i úpravy vousů.': 'Precyzyjne cięcie i staranna stylizacja brody.',
    'Barvení': 'Koloryzacja',
    'Barva, melír nebo balayage s důrazem na harmonický tón a zdravý vzhled vlasů.': 'Koloryzacja, refleksy lub balayage z naciskiem na harmonijny odcień i zdrowy wygląd włosów.',
    'Ošetření vlasů': 'Pielęgnacja włosów',
    'Cílená regenerace a výživa podle aktuálních potřeb vlasů a vlasové pokožky.': 'Regeneracja i odżywienie dopasowane do aktualnych potrzeb włosów i skóry głowy.',
    'Head Spa': 'Head Spa',
    'Rituál vlasové pokožky s aromaterapií, hydroterapií a chvílí hlubokého odpočinku.': 'Rytuał pielęgnacji skóry głowy z aromaterapią, hydroterapią i chwilą głębokiego relaksu.',
    'Objevit rituály': 'Poznaj rytuały',
    'Styling': 'Stylizacja',
    'Foukání, žehlení, ondulace i slavnostní styling pro chvíle, na kterých záleží.': 'Modelowanie, prostowanie, trwała i eleganckie fryzury na wyjątkowe okazje.',
    'Svatební účesy': 'Fryzury ślubne',
    'Účes připravený s předstihem, zkouškou a pozorností ke každému detailu.': 'Fryzura przygotowana z wyprzedzeniem, próbą i dbałością o każdy szczegół.',
    'Jednoduše a bez spěchu': 'Spokojnie i bez pośpiechu',
    'Od rozhovoru k péči, která vám sedí': 'Od rozmowy do pielęgnacji dopasowanej do Ciebie',
    'Nejdřív si povíme': 'Najpierw porozmawiamy',
    'Probereme vaše přání, každodenní styling i aktuální potřeby vlasů.': 'Porozmawiamy o Twoich oczekiwaniach, codziennej stylizacji i aktualnych potrzebach włosów.',
    'Vybereme péči na míru': 'Dobierzemy pielęgnację',
    'Společně zvolíme střih, barvu nebo rituál podle vlasů a výsledku, který hledáte.': 'Wspólnie wybierzemy strzyżenie, kolor lub rytuał odpowiedni do Twoich włosów i oczekiwanego efektu.',
    'Doladíme každý detail': 'Dopracujemy każdy szczegół',
    'Po dokončení doporučím péči a postupy, které snadno využijete i doma.': 'Po wizycie doradzę pielęgnację i sposoby stylizacji, które łatwo zastosujesz w domu.',
    'Čas pro sebe': 'Chwila dla siebie',
    'Ceník': 'Cennik',
    'Rituály pro vlasovou pokožku i chvíli hlubokého odpočinku': 'Rytuały dla skóry głowy i chwila głębokiego relaksu',
    'Intenzivní terapie Head Spa proti padání vlasů': 'Intensywna terapia Head Spa przeciw wypadaniu włosów',
    'Terapie pro zpevnění vlasových kořínků, stimulaci růstu a zklidnění pokožky.': 'Terapia wzmacniająca cebulki włosów, stymulująca ich wzrost i kojąca skórę głowy.',
    'Konzultace': 'Konsultacja',
    'Hloubková očista peelingem pokožky': 'Głębokie oczyszczanie skóry głowy peelingiem',
    'Aromaterapie': 'Aromaterapia',
    'Vodní lázeň a hloubková výživa vlasového vlákna': 'Kąpiel wodna i głębokie odżywienie włókna włosa',
    'Vodní lázeň a hloubková výživa vlasového vlákna na barvené vlasy': 'Kąpiel wodna i głębokie odżywienie włosów farbowanych',
    'Regenerace zad, nohou a rukou pomocí masážního lehátka po dobu 20 minut': '20-minutowa regeneracja pleców, nóg i rąk na łóżku masującym',
    'Občerstvení: bylinkový čaj nebo voda': 'Poczęstunek: herbata ziołowa lub woda',
    'Kontraindikace: poranění pokožky': 'Przeciwwskazanie: uszkodzenia skóry głowy',
    'Head Spa + dárkový balíček': 'Head Spa + zestaw prezentowy',
    'Klasické Head Spa s výběrem šamponu a kondicionéru na doma.': 'Klasyczne Head Spa z zestawem szamponu i odżywki do domowej pielęgnacji.',
    'Hydroterapie a masáž pokožky hlavy': 'Hydroterapia i masaż skóry głowy',
    'Head Spa + barvení celé délky se střihem a konečnou úpravou vlasů': 'Head Spa + koloryzacja całej długości, strzyżenie i stylizacja',
    'Barvení a následně Head Spa procedura se střihem a konečnou úpravou vlasů.': 'Koloryzacja, a następnie zabieg Head Spa, strzyżenie i końcowa stylizacja.',
    'Barvení celých délek': 'Koloryzacja całej długości włosów',
    'Konzultace po dobu působení barvy': 'Konsultacja podczas działania farby',
    'Střih a konečná úprava vlasů': 'Strzyżenie i końcowa stylizacja',
    'Udělejte radost sobě nebo někomu blízkému': 'Podaruj radość sobie lub bliskiej osobie',
    'Koupit zážitek na Slevomatu': 'Kup rytuał na Slevomacie',
    'Dámské': 'Damskie',
    'Střih + foukání': 'Strzyżenie + modelowanie',
    'od 450 Kč': 'od 450 CZK',
    'Foukání': 'Modelowanie',
    'od 250 Kč': 'od 250 CZK',
    'od 350 Kč': 'od 350 CZK',
    'Barvení – krátké vlasy': 'Koloryzacja – krótkie włosy',
    'od 800 Kč': 'od 800 CZK',
    'Barvení – dlouhé vlasy': 'Koloryzacja – długie włosy',
    'od 1200 Kč': 'od 1200 CZK',
    'Melírování': 'Pasemka',
    'od 900 Kč': 'od 900 CZK',
    'Balayage': 'Balayage',
    'od 1500 Kč': 'od 1500 CZK',
    'Regenerační kúra': 'Kuracja regenerująca',
    'od 300 Kč': 'od 300 CZK',
    'Obnova vlasového vlákna': 'Regeneracja włókna włosa',
    'od 950 Kč': 'od 950 CZK',
    'Pánské': 'Męskie',
    'Střih strojkem': 'Strzyżenie maszynką',
    'Střih + mytí + styling': 'Strzyżenie + mycie + stylizacja',
    'od 200 Kč': 'od 200 CZK',
    'Střih nůžkami': 'Strzyżenie nożyczkami',
    'od 350 Kč': 'od 350 CZK',
    'Úprava vousů': 'Pielęgnacja brody',
    'od 150 Kč': 'od 150 CZK',
    'od 500 Kč': 'od 500 CZK',
    'Dětské & ostatní': 'Dziecięce i pozostałe',
    'Společenský účes': 'Fryzura na wyjątkową okazję',
    'od 600 Kč': 'od 600 CZK',
    'Svatební účes': 'Fryzura ślubna',
    'od 1200 Kč': 'od 1200 CZK',
    'Trvalá ondulace': 'Trwała ondulacja',
    'od 200 Kč': 'od 200 CZK',
    'Žehlení vlasů': 'Prostowanie włosów',
    'Dětský střih (do 10 let)': 'Strzyżenie dziecięce (do 10 lat)',
    'Head Spa (60 minut)': 'Head Spa (60 minut)',
    'od 990 Kč': 'od 990 CZK',
    'Head Spa (90 minut)': 'Head Spa (90 minut)',
    'od 1200 Kč': 'od 1200 CZK',
    '1 900 Kč': '1 900 CZK',
    '2 400 Kč': '2 400 CZK',
    '2 600 Kč': '2 600 CZK',
    '* Ceny jsou orientační a mohou se lišit dle délky a hustoty vlasů.': '* Ceny orientacyjne; mogą się różnić w zależności od długości i gęstości włosów.',
    'Předáváme řemeslo dál': 'Przekazujemy wiedzę dalej',
    'Školení & vzdělávání': 'Szkolenia i edukacja',
    'Poskytování školení a vzdělávání studentů': 'Szkolenia i edukacja dla uczniów',
    'Nabízíme odborné školení a praktickou výuku pro studenty kadeřnických oborů. Sdílíme naše zkušenosti a znalosti, aby se budoucí kadeřníci mohli rozvíjet pod profesionálním vedením.': 'Oferujemy szkolenia zawodowe i praktyczną naukę dla uczniów kierunków fryzjerskich. Dzielimy się doświadczeniem i wiedzą, wspierając rozwój przyszłych fryzjerów pod profesjonalnym okiem.',
    'Odborná výuka': 'Nauka zawodu',
    'Teoretické i praktické základy kadeřnického řemesla.': 'Teoretyczne i praktyczne podstawy fryzjerstwa.',
    'Praktický trénink': 'Ćwiczenia praktyczne',
    'Práce s reálnými klienty pod dohledem zkušeného mistra.': 'Praca z klientami pod okiem doświadczonego fryzjera.',
    'Moderní techniky': 'Nowoczesne techniki',
    'Školení v nejnovějších trendech a technikách z oboru.': 'Szkolenia z najnowszych trendów i technik w branży.',
    'Pro den, na který nezapomenete': 'Na dzień, którego nie zapomnisz',
    'Romantický svatební účes vytvořený v Kadeřnictví MT': 'Romantyczna fryzura ślubna wykonana w salonie Kadeřnictwo MT',
    'Váš den. Váš styl. Účes, ve kterém se poznáte.': 'Twój dzień. Twój styl. Fryzura, w której będziesz sobą.',
    '„Váš velký den si zaslouží dokonalý účes, který vám vydrží od prvního polibku až po poslední tanec."': '„Wielki dzień zasługuje na wyjątkową fryzurę, która będzie Ci towarzyszyć od pierwszego pocałunku aż do ostatniego tańca.”',
    'Vytvoříme vám jedinečný svatební účes přesně podle vašich představ. Ať už sníte o romantických vlnách, elegantním drdolu nebo moderním stylu — společně najdeme to pravé pro váš velký den.': 'Stworzymy fryzurę ślubną zgodną z Twoimi wyobrażeniami. Romantyczne fale, elegancki kok czy nowoczesny styl — wspólnie wybierzemy idealne rozwiązanie na Twój wielki dzień.',
    'Zkušební účes': 'Fryzura próbna',
    'Předem vyzkoušíme varianty, abyste si byla jistá svou volbou.': 'Wcześniej wypróbujemy różne warianty, abyś miała pewność wyboru.',
    'Doplňky & zdobení': 'Dodatki i ozdoby',
    'Květiny, čelenky, závoje — zapracujeme cokoliv si přejete.': 'Kwiaty, opaski, welony — uwzględnimy dodatki, które wybierzesz.',
    'Péče o nevěstu': 'Pielęgnacja Panny Młodej',
    'Postaráme se i o družičky a maminky nevěsty.': 'Zadbamy również o fryzury druhen i mam.',
    'Domluvit konzultaci': 'Umów konsultację',
    'Galerie': 'Galeria',
    'Kadeřnictví MT – ukázka práce 1': 'Kadeřnictwo MT – przykładowa stylizacja 1',
    'Kadeřnictví MT – ukázka práce 2': 'Kadeřnictwo MT – przykładowa stylizacja 2',
    'Kadeřnictví MT – ukázka práce 3': 'Kadeřnictwo MT – przykładowa stylizacja 3',
    'Kadeřnictví MT – ukázka práce 4': 'Kadeřnictwo MT – przykładowa stylizacja 4',
    'Kadeřnictví MT – ukázka práce 5': 'Kadeřnictwo MT – przykładowa stylizacja 5',
    'Kadeřnictví MT – ukázka práce 6': 'Kadeřnictwo MT – przykładowa stylizacja 6',
    'Sledujte nás na Instagramu — @kadernictvi.trinec': 'Obserwuj nas na Instagramie — @kadernictvi.trinec',
    'Zavřít': 'Zamknij',
    'Předchozí': 'Poprzednie',
    'Další': 'Następne',
    'Zobrazit hodnocení Kadeřnictví MT na Notino': 'Zobacz opinie o salonie Kadeřnictví MT w Notino',
    'Kontakt': 'Kontakt',
    'Adresa': 'Adres',
    '1. máje 123': '1. máje 123',
    '739 61 Třinec - Staré Město': '739 61 Trzyniec – Stare Miasto',
    'Telefon': 'Telefon',
    'E-mail': 'E-mail',
    'Otevírací doba': 'Godziny otwarcia',
    'Po – Pá: po předchozím objednání': 'Pon. – Pt.: po wcześniejszej rezerwacji',
    'So – Ne: Zavřeno': 'Sob. – Niedz.: nieczynne',
    'Parkování': 'Parking',
    'Soukromé parkoviště s vyhrazenými místy u salonu': 'Prywatny parking z wyznaczonymi miejscami przy salonie',
    'Platba': 'Płatności',
    'Hotovost, QR platba, dárkový poukaz': 'Gotówka, płatność QR, karta podarunkowa',
    'Veřejné části živnostenského rejstříku': 'Dane w rejestrze działalności gospodarczej',
    'IČO: 08127735': 'Numer identyfikacyjny firmy: 08127735',
    'IČ provozovny: 1016135378': 'Numer identyfikacyjny zakładu: 1016135378',
    'Rezervovat online': 'Zarezerwuj online',
    'Váš salon v Třinci': 'Twój salon w Trzyńcu',
    'Osobní vlasová péče & Head Spa': 'Indywidualna pielęgnacja włosów & Head Spa',
    '1. máje 123, 739 61 Třinec': '1. máje 123, 739 61 Trzyniec',
    'Uložit kontakt': 'Zapisz kontakt',
    '© 2026 Kadeřnictví MT. Všechna práva vyhrazena.': '© 2026 Kadeřnictví MT. Wszelkie prawa zastrzeżone.',
    'Objednat se': 'Umów wizytę',
    'Zavolat': 'Zadzwoń',
    'Menu': 'Menu',
    'Rychlé akce': 'Szybkie akcje'
  };

  const attributes = {
    alt: {
      'Kadeřnictví MT': 'Salon fryzjerski MT',
      'Head Spa procedura v Kadeřnictví MT': 'Zabieg Head Spa w salonie fryzjerskim MT',
      'Svatební účes vytvořený v Kadeřnictví MT': 'Fryzura ślubna wykonana w salonie fryzjerskim MT',
      'Markéta – Kadeřnictví MT': 'Markéta – salon fryzjerski MT',
      'Školení – odborná výuka': 'Szkolenie – nauka zawodu',
      'Školení – praktický trénink': 'Szkolenie – ćwiczenia praktyczne',
      'Školení – moderní techniky': 'Szkolenie – nowoczesne techniki',
      'Romantický svatební účes vytvořený v Kadeřnictví MT': 'Romantyczna fryzura ślubna wykonana w salonie fryzjerskim MT',
      'Kadeřnictví MT – ukázka práce 1': 'Kadeřnictví MT – przykładowa stylizacja 1',
      'Kadeřnictví MT – ukázka práce 2': 'Kadeřnictví MT – przykładowa stylizacja 2',
      'Kadeřnictví MT – ukázka práce 3': 'Kadeřnictví MT – przykładowa stylizacja 3',
      'Kadeřnictví MT – ukázka práce 4': 'Kadeřnictví MT – przykładowa stylizacja 4',
      'Kadeřnictví MT – ukázka práce 5': 'Kadeřnictví MT – przykładowa stylizacja 5',
      'Kadeřnictví MT – ukázka práce 6': 'Kadeřnictví MT – przykładowa stylizacja 6',
      'Svatební účes – ukázka 1': 'Fryzura ślubna – przykład 1',
      'Svatební účes – ukázka 2': 'Fryzura ślubna – przykład 2',
      'Svatební účes – ukázka 3': 'Fryzura ślubna – przykład 3'
    },
    'aria-label': {
      'Menu': 'Menu',
      'Fotografie kadeřnictví': 'Zdjęcia salonu fryzjerskiego',
      'Ovládání fotografií': 'Sterowanie zdjęciami',
      'Předchozí fotografie': 'Poprzednie zdjęcie',
      'Další fotografie': 'Następne zdjęcie',
      'Fotografie 1': 'Zdjęcie 1',
      'Fotografie 2': 'Zdjęcie 2',
      'Zobrazit hodnocení Kadeřnictví MT na Notino': 'Zobacz opinie o salonie MT w Notino',
      'Zavřít': 'Zamknij',
      'Předchozí': 'Poprzednie',
      'Další': 'Następne',
      'Rychlé akce': 'Szybkie akcje',
      'Kontaktní karta kadeřnictví': 'Karta kontaktowa salonu fryzjerskiego',
      'Jazyk / Język': 'Język'
    },
    title: {
      'Kadeřnictví MT – mapa': 'Salon MT – mapa'
    }
  };

  const metaTranslations = {
    description: 'Salon fryzjerski MT w Starym Trzyńcu – indywidualna pielęgnacja włosów, strzyżenie, koloryzacja i Head Spa. 1. máje 123, 739 61 Trzyniec. Wizyty po wcześniejszej rezerwacji.',
    ogTitle: 'Kadeřnictví MT | Trzyniec',
    ogDescription: 'Indywidualna pielęgnacja włosów, strzyżenie, koloryzacja i Head Spa. Odwiedź Kadeřnictví MT przy 1. máje 123 w Starym Trzyńcu. Wizyty po wcześniejszej rezerwacji.',
    twitterTitle: 'Kadeřnictví MT | Trzyniec',
    twitterDescription: 'Indywidualna pielęgnacja włosów, strzyżenie, koloryzacja i Head Spa. Odwiedź Kadeřnictví MT przy 1. máje 123 w Starym Trzyńcu. Wizyty po wcześniejszej rezerwacji.'
  };

  const languageButtons = Array.from(document.querySelectorAll('[data-language]'));
  if (!languageButtons.length) return;

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeValue.trim()) {
      originalText.set(node, node.nodeValue);
      textNodes.push(node);
    }
  }

  const attributeNodes = [];
  Object.entries(attributes).forEach(([attribute, dictionary]) => {
    document.querySelectorAll(`[${attribute}]`).forEach(element => {
      const value = element.getAttribute(attribute);
      if (dictionary[value]) {
        originalAttributes.set(element, originalAttributes.get(element) || {});
        originalAttributes.get(element)[attribute] = value;
        attributeNodes.push({ element, attribute, dictionary });
      }
    });
  });

  const originalMeta = {
    lang: document.documentElement.lang,
    title: document.title,
    description: document.querySelector('meta[name="description"]').content,
    ogLocale: document.querySelector('meta[property="og:locale"]').content,
    ogTitle: document.querySelector('meta[property="og:title"]').content,
    ogDescription: document.querySelector('meta[property="og:description"]').content,
    twitterTitle: document.querySelector('meta[name="twitter:title"]').content,
    twitterDescription: document.querySelector('meta[name="twitter:description"]').content
  };

  function translateTextNode(node, language) {
    const source = originalText.get(node);
    if (!source) return;
    if (language === 'cs') {
      node.nodeValue = source;
      return;
    }

    const leading = source.match(/^\s*/)[0];
    const trailing = source.match(/\s*$/)[0];
    const text = source.trim().replace(/\s+/g, ' ');
    node.nodeValue = leading + (translations[text] || text) + trailing;
  }

  function setLanguage(language) {
    const activeLanguage = language === 'pl' ? 'pl' : 'cs';
    document.documentElement.lang = activeLanguage === 'pl' ? 'pl' : 'cs';
    textNodes.forEach(node => translateTextNode(node, activeLanguage));

    attributeNodes.forEach(({ element, attribute, dictionary }) => {
      const original = originalAttributes.get(element)[attribute];
      element.setAttribute(attribute, activeLanguage === 'pl' ? dictionary[original] : original);
    });

    if (activeLanguage === 'pl') {
      document.title = 'Kadeřnictví MT | Trzyniec';
      document.querySelector('meta[name="description"]').content = metaTranslations.description;
      document.querySelector('meta[property="og:locale"]').content = 'pl_PL';
      document.querySelector('meta[property="og:title"]').content = metaTranslations.ogTitle;
      document.querySelector('meta[property="og:description"]').content = metaTranslations.ogDescription;
      document.querySelector('meta[name="twitter:title"]').content = metaTranslations.twitterTitle;
      document.querySelector('meta[name="twitter:description"]').content = metaTranslations.twitterDescription;
    } else {
      document.title = originalMeta.title;
      document.querySelector('meta[name="description"]').content = originalMeta.description;
      document.querySelector('meta[property="og:locale"]').content = originalMeta.ogLocale;
      document.querySelector('meta[property="og:title"]').content = originalMeta.ogTitle;
      document.querySelector('meta[property="og:description"]').content = originalMeta.ogDescription;
      document.querySelector('meta[name="twitter:title"]').content = originalMeta.twitterTitle;
      document.querySelector('meta[name="twitter:description"]').content = originalMeta.twitterDescription;
    }

    languageButtons.forEach(button => {
      const selected = button.dataset.language === activeLanguage;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });

    try {
      window.localStorage.setItem('kadernictvi-mt-language', activeLanguage);
    } catch (error) {
      return;
    }
  }

  languageButtons.forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });

  let savedLanguage = 'cs';
  try {
    savedLanguage = window.localStorage.getItem('kadernictvi-mt-language') || 'cs';
  } catch (error) {
    savedLanguage = 'cs';
  }
  setLanguage(savedLanguage);
})();