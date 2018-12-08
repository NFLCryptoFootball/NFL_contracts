pragma solidity 0.4.25;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";


/**
 * @title NFL Crypto Football
 * @dev This contract is the base of our project
 */
contract NFL is ERC721Full, Ownable {
    constructor() public ERC721Full(
        "NFL Crypto Football",
        "NFL",
    ) {
    }
}
