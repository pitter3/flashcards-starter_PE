const evaluateGuess = (guess, card) => {
  if (guess === card.correctAnswer) {
    return 'Correct!'
  } 
    return 'Incorrect!'
  }

  module.exports = {
    evaluateGuess,
  }