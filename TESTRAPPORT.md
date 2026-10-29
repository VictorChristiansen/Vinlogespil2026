# Kontrol af version 1

Udført 29. oktober 2026.

## Bestået automatiseret kontrol

- JavaScript-syntaks kontrolleret med Node.
- Alle 30 kort importeret fra den vedhæftede specifikation som strukturerede objekter, herunder 24 individuelle og 6 overraskelser.
- 200 simulerede korte spil: hver gang præcis 12 unikke kort, 8 individuelle, 4 overraskelser, kategoriantal 3/3/2, otte forskellige aktive spillere og finale efter kort 12.
- 720 simulerede frie kort: mønster 2 individuelle / 1 overraskelse, otte individuelle ture før navnegentagelse, 24 individuelle og 6 overraskelser uden gentagelse før genblanding. Ingen gentagelse ved overgangen mellem bunker.
- Målpersoner er forskellige fra aktiv spiller og hinanden.
- Bestået, Fiasko, Fripas, serialisering til localStorage, udløbet timer og tidlig finale kontrolleret i simuleret DOM.

## Gennemgået i kildekoden

Originalt logo på forside og kortskærm, manuel timerstart, hemmelig overlevering før missionens tekst, skjulning med Klar, bekræftelse ved nulstilling, beskyttelse mod hurtige dobbelttryk, sikre textContent-indsættelser, relative stier, reduceret animation og touchknapper på mindst 44 px. Ingen afhængigheder eller forbindelse til tidligere spil.

## Ikke verificeret i rigtig browser

Forsøg på lokal webserver og Chromium blev blokeret af køremiljøets socket-restriktioner. Der er derfor ingen påstand om bestået visuel browsertest eller fysisk iPhone-test. Safari, layout ved 390 px, browserens genindlæsning/Tilbage, native bekræftelsesdialog, service worker og offline-cache skal afprøves på iPhone efter udgivelse. JavaScript-testen bruger en simuleret DOM og kan ikke verificere rendering eller Safari-adfærd.

Hurtig iPhone-kontrol: spil et kort med timer, genindlæs under nedtælling, brug alle tre udfald, gennemfør 12 kort, vælg vinder, start fri spil og afslut tidligt. Prøv nulstillingens annuller- og bekræftknap. Besøg spillet online først; slå derefter flytilstand til og genindlæs for at kontrollere cachen.
