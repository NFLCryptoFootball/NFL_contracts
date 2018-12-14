/* eslint-env node */
/* global artifacts */

const NFLBase = artifacts.require('NFLBase');

function deployContracts(deployer) {
  deployer.deploy(NFLBase);
}

module.exports = deployContracts;
