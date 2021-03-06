# LIRI-BOT
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### screenshots
#### LIRI-BOT intro
![liri-bot intro](images/liri-bot-intro.PNG)
#### LIRI-BOT Spotify
![liri-bot Spotify](images/liri-bot-spotify.PNG)
#### LIRI-BOT Movie
![liri-bot movie](images/liri-bot-movie.PNG)
#### LIRI-BOT Concert
![liri-bot concert](images/liri-bot-concert.PNG)

### LIRI supported commands and results
* spotify-this-song
    * Artists
    * The song's Name
    * A preview link of the song from spotify
    * The album that the song is from
* movie-this
    * Title
    * Year movie was released
    * IMDB rating
    * Rotten Tomatoes rating
    * Country of orgination
    * Language of the movie
    * Plot of the movie
    * Actors in the movie
* concert-this
    * Name of the venue
    * Venue location
    * Date of the event

### Deployment
1. Clone Repo
2. Run npm install
3. At command prompt run node liri.js ** (pass in LIRI supported command) (pass in name of the movie, song or band) **

### Technologies used
* nodeJS
* JavaScript
* Spotify API
* Axios
* NPM spotify-web-api-node
* NPM dotenv
* NPM request

### Author
Keyur Patel


