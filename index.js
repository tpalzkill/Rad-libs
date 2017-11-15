
// gets object from api the callback isolates the string from the object
let makeTheCall = function(whorl, isolateString ) {
  let $xhr = $.getJSON(whorl);
    $xhr.done(function(data) {
      if ($xhr.status !== 200) {
        return;
      }
      isolateString(data);
    })
}

let analyzeSyntax = function(string) {
  let quote = string.split('.').join(' ').split('?').join(' ').split('!').join(' ').split('  ').join(' ');
  let wordType = [];
  let toSendToGoog = {
    "document": {
      "type": "PLAIN_TEXT",
      "content": quote,
    },
    "encodingType": "UTF8"
  }
  $.ajax({
    type: 'POST',
    url: "https://language.googleapis.com/v1/documents:analyzeSyntax?key=AIzaSyDmNY9yZNIBbwL3-RydEpw_MHZNnxfDWRI",
    data: JSON.stringify(toSendToGoog),
    contentType: 'application/json',
    dataType: "text",
  }).done(function(data) {
      if (data) {
        let JSONparsed = JSON.parse(data);
        let GoogleObjects = (Object.values(JSONparsed));
        let allWordTypes = GoogleObjects[1];
        allWordTypes.forEach(function(element) {
          wordType.push(element.partOfSpeech.tag);
        })
        console.log("toSendToGoog wordType", wordType.toString());
        wordRemover(string, wordType);

      } else {
        alert('ERROR');
      }
    }

  );
}
  //wordRemover
  let wordRemover = function(string, array) {
    let sampleSplit = string.split(' ');
    chopped = [];
    numbersChosen = [];
    for (let i=0; chopped.length<3; i++){
      console.log(i);
      let randoNumber = Math.floor(Math.random() * sampleSplit.length);
      if (array[randoNumber] === "NOUN" || array[randoNumber] === "ADJ" || array[randoNumber] === "VERB") {
        if (sampleSplit[randoNumber] != "SPLITHERE") {
        chopped.push(sampleSplit.splice(randoNumber, 1 ,'SPLITHERE'));
        numbersChosen.push(randoNumber);
      }
      }

    }
    console.log(numbersChosen);
    function sortNumber(a,b) {
      return a-b;
    }
    numbersChosen.sort(sortNumber);
    numbersChosen.join(",");
    console.log(numbersChosen);
    let rejoined = sampleSplit.join(' ');
    let splitatSplithere = rejoined.split('SPLITHERE');
        $("#segmentA").html(splitatSplithere[0]);
        $("#segmentB").html(splitatSplithere[1]);
        $("#segmentC").html(splitatSplithere[2]);
        $("#segmentD").html(splitatSplithere[3]);
        $('#blankA').attr("placeholder", array[(numbersChosen[0])]);
        $('#blankB').attr("placeholder", array[(numbersChosen[1])]);
        $('#blankC').attr("placeholder", array[(numbersChosen[2])]);
        console.log(chopped);
        console.log(splitatSplithere);
        console.log(string);
      }



