# liri-node-app
A video of how the liri-node-app works can be found at https://drive.google.com/file/d/12hSqAh9EqDkx85wrBV-L5eWh8mpBf7oC/view

http://github.com - automatic!
[GitHub](https://drive.google.com/file/d/12hSqAh9EqDkx85wrBV-L5eWh8mpBf7oC/view)

**LIRI** is a Language Interpretation and Recognition Interface. **LIRI** is a command line node app that takes in parameters and gives the user back data.

LIRI will search **Spotify API** for songs and use **axios** to search **Bands in Town Events API** for concerts and **OMDB API** for movies. 

For **Concert-this**, LIRI will return all the occurrences of venues the _artist/band_ is playing at using **axios.get** to access the **Bands In Town Events API** and display: Name of the venue, Venue location (city and country), and Date of the Event (Liri uses **moment** to format this as "MM/DD/YYYY"). If LIRI cannot find any venues for the artist/band entered, it will display a message "No information for _artist/band name_". If an _artist/band_ is not entered, the default will be **Elton John**. If an invalid _artist/band_ is entered, LIRI will display a message that there is no such _artist/band_. 

For **Spotify-this-song**, LIRI will return all the occurrences of the _song title_ in the **Spotify API** and will display: Artist(s); The song's name; A preview link of the song from **Spotify**; and the album that the song is from. If the song is not found in the **Spotify API**, a message will display "No information for _songTitle_." If a user does not enter a _song title_, the default song is **The Sign**.

For **Movie-this**, LIRI will return information about the movie using **axios.get** to access the **OMDB API** and display Title of the movie, Year the movie came out, IMDB Rating of the movie, Rotten Tomatoes Rating of the movie, Country where the movie was produced, Language of the movie, Plot of the movie, and Actors in the movie. If the movie is not in the  **OMDB API**, a message will display "No informationi for  _movie title_. If the user does not enter a movie title, the default is **Mr. Nobody**.

For **Do What You Want**, LIRI will randomly select an event and itemm to search by **reading the random.text file** and then using the **Math.Random** function and then use it to call one of LIRI's commands.

All output data is displayed ont the console and logged to the log.txt file. 

Liri will prompt the user with a checkbox list asking them what they would like to do. 

![user prompts](https://github.com/Ilene0413/liri-node-app/blob/master/images/prompt-screen.png)

The user will move the cursor up and down to get to the option they want and then press the space bar and then enter to select

In the following screens, the user is selecting **Spotify-this-song**

![scroll to option](https://github.com/Ilene0413/liri-node-app/blob/master/images/scroll-option.png)

![select option](https://github.com/Ilene0413/liri-node-app/blob/master/images/select-option.png)

After the user selects an option, LIRI will determine which option was selected and follow up with a question depending on the option chosen. For **Concert-this**, it will ask which artist; for **Spotify-this-song**, it will ask for the song title; for **Movie-this**, it will ask for a movie title.  If the user chooses **Do what you want**, no question is asked.

In the following screen, the user is asked **what song**

![ask follow up question](https://github.com/Ilene0413/liri-node-app/blob/master/images/ask-follow-up-quest.png)

If the user does not enter a value for the follow up question, LIRI will use the default option (Elton John for Concert-this; Mr. Nobody - for Movie-this; The Sign for Spotify-this-song)

In the following screen, the user does not enter a song, so defaults to **The Sign**.

![user chose Spotify-this-song but user did not enter song title, so defaulted to The Sign](https://github.com/Ilene0413/liri-node-app/blob/master/images/spotify-no-song-entered.png)

In the following screen, the user entered a song title that does not exist

![user chose Spotify-this-song and user entered a song title that does not exist](https://github.com/Ilene0413/liri-node-app/blob/master/images/invalid-song.png)

In the following screen, the user entered a song title that does exist

![user chose Spotify-this-song and user entered song title](https://github.com/Ilene0413/liri-node-app/blob/master/images/song-title-entered.png)

In the following screen, user did not enter an artist/band, so defaults to **Elton John**

![user chose Concert-this, but did not enter an artist, so defaulted to Elton John](https://github.com/Ilene0413/liri-node-app/blob/master/images/no-artist-entered.png)

In the following screen, user entered a valid artist/band that has upcoming concerts

![user chose Concert-this and user entered artist](https://github.com/Ilene0413/liri-node-app/blob/master/images/artist-entered.jpg)

In the following screen, user entered an artist that does not have any upcoming concerts

![user chose Concert-this and user entered artist that has no upcoming concerts](https://github.com/Ilene0413/liri-node-app/blob/master/images/no-venues.png)


In the following screen, user entered an artist that does not exist

![user chose Concert-this and user entered artist](https://github.com/Ilene0413/liri-node-app/blob/master/images/invalid-artist.png)

In the following screen, the user did not enter a movie title, so default to **Mr. Nobody**.

![user chose Movie-this and user did not enter a movie title, so defaulted to Mr. Nobody](https://github.com/Ilene0413/liri-node-app/blob/master/images/no-movie-entered.png)

In the following screen, the user entered a movie title that exists

![user chose Movie-this and user entered movie title that exists](https://github.com/Ilene0413/liri-node-app/blob/master/images/movie-entered.png)

In the following screen, the user entered a movie title that does not exist

![user chose Movie-this and user entered movie title that does not exists](https://github.com/Ilene0413/liri-node-app/blob/master/images/movie-doesnt-exist.png)

An example of a Do what you want - random choice

![user chose Do what you want - randomly picked from the random.txt file using Math.Random](https://github.com/Ilene0413/liri-node-app/blob/master/images/dowhatyouwant-choice1.png)

An example of a Do what you want - random choice

![user chose Do what you want - randomly picked from the random.txt file using Math.Random](https://github.com/Ilene0413/liri-node-app/blob/master/images/dowhatyouwant-choice2.png)


An example of a Do what you want - random choice

![user chose Do what you want - randomly picked from the random.txt file using Math.Random](https://github.com/Ilene0413/liri-node-app/blob/master/images/dowhatyouwant-choice3.png)



Developed by Ilene Cohen.
email: ilene413@icloud.com
January 24, 2019
