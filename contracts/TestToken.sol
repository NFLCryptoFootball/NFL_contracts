pragma solidity 0.4.25;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";


contract TestToken is ERC20, ERC20Detailed {
    constructor() public ERC20Detailed(
        "TestToken",
        "TEST",
        18
    ) {
        uint256 totalSupply = 21000000 * 10 ** 18;

        _mint(msg.sender, totalSupply);
    }
}
