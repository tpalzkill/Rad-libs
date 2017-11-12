let selection = [];
let wordRemover = function(string) {
  let sampleSplit = string.split(' ');
  let chopped = [];
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * sampleSplit.length);
    chopped.push(sampleSplit.splice(randomNumber, 1, '______'));
    i++;
  }
  return sampleSplit.join(' ')
};
$("#btnGet").click(function(event) {
  event.preventDefault();
  let butthead = $('#sourceSelector option:selected').text();
  selection = [];
  selection.push(butthead);
  let response = [];
  if (butthead === "Trump Quote") {
    let trumpThink = $.getJSON('https://api.whatdoestrumpthink.com/api/v1/quotes/random');

    trumpThink.done(function(data) {
      if (trumpThink.status !== 200) {
        return;
      }

      let trump = Object.values(data);
      console.log(trump[0]);
      let trumpQuote = wordRemover(trump[0]);
      $("#quoteHere").html(trumpQuote);
    });
  } else if (butthead === "Inspirational Quote") {
    let inspirational = $.getJSON('https://favqs.com/api/qotd');

    inspirational.done(function(data) {
      if (inspirational.status !== 200) {
        return;
      }

      let inspiration = Object.values(data);
      let actualQuote = inspiration[1];
      console.log(actualQuote.body);
      response.push(actualQuote.body);
      let inspirationalQuote = wordRemover(actualQuote.body);
      $("#quoteHere").html(inspirationalQuote);
    });
  } else if (butthead === "Dad Joke") {
    let hazDadJoke = $.getJSON('https://icanhazdadjoke.com/');

    hazDadJoke.done(function(data) {
      if (hazDadJoke.status !== 200) {
        return;
      }

      let dadJoke = Object.values(data);
      console.log(dadJoke[1]);
      response.push(dadJoke[1]);
      let papaJoke = wordRemover(dadJoke[1]);
      $("#quoteHere").html(papaJoke);
    });
  } else if (butthead === "Ron Swanson Quote") {
    let ronSwan = $.getJSON('http://ron-swanson-quotes.herokuapp.com/v2/quotes');

    ronSwan.done(function(data) {
      if (ronSwan.status !== 200) {
        return;
      }
      console.log(data[0]);
      response.push(data[0]);
      let swanson = wordRemover(data[0]);
      $("#quoteHere").html(swanson);
    });
  }


  let newForm = "<div class='section v-align-center'><div class='container'><h3 class= 'lime-text text-darken-2' id='quoteHere' ></h3></div></div>"
  $("form").replaceWith(newForm);
});
