const chai = require('chai');
const expect = chai.expect;

const { createDeck } = require('../src/deck');
const { createCard } = require('../src/card');
const { createRound } = require('../src/round');

describe ('createRound', function() {
  it ('should have a deck property that holds deck object', function() {
    const card1 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const card2 = createCard(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
    const card3 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    const deck = createDeck([card1, card2, card3]);
    round = createRound(deck)
    expect(round.deck).to.equal(deck);
  })

  it ('current card should start at index[0] of deck', function() {
    const card1 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const card2 = createCard(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
    const card3 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck)
    expect(round.currentCard).to.equal(card1);
  })
});