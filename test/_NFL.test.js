/* eslint-env node, mocha */
/* global artifacts, contract, it, assert */

const NFL = artifacts.require('NFL');

let instance;

const testCard = {
  name: 'John Doe',
  birthdate: Math.round(Date.now() / 1000),
};

contract('NFL', (accounts) => {
  it('Should deploy an instance of the NFL contract', () => NFL.deployed()
    .then((contractInstance) => {
      instance = contractInstance;
    }));

  it('Should check the name of the token', () => instance.name()
    .then((name) => {
      assert.equal(name, 'NFL Crypto Football', 'Name is wrong');
    }));

  it('Should check the symbol of the token', () => instance.symbol()
    .then((symbol) => {
      assert.equal(symbol, 'NFLC', 'Symbol is wrong');
    }));

  it('Should create a new card and add it to account 1 balance', () => instance.createCard(
    testCard,
    accounts[1], {
      from: accounts[1],
    },
  ));

  it('Should check account 1 balance', () => instance.balanceOf(accounts[1])
    .then((balance) => {
      assert.equal(balance, 1, 'Balance is wrong');
    }));

  it('Should check card 0', () => instance.getCard(0)
    .then((card) => {
      assert.equal(card.name, testCard.name, 'Card name is wrong');
      assert.equal(card.birthdate, testCard.birthdate, 'Card birthdate is wrong');
    }));

  it('Should check the URI of card 0', () => instance.tokenURI(0)
    .then((tokenURI) => {
      assert.equal(tokenURI, 'https://nflcrypto.netlify.com/', 'Token URI is wrong');
    }));
});
