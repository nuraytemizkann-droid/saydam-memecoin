# SAYDAM — MVP launch kit

SAYDAM is a proof-first community meme concept. The name means “transparent” in Turkish; the mascot idea is a glass frog. The project avoids return promises and treats every token, wallet and claim as something the public should be able to verify.

This repository contains:

- a responsive Next.js landing page with a safe pre-launch state;
- a fixed-supply ERC-20 for Base, team vesting and ownerless Uniswap v2 LP lock contracts;
- transparent tokenomics and authority documentation;
- X and Telegram copy, a 30-day content calendar and moderation rules;
- launch, verification and incident-response checklists;
- Vercel-ready configuration and environment placeholders.

## Local preview

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run typecheck
npm run build
npm run contract:test
npm run security:audit
```

The contract suite checks the 1 billion fixed supply, all four allocations,
standard transfers, zero-address rejection, the 12-month team cliff, the
following 24-month linear vesting schedule, a fixed 12-month LP lock and the
absence of mint, pause, blacklist, tax, owner and upgrade functions from the
token ABI.

## Required launch values

Copy `.env.example` to `.env.local` only after the accounts and contracts exist. Until `NEXT_PUBLIC_CONTRACT_ADDRESS` is set, the website intentionally displays **NOT DEPLOYED — DO NOT BUY** and provides no buy button.

## Vercel

Import this repository in Vercel or run `vercel`. Add only public site variables from `.env.example`. Never add a wallet seed phrase or deployer private key to Vercel.

## Documents

- [Launch strategy](docs/LAUNCH-PLAN.md)
- [Social and community playbook](docs/SOCIAL-PLAYBOOK.md)
- [Risk and transparency policy](docs/RISK-AND-TRANSPARENCY.md)
- [Brand guide](docs/BRAND.md)
- [Cost-minimized launch readiness](docs/LAUNCH-READINESS.md)

## Status

MVP software and communication materials only. No token has been deployed, no liquidity has been added and no social handles have been reserved. Mainnet deployment requires the owner’s wallet signatures, capital, verified public addresses, an independent contract review and jurisdiction-specific legal advice.
