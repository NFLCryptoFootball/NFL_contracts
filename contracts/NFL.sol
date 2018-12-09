pragma solidity 0.4.25;
pragma experimental ABIEncoderV2;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";


/**
 * @title NFL Crypto Football
 * @dev This contract is the base of our project
 */
contract NFL is ERC721Full, Ownable {
    constructor() public ERC721Full(
        "NFL Crypto Football",
        "NFL"
    ) {
    }

    struct Card {
        string name;
        uint256 birthdate;
    }

    Card[] private cards;

    function createCard(
        Card newCard,
        address recipient
    ) public onlyOwner() {
        uint256 id = cards.push(newCard) - 1;

        _mint(recipient, id);
    }

    function getCard(
        uint256 cardId
    ) public view returns (
        Card
    ) {
        return cards[cardId];
    }
}
