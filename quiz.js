function checkAnswer() {
  const correctAnswer = "4";
  const feedBack = document.querySelector('#feedback');

  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  if (userAnswer.value == correctAnswer) {
    feedBack.textContent = "Correct! Well done"
  }
  else {
    feedBack.textContent = "That's incorrect. Try again!"
  }
}

const submitButton = document.getElementById("submit-answer");

submitButton.addEventListener('click', checkAnswer);