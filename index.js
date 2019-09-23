const Twit = require('twit');

function retweetBot(searchParams, credentials) {
  const Bot = new Twit(credentials);
  Bot.get('search/tweets', searchParams, function(err, result) {
    if (err) {
      console.log('Thats an error on your search params', err);
    } else {
      const retweetId = result.statuses[0].id_str;
      Bot.post('statuses/retweet/' + retweetId, {}, function(postErr, postResult) {
        if (postErr) {
          console.log('It had an error when posting', postErr);
        } else if (postResult) {
          console.log('Successful posted verify it on twitter: \n', postResult.text);
        }
      });
    }
  });
}

retweetBot(
  { q: 'textToRetweet', count: 10, f: 'live' },
  {
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
  }
);
