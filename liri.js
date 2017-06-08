var Twitter = require('twitter');
var keys = require("./keys");

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret,
});
client.get('search/tweets', {
	q: 'Stoned_ATM',
	count:10
}	, function(error, tweets, response) {
  if (!error) {
    tweets.statuses.forEach(function(tweet, index) {
            console.log((index + 1) + ") " + tweet.text);
       
        })
  }
});
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <bed15c5f66d34f7fbb251da18e4b1d6b>,
  secret: <f0df33be8e414923b52dfd0634801e2b>
});
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(error);
  });