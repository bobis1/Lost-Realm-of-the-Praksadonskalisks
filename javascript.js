var randomRock;
let spaceW;
let spaceH;
let randomRock = document.getElementsByName("randomRock");


function playAudio(audioClip) {
    new Audio(audioClip).play();

}

function remove($this) {
  var element = $this;
  element.remove();
}

function Init(){
  spaceW = document.getElementById("background").height;
  spaceH = document.getElementById("background").width;
  document.getElementById("randomRock").style.top = Math.floor(Math.random() * spaceH) + "px";
  randomRock.style.left = Math.floor(Math.random() * spaceW) + "px";
}