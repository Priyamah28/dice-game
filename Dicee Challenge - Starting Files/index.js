function rollDice(){
    var randomnum1=Math.floor(Math.random()*6)+1;
    var randomnum2=Math.floor(Math.random()*6)+1;
    //var image=[di]

    document.querySelector('.img1').setAttribute("src","images/dice"+randomnum1+".png");
    document.querySelector('.img2').setAttribute("src","images/dice"+randomnum2+".png");
    // function rollDice(){
        if(randomnum1>randomnum2){
            document.querySelector("h1").innerHTML="Player 1 Wins!";
        }
        else if(randomnum1==randomnum2){
            document.querySelector("h1").innerHTML="Draw!";
        }
        else{
            document.querySelector("h1").innerHTML="Player 2 Wins!";
        }
    }