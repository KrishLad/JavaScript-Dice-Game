
var randNum = Math.round((Math.random() * 5)+1);  //gets random number between 1-6
var randNum2 = Math.round((Math.random() * 5)+1);

//method calls
replaceLeftImage(randNum); 
replaceRightImage(randNum2);
displayWinner(randNum, randNum2);



function replaceLeftImage(number){ //function that replaces the left dice image
    var imageLeft = "images/dice" + number +".png";
    document.querySelector(".img1").setAttribute("src",imageLeft);
}

function replaceRightImage(number) { //function that replaces the right dice image
    var imageRight = "images/dice" + number + ".png";
    document.querySelector(".img2").setAttribute("src",imageRight);
}

function displayWinner(num1, num2){ //chooses winner
    if (num1 > num2)
    {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    }
    else if (num1 < num2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    }
    else if (num1 === num2)
    {
        document.querySelector("h1").innerHTML = "Draw!🤯";
    }
    
    if (num1 === 1 && num2 === 1)
    {
        document.querySelector("h1").innerHTML = "🐍Snake Eyes!!🐍"
    }
} 
