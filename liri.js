require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var doThis = function () {
    var userChoice = process.argv[2];
    var thingToLookUp = process.argv[3];

    if (userChoice === "concert-this") {
        concertThis(thingToLookUp);
    } else if (userChoice === "spotify-this-song") {
        spotifyThis(thingToLookUp);
    } else if (userChoice === "movie-this") {
        moiveThis(thingToLookUp);
    } else if (userChoice === "do-what-it-says") {
        doWhatItSays(thingToLookUp);
    }
}

var concertThis = function (thingToLookUp) {
    axios.get("https://rest.bandsintown.com/artists/" + thingToLookUp + "/events?app_id=codingbootcamp").then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            var formattedDate = moment(response.data[i].datetime).format("DD/MM/YYYY");
            console.log("Artist/Band: " + thingToLookUp + "\nName of venue: " + response.data[i].venue.name + "\nVenue's Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + "\nDate of even: " + formattedDate + "\n");
        }
    }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
}

var spotifyThis = function (thingToLookUp) {
    if (thingToLookUp === false) {
        thingToLookUp = "The Sign"
    }
    spotify.search({
        type: 'track',
        query: thingToLookUp,
        limit: 1,
    })
        .then(function (response) {
            var artistsArr = response.tracks.items[0].artists
            var artists = artistsArr[0].name
            if (artistsArr.length > 1){
                for (var r = 1; r < artistsArr.length; r ++){
                    artists += ", " + artistsArr[r].name
                }
            }
            console.log("Artist: " + artists + "\nSong: " + response.tracks.items[0].name + "\nPreview link: " + response.tracks.items[0].preview_url + "\nAlbum: " + response.tracks.items[0].album.name);
        })
        .catch(function (err) {
            console.log(err);
        });
}

var moiveThis = function (thingToLookUp) {
    if (thingToLookUp === undefined) {
        thingToLookUp = "Mr. Nobody";
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + thingToLookUp + "&y=&plot=short&apikey=e4b4d9d9";

    axios.get(queryUrl).then(
        function (response) {
            console.log("Title: " + response.data.Title + "\nRelease year: " + response.data.Year + "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry produced in: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors in " + response.data.Title + ": " + response.data.Actors)
        }
    ).catch(function (error) {
        if (error.response) {
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
}


var doWhatItSays = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        txnsArr = data.split(",");
        if (error) throw console.log("Oops! Something went wrong.\n" + error);
        if (txnsArr[0] === "spotify-this-song") {
            spotifyThis(txnsArr[1]);
        } else if (txnsArr[0] === "movie-this") {
            moiveThis(txnsArr[1]);
        } else if (txnsArr[0] === "concert-this") {
            concertThis(txnsArr[1]);
        }
    })
}

doThis();