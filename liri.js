
var clients = require("./keys");
var tweet = clients.tweet;
var spotify = clients.spotify;
var movie = clients.movie;
var fs = require('fs');

var userChoice = process.argv[2];

//getting info from keys.js & calling function based on command
switch(userChoice){
	case "my-tweets":
		myTwitter();
	break;

	case "spotify-this-song":
		mySpotify();
	break;

	case "movie-this":
		myMovie();
	break;

	case "do-what-it-says":
		say();
	break;
};


//twitter function, get my last 20 tweets
function myTwitter() {

	 var params = {screen_name: 'scottycameron97',
			  	   count: 20
			  	   };
	tweet.get('statuses/user_timeline', params, function(error, tweets, response) {
 		if (!error) {
 			for(var i = 0; i < tweets.length; i++) {
    	console.log(tweets[i].created_at + " " + tweets[i].text);
    	};
    	}
	})
};


//---------------------------------------------------------

//spotify function, retrieving artist, song, album, preview of song
function mySpotify() {
	var song = process.argv[3];

	spotify.search({type: 'track', query: song}, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	}
	    if(song == "") {
	     let song = "The Sign"
	} else {
		let music = data.tracks.items[0]
		console.log(JSON.stringify("Artist " + music.artists[0].name));
		console.log(JSON.stringify("Song name " + music.name));
		console.log(JSON.stringify("Album " + music.album.name));
		console.log(JSON.stringify("Song preview " + music.preview_url));
	}
	})
};

//---------------------------------------------------------

//movie request from OMDB including title, year, ratings, country, language, plot, actors
function myMovie() {

	var movieTitle = process.argv[3];
	var queryUrl = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=40e9cece";

	movie.get(queryUrl, function(error, response, body) {

		  if (!error && response.statusCode === 200) {

		    console.log("Title: " + JSON.parse(body).Title +
		    			"\nYear: " + JSON.parse(body).Year +
		    			"\nIMBD Rating: " + JSON.parse(body).imdbRating +
		    			"\nRotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value +
		    			"\nCountry: " + JSON.parse(body).Country +
		    			"\nLanguage: " + JSON.parse(body).Language +
		    			"\nPlot: " + JSON.parse(body).Plot +
		    			"\nActors: " + JSON.parse(body).Actors);
		}
		})
};


//get file from random.txt
function say() {
	fs.readFile("random.txt", "utf8", function(err, data) {
	   if (err) {
	   console.log(data);
	   mySpotify(data);
	   }
	})
};











