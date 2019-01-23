// code to read and set any environment variables with the dotenv package

require("dotenv").config();


// code to import keys.js file and store it in a variable

let keys = require("./keys.js");
// access key information

// load axios
let axios = require("axios");


// Load the NPM Package inquirer
let inquirer = require("inquirer");

// Includes the FS package for reading and writing packages
let fs = require("fs");

//load the moment package
let moment = require('moment');

// Determine what the user wants information on
// can choose from concert,spotify song, movie, or do what it says

inquirer.prompt([

  {
    type: "checkbox",
    name: "command",
    message: "What would you like to do",
    choices: ["Concert-this", "Spotify-this-song", "Movie-this", "Do-what-it-says"]
  },
  {
    type: "input",
    name: "artist",
    message: "Enter artist you want to see",
    // Only run if user answers concert-this to first question
    when: function (answers) {
      return answers.command == "Concert-this";
    }
  },
  {
    type: "input",
    name: "song",
    message: "Enter song title",
    when: function (answers) {
      // Only run if user answers spotify-this-song to first question
      return answers.command == "Spotify-this-song";
      ;
    }
  },
  {
    type: "input",
    name: "movie",
    message: "Enter movie",
    when: function (answers) {
      // Only run if user answers movie-this to first question
      return answers.command == "Movie-this";

    }
  }
]).then(function (answers) {

  // determine what entertainment to get information on

  if (answers.command == "Concert-this") {
    let artist = answers.artist;
    artist = artist.trim();
    if (artist == "") {
      artist = "Elton John";
    }
    concert(artist);
  }
  else {
    if (answers.command == "Spotify-this-song") {
      let songTitle = answers.song;
      songTitle.trim();
      if (songTitle == "") {
        songTitle = "The Sign";
      }
      spotifyInfo(songTitle);
    }
    else {
      if (answers.command == "Movie-this") {
        let movieTitle = answers.movie;
        movieTitle.trim();
        movieInfo(movieTitle);
      }
      else {
        doWhatItSays();
      }
    }
  }
})
  .catch(function (error) {
    console.log("error f" + error);
    return;
  });

//this function is called to find venues, location, and date of where artists are playing

function concert(artist) {

  let queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  axios.get(queryUrl).then(
    function (response) {
      if (response.data.length === 0) {
        console.log("No concerts found for " + artist);
      }
      else {
        console.log("Artist: " + artist);
        for (let i = 0; i < response.data.length; i++) {
          console.log("Venue: " + response.data[i].venue.name);
          console.log("Location: " + response.data[i].venue.city + " " + response.data[i].venue.country);
          console.log("Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
          console.log(" ");
        }
      };
    })
    .catch(
      function (errors) {
        console.log(errors);
      });

}
// this function will retrive information about a song the user entered using node-spotify-api
//using the promie - search method
// information retrieved includes artists, song name, preview link of song from Spotify, and the album the song is from
//song may be on many different albums by the same artist, all are listed along with link if avaialable
//if a song is not entered - the default song is "The Sign"


function spotifyInfo(songTitle) {
  let Spotify = require("node-spotify-api");

//  let spotify = new Spotify({
  //  id: "1379d8b38a3b445cb7d543c585378576",
 //   secret: "eeee9c5888134b29b9fba7edbeb88e44"
//  });
  let spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRETgit
  });

  spotify
    .search({ type: 'track', query: songTitle })
    .then(function (response) {
      if (response.tracks.items.length === 0) {
        console.log("no information for " + songTitle);
      }
      else {
        for (let i = 0; i < response.tracks.items.length; i++) {
          console.log("Song Title: " + songTitle);
          for (let j = 0; j < response.tracks.items[i].artists.length; j++) {
            console.log("Artist: " + response.tracks.items[i].artists[j].name.trim());
          }
          console.log("Album: " + response.tracks.items[i].name.trim());
          if (response.tracks.items[i].preview_url !== null) {
            console.log("Preview spotify url: " + response.tracks.items[i].preview_url);
          }
          console.log(" ");
        }
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
//this function will display the movie information for the movie requested using axios omdb-client
//information displayed is movie title, year it was released, country, languages, 
//plot, actors, imdb rating and rotten tomatoes rating
//if a movie is not entered - default movie to search is Mr. Nobody

function movieInfo(movieTitle) {
  // Include the axios npm package 
  //default movie to search is Mr. Nobody

  let title = "Mr. Nobody";

  if (movieTitle !== "") {
    title = movieTitle;
  };

  let queryUrl = "http://www.omdbapi.com/?t=" + title + "&apikey=dc552b2d";

  axios.get(queryUrl).then(
    function (response) {
      //check to see if there is any information on the movie
      if (response.data.Title === undefined) {
        console.log("No information for movie " + title);
      }
      else {
        console.log("Movie Title: " + response.data.Title);
        console.log("Year Released: " + response.data.Year);
        console.log("Country: " + response.data.Country);
        console.log("Languages: " + response.data.Language);
        //check to see if there are any ratings for the movice
        if (response.data.Ratings.length !== 0) {
          console.log("imdb Rating: " + response.data.Ratings[0].Value);
          if (response.data.Ratings.length > 1) {
            console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
          }
        }
        console.log("Plot: " + response.data.Plot);
        console.log("Actors " + response.data.Actors);
        console.log(" ");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

//this function will randomly choose an action to get information on

function doWhatItSays() {
  // Running the readFile module that's inside of fs.
  // Stores the read information into the variable "data"

  fs.readFile("random.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    // Break the string down by comma separation and store the contents into the randomEvents array.
    let randomEvents = data.split(",");

    //randomly select an event from the file - each object in the file has an event plus what to search for,
    //therefore need to halve the number of items in the array to get the maximum number of items
    //use Math.floor(Math.Random() to get the event to get info on

    let numEvents = randomEvents.length / 2;
    let eventNum = Math.floor(Math.random() * numEvents)
    // event to search for is an even number of array starting at 0
    if (eventNum % 2 !== 0) {
      eventNum--
    }
    //determine which event was chosen and get the correct information
    let event = randomEvents[eventNum].trim();
    if (event == "Concert-this") {
      concert(randomEvents[eventNum + 1]);
    }
    else {
      if (event == "Movie-this") {
        movieInfo(randomEvents[eventNum + 1]);
      }
      else {
        spotifyInfo(randomEvents[eventNum + 1]);
      }
    }


  });

}



