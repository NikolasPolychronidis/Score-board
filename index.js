let countHome = 0;
let countAway = 0;
let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");

function home1(){
    countHome += 1;
    homeScore.innerHTML = countHome;
    
}
function home2(){
    countHome += 2;
    homeScore.innerHTML = countHome;
}
function home3(){
    countHome += 3;
    homeScore.innerHTML = countHome;
}
function away1(){
    countAway += 1;
    awayScore.innerHTML = countAway;
}
function away2(){
     countAway += 2;
    awayScore.innerHTML = countAway;
}
function away3(){
    countAway += 3;
    awayScore.innerHTML = countAway;
}

function reset(){
    countAway = 0;
    countHome = 0;
    awayScore.innerHTML  = 0;
    homeScore.innerHTML = 0;
}