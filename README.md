# liri-node-app

<!-- Clearly state the problem the app is trying to solve (i.e. what is it doing and why) -->
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.


<!-- Give start-to-finish instructions on how to run the app -->
From the command line within terminal run the node command followed by the file name followed by the command[1, 2, 3, or 4] followed by the deisred search within that command. 

Ex.1: node liri.js concert-this "Jonas Brothers"

This will return the following:
-Name of the venue
-Venue location
-Date of the Event (use moment to format this as "MM/DD/YYYY")

Ex.2: node liri.js spotify-this-song "Sugar"

This will return the following:
-Artist(s)
-The song's name
-A preview link of the song from Spotify
-The album that the song is from

Ex.3: node liri.js movie-this "27 Dresses"

This will return the following:
-Title of the movie.
-Year the movie came out.
-IMDB Rating of the movie.
-Rotten Tomatoes Rating of the movie.
-Country where the movie was produced.
-Language of the movie.
-Plot of the movie.
-Actors in the movie.

Ex.4: node liri.js do-what-it-says

This will return the following:
-Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


<!-- Include screenshots, gifs or videos of the app functioning -->
https://media.giphy.com/media/kGEHDRXwbRuClrBDyq/giphy.gif

<!-- Contain a link to a deployed version of the app -->
[](https://github.com/hlarson0210/liri-node-app!)

<!-- Clearly list the technologies used in the app -->
Liri-Bot uses several APIs to pull in information as well as node applications.

APIs used:
Node-Spotify-API - pull in song information for users search
Axios - to grab data from OMDB and Bands in Town API to display the information to the user
Moment - format the concert date into the MM/DD/YYYY format for ease of reading

Configuring data apart from the code: 
DotEnv - To store configuration in the environment separate from code 



<!-- State your role in the app development -->
Role: Developer
