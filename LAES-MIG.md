# DE 3 V’ER – Ingen værdighed tilbage

Færdig statisk webapp med det originale logo, 30 kort og de otte faste venner.
Ingen installation, betaling, build-proces eller eksterne tjenester er nødvendige.

## Udgiv gratis fra din iPhone

1. Hent ZIP-filen fra Codex. Gem den i **Filer** på din iPhone. Tryk på ZIP-filen i Filer for at pakke den ud.
2. Åbn **github.com** i Safari og log ind. Vælg **New repository**. Kald det **vinlogen-spil**, vælg **Public**, tilføj en README, og tryk **Create repository**. Brug et NYT repository; åbn ikke dit gamle `tryk-ikke`.
3. I det nye repository: vælg **Add file → Upload files**. Hvis knappen mangler, vælg **Anmod om computerwebsted** i Safaris sidemenu (aA eller sideikonet).
4. Tryk **choose your files → Vælg filer**. Gå til den udpakkede mappe. Vælg spilfilerne (se listen nedenfor), og tryk **Commit changes**. Upload de enkelte filer, ikke ZIP-filen eller den ydre mappe. `index.html` skal ligge i repositoryets rod.
5. Åbn repositoryets **Settings → Pages**. Vælg **Deploy from a branch**, derefter **main** og **/(root)**. Tryk **Save**.
6. Vent et par minutter. Åbn adressen vist under Pages: `https://DIT-BRUGERNAVN.github.io/vinlogen-spil/` i Safari. Eventuelt: **Del → Føj til hjemmeskærm**.

Har mobilvisningen ikke filupload, brug computerwebsted som beskrevet i trin 3. Du skal ikke bruge terminal, Node eller GitHub Actions.

Upload disse syv filer:
- index.html
- style.css
- script.js
- cards.js
- sw.js
- vinlogen_logo.jpg
- .nojekyll (valgfri tom fil; kan være skjult i Filer)

Vejledningen og testrapporten må også uploades, men er ikke nødvendige for spillet.

## Spil

Kort spil giver præcis 12 kort: to individuelle og én overraskelse, fire gange.
Alle får én individuel tur. De individuelle kort fordeles på tre Venskab, tre Vanvid og to Vin.
Fri spil fortsætter med nye blandede bunker og fair spillerture. Afslut når som helst og vælg aftenens største idiot.

Giv telefonen videre før afsløring. Start timeren manuelt. Bestået, Fiasko og Fripas giver ingen point. Slurke er frivillige, og der er ingen konsekvens ved at sige nej. Hemmelige missioner læses kun af den udvalgte og skjules med Klar. Spilleren styrer selv missionens to minutter; der kommer ingen afsløring på gruppens skærm.

## Gemning og offline

Spillet gemmer automatisk lokalt i Safari med en separat nøgle: `vinlogen-de3ver-v1`. Det rører ikke dit tidligere spil. Genåbn samme adresse i samme browser for at fortsætte. Privat browsing, slettede websitedata eller lagerbegrænsninger kan fjerne gemningen. Hvis gemning fejler, vises en advarsel.

Timeren bruger et sluttidspunkt og fortsætter derfor korrekt ved genindlæsning. Der er ingen lyd. Nulstil spil kræver bekræftelse.

En lille service worker cacher appfilerne efter første onlinebesøg på HTTPS. Lad første indlæsning afslutte, før du går offline. iOS kan rydde cachen; offline er derfor ikke en garanti for permanent opbevaring. Service workeren ligger kun under dette nye spils mappe. Ingen eksterne skrifttyper, tracking eller tredjepartscookies.

Åbning af HTML direkte fra Filer er ikke den anbefalede måde at spille på iPhone. Brug GitHub Pages-adressen.
