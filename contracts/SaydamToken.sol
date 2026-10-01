// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title SAYDAM
/// @notice Fixed-supply community meme token. No owner, mint, tax, pause,
///         blacklist, upgrade or privileged transfer logic exists.
contract SaydamToken is ERC20 {
    uint256 public constant MAX_SUPPLY = 1_000_000_000 ether;

    uint256 public constant LIQUIDITY_ALLOCATION = 820_000_000 ether;
    uint256 public constant COMMUNITY_ALLOCATION = 100_000_000 ether;
    uint256 public constant TEAM_ALLOCATION = 50_000_000 ether;
    uint256 public constant OPERATIONS_ALLOCATION = 30_000_000 ether;

    error ZeroAddress();

    constructor(
        address liquidityWallet,
        address communityWallet,
        address teamVestingContract,
        address operationsMultisig
    ) ERC20("SAYDAM", "SAYDAM") {
        if (
            liquidityWallet == address(0) ||
            communityWallet == address(0) ||
            teamVestingContract == address(0) ||
            operationsMultisig == address(0)
        ) revert ZeroAddress();

        _mint(liquidityWallet, LIQUIDITY_ALLOCATION);
        _mint(communityWallet, COMMUNITY_ALLOCATION);
        _mint(teamVestingContract, TEAM_ALLOCATION);
        _mint(operationsMultisig, OPERATIONS_ALLOCATION);

        assert(totalSupply() == MAX_SUPPLY);
    }
}
