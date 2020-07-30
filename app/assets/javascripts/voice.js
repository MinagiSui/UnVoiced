function speak() {
  var text = document.querySelector('.SpeakContants').value;
  speechSynthesis.speak(
    new SpeechSynthesisUtterance(text)
  );
}

function textreset() {
  var reset_text = document.Speak.SpeakContents.value = "";
}

function list_speak(){
  var word = document.querySelector('.WordListButton').value;
  speechSynthesis.speak(
    new SpeechSynthesisUtterance(word)
  );
}