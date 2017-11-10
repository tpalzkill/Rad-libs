// j
let $xhr = $.getJSON('https://api.whatdoestrumpthink.com/api/v1/quotes/random');

$xhr.done(function(data) {
  if ($xhr.status !== 200) {
    return;
  }

  let trump = Object.values(data);
  console.log(trump[0]);
});

let $otherShit = $.getJSON('https://icanhazdadjoke.com/');

$otherShit.done(function(data) {
  if ($otherShit.status !== 200) {
    return;
  }

  let dadJoke = Object.values(data);
  console.log(dadJoke[1]);
});

let $numeroTres = $.getJSON('https://favqs.com/api/qotd');

$numeroTres.done(function(data) {
  if ($numeroTres.status !== 200) {
    return;
  }

  console.log(data);
});
let $numeroQuat = $.getJSON('http://ron-swanson-quotes.herokuapp.com/v2/quotes');

$numeroQuat.done(function(data) {
  if ($numeroQuat.status !== 200) {
    return;
  }

  console.log(data[0]);
});
