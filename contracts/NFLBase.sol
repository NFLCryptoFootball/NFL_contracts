/* solhint-disable not-rely-on-time */
pragma solidity 0.4.24;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";


/**
 * @title NFL Crypto Football
 * @dev This contract is the base of our project
 */
contract NFLBase is ERC721Full, Ownable {
    constructor() public ERC721Full(
        "NFL Crypto Football",
        "NFLC"
    ) {
    }

    enum Rarity { Common, Rare, Epic }

    struct Card {
        string name;
        uint256 teamId;
        Rarity rarity;
        uint256 createdAt;
        string data;
    }

    Card[] private cards;

    uint256 private stuff;

    function createCard(
        string name,
        uint256 teamId,
        Rarity rarity,
        string data,
        string uri,
        address recipient
    ) public {
        uint256 cardId = cards.push(
            Card({
                name: name,
                teamId: teamId,
                rarity: rarity,
                data: data,
                createdAt: now
            })
        ) - 1;

        _mint(recipient, cardId);
        _setTokenURI(cardId, uri);
    }

    function getCard(
        uint256 cardId
    ) public view returns (
        string,
        uint256,
        Rarity,
        string,
        uint256
    ) {
        return (
            cards[cardId].name,
            cards[cardId].teamId,
            cards[cardId].rarity,
            cards[cardId].data,
            cards[cardId].createdAt
        );
    }
}
