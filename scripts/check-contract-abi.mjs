import fs from "node:fs";
import assert from "node:assert/strict";

const artifactPath = new URL(
  "../artifacts/contracts/SaydamToken.sol/SaydamToken.json",
  import.meta.url,
);
const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
const functions = new Set(
  artifact.abi
    .filter((entry) => entry.type === "function")
    .map((entry) => entry.name),
);

const forbidden = [
  "mint",
  "pause",
  "unpause",
  "blacklist",
  "setTax",
  "setFee",
  "owner",
  "transferOwnership",
  "upgradeTo",
  "upgradeToAndCall",
];
const exposed = forbidden.filter((name) => functions.has(name));

if (exposed.length > 0) {
  throw new Error(`Privileged ABI functions found: ${exposed.join(", ")}`);
}

process.stdout.write("ABI check passed: no mint, pause, blacklist, tax, owner or upgrade function.\n");

const lockArtifactPath = new URL(
  "../artifacts/contracts/SaydamLiquidityLock.sol/SaydamLiquidityLock.json",
  import.meta.url,
);
const lockArtifact = JSON.parse(fs.readFileSync(lockArtifactPath, "utf8"));
const lockFunctions = lockArtifact.abi
  .filter((entry) => entry.type === "function")
  .map((entry) => entry.name)
  .sort();

assert.deepEqual(lockFunctions, ["beneficiary", "lpToken", "release", "unlockTime"]);
process.stdout.write("LP lock ABI check passed: fixed token, beneficiary and unlock time; release only.\n");
