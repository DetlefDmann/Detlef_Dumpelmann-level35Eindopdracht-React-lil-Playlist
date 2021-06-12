![Screenshot from 2021-06-12 18-05-14](https://user-images.githubusercontent.com/30078692/121782959-7e608400-cbac-11eb-9ace-7704ea9f8c47.png)
# Playlist Opdracht

## Inleiding:

Ik heb bij deze opdracht gekozen voor de "redux-toolkit" template voor create-react-app.

Hierbij gebruik je hooks en wat modernere syntax voor Redux.

De store en de reducers zien er dan ook heel anders uit dan de basis Redux componenten.

## Logica:

In eerste instantie had ik een groot deel van de logica in de react components zelf. 
Omdat ik dat niet zo mooi vond, heb ik er een op zichzelf staand component van gemaakt die een lege React Component "renderde".
Toen ging ik toch denken dat het eigenlijk om "state" ging en dus eigenlijk binnen Redux gedaan moet worden.
Uiteindelijk heb ik dan ook het grootste deel naar de "slice" verhuisd.

## Keuzes keuzes:

Om alle requirements te halen, heb ik het niet helemaal zo gedaan als ik zelf had gewild. Ik had er zelf waarschijnlijk voor gekozen om 1 lijst aan te houden en dan daar uit te filteren.
Een van de requirements was "elke genre krijgt zijn eigen lijstje".
Als je dan al verschillende lijstjes hebt, dan moet je daar ook gebruik van maken. Uiteindelijk vond ik het resultaat toch beter dan ik verwacht had.
Omdat Redux toolkit ook gebruik maakt van Immer is het eigenlijk niet nodig om immutability te gebruiken in de State. Dit heb ik wel zoveel mogelijk gedaan om te laten zien dat ik weet wat de bedoeling is.
Ik wil dat ook zo blijven doen, omdat er in de toekomst projecten kunnen komen waarbij ik geen gebruik kan maken van Redux-Toolkit/Immer.

## Resources:

De officiele website voor Redux Toolkit is https://redux-toolkit.js.org/.

Om  enigzins inzicht te krijgen in de gebruikte syntax is de volgende "course" heel verhelderend geweest. https://egghead.io/courses/redux-with-react-hooks-8a37

Deze video op Youtube was ook heel goed https://youtu.be/9lCmbth63k0 .
Ik heb zelf echter geen TypeScript gebruikt.
