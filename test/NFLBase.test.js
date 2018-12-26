/* eslint-env node, mocha */
/* global artifacts, contract, it, assert */

const NFLBase = artifacts.require('NFLBase');

let instance;

const testCard = {
  name: 'John Doe',
  teamId: 0,
  rarity: 0,
  data: 'hexData',
  uri: 'tokenUri',
};

contract('NFLBase', (accounts) => {
  it('Should deploy an instance of the NFLBase contract', () => NFLBase.deployed()
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
    testCard.name,
    testCard.teamId,
    testCard.rarity,
    testCard.data,
    testCard.uri,
    accounts[1],
  ));

  it('Should check account 1 balance', () => instance.balanceOf(accounts[1])
    .then((balance) => {
      assert.equal(balance, 1, 'Balance is wrong');
    }));

  it('Should check card 0', () => instance.getCard(0)
    .then((card) => {
      assert.equal(card[0], testCard.name, 'Card name is wrong');
      assert.equal(card[1], testCard.teamId, 'Card team id is wrong');
      assert.equal(card[2], testCard.rarity, 'Card rarity is wrong');
    }));

  it('Should check the URI of card 0', () => instance.tokenURI(0)
    .then((tokenURI) => {
      assert.equal(tokenURI, testCard.uri, 'Token URI is wrong');
    }));
});
