function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return thos.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return thos.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function() {
    this.questionIndex++;

    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.correct++;
    }
}