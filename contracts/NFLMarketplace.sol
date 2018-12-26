pragma solidity 0.4.25;

import "./NFLBase.sol";


/**
 * @title NFLMarketplace
 */
contract NFLMarketplace is NFLBase {
    enum SaleType { Instant, Auction, Mixed }

    struct Sale {
        SaleType saleType;
        uint256 startingAmount;
        uint256 fixedAmount;
        bytes32 currency;
    }
}
