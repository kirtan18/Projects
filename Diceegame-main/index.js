
var randomNumber1 = Math.floor(Math.random() * 6) + 1  ; // 1 - 6

var randomdiceimage = "dice"+ randomNumber1 + ".png"; // dice1 - dice 6

var randomsourceimage = "images/"+ randomdiceimage ; //images,dice1-images.dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomsourceimage);


var randomnumber2 = Math.floor(Math.random()*6) +1;

var randomimagesoruce2 = "images/dice"+ randomnumber2 +".png";

 document.querySelectorAll("img")[1].setAttribute("src",randomimagesoruce2 );


 if (randomNumber1 > randomnumber2) {
   document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
 }
 else if (randomnumber2 > randomNumber1) {
   document.querySelector("h1").innerHTML = "🚩 Player 2 Wins! ";
 }
 else {
   document.querySelector("h1").innerHTML = "Draw!";
 }


 /*
 var Player1 = prompt("player1:");
 var Player2 = prompt("player2:");

 document.querySelectorAll("p")[0].innerHTML = Player1;
 document.querySelectorAll("p")[1].innerHTML = Player2;
 */
