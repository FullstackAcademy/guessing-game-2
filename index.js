let msgl = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let answer = Math.floor(Math.random()*100) + 1;
let no_of_guesses = 0;
let guessed_nums = [];

function play() {
    let user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100){
        alert("Enter a number between 1 and 100");
    }

    else{
        guessed_nums.push(user_guess);
        no_of_guesses += 1;

        if (user_guess < answer) {
            msg1.textContent = "Too low.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed number are: " + guessed_nums;
        }
        else if (user_guess > answer) {
            msg1.textContent = "Too high.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed number are: " + guessed_nums;
        }
       
        else if (user_guess == answer){
            msg1.textContent = "Winner!!!";
            msg2.textContent = "Answer was: " + answer;
            msg3.textContent = 'It took you ' + no_of_guesses + ' guesses';
            document.getElementById("my_btn").disabled = true;
        }
    }
}
