# 📌 Rättningsrapport – fed24d-case-af-jobtech-group-3-1

## 🎯 Uppgiftens Krav:
# Skapa en egen Platsbanken för ert drömscenario 

Dokumentation om Arbetsförmedlingens öppna data finns på https://jobtechdev.se. All öppna data från arbetsförmedlingen och andra offentliga organisationen går även att hitta direkt på dataportal.se. 
I detta dokument ges två förslag på användningsfall som vi tror är lämpliga för studenter som vill utveckla en applikation på riktig data. All data som är öppna data får vem som helst använda utan att fråga myndigheten om lov, så ingen är begränsad till de exempel vi ger.

Läs först igenom kom-igång hjälpen 

-  [Övergripande dokumentation API:etJobSearch](https://data.arbetsformedlingen.se/data/platsannonser/)
-  [Kom-igång guide](https://gitlab.com/arbetsformedlingen/job-ads/jobsearch/jobsearch-api/-/blob/main/docs/GettingStartedJobSearchSE.md)

## Prova att utforska datan med vår interaktiva tjänst 

Görs genom att öppna Swagger-sidan för API:et (för att enkelt testa olika endpoints i API:et och läsa dokumentation för respektive endpoint): [Search job ads (jobtechdev.se)](https://jobsearch.api.jobtechdev.se/)

## Uppgift 

Använd endpoint **/search** för att söka bland befintliga annonser. 
Det går även bra att använda historiska annonser om ni vill jämföra aktuella annonser med hur det har sett ut tidigare. Detta api finns här: [Historical job ads (jobtechdev.se)](https://historical.api.jobtechdev.se/)

Om möjligt, använd en grafisk presentation av era resultat genom t.ex. stapeldiagram eller linjegrafer.

**Observera**
Er slutprodukt ska ej innehålla Arbetsförmedlingens logga eller färger. Anpassa gärna efter eget tycke och smak så att ni har en färgpalett och en god tanke bakom. 

## Betygskriterier 

### Need-to-have (G) 
- Ni har hämtat data på ett strukturerat sätt med hjälp av antingen fetch eller axios. 
- Ni har skapat en tjänst som ni använder för att hämta data. 
- Ni använder react-koncept vi har pratat om för att göra datan tillgänglig (context, state, routing et.c.). 
- Ni använder den syntax, namngivningsstandard samt skrivsätt som vi har lärt er.  
- Ni använder designsystemet för presentation. 

### Nice-to-have (Extra bonus) 
- Styled components (som drar nytta av designsystemet) 
- Grafisk presentation av datat 
- Användning av custom hook där det finns möjlighet
- Använd endpoint /complete för att lägga till autocomplete-funktion och få förslag på begrepp vid fritextsökning

## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-group-3-1\src\context\SavedJobsContext.ts - no-unused-vars - 'job' is defined but never used.,no-unused-vars - 'job' is defined but never used.
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-group-3-1\src\services\jobService.ts - no-console - Unexpected console statement.,no-console - Unexpected console statement.,no-console - Unexpected console statement.
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-group-3-1\src\services\popularJobsService.ts - null - Unused eslint-disable directive (no problems were reported from '@typescript-eslint/no-explicit-any').

## 🏆 **Betyg: VG**
📌 **Motivering:** Uppgiften uppfyller samtliga G‑krav och levererar dessutom flera extra delar. Data hämtas strukturerat via fetch i en tjänstelager-uppdelning (serviceBase, jobService, popularJobsService). React‑koncept används tydligt: routing (React Router), state, context (SavedJobsContext), samt en egen custom hook (useJobsSearch). Designsystemet används konsekvent (Digi‑komponenter) och färgpaletten/logotyp är anpassade bort från AF:s profil. Söksidan har sortering och platsfilter som synkar med URL, pagination och laddnings-/felstatus. Startsidans grafer (DigiBarChart) ger grafisk presentation av data. Kodstrukturen är i huvudsak ren och läsbar, med bra uppdelning i komponenter och tjänster.

💡 **Förbättringsförslag:**  
- serviceBase: kontrollera response.ok och kasta tydligare felmeddelanden baserat på HTTP‑status. Hantera även nätverksfel med try/catch, annars kan response.json() kasta.
- AdPage: bug i felhanteringen (if (error || !job) return;) resulterar i tomt innehåll. Visa ett felmeddelande eller en tydlig fallback‑vy istället.
- Navigation: ersätt rena <a href> i Header med React Router‑länkar (Link) eller DigiLinkInternal med afOverrideLink för att undvika full sidladdning. Använd useLocation istället för window.location för aktiv menyindikering.
- Pagination och URL: lägg till sidnummer i URL:en (t.ex. ?page=2) och nollställ sidan till 1 när ny sökterm sätts. Då blir delning/refresh mer förutsägbart.
- Typer: undvik any i event‑handlers (t.ex. DigiFormInputSearch och ContextMenu). Beskriv Digi‑komponenternas CustomEvent‑typer eller skapa egna type guards.
- Rensa konsolloggar och död kod: ta bort console.log samt den tomma App‑komponenten som renderas parallellt med RouterProvider.
- DRY: joinUrl finns duplicerad på flera ställen – extrahera till en gemensam util.
- Nice‑to‑have att överväga: implementera autocomplete via /complete, samt ev. styled-components som utnyttjar designsystemets tokens.
- UI/förbättringar: visa valda platsfilter i triggern (t.ex. "Efter plats: Stockholm"), visa antal i menyn och/eller fler orter, samt förbättra texternas stavning på SavedJobsPage.

## 👥 Gruppbidrag

| Deltagare | Antal commits | Commit % | Uppgiftskomplettering | Totalt bidrag |
| --------- | -------------- | -------- | ---------------------- | ------------- |
| DulamaA | 45 | 35.4% | 0.33 | 0.34 |
| maria-jon | 45 | 35.4% | 0.33 | 0.34 |
| AgnesWilson | 37 | 29.1% | 0.33 | 0.32 |


### 📊 Förklaring
- **Antal commits**: Antalet commits som personen har gjort
- **Commit %**: Procentuell andel av totala commits
- **Uppgiftskomplettering**: Poäng baserad på mappning av README-krav mot kodbidrag 
- **Totalt bidrag**: Viktad bedömning av personens totala bidrag (40% commits, 60% uppgiftskomplettering)
