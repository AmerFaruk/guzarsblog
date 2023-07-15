
function roll(){
    
    var randomNumberd20_1 = Math.floor(Math.random() * 20 ) + 1;
    var randomNumberd20_2 = Math.floor(Math.random() * 20 ) + 1;

    
    document.getElementsByClassName("img1")[0].src="images/d20d"+randomNumberd20_1+".png";
    document.getElementsByClassName("img1")[1].src="images/d20d"+randomNumberd20_2+".png";
    
    if(randomNumberd20_1>randomNumberd20_2){
        document.querySelector("h1").innerHTML="Player 1 Won!!";
    } else if(randomNumberd20_1<randomNumberd20_2){
        document.querySelector("h1").innerHTML="Player 2 Won!!";
    } else {
        document.querySelector("h1").innerHTML="DRAW!";
    }
}