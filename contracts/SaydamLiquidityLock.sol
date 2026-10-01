// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/// @title SAYDAM Liquidity Lock
/// @notice Holds one fixed Uniswap v2 LP token until a fixed timestamp.
///         Anyone can trigger release, but the LP tokens can only go to the
///         beneficiary published at deployment.
contract SaydamLiquidityLock {
    using SafeERC20 for IERC20;

    IERC20 public immutable lpToken;
    address public immutable beneficiary;
    uint64 public immutable unlockTime;

    error InvalidAddress();
    error InvalidUnlockTime();
    error StillLocked(uint256 unlockTime);
    error NothingToRelease();

    constructor(IERC20 lpToken_, address beneficiary_, uint64 unlockTime_) {
        if (address(lpToken_) == address(0) || beneficiary_ == address(0)) {
            revert InvalidAddress();
        }
        if (unlockTime_ <= block.timestamp) revert InvalidUnlockTime();

        lpToken = lpToken_;
        beneficiary = beneficiary_;
        unlockTime = unlockTime_;
    }

    function release() external {
        if (block.timestamp < unlockTime) revert StillLocked(unlockTime);

        uint256 amount = lpToken.balanceOf(address(this));
        if (amount == 0) revert NothingToRelease();
        lpToken.safeTransfer(beneficiary, amount);
    }
}
