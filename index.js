/* function number() {
console.log(42);
}
number();
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function totallaps() {
    console.log(lap1 + lap2 + lap3)

}
totallaps();*/


let lapsCompleted = 0;

/*function increment() {
    lapsCompleted = lapsCompleted + 1;
    console.log(lapsCompleted);
}
increment();
increment();
increment();
*/

let countEl = document.getElementById("count-el");
console.log(countEl);

let count = 0;


function increment() {
    count = count + 1;
    countEl.innerText = count;


}

function reset() {
    countEl.innerText = count = 0;


}
/*var firstName = "Samiratu ";
var lastName = "Alhassan ";
var fullName = firstName + lastName;
console.log(fullName);





let name = "linda!";
let greeting = "Hi there";

function greetings() {

    console.log(greeting + "," + name);

}
greetings();
let myPoints = 3;

function add3points() {
    myPoints = myPoints + 3;
    console.log(myPoints);
}



function remove1points() {
    myPoints = myPoints - 1;
    console.log(myPoints);
}
add3points();
add3points();
add3points();
remove1points()
remove1points();*/




let errorpara = document.getElementById("error");
console.log(errorpara)


function site() {
    errorpara.textContent = "Something went wrong, please try again"
}
let answerbutton = document.getElementById("answer-button");

let num1 = 10;
let num2 = 5;


function add() {
    let total = num1 + num2;
    answerbutton.textContent = total;

}

function subtract() {
    let total = num1 - num2;
    answerbutton.textContent = total;

}

function multiply() {
    let total = num1 * num2;
    answerbutton.textContent = total;

}

function division() {
    let total = num1 / num2;
    answerbutton.textContent = total;

}

let firstCard = 3;
let secondCard = 4;
let sum = firstCard + secondCard;
let Cards = [firstCard, secondCard];
let messageEl = document.getElementById("message")
let SumEL = document.getElementById("summation");
let CardEL = document.getElementById("card")


function start() {

    let message = "";
    if (sum <= 20) {
        message = "Do you want to draw a new card "
    } else
    if (sum === 21) {
        message = "wohoo, You've got a blackjack"
    } else {
        message = "Oops! You are out of the game!"
        Alive = false;
    }
    messageEl.textContent = message;
    SumEL.textContent = "Sum :" + sum;
    CardEL.textContent = "Cards : " + Cards[0] + " " + Cards[1];

}

function newgame() {
    let Card = 8;
    sum = sum + Card;

    start()
        // CardEL.textContent = "Cards : " + Cards[0] + " " + Cards[1] + " " +Card;
    CardEL.textContent = "Cards : " + Cards[0] + " " + Cards[1];
    CardEL.textContent.push(Card);
}



/*function Container() {
    document.getElementsByClassName("container3").remove();

}*/


/*let age = 30;
if (age < 21) {
    console.log("You are not old enough to enter the nightclub")

} else if (age === 21) {
    console.log("You can to the nighclub")
} * /
/*else {
console.log("You are  always welcome")
} */
/*let Age = 20;
if (Age < 100) {
    console.log(" You are not eligible")
} else if (Age === 100) {
    console.log(
        "Here is your birthday card from the king"
    )
} else {
    console.log(
        "You have already received one"
    )
}*/