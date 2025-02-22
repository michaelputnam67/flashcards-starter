const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck', () => {
	let card1;
	let card2;
	let card3;
	let cards;
	let deck;

	beforeEach(() => {
		card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
		cards = [card1, card2, card3]
		deck = new Deck(cards)
	})

	it('should be true', function() {
		expect(true).to.equal(true)
	})

	it('should be initialized with an array of Card objects', function() {
		expect(deck.cards).to.equal(cards)
	})

	it('should be able to count how many cards are in the deck', function() {
		expect(deck.countCards()).to.equal(3)
	})
	
})
