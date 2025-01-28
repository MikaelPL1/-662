# Ohjelmiston toteutus UseCase-kaavion pohjalta

### Käyttötapauksen nimi : Selaa äänestyksiä
#### Käyttäjät : Käyttäjä, Ylläpitäjä
#### Laukaisija : Käyttäjä menee äänestyssivulle selaamaan äänestyksiä
#### Esiehto : Äänestykset on/ovat olemassa
#### Jälkiehto : Käyttäjä näkee äänestykset
#### Käyttötapauksen kulku : 
##### Käyttäjä menee äänestyssovellukseen / sivulle
##### Poikkeuksellinen toiminta : Äänestyksiä ei ole olemassa

### Käyttötapauksen nimi : Katso äänestystilanne 
#### Käyttäjät : Käyttäjä, Ylläpitäjä
#### Laukaisija : Käyttäjä menee äänestyssivulle
#### Esiehto : Äänestys pitää olla olemassa
#### Jälkiehto : Käyttäjä äänestyksien tilanteen
#### Käyttötapauksen kulku : 
#####  Käyttäjä menee äänestyssivulle
##### Poikkeuksellinen toiminta : Äänestystä ei ole olemassa


### Käyttötapauksen nimi : Äänestä
#### Käyttäjät : Käyttäjä, Ylläpitäjä
#### Laukaisija : Käyttäjä valitsee äänestyksen mitä äänestää
#### Esiehto : Äänestys pitää olla olemassa
#### Jälkiehto : Äänestys laskee käyttäjän äänen äänestyksen tulokseen ja päivittää äänestystilanteen
#### Käyttötapauksen kulku : 
##### Käyttäjä Valitsee äänestysksen, Käyttäjä äänestää
##### Poikkeuksellinen toiminta : Äänestystä ei ole olemassa

### Käyttötapauksen nimi : Tee uusi äänestys
#### Käyttäjät : Ylläpitäjä
#### Laukaisija : Ylläpitäjä painaa "Luo äänestys" nappia
#### Esiehto : Ylläpitäjällä pitää olla oikeudet ja käyttäjällä ei
#### Jälkiehto : Ylläpitäjän tekemä äänestys näkyy äänestyksissä
#### Käyttötapauksen kulku : 
##### Ylläpitäjä painaa "Luo äänestys" nappia, Ylläpitäjä tekee haluamansalaisen äänestyksen, Ylläpitäjän tekemä äänestys näkyy äänestyksissä
##### Poikkeuksellinen toiminta : Ylläpitäjä ei kirjoita mitään äänestykseen "kysymystä tai vaihtoehtoja".

### Käyttötapauksen nimi : Poista äänestyksiä
#### Käyttäjät : Ylläpitäjä
#### Laukaisija : Ylläpitäjä valitsee äänestyksen jonka haluaa poistaa
#### Esiehto : Poistettava äänestys on olemassa
#### Jälkiehto : Poistettu äänestys poistetaan
#### Käyttötapauksen kulku :
##### Ylläpitäjä painaa tietyn äänestyksen poista nappia, Äänestys poistetaan
##### Poikkeuksellinen toiminta : Äänestyksiä ei ole olemassa
