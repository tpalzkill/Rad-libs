// j


let trumpThink = $.getJSON('https://api.whatdoestrumpthink.com/api/v1/quotes/random');

trumpThink.done(function(data) {
  if (trumpThink.status !== 200) {
    return;
  }

  let trump = Object.values(data);
  console.log(trump[0]);
});




// let hazDadJoke = $.getJSON('https://icanhazdadjoke.com/');
//
// hazDadJoke.done(function(data) {
//   if (hazDadJoke.status !== 200) {
//     return;
//   }
//
//   let dadJoke = Object.values(data);
//   console.log(dadJoke[1]);
// });
//
// let inspirational = $.getJSON('https://favqs.com/api/qotd');
//
// inspirational.done(function(data) {
//   if (inspirational.status !== 200) {
//     return;
//   }
// let inspiration = Object.values(data);
// let actualQuote = inspiration[1];
// console.log(actualQuote.body);
// });
// let ronSwan = $.getJSON('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
//
// ronSwan.done(function(data) {
//   if (ronSwan.status !== 200) {
//     return;
//   }
//
//   console.log(data[0]);
// });
