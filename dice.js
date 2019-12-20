var n1 = Math.floor(Math.random()*6)+1;


if(n1==1){
  document.querySelector(".img1").src="dice1.png";

}
else if (n1==2) {
  document.querySelector(".img1").src="dice1.png";
}
else if (n1==3) {
  document.querySelector(".img1").src="dice3.png";
}
else if (n1==4) {
  document.querySelector(".img1").src="dice4.png";
}
else if (n1==5) {
  document.querySelector(".img1").src="dice5.png";
}
else if (n1==6) {
  document.querySelector(".img1").src="dice6.png";
}
var n = Math.floor(Math.random()*6)+1;

if(n==1){
  document.querySelector(".img2").src="dice1.png";

}
else if (n==2) {
  document.querySelector(".img2").src="dice1.png";
}
else if (n==3) {
  document.querySelector(".img2").src="dice3.png";
}
else if (n==4) {
  document.querySelector(".img2").src="dice4.png";
}
else if (n==5) {
  document.querySelector(".img2").src="dice5.png";
}
else if (n==6) {
  document.querySelector(".img2").src="dice6.png";
}
if(n1>n){
document.querySelector("h1").innerHTML="🚩 Player 1 Wins! ";
}
else if (n>n1){
document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";

}
else{
document.querySelector("h1").innerHTML="Draw Try again";

}
