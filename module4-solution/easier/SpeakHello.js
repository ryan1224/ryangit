(function () {
helloSpeaker = new Object()
var speakWord = "Hello";


function speak(name) {
  console.log(speakWord + " " + name);
  helloSpeaker.speak = speak; 
}

helloSpeaker.speak = speak; 
})();