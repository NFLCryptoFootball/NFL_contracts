/* eslint-env node, mocha */
/* global artifacts, contract, it, assert */

const TestToken = artifacts.require('TestToken');

let instance;

const tokenName = 'TestToken';
const tokenSymbol = 'TEST';
const tokenDecimals = 18;
const tokenFactor = 10 ** tokenDecimals;
const tokenTotalSupply = 21000000 * tokenFactor;

contract('TestToken', (accounts) => {
  it('Should deploy an instance of the TestToken contract', () => TestToken.deployed()
    .then((contractInstance) => {
      instance = contractInstance;
    }));

  it('Should check the name of the token', () => instance.name()
    .then((name) => {
      assert.equal(name, tokenName, 'Name is wrong');
    }));

  it('Should check the symbol of the token', () => instance.symbol()
    .then((symbol) => {
      assert.equal(symbol, tokenSymbol, 'Symbol is wrong');
    }));

  it('Should check the decimals of the token', () => instance.decimals()
    .then((decimals) => {
      assert.equal(decimals, tokenDecimals, 'Decimals are wrong');
    }));

  it('Should check the total supply of the token', () => instance.totalSupply()
    .then((totalSupply) => {
      assert.equal(totalSupply, tokenTotalSupply, 'Decimals are wrong');
    }));

  it('Should check the balance of account 0', () => instance.balanceOf(accounts[0])
    .then((balance) => {
      assert.equal(balance, tokenTotalSupply, 'Account 0 balance is wrong');
    }));

  it('Should check the balance of account 1', () => instance.balanceOf(accounts[1])
    .then((balance) => {
      assert.equal(balance, 0, 'Account 1 balance is wrong');
    }));
});
