var randomRock;
let spaceW;
let spaceH;
var rockAmount;
rockAmount = 4;
function playAudio(audioClip) {
    new Audio(audioClip).play();

}

function remove($this) {
  var element = $this;
  rockAmount--;
  element.remove();
  if (rockAmount == 0) {
    document.getElementById("speech").src = "./assets/speechBubble2.svg";
  }

}

function Init(){
  spaceW = document.getElementById("background").height;
  spaceH = document.getElementById("background").width;
  document.getElementById("randomRock").style.top = Math.floor(Math.random() * spaceH) + "px";
  randomRock.style.left = Math.floor(Math.random() * spaceW) + "px";
}