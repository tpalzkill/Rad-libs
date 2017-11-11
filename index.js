let selection = [];
$("#btnGet").click(function(event) {
  event.preventDefault();
  let butthead = $('#sourceSelector option:selected').text();
  selection = [];
  selection.push(butthead);
  if (butthead === "Trump Quote") {
    let trumpThink = $.getJSON('https://api.whatdoestrumpthink.com/api/v1/quotes/random');

    trumpThink.done(function(data) {
      if (trumpThink.status !== 200) {
        return;
      }

      let trump = Object.values(data);
      console.log(trump[0]);
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
    });
  } else if (butthead === "Dad Joke") {
    let hazDadJoke = $.getJSON('https://icanhazdadjoke.com/');

    hazDadJoke.done(function(data) {
      if (hazDadJoke.status !== 200) {
        return;
      }

      let dadJoke = Object.values(data);
      console.log(dadJoke[1]);
    });
  } else if (butthead === "Ron Swanson Quote") {
    let ronSwan = $.getJSON('http://ron-swanson-quotes.herokuapp.com/v2/quotes');

    ronSwan.done(function(data) {
      if (ronSwan.status !== 200) {
        return;
      }

      console.log(data[0]);
    });
  }
  $("form").fadeOut();
});
