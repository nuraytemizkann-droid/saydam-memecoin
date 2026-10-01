"use client";

import { useState } from "react";

export function CopyAddress({ address }: { address?: string }) {
  const [copied, setCopied] = useState(false);
  const live = Boolean(address);

  async function copy() {
    if (!address) return;
    await navigator.clipboard.writeText(address);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button className={`address ${live ? "is-live" : ""}`} onClick={copy} disabled={!live}>
      <span>{live ? `${address!.slice(0, 8)}…${address!.slice(-6)}` : "NOT DEPLOYED — DO NOT BUY"}</span>
      <span className="address-action">{live ? (copied ? "COPIED" : "COPY") : "SAFE MODE"}</span>
    </button>
  );
}
