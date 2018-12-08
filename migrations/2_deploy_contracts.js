/* eslint-env node */
/* global artifacts */

const NFL = artifacts.require('NFL');

function deployContracts(deployer) {
  deployer.deploy(NFL);
}

module.exports = deployContracts;
