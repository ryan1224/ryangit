(function () {
byeSpeaker = new Object() 

var speakWord = "Good Bye";

function speak(name) {
  console.log(speakWord + " " + name);
  byeSpeaker.speak = speak;
}

byeSpeaker.speak = speak;
})();