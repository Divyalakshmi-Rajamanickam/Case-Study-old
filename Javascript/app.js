function populate() {
    if (quiz.isEnded()) {
        //showScores();
    } else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        varchoices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices(i);
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }

};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
};

function showScores() {
    var gameOverHtml = "< h1 >Result < /h1>";
    gameOverHtml += "<h2 id = 'score'>Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};


var question = [
    new Questions("Question1", ["choice1", "choice2", "choice3", "choice4"], "choice1"),
    new Questions("Question2", ["choice1", "choice2", "choice3", "choice4"], "choice1"),
    new Questions("Question3", ["choice1", "choice2", "choice3", "choice4"], "choice1"),
    new Questions("Question4", ["choice1", "choice2", "choice3", "choice4"], "choice1"),
    new Questions("Question5", ["choice1", "choice2", "choice3", "choice4"], "choice1")
];

var quiz = new Quiz(questions);

populate();