var battleBucks = 100;
var turns = 0;
var sizeA = 740;
var widthI = 300;
var colors = ["red","blue","green","orange","cyan","yellow","lime","purple","maroon","black","brown","navy"];
var selectedPlayer = 1;
var radius = 150;
//runs on websit load
function init(){
  var canvasA = document.getElementById('canvasA');
  var canvasI = document.getElementById('canvasI');
  ctxA = canvasA.getContext('2d');
  ctxI = canvasE.getContext('2d');
  canvasA.width = sizeA;
  canvasA.height = sizeA;
  canvasE.height = sizeA/2;
  canvasE.width =  widthI;
  canvasP.width = widthI;
  canvasP.height = (sizeA/2)-3
  arenaCreate(12,ctxA, sizeA);
  focusGrid("red");
  Mousetrap.bind('left',);
}
//used to run arenaCreate function with custom values
function arenaSetup(){
  clearCanvas();
  playersI = document.getElementById("debugInput").value;
  arenaCreate(playersI,ctxA,sizeA);
}
//creates arena
function arenaCreate(players){
  //setups variables for look of arena
  ctxA.lineWidth = Math.min(3,Math.ceil(12/players));
  angleDif = (2*Math.PI)/players
  radius = Math.min(120+(players*4),250);
  center = sizeA/2;
  ctxA.moveTo((center)+(Math.cos((angleDif/2)-(Math.PI/2))*radius),(center)+(Math.sin((angleDif/2)-(Math.PI/2))*radius));
  //repeats for each side of shape
  for(var i = 1; i<=Math.abs(players); i++){
    gridCreate(i);
  }
}
//creates a grid of the arena
function gridCreate(player){
  //x and y cord of new point
  x=(center)+(Math.cos((angleDif/2)-(Math.PI/2)+(angleDif*player))*radius)
  y=(center)+(Math.sin((angleDif/2)-(Math.PI/2)+(angleDif*player))*radius)
  //ofset from last point
  xoff = x - ((center)+(Math.cos((angleDif/2)-(Math.PI/2)+ (angleDif*(player-1)))*radius));
  yoff = y - ((center)+(Math.sin((angleDif/2)-(Math.PI/2)+ (angleDif*(player-1)))*radius));
  ctxA.strokeStyle = colors[(player-1)%12];
  ctxA.beginPath();
  //repeats 10 times to create grid lines
  for(var f = 0; f<=10; f++){
    ctxA.moveTo(x-(xoff*f/10),y-(yoff*f/10));
    ctxA.lineTo(x-(xoff*f/10)+yoff,y-(yoff*f/10)-xoff);
    ctxA.moveTo(x+yoff*f/10,y-xoff*f/10);
    ctxA.lineTo(x+(yoff*f/10)-xoff,y-(xoff*f/10)-yoff);
  }
  ctxA.closePath();
  ctxA.stroke();
  ctxA.moveTo(x,y);
}
//used to make the enemy(Right canvas)
function focusGrid(color){
  ctxI.lineWidth = 4;
  x = 10;
  y = 500;
  xoff = 280;
  yoff = 280;
  for(var f = 0; f<=10; f++){
    ctxI.moveTo(x-(xoff*f/10),y-(yoff*f/10));
    ctxI.lineTo(x-(xoff*f/10)+yoff,y-(yoff*f/10)-xoff);
    ctxI.moveTo(x+yoff*f/10,y-xoff*f/10);
    ctxI.lineTo(x+(yoff*f/10)-xoff,y-(xoff*f/10)-yoff);
  }
  ctxI.stroke();
}
function clearCanvas(){
  ctxA.fillStyle = "#EEEEFF";
  ctxA.fillRect(0,0,sizeA, sizeA);
}
function switchTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
function change(changeAmount){
  if(battleBucks + changeAmount < 0){
    alert("You don't have any Batle Bucks left.")
  }
  else{
    battleBucks+= changeAmount;
    document.getElementById("battleBucks").innerHTML = "You have: " + battleBucks + " Battle Bucks!";
  }
}
function attack(){

}
function move(){

}
