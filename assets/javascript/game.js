var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.onkeyup = function (event) {

    if (questionIndex === questions.length) {
        return;
    }

    var userInput = event.key.toLowerCase();

    if (userInput === "t" || userInput === "f") {
        if (userInput === questions[questionIndex].a) {
            alert("Correct!");
            score++;
            updateScore();
        }
        else {
            alert("wrong!");
        }
        questionIndex++;
        renderQuestion();
    }
};

function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
}

updateScore();

//Need to create an array of answers for Hangman.
//Create a function that onkeyup pushes selected key into an array that displays to the user, only if it is not a letter that is included in the answer.
//Create a function that begins with a blank underlined space, but when onkeyup selects a letter that is in the correct answer it puts that letter in the spot of the underline and removes underline.
//Create function that limits the user to a certain amount of guesses before tallying a loss. **Possible create a hangman sketch?
//Find some examples online that could be pieced together to create my own code.