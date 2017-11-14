let selection = [];

// let dicApi = $.ajax({'https://od-api.oxforddictionaries.com/api/v1/entries/en/ace?app_id=bdfa8485/?app_key=e5444a1719227d19ec9004e636ec775e');
// dicApi.done(function(data) {
//   if (dicApi.status !== 200) {
//     return;
//   }
//   console.log(data);
// });
// ITS GOOGLE BITCH AIzaSyDmNY9yZNIBbwL3-RydEpw_MHZNnxfDWRI
let stringy = JSON.stringify("welcome to the thunderdome bitch!")
$.ajax({
  type:'POST',
  url:"https://language.googleapis.com/v1/documents:analyzeSyntax?key=AIzaSyDmNY9yZNIBbwL3-RydEpw_MHZNnxfDWRI",
  data: stringy,
  dataType: "text",
})

    // success     : function(_result){
    //         if (_result) {
    //             alert('SUCCESS');
    //         }else{
    //             alert('ERROR');
    //         }
    //     },
    //     error       : function(_result){
    //         console.log(_result);
    //     }
    // });

$.ajax({
  type: 'GET',
  url:"https://cors-anywhere.herokuapp.com/od-api.oxforddictionaries.com:443/api/v1/entries/en/ace",
  headers: {
  "Accept": "application/json",
  "app_id": "bdfa8485",
  "app_key": "e5444a1719227d19ec9004e636ec775e",
},
}).done(function(data) {
  console.log(data);
});
let makeTheCall = function(whorl, callback ) {
  let $xhr = $.getJSON(whorl);
    $xhr.done(function(data) {
      if ($xhr.status !== 200) {
        return;
      }
      callback(data);
    })
}
let wordRemover = function(string) {
  let sampleSplit = string.split(' ');
  let chopped = [];
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * sampleSplit.length);
    chopped.push(sampleSplit.splice(randomNumber, 1, 'boogie'));
  }
let urBalls = sampleSplit.join(' ');
let splitsies = urBalls.split('boogie');
console.log(chopped);
$("#segmentA").html(splitsies[0]);
$("#segmentB").html(splitsies[1]);
$("#segmentC").html(splitsies[2]);
return(splitsies);
};
$("#btnGet").click(function(event) {
  event.preventDefault();
  let selectOption = $('#sourceSelector option:selected').text();
  if (selectOption !== "Choose your text source") {
  if (selectOption === "Trump Quote") {
    let trumpApi = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
    makeTheCall(trumpApi, function(data){
      let trump = Object.values(data);
      let trumpQuote = wordRemover(trump[0]);
    });

  } else if (selectOption === "Inspirational Quote") {
    let inspirational = 'https://favqs.com/api/qotd';
    makeTheCall(inspirational, function(data){
      let inspiration = Object.values(data);
        let actualQuote = inspiration[1];
        let inspirationalQuote = wordRemover(actualQuote.body);
    });

  } else if (selectOption === "Dad Joke") {
  let hazDadJoke = 'https://icanhazdadjoke.com/';
    makeTheCall(hazDadJoke, function(data){
      let dadJoke = Object.values(data);
      let papaJoke = wordRemover(dadJoke[1]);
    });

  } else if (selectOption === "Ron Swanson Quote") {
let ronSwan = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
    makeTheCall(ronSwan, function(data){
      let swanson = wordRemover(data[0]);
    });
  };

  let newForm = "<div class='section v-align-center z-depth-1 roundIt'><div class='container'><div class='row'><form class='getLibbed'><h3 id='segmentA'></h3><div class='input-field inline'><input type='textfield' class='responseField'></div><h3 id='segmentB'></h3><div class='input-field inline'><input type='textfield' class='responseField'></div><h3 id='segmentC'></h3><div class='input-field inline'><input type='textfield' class='responseField'></div><br><br><input type='submit' class='btn-large waves-effect font pretty' value='submit'/></form></div></div>"
  // </div>"<div class='section v-align-center z-depth-1 roundIt'><div class='container'><div class='row'><div class='col-s10'><h3 class= 'lime-text text-darken-2 font' id='quoteHere' ></h3></div></div></div></div>"

  $("form").replaceWith(newForm);
}
});
