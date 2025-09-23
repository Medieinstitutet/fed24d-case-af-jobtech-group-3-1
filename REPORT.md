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
📌 **Motivering:** Uppgiften uppfyller samtliga G-krav och levererar flera bonusdelar på ett välstrukturerat sätt. Data hämtas via fetch i en tydlig tjänstelager-uppdelning (serviceBase, jobService, popularJobsService). React-koncept används korrekt (routing, context för sparade jobb, state, custom hook för sökning). Designsystemet används genomgående och Arbetsförmedlingens logotyp/färger är borttagna/överskrivna med egen palett. Extra: grafisk presentation (DigiBarChart), sorting, platsfilter (facetter), samt en robust detaljsida med cache i localStorage.

💡 **Förbättringsförslag:**  
- Implementera /complete-endpointen för autocomplete i sökfältet för ytterligare bonus.
- Förbättra felhanteringen i nätverksanrop: kontrollera response.ok och kasta tydligare fel; hantera timeouts/AbortController.
- Nollställ pagination (page = 1) när q/sort/filter ändras, annars riskerar man tomma sidor p.g.a. förskjuten offset.
- Rensa console.log och överflödiga eslint-disable any; typa händelser korrekt (t.ex. CustomEvent<number>) och Digi-komponenternas onChange.
- Headern använder <a href> vilket ger full sidladdning; byt till <Link> från react-router för SPA-navigering.
- AdPage: undvik att returnera undefined vid fel (if (error || !job) return;). Visa ett användbart felmeddelande eller navigera till NotFound.
- Parallellisera hämtningar i JobData (Promise.all) så stapeldiagrammet laddar snabbare.
- Harmoniera query-hanteringen: använd useSearchParams som single source of truth i SearchPage och låt hooken bygga query från URL-parametrar i stället för att mixa location.search och ett separat query-state.
- Tillgänglighet i platsmenyn: hantera fokus när menyn öppnas, piltangenter för navigation och enter/space för val; nu finns aria-attribut men interaktionen kan stärkas.
- Ta bort oanvänd App-komponent som renderas tom i main.tsx.
- Språk/typo i sparade-jobb-texten (”saidan”, ”bärja”) – rätta stavfel.

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
