# liri-node-app
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives the user back data.

LIRI will search Spotify for songs and use axios to search Bands in Town API for concerts and OMDB API for movies. 

For Concert-this, LIRI will return all the occurrences of the following using the Bands In Town api and display: Name of the venue, Venue location (city and country), and Date of the Event (Liri uses moment to format this as "MM/DD/YYYY"). If LIRI cannot find any information for the artist/band entered, it will display a message "No information for " artist/band name.

For Spotify-this-song, LIRI will return all the occurrences of the song title in the Spotify api and will display: Artist(s); The song's name; A preview link of the song from Spotify; The album that the song is from. If the song is not found in the Spotify api, a message will display "No information for " songTitle. 

For Movie-this, LIRI will return information about the movie using OMDB api and display Title of the movie, Year the movie came out, IMDB Rating of the movie, Rotten Tomatoes Rating of the movie, Country where the movie was produced, Language of the movie, Plot of the movie, and Actors in the movie. If the movie is not in the  OMDB api, a message will display "No informationi for " movie Title.

For Do What You Want, LIRI will randomly select an event and itemm to search from the random.text file using the Math.Random function in and then use it to call one of LIRI's commands.

All output data is displayed ont the console and logged to the log.txt file. 

Liri will prompt the user with a checkbox list asking them what they would like to do. 

![user prompts](https://github.com/Ilene0413/liri-node-app/images/prompt-screen.png)

The user will move the cursor up and down to get to the option they want and then press the space bar and then enter to select

![scroll to option](https://github.com/Ilene0413/liri-node-app/images/scroll-option.png)

![select option](https://github.com/Ilene0413/liri-node-app/images/select-option.png)

After the user selects an option, LIRI will determine which option was selected and follow up with a question depending on the option chosen. For Concert-this, it will ask which artist; for Spotify-this-song, it will ask for the song title; for Movie-this, it will ask for a movie title.  If the user chooses Do what you want, no question is asked.

![ask follow up question](https://github.com/Ilene0413/liri-node-app/images/ask-follow-up-quest.png)

If the user does not enter a value for the follow up question, LIRI will use the default option (Pink for Concert-this; Mr. Nobody - for Movie-this; The Sign for Spotify-this-song)

![user chose Spotify-this-song but user did not enter song title, so defaulted to The Sign](https://github.com/Ilene0413/liri-node-app/images/no-song-title-entered.png)


![user chose Spotify-this-song and user entered song title](https://github.com/Ilene0413/liri-node-app/images/song-title-entered.png)

![user chose Concert-this, but did not enter an artist, so defaulted to Pink](https://github.com/Ilene0413/liri-node-app/images/no-artist-entered.png)

![user chose Concert-this and user entered artist](https://github.com/Ilene0413/liri-node-app/images/artist-entered.png)

![user chose Movie-this and user did not enter a movie title, so defaulted to Mr. Nobody](https://github.com/Ilene0413/liri-node-app/images/no-movie-entered.png)
![user chose Concert-this and user entered artist](https://github.com/Ilene0413/liri-node-app/images/artist-entered.png)

![user chose Movie-this and user entered movie title](https://github.com/Ilene0413/liri-node-app/images/movie-entered.png)

![user chose Do what you want - randomly picked from the random.txt file using Math.Random](https://github.com/Ilene0413/liri-node-app/images/dowhatyouwant-choice1.png)

![user chose Do what you want - randomly picked from the random.txt file using Math.Random](https://github.com/Ilene0413/liri-node-app/images/dowhatyouwant-choice2.png)

![user chose Do what you want - randomly picked from the random.txt file using Math.Random](https://github.com/Ilene0413/liri-node-app/images/dowhatyouwant-choice3.png)



Developed by Ilene Cohen.
email: ilene413@icloud.com