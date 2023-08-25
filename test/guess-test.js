const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/guess');
const { createCard } = require('../src/card');

describe('evaluateGuess', function() {
  it('should evaluate if a guess is correct', function() {
    const card = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const guess = 'array';
    let userGuess = evaluateGuess(guess, card);
    expect(userGuess).to.equal('Correct!');
  });

  it('should evaluate if a guess is incorrect', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'array';
    let guessResult = evaluateGuess(guess, card);
    expect(guessResult).to.equal('Incorrect!');
  });
});