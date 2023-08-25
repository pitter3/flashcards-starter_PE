const { evaluateGuess } = require('../src/guess');

const takeTurn = (guess, round) => {
  round.turns++
  let feedback;
  if(evaluateGuess(guess, round.currentCard) === 'Incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id)
    feedback = getFeedback('Incorrect!');
  } else {
    feedback = getFeedback('Correct!');
  }
    round.currentCardIndex++
    round.currentCard = round.deck[round.currentCardIndex]
    return feedback
}

const calculatePercentCorrect = (round) => {
  const totalGuesses = round.turns;
  const correctGuesses = totalGuesses - round.incorrectGuesses.length;
  let percentage = (correctGuesses / totalGuesses) * 100;
  return Math.round(percentage);
};

const getFeedback = (result) => {
  if (result === 'Incorrect!') {
    return `Incorrect!`
  } 
    return `Correct!`
  }


module.exports = { 
  takeTurn,  
  calculatePercentCorrect,
  getFeedback,
}