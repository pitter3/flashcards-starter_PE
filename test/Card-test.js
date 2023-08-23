const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess} = require('../src/card');

describe('createCard', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('evaluateGuess', function() {
  it('should evaluate if a guess is correct', function() {
    const card = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const guess = 'array';
    let userGuess = evaluateGuess(guess, card.correctAnswer);
    expect(userGuess).to.equal('Correct!');
  });

  it('should evaluate if a guess is incorrect', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'array';
    let guessResult = evaluateGuess(guess, card.correctAnswer);
    expect(guessResult).to.equal('Incorrect!');
  });
});