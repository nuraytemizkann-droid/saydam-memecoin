import assert from "node:assert/strict";
import test from "node:test";
import { network } from "hardhat";

const { ethers } = await network.connect();
const [liquidity, community, team, operations] = await ethers.getSigners();
const YEAR = 365 * 24 * 60 * 60;

async function deploySystem() {
  const latestBlock = await ethers.provider.getBlock("latest");
  const vestingStart = latestBlock.timestamp + YEAR;
  const vesting = await ethers.deployContract("SaydamTeamVesting", [
    team.address,
    vestingStart,
    2 * YEAR,
  ]);
  await vesting.waitForDeployment();

  const token = await ethers.deployContract("SaydamToken", [
    liquidity.address,
    community.address,
    await vesting.getAddress(),
    operations.address,
  ]);
  await token.waitForDeployment();

  return { token, vesting, vestingStart };
}

test("locks the entire team allocation until the 12-month cliff", async () => {
  const { token, vesting, vestingStart } = await deploySystem();
  const tokenAddress = await token.getAddress();

  assert.equal(await token.balanceOf(await vesting.getAddress()), ethers.parseEther("50000000"));
  assert.equal(
    await vesting["vestedAmount(address,uint64)"](tokenAddress, vestingStart - 1),
    0n,
  );
  assert.equal(
    await vesting["vestedAmount(address,uint64)"](tokenAddress, vestingStart),
    0n,
  );
});

test("vests linearly for 24 months after the cliff", async () => {
  const { token, vesting, vestingStart } = await deploySystem();
  const tokenAddress = await token.getAddress();

  assert.equal(
    await vesting["vestedAmount(address,uint64)"](tokenAddress, vestingStart + YEAR),
    ethers.parseEther("25000000"),
  );
  assert.equal(
    await vesting["vestedAmount(address,uint64)"](tokenAddress, vestingStart + 2 * YEAR),
    ethers.parseEther("50000000"),
  );
});
