var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var movie = require('request');

var tweet = new Twitter ({
  consumer_key: '3aJWNP2HAG16faoCqUpdyvppj',
  consumer_secret: '8oZukHaEhV2fqYiXCfWv6JbKNGPTUOzGsptZYW5NHp6JaA86zw',
  access_token_key: '909984807601397763-B8XK3MBXDxCpmbh6nJpZlTSjIQB0Qnz',
  access_token_secret: 'XvBLWmUse9dtZreFezsFZPlWVc3knR87SxOZXPmOZsUS7',
});


var spotify = new Spotify ({
	id: 'e4bbd44a6d4b429385610e4bf92c6747',
	secret: '96eccc8100de4a37bf9871dcfb8267d5',
});


module.exports = {
	tweet,
	spotify,
	movie
};





