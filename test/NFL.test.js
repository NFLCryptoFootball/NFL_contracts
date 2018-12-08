/* eslint-env node, mocha */
/* global artifacts, contract, it, assert */

const NFL = artifacts.require('NFL');

let instance;

contract('NFL', (accounts) => {
  it('Should deploy an instance of the NFL contract', () => NFL.deployed()
    .then((contractInstance) => {
      instance = contractInstance;
    }));
});
