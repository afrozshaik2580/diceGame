var randimgarr=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var randimgnum1=(Math.floor(Math.random()*6))+1;
var randimg1=randimgarr[randimgnum1-1];
document.querySelector("img").setAttribute("src",randimg1);

var randimgnum2=(Math.floor(Math.random()*6))+1;
var randimg2=randimgarr[randimgnum2-1];
document.querySelector(".secimg").setAttribute("src",randimg2);


if(randimgnum1 > randimgnum2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if(randimgnum1 < randimgnum2){
    document.querySelector("h1").textContent="Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").textContent="DRAW";  
}