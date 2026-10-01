# SAYDAM launch strategy

## 1. Positioning

**One-line concept:** The glass frog with nothing to hide.

**Story:** SAYDAM means “transparent.” In a market built on screenshots, hype and hidden wallets, SAYDAM turns public proof into the joke: every allocation, lock, partnership and correction needs a receipt.

**Audience:** English-speaking, crypto-native people aged roughly 20–40 who understand meme culture but are skeptical of opaque launches. Turkey is the origin story, not the audience limit.

**What it is:** an entertainment-first community token and internet character.

**What it is not:** equity, debt, a revenue share, a yield product, a guaranteed utility token or a promise of appreciation.

## 2. Chain and launch decision

| Option | Strength | Trade-off | Fit for SAYDAM |
|---|---|---|---|
| Solana + automated launchpad | Largest meme-native launch culture; low transaction cost; fast discovery | Extreme launch saturation, bot/sniper pressure, platform-specific reputation risk | Strong for raw reach, weaker for a proof-led independent launch |
| Base + fixed ERC-20 + public DEX pool | Familiar EVM tooling, Coinbase-linked onboarding, easy explorer verification, simple immutable contract | Smaller meme-launch mindshare than Solana; manual liquidity and lock steps | **Selected: best balance of trust, simplicity and retail access** |
| Ethereum mainnet | Deepest liquidity and mature tooling | Expensive deployment and trading for an MVP | Not suitable for the first launch |
| BNB Chain | Low fees and large retail audience | Brand fit and trust perception are weaker for this concept | Reserve option only |

**Decision:** Base, with a standard fixed-supply ERC-20 built from OpenZeppelin and a public full-range Uniswap v2 SAYDAM/WETH pool. The ERC-20 LP tokens are placed in the ownerless `SaydamLiquidityLock` for at least 12 months. No launchpad contract, presale or bonding curve in MVP.

Why this decision: Base uses ETH for fees and Uniswap supports liquidity on Base. The contract is easy to verify line by line, while the Coinbase-linked ecosystem lowers onboarding friction. Solana remains a valid alternative if audience testing shows that chain distribution matters more than the “verifiable independent launch” story.

## 3. Tokenomics

Total supply: **1,000,000,000 $SAYDAM**. Minted once at deployment.

| Allocation | Amount | Rules |
|---|---:|---|
| Public liquidity | 820,000,000 (82%) | Deposited into the announced Uniswap v2 SAYDAM/WETH pool. LP tokens sent to the ownerless `SaydamLiquidityLock` for at least 12 months; lock transaction published before trading promotion. No silent withdrawals. |
| Community programs | 100,000,000 (10%) | Separate labelled multisig. Monthly budget and recipients disclosed. No rewards for undisclosed shilling or fake engagement. |
| Team | 50,000,000 (5%) | Separate vesting contract. 12-month cliff, then linear release over the next 24 months. Contract and beneficiary published. |
| Operations | 30,000,000 (3%) | 2-of-3 Safe multisig. Used for legal, design, moderation, audit, listings and infrastructure. Monthly statement published. |

Initial price is **not set in this document**. It is determined by the exact WETH and SAYDAM deposited into the pool. Publish both amounts and the implied fully diluted value at least 24 hours before launch. Do not advertise a price target.

## 4. Authority matrix

| Capability | Launch state | How to verify |
|---|---|---|
| Additional minting | Impossible | No external/public `_mint`; total supply equals 1B |
| Owner/admin | None | Contract does not inherit Ownable or AccessControl |
| Freeze/pause | None | No Pausable or freeze function |
| Blacklist | None | No address list or privileged transfer hook |
| Buy/sell tax | 0% | Standard ERC-20 transfer behavior |
| Upgrade | Impossible | Not a proxy; implementation address is final |
| Team unlock | 12m cliff + 24m linear | Published vesting contract and beneficiary |
| Operations | 2-of-3 multisig | Safe address and signer roles published |
| Liquidity | Lock ≥12 months | LP position and locker link published |

## 5. Launch phases

### Phase A — credibility before token (14–21 days)

1. Secure domain and exact X/Telegram handles; enable 2FA and hardware security keys.
2. Publish the website in pre-launch safe mode.
3. Publish the tokenomics draft, risk page, wallet labels and contract source.
4. Create the real multisig and vesting setup; test every step on Base Sepolia.
5. Obtain an independent Solidity review and publish the full report, including findings.
6. Recruit moderators based on contribution, not follower promises.
7. Never accept funds during this phase.

### Phase B — public verification (3–7 days)

1. Announce exact launch date, token allocations, initial pool assets and lock duration.
2. Deploy to Base; verify source code on the explorer.
3. Cross-post the same contract address to the website, X and Telegram.
4. Allow at least 24 hours for the community to inspect before trading promotion.
5. Create and lock liquidity, then publish transaction and lock links.

### Phase C — launch and first week

1. Open the pool at the previously announced time.
2. Pin the anti-scam post. Admins never DM first.
3. Publish daily treasury and liquidity notes for seven days.
4. Do not coordinate buys, price targets, trending services or volume.
5. Log incidents and corrections publicly.

## 6. Go/no-go checklist

Launch is **NO-GO** if any answer is “no”:

- Is the source verified and bytecode matched?
- Has an independent reviewer signed off on the exact deployed code?
- Do site, X and Telegram show the identical address?
- Are team tokens already in the vesting contract?
- Is the operations allocation in the labelled multisig?
- Is the LP lock transaction complete and public?
- Is the implied valuation disclosed without a price prediction?
- Are moderators trained on impersonation, fake links and incident escalation?
- Has local legal counsel reviewed marketing, distribution and target jurisdictions?
- Can the team fund operations without selling undisclosed tokens?

## 7. Decisions still requiring the owner

- legal entity/jurisdiction and restricted regions;
- verified team roles and multisig signers;
- launch capital and exact initial liquidity;
- domain and social-handle availability;
- independent contract reviewer;
- final launch date after the pre-launch proof period.
