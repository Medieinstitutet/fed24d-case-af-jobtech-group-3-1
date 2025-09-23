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
📌 **Motivering:** Uppgiften uppfyller G-kraven med god marginal: data hämtas strukturerat via fetch (serviceBase), ni har tydliga tjänster (jobService, popularJobsService), ni använder React-koncept (routing, state, context, custom hook) och designsystemet för presentation. Ni har dessutom levererat flera bonusar: grafisk presentation (DigiBarChart), en custom hook för sökningen, sortering och platsfilter, sparade jobb via Context + localStorage och en genomtänkt färgpalett där AF-loggan döljs. Helheten är välstrukturerad och funktionell.

💡 **Förbättringsförslag:**  
- Korrigera felhantering/återgivning på annons-sidan: i AdPage returnerar koden inget vid fel (if (error || !job) return;) vilket ger en tom sida. Visa ett tydligt felmeddelande eller en NotFound-komponent.
- Byt <a>-länkar i Header till React Router-länkar (Link/DigiLinkInternal) så ni undviker full sidladdning och bevarar SPA-upplevelsen. Då uppdateras även aktiv navigering korrekt utan att läsa av window.location manuellt.
- Förbättra typerna i Job-modellen: många fält (skills/languages/work_experiences/education) är definierade som tupler ([]) i stället för arrayer (Type[]). Detta kan leda till märkliga typfel och sämre DX. Exempel: must_have.skills: Skill[] i stället för en tuple.
- Undvik any och eslint-disable där det går. Typa onChange/onAfOnClick-event korrekt (t.ex. React.ChangeEvent<HTMLInputElement> eller CustomEvent enligt komponenternas API).
- Förbättra fetch-felhantering i serviceBase.get: kontrollera response.ok och kasta ett fel med status/text. I dag försöker ni alltid parsa JSON, vilket kan dölja fel från API:et.
- Rensa debug-utskrifter (console.log) innan leverans.
- Återställ sida till 1 när sökparametrar ändras (t.ex. när q, sort eller filters ändras). Annars kan man hamna på en tom sida vid ny sökning.
- Duplicerad joinUrl-funktion förekommer i flera filer. Extrahera till en gemensam util för att undvika divergens och underlätta testning.
- Parallellisera hämtningarna i JobData med Promise.all så laddningen går snabbare (nu sker anropen sekventiellt).
- Säkerställ att import-sökvägen till tokens är korrekt: ./style/tokens.css (utan avslutande snedstreck) för att undvika plattformsproblem.
- Överväg att lägga plats-facets-hämtningen (LocationDropdown) i en service i stället för direkt i komponenten, för konsekvens med övrig datahämtning.
- Bonusmöjlighet: implementera /complete för autocomplete i sökfältet (enligt Nice-to-have).

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
