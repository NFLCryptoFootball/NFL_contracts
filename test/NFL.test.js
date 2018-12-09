/* eslint-env node, mocha */
/* global artifacts, contract, it, assert */

const NFL = artifacts.require('NFL');

let instance;

contract('NFL', (accounts) => {
  it('Should deploy an instance of the NFL contract', () => NFL.deployed()
    .then((contractInstance) => {
      instance = contractInstance;
    }));

  it('Should create a new card and add it to account 1 balance', () => instance.createCard(
    {
      name: 'John Doe',
      birthdate: Math.round(Date.now() / 1000),
    },
    accounts[1],
  ));

  it('Should check account 1 balance', () => instance.balanceOf(accounts[1])
    .then((balance) => {
      assert.equal(balance, 1, 'Balance is wrong');
    }));
});
