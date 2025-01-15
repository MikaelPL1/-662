# Ohjelmiston toteutus UseCase-kaavion pohjalta

### Käyttötapauksen nimi : Selaa äänestyksiä
#### Käyttäjät : Käyttäjä
#### Laukaisija : Käyttäjä menee äänestyssivulle selaamaan äänestyksiä
#### Esiehto : Äänestykset on/ovat olemassa
#### Jälkiehto : Käyttäjä näkee äänestykset
#### Käyttötapauksen kulku : 
##### Käyttäjä menee äänestyssovellukseen / sivulle
##### Poikkeuksellinen toiminta : Äänestyksiä ei ole olemassa

### Käyttötapauksen nimi : Katso äänestystilanne 
#### Käyttäjät : Käyttäjä
#### Laukaisija : Käyttäjä valitsee äänestyksen
#### Esiehto : Äänestys pitää olla olemassa
#### Jälkiehto : Käyttäjä näkee haluamansa äänestyksen tilanteen
#### Käyttötapauksen kulku : 
#####  Käyttäjä Valitsee äänestysksen, näkee tilanteen
##### Poikkeuksellinen toiminta : Äänestystä ei ole olemassa


### Käyttötapauksen nimi : Äänestä
#### Käyttäjät : Käyttäjä
#### Laukaisija : Käyttäjä valitsee äänestyksen mitä äänestää
#### Esiehto : Äänestys pitää olla olemassa
#### Jälkiehto : Äänestys laskee käyttäjän äänen äänestyksen tulokseen ja päivittää äänestystilanteen
#### Käyttötapauksen kulku : 
##### Käyttäjä Valitsee äänestysksen, Käyttäjä äänestää
##### Poikkeuksellinen toiminta : Käyttäjä on äänestänyt / Äänestystä ei ole olemassa

### Käyttötapauksen nimi : Tee uusi äänestys
#### Käyttäjät : Ylläpitäjä

