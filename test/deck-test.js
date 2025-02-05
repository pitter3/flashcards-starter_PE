const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck, countCards,} = require('../src/deck');


describe('createDeck', function() {
  it ('should create a deck with 3 cards', function() {
    const card1 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const card2 = createCard(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
    const card3 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    const deck = createDeck([card1, card2, card3]);
    // const deck = createDeck(card1, card2, card3);
    
    expect(deck.length).to.equal(3);
  })
});

describe ('countDeck', function() {
  it ('should count how many cards are in a deck', function() {
    const card1 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const card2 = createCard(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
    const card3 = createCard(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ['mutator method', 'accessor method', 'iteration method'], 'iteration method');
    const deck = createDeck([card1, card2, card3]);
    expect(countCards(deck)).to.equal(3)
  })
});