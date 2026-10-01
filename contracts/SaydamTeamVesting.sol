// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {VestingWallet} from "@openzeppelin/contracts/finance/VestingWallet.sol";

/// @title SAYDAM Team Vesting
/// @notice Holds the 5% team allocation. Set vestingStart to 12 months after
///         launch and vestingDuration to 24 months for the published schedule.
/// @dev OpenZeppelin VestingWallet treats its start timestamp as a hard lock:
///      zero tokens vest before it, then the balance vests linearly.
contract SaydamTeamVesting is VestingWallet {
    constructor(
        address beneficiary,
        uint64 vestingStart,
        uint64 vestingDuration
    ) VestingWallet(beneficiary, vestingStart, vestingDuration) {}
}
