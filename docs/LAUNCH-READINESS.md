# SAYDAM cost-minimized launch readiness

## What is already free

- Public GitHub source repository and automated local checks
- Vercel pre-launch website on the free tier
- Local contract compilation and tests
- Base Sepolia rehearsal using faucet test ETH
- X and Telegram copy, moderation rules and 30-day content calendar
- Contract-address placeholders that keep the website in **DO NOT BUY** mode

## What cannot honestly be free on mainnet

- Base mainnet gas for deploying the vesting and token contracts
- Initial WETH/ETH paired with SAYDAM to create real liquidity
- A credible independent security review and jurisdiction-specific legal advice
- Optional domain, hardware security keys and professional moderation

No tool, launchpad or agent can remove those costs without shifting them to a
third party or weakening the launch. Do not borrow launch liquidity, accept an
undisclosed sponsor allocation or promise returns to make the launch appear
free.

## Required deployment order

1. Create the operations and community multisigs. Record addresses and signer roles.
2. Select a launch timestamp only after legal and independent contract review.
3. Calculate `vestingStart = launch timestamp + 365 days` and
   `vestingDuration = 730 days`.
4. Deploy `SaydamTeamVesting` first with the team beneficiary and those values.
5. Deploy `SaydamToken` with, in order: liquidity wallet, community multisig,
   vesting contract and operations multisig.
6. Confirm on BaseScan that total supply and all four balances exactly match the
   published tokenomics. Verify both source contracts.
7. Rehearse the same order on Base Sepolia before any mainnet signature.
8. Publish the token address for at least 24 hours of public inspection. Keep
   the site without a buy button.
9. Create the announced SAYDAM/WETH pool using the exact published amounts.
10. Lock the LP position for at least 12 months and publish the pool, lock and
    transaction links before enabling the official buy link.

## Owner-controlled inputs still needed

- Team beneficiary wallet
- Community multisig address
- Operations 2-of-3 multisig address and signer roles
- Liquidity wallet and exact ETH/WETH amount
- Launch timestamp, jurisdiction and restricted regions
- Independent review report and final go/no-go decision

Never send a seed phrase or private key to Codex, GitHub, Vercel, Telegram or a
moderator. The owner signs deployment and liquidity transactions directly in a
wallet after checking the network, addresses and exact amounts.

## Final no-go gates

Mainnet deployment stays blocked until every owner-controlled address is known,
the independent review is complete, legal guidance is recorded, gas is funded
and the initial liquidity amount is publicly disclosed. Until then the website
must continue to say **NOT DEPLOYED — DO NOT BUY**.
