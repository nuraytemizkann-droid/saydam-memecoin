# SAYDAM contract package

This folder contains a deliberately minimal ERC-20 draft for Base. It mints the complete one-billion supply exactly once in the constructor and exposes no owner, admin, mint, pause, blacklist, tax or upgrade capability.

## Before any mainnet deployment

1. Replace every placeholder wallet with a real, publicly labelled address.
2. Use a separately deployed, independently reviewed vesting contract for the team allocation: 12-month cliff followed by 24 months of linear release.
3. Make the operations wallet a 2-of-3 Safe multisig. The signers should be disclosed by role, and conflicts documented.
4. Get an independent Solidity review. A successful local compile is not an audit.
5. Deploy and verify on Base Sepolia first. Rehearse allocation verification and explorer links.
6. Deploy from a hardware wallet, verify the exact source on the explorer, and publish the address simultaneously on the site, X and Telegram.
7. Create the liquidity position using the published amount and pair. Transfer the LP position into the disclosed lock before announcing trading.

Do not paste a private key into this repository, `.env`, a chat, a deployment platform or a screenshot.

## Compile

From the repository root:

```bash
npm run contract:compile
```

The compiler output is written to the ignored `artifacts/` directory.
