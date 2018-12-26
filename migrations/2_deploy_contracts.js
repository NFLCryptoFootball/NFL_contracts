/* eslint-env node */
/* global artifacts */

const NFLBase = artifacts.require('NFLBase');
const NFLMarketplace = artifacts.require('NFLMarketplace');
const TestToken = artifacts.require('TestToken');

function deployContracts(deployer) {
  deployer.deploy(NFLBase);
  deployer.deploy(NFLMarketplace);
  deployer.deploy(TestToken);
}

module.exports = deployContracts;
