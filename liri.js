
require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var moment = require("moment");
var Spotify = require('spotify-web-api-node');
// var Spotify = require('node-spotify-api');


var firstCommand = process.argv[2];
var secondCommand = process.argv[3];

for (var i=4; i <process.argv.length; i++){
  secondCommand += "+" + process.argv[i];
}


function liriSwitch(firstCommand) {

  switch (firstCommand) {

    case "spotify-this-song":
    getSpotify();
    break;

    case "movie-this":
    getMovie();
    break;

    case "concert-this":
    getConcert();
    break;

    case "do-what-it-says":
    doWhat();
    break;

    default:
    console.log("To get started with LIRI-BOT, type in one of the following commands!");
    console.log("Type in 'concert-this' 'name of the band' & enter to see the results")
    console.log("Type in 'movie-this' 'name of the movie' & enter to see the results")
    console.log("Type in 'spotify-this-song' 'name of the song' & enter to see the results")
  }
};

var spotify = new Spotify(keys.spotify);


var getSpotify = function (songName) {
  if (songName === undefined) {
    songName = "365";
  }

  spotify.search(
    {
      type: "track",
      query: secondCommand
    },

    function(err,data) {
      if (err) { 
        console.log("Error: " + err);
        return;
      }
      console.log(data);
      var songResult = data.tracks.items;

      for (var i =0; i < songResult.length; i++) {
        console.log(i);
        console.log("Artist(s): " + songResult[i].artists.map(getArtistNames));
        console.log("Song name: " + songResult[i].name);
        console.log("Preview song: " + songResult[i].preview_url);
        console.log("Album: " + songResult[i].album.name);
        console.log("-----------------------------------");
      }
    }
  );
};

//getMovie 
function getMovie() {
  var queryUrl = "http://www.omdbapi.com/?t=" + secondCommand + "&y=&plot=short&apikey=trilogy";
  if (secondCommand === "") {
      console.log("Here is suggestion, since you left movie field empty!")
      console.log("-------Mr. Nobody-------")
      console.log("If you haven't watched 'Mr. Nobody', then you should: <http://www.imdb.com/title/tt0485947/>");
      console.log("It's on Netflix!");
      
  } else {
      axios.get(queryUrl).then(
          function (response) {
              console.log("============ YOUR MOVIE INFO ===========");
              console.log("MOVIE TITLE: " + response.data.Title);
              console.log("RELEASE YEAR: " + response.data.Year);
              console.log("IMDB RATING: " + response.data.Ratings[0].Value);
              console.log("ROTTEN TOMATOES RATING: " + response.data.Ratings[1].Value);
              console.log("COUNTRY: " + response.data.Country);
              console.log("LANGUAGE: " + response.data.Language);
              console.log("PLOT: " + response.data.Plot);
              console.log("ACTORS: " + response.data.Actors);
              console.log('================ THE END ================');
          }
      );
  };
};

function getConcert() {
  var queryUrl = "https://rest.bandsintown.com/artists/" + secondCommand + "/events?app_id=codingbootcamp";
  if (secondCommand === "") {
      console.log("You must enter a band/artist");
  } else {
      axios.get(queryUrl).then(
          function (response) {
              for (i = 0; i < response.data.length; i++) {
                  console.log("========== YOUR CONCERT SEARCH RESULT ==========");
                  console.log("VENUE: " + response.data[i].venue.name);
                  var location = response.data[i].venue.city + ", " + response.data[i].venue.region + " " + response.data[i].venue.country
                  console.log("LOCATION: " + location);
                  var eventDate = moment(response.data[i].venue.datetime).format("MM-DD-YYYY");
                  console.log("DATE: " + eventDate);
              }
          }
      );
  };
};

function doWhat(){
  fs.readFile("random.txt", "utf8", function (error, data){
    if (!error);
    console.log(data.toString());
    var commands = data.toString().split(',');
  });
}

liriSwitch(firstCommand);


