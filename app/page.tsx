import { CopyAddress } from "@/components/CopyAddress";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const explorerUrl = process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL;
const xUrl = process.env.NEXT_PUBLIC_X_URL;
const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL;

const allocation = [
  { label: "Public liquidity", value: "82%", detail: "820M · paired publicly" },
  { label: "Community", value: "10%", detail: "100M · published grants" },
  { label: "Team", value: "5%", detail: "50M · 12m cliff + 24m linear" },
  { label: "Operations", value: "3%", detail: "30M · disclosed multisig" },
];

const proofs = [
  ["Supply", "1,000,000,000", "Fixed at deployment"],
  ["Mint authority", "NONE", "No function can create more"],
  ["Owner / admin", "NONE", "No privileged controller"],
  ["Transfer tax", "0%", "No buy or sell tax"],
  ["Blacklist / pause", "NONE", "Transfers cannot be selectively blocked"],
  ["Upgradeable", "NO", "The code cannot be swapped later"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="SAYDAM home">
          <span className="brand-mark">S</span>
          <span>SAYDAM</span>
        </a>
        <div className="nav-links">
          <a href="#proof">Proof</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#risks">Risks</a>
        </div>
        <a className="nav-cta" href="#verify">Verify, don’t trust</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> A MEME WITH RECEIPTS</div>
          <h1>Nothing hidden.<br /><em>Just meme.</em></h1>
          <p className="lede">
            SAYDAM means “transparent.” A glass-frog meme on Base whose rules are simple enough to read and public enough to verify.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#proof">Inspect the proof</a>
            <a className="button ghost" href="#story">Meet the frog</a>
          </div>
          <div className="status-row">
            <span className="status warning">PRE-LAUNCH</span>
            <span>No presale · no live contract · no official price</span>
          </div>
        </div>

        <div className="specimen" aria-label="Abstract SAYDAM glass frog brand mark">
          <div className="specimen-grid" />
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="glass-mark">
            <span className="scanline" />
            <b>S</b>
          </div>
          <div className="specimen-label top">SPECIMEN 001 / BASE</div>
          <div className="specimen-label bottom">VISIBLE BY DEFAULT</div>
        </div>
      </section>

      <section className="ticker" aria-label="Project principles">
        <div>FIXED SUPPLY <i>•</i> ZERO TAX <i>•</i> NO BLACKLIST <i>•</i> PUBLIC WALLETS <i>•</i> LOCKED LIQUIDITY <i>•</i> NO RETURN PROMISES</div>
      </section>

      <section className="section shell story" id="story">
        <div>
          <p className="kicker">01 / THE STORY</p>
          <h2>The frog you can<br />see <span>through.</span></h2>
        </div>
        <div className="story-copy">
          <p className="big-copy">Crypto learned to shout. SAYDAM learned to show its work.</p>
          <p>Every allocation gets a public wallet. Every lock gets a link. Every mistake gets a post, not a deletion. The joke is radical transparency in a market famous for fog.</p>
          <blockquote>“Don’t trust the frog. Verify the frog.”</blockquote>
        </div>
      </section>

      <section className="section dark" id="proof">
        <div className="shell">
          <div className="section-head">
            <div><p className="kicker lime">02 / PROOF BOARD</p><h2>Claims need<br /><span>receipts.</span></h2></div>
            <p className="section-note">These are launch requirements, not completed claims. Links turn green only after independent verification.</p>
          </div>
          <div className="proof-grid">
            {proofs.map(([label, value, detail]) => (
              <article className="proof-card" key={label}>
                <p>{label}</p><strong>{value}</strong><span>{detail}</span>
              </article>
            ))}
          </div>
          <div className="verify-bar" id="verify">
            <div><span>OFFICIAL CONTRACT</span><p>Only trust the address shown here and in both pinned social posts.</p></div>
            <CopyAddress address={contractAddress} />
            {contractAddress && explorerUrl ? <a className="external" href={explorerUrl} rel="noreferrer">Open explorer</a> : null}
          </div>
        </div>
      </section>

      <section className="section shell" id="tokenomics">
        <div className="section-head light-head">
          <div><p className="kicker">03 / TOKENOMICS</p><h2>One billion.<br /><span>Not one more.</span></h2></div>
          <div className="supply"><span>TOTAL SUPPLY</span><b>1,000,000,000</b><small>$SAYDAM</small></div>
        </div>
        <div className="allocation-bar" aria-label="Token allocation chart">
          {allocation.map((item, index) => <span key={item.label} style={{ width: item.value }} data-index={index} />)}
        </div>
        <div className="allocation-list">
          {allocation.map((item, index) => (
            <article key={item.label}>
              <i data-index={index} /><div><b>{item.value}</b><span>{item.label}</span><small>{item.detail}</small></div>
            </article>
          ))}
        </div>
        <div className="plain-box">
          <strong>Why not “100% fair launch”?</strong>
          <p>Because running a project costs money and pretending otherwise creates hidden incentives. The small team and operations allocations are disclosed, separated, and time-bound instead.</p>
        </div>
      </section>

      <section className="section manifesto">
        <div className="shell manifesto-inner">
          <p className="kicker lime">04 / THE SAYDAM STANDARD</p>
          <h2>If we can’t prove it,<br /><span>we don’t post it.</span></h2>
          <div className="rules">
            <p><b>01</b> No fake followers, paid shill armies or undisclosed influencer deals.</p>
            <p><b>02</b> No wash trading, bundled wallets or manufactured volume.</p>
            <p><b>03</b> No “guaranteed,” “safe,” “next 100x” or profit language.</p>
            <p><b>04</b> Treasury movement is explained before execution whenever practical.</p>
          </div>
        </div>
      </section>

      <section className="section shell risks" id="risks">
        <div><p className="kicker">05 / READ THE RISK</p><h2>This can go<br /><span>to zero.</span></h2></div>
        <div className="risk-list">
          <p><b>Extreme volatility</b><span>Memecoins can lose most or all of their value quickly.</span></p>
          <p><b>Liquidity risk</b><span>A small pool can produce severe price movement and slippage.</span></p>
          <p><b>No claim on revenue</b><span>$SAYDAM gives no equity, dividend, yield or guaranteed utility.</span></p>
          <p><b>Regulatory uncertainty</b><span>Rules differ by country and can change. Seek local advice.</span></p>
          <p><b>Smart-contract risk</b><span>Simple code reduces risk; it does not eliminate bugs or ecosystem failures.</span></p>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <p className="kicker lime">JOIN THE GLASSHOUSE</p>
          <h2>Watch us build<br />in public.</h2>
          <p>Community channels open before the token. No DMs, no surprise contract, no secret presale.</p>
          <div className="hero-actions centered">
            {xUrl ? <a className="button primary" href={xUrl}>Follow on X</a> : <span className="button disabled">X — coming soon</span>}
            {telegramUrl ? <a className="button ghost dark-ghost" href={telegramUrl}>Join Telegram</a> : <span className="button disabled">Telegram — coming soon</span>}
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><span className="brand-mark">S</span><span>SAYDAM</span></a>
        <p>Entertainment-first community token. Not financial advice. No promise of profit.</p>
        <p>© 2026 SAYDAM · Built in public</p>
      </footer>
    </main>
  );
}
