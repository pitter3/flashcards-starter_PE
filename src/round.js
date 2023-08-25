const { calculatePercentCorrect } = require('../src/turn');

const createRound = (deck, currentCardIndex = 0, turns = 0, incorrectGuesses = []) => {
  let round = {
  deck: deck,
  currentCardIndex: currentCardIndex,
  turns: turns,
  incorrectGuesses: incorrectGuesses,
} 
  round.currentCard = deck[currentCardIndex]; 
  return round
}

const endRound = (round) => {
  const percentCorrect = calculatePercentCorrect(round);
  console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`);
};

module.exports = {
  createRound,
  endRound,
}