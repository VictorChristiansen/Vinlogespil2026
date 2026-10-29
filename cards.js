const CARDS = [
  {
    "id": "V1",
    "kategori": "VENSKAB",
    "titel": "Reklamationsafdelingen",
    "tekst": "Vælg en af de andre. Han er et defekt produkt, du har købt på DBA. Fortæl, hvad der er galt med ham, og hvorfor sælgeren nægter at tage ham retur.",
    "timeLimit": 30
  },
  {
    "id": "V2",
    "kategori": "VENSKAB",
    "titel": "Seksuel overvurdering",
    "tekst": "Hvem i gruppen har mest selvtillid i forhold til sine formodede evner i sengen? Udpeg ham og begrund din mistanke.",
    "timeLimit": 0
  },
  {
    "id": "V3",
    "kategori": "VENSKAB",
    "titel": "Verdens værste wingman",
    "tekst": "Udpeg den, der ville ødelægge din scoring på under 30 sekunder. Genskab situationen.",
    "timeLimit": 30
  },
  {
    "id": "V4",
    "kategori": "VENSKAB",
    "titel": "Den offentlige sviner",
    "tekst": "Giv {target} den groveste kærlige roast, du kan finde på. Han får bagefter 15 sekunder til at svare igen.",
    "timeLimit": 30
  },
  {
    "id": "V5",
    "kategori": "VENSKAB",
    "titel": "Tinder fra helvede",
    "tekst": "Lav en brutal, humoristisk datingprofil til {target}, inklusive hans tre største røde flag.",
    "timeLimit": 30
  },
  {
    "id": "V6",
    "kategori": "VENSKAB",
    "titel": "Den falske alfahan",
    "tekst": "Hvem ville først gå i panik, hvis hans partner overlod ham hele huset og børnene i en uge? Forklar hvorfor.",
    "timeLimit": 0
  },
  {
    "id": "V7",
    "kategori": "VENSKAB",
    "titel": "Den største hykler",
    "tekst": "Udpeg den, der oftest prædiker én ting og gør det modsatte. Opfind et latterligt eksempel på hans hykleri.",
    "timeLimit": 0
  },
  {
    "id": "V8",
    "kategori": "VENSKAB",
    "titel": "Begravelsestalen",
    "tekst": "Hold en rørende begravelsestale for en af de andre, som om han var død af overdreven selvtillid.",
    "timeLimit": 30
  },
  {
    "id": "A1",
    "kategori": "VANVID",
    "titel": "Den liderlige sommelier",
    "tekst": "Beskriv en vin, som var det dit livs mest erotiske oplevelse. De andre skal kunne holde masken.",
    "timeLimit": 30
  },
  {
    "id": "A2",
    "kategori": "VANVID",
    "titel": "Kun for voksne",
    "tekst": "Lav en 20 sekunders reklame for din kommende OnlyFans. Dit eneste produkt er en proptrækker.",
    "timeLimit": 20
  },
  {
    "id": "A3",
    "kategori": "VANVID",
    "titel": "Den desperate scorekanon",
    "tekst": "Du er 52 år, nyskilt og iført alt for stramme jeans. Prøv at score manden til venstre med tre katastrofale scorereplikker.",
    "timeLimit": 30
  },
  {
    "id": "A4",
    "kategori": "VANVID",
    "titel": "Pressekonferencen",
    "tekst": "Du er blevet taget i at bruge 15.000 kr. på vin og kalde det en investering. Hold et pressemøde og besvar tre kritiske spørgsmål.",
    "timeLimit": 30
  },
  {
    "id": "A5",
    "kategori": "VANVID",
    "titel": "Den erotiske vejrudsigt",
    "tekst": "Fremlæg morgendagens vejrudsigt, som om du er hovedpersonen i verdens billigste pornofilm.",
    "timeLimit": 30
  },
  {
    "id": "A6",
    "kategori": "VANVID",
    "titel": "Et tragisk brud",
    "tekst": "Slå op med dit vinglas, som om I har været gift i 23 år. Gør det så dramatisk som muligt.",
    "timeLimit": 30
  },
  {
    "id": "A7",
    "kategori": "VANVID",
    "titel": "Danmarks dårligste stripklub",
    "tekst": "Du er konferencier på en stripklub med nul kunder. Præsenter aftenens hovednavn: {target}.",
    "timeLimit": 30
  },
  {
    "id": "A8",
    "kategori": "VANVID",
    "titel": "En mand uden selvindsigt",
    "tekst": "Hold en tale om, hvorfor du objektivt er det mest attraktive og intelligente menneske ved bordet.",
    "timeLimit": 30
  },
  {
    "id": "I1",
    "kategori": "VIN",
    "titel": "Bullshit-bingo",
    "tekst": "Du er vinekspert og skal beskrive en vin med mindst fem fuldstændig absurde smagsnoter.",
    "timeLimit": 30
  },
  {
    "id": "I2",
    "kategori": "VIN",
    "titel": "Vin eller sex?",
    "tekst": "Beskriv en opdigtet oplevelse, så de andre ikke kan afgøre, om du taler om vin eller en katastrofal date.",
    "timeLimit": 30
  },
  {
    "id": "I3",
    "kategori": "VIN",
    "titel": "Den dyre lortevin",
    "tekst": "Sælg en vin til 4.999 kr., selvom alle ved, den kommer fra en papkarton.",
    "timeLimit": 30
  },
  {
    "id": "I4",
    "kategori": "VIN",
    "titel": "Du smager af ...",
    "tekst": "Beskriv {target} og {target2} som hver sin vin. Angiv druesort, pris, duft og en nådesløs eftersmag.",
    "timeLimit": 30
  },
  {
    "id": "I5",
    "kategori": "VIN",
    "titel": "Sommelierens sammenbrud",
    "tekst": "Beskriv en vin, du hader, som om du elsker den. Midt i beskrivelsen bryder du sammen og indrømmer sandheden.",
    "timeLimit": 30
  },
  {
    "id": "I6",
    "kategori": "VIN",
    "titel": "Verdens mest overvurderede mand",
    "tekst": "Sælg {target} som en eksklusiv årgangsvin til 20.000 kr. Afslut med hans egentlige markedsværdi.",
    "timeLimit": 30
  },
  {
    "id": "I7",
    "kategori": "VIN",
    "titel": "Den sidste flaske",
    "tekst": "Verden går under om fem minutter. Fortæl, hvorfor du og ikke de syv andre fortjener den sidste flaske vin.",
    "timeLimit": 30
  },
  {
    "id": "I8",
    "kategori": "VIN",
    "titel": "Ekspert uden ekspertise",
    "tekst": "De andre vælger en tilfældig genstand. Forklar, hvorfor den er afgørende for at fremstille verdens bedste rødvin.",
    "timeLimit": 30
  },
  {
    "id": "O1",
    "kategori": "OVERRASKELSE",
    "titel": "ALLE ER RØVHULLER",
    "tekst": "På tre peger alle på den person, der med størst sandsynlighed ville blive smidt ud af et luksushotel. Den udpegede får 20 sekunder til at forsvare sig.",
    "timeLimit": 0
  },
  {
    "id": "O2",
    "kategori": "OVERRASKELSE",
    "titel": "VINLOGENS RETSSAG",
    "tekst": "{target} anklages for at være en uudholdelig vinsnob. Tre andre fremlægger opdigtede beviser. Han får sit sidste ord.",
    "timeLimit": 0
  },
  {
    "id": "O3",
    "kategori": "OVERRASKELSE",
    "titel": "DEN HEMMELIGE MISSION",
    "tekst": "{target} skal i hemmelighed forsøge at få en anden til at sige “Hold nu kæft” inden for to minutter. Vis først missionen til den udvalgte og lad ham trykke “Klar”; afslør den eventuelt senere, så de andre ikke ser missionen på forhånd.",
    "timeLimit": 0
  },
  {
    "id": "O4",
    "kategori": "OVERRASKELSE",
    "titel": "BRYLLUP FRA HELVEDE",
    "tekst": "{target} og {target2} er nu nygifte. Den ene holder en romantisk tale, den anden forklarer, hvorfor ægteskabet allerede er på vej mod skilsmisse.",
    "timeLimit": 0
  },
  {
    "id": "O5",
    "kategori": "OVERRASKELSE",
    "titel": "SANDHEDENS TIME",
    "tekst": "Alle udpeger den person, der ville klare sig dårligst på en realitydatingserie. Han skal forklare, hvorfor han ville vinde programmet.",
    "timeLimit": 0
  },
  {
    "id": "O6",
    "kategori": "OVERRASKELSE",
    "titel": "DEN STORE SKANDALE",
    "tekst": "{target} er blevet fanget på kamera i en fuldstændig absurd, opdigtet skandale. Gruppen opfinder skandalen, og han skal levere en offentlig undskyldning.",
    "timeLimit": 0
  }
];