$("#btnGet").click(function(event) {
  event.preventDefault();
  let selectOption = $('#sourceSelector option:selected').text();
  if (selectOption !== "Choose your text source") {
  if (selectOption === "Trump Quote") {
    let trumpApi = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
    makeTheCall(trumpApi, function(data){
      let trump = Object.values(data);
      console.log(trump.toString());
      let trumpQuote = analyzeSyntax(trump[0]);
    });

  } else if (selectOption === "Inspirational Quote") {
    let inspirational = 'https://favqs.com/api/qotd';
    makeTheCall(inspirational, function(data){
      let inspiration = Object.values(data);
        let actualQuote = inspiration[1];
        let inspirationalQuote = analyzeSyntax(actualQuote.body);
    });

  } else if (selectOption === "Dad Joke") {
  let hazDadJoke = 'https://icanhazdadjoke.com/';
    makeTheCall(hazDadJoke, function(data){
      let dadJoke = Object.values(data);
      let popJokeAnalyzed = analyzeSyntax(dadJoke[1]);
    });

  } else if (selectOption === "Ron Swanson Quote") {
let ronSwan = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
    makeTheCall(ronSwan, function(data){
      let ronSwanAnalyzed = analyzeSyntax(data[0]);
    });
  };

  let newForm = "<div class='section v-align-center z-depth-1 roundIt'><div class='container'><div class='row'><form id='newForm' class='getLibbed'><h3 class='lime-text text-darken-2 fun-text inline' id='segmentA'></h3><div class='input-field inline'><input id='blankA' type='textfield' class='responseField inline'></div><h3 id='segmentB' class='lime-text text-darken-2 fun-text inline'></h3><div class='input-field inline'><input id='blankB' type='textfield' class='responseField inline'></div><h3 class='lime-text text-darken-2 fun-text inline' id='segmentC'></h3><div class='input-field inline'><input id='blankC' type='textfield' class='responseField inline'></div><h3 class='lime-text text-darken-2 fun-text inline' id='segmentD'></h3><br><br><input type='submit' id='finishHim' class='btn-large waves-effect fun-text pretty' value='submit'/></form></div></div>"
  // </div>"<div class='section v-align-center z-depth-1 roundIt'><div class='container'><div class='row'><div class='col-s10'><h3 class= 'lime-text text-darken-2 text-darken-2' id='quoteHere' ></h3></div></div></div></div>"

  $("#theOGform").replaceWith(newForm);
  $("#finishHim").click(function(event){
    event.preventDefault();
    let ansA = $("#blankA").val();
    let ansB = $("#blankB").val();
    let ansC = $("#blankC").val();
    let segA = $("#segmentA").text();
    let segB = $("#segmentB").text();
    let segC = $("#segmentC").text();
    let segD = $("#segmentD").text();
    console.log(ansA, ansB, ansC);
    console.log(segA, segB, segC, segD);
    let conCat = segA + " " + ansA + " " + segB + " " + ansB + " " + segC + " " + ansC + " " + segD;
    console.log(conCat);
    let final = "<h3 id='alas' class= 'red-text text-darken-2'></h3>"

    $("#newForm").replaceWith(final);
    $("#alas").html(conCat);
  })
}
});
// $.ajax({
//   type: 'GET',
//   url:"https://cors-anywhere.herokuapp.com/od-api.oxforddictionaries.com:443/api/v1/entries/en/ace",
//   headers: {
//   "Accept": "application/json",
//   "app_id": "bdfa8485",
//   "app_key": "e5444a1719227d19ec9004e636ec775e",
// },
// }).done(function(data) {
//   console.log(data);
// });
//   let chopped = [];
//   for (let i = 0; i < 3; i++) {
//     let randomNumber = Math.floor(Math.random() * sampleSplit.length);
//     chopped.push(sampleSplit.splice(randomNumber, 1, 'boogie'));
//   }
// let urBalls = sampleSplit.join(' ');
// let splitsies = urBalls.split('boogie');
// console.log(chopped);
// $("#segmentA").html(splitsies[0]);
// $("#segmentB").html(splitsies[1]);
// $("#segmentC").html(splitsies[2]);
// return(splitsies);
// };

// let analyzeEntities = function(string) {
// let yetAnother = string;
// let blingy = {
//   "document": {
//     "type": "PLAIN_TEXT",
//     "content": yetAnother,
//   },
//   "encodingType": "UTF8"
// }
// $.ajax({
//   type:'POST',
//   url:"https://language.googleapis.com/v1/documents:analyzeEntities?key=AIzaSyDmNY9yZNIBbwL3-RydEpw_MHZNnxfDWRI",
//   data: JSON.stringify(blingy),
//   contentType: 'application/json',
//   dataType: "text",
// }).done(function(data){
//             if (data) {
//                 console.log(JSON.parse(data));
//                 alert('SUCCESS');
//             }else{
//                 alert('ERROR');
//             }
//         }
//
//     );
// }
