import assert from "node:assert/strict";
import test from "node:test";
import { network } from "hardhat";

const { ethers } = await network.connect();
const [liquidity, community, teamVesting, operations, caller] =
  await ethers.getSigners();
const YEAR = 365 * 24 * 60 * 60;

async function deployFixture() {
  const token = await ethers.deployContract("SaydamToken", [
    liquidity.address,
    community.address,
    teamVesting.address,
    operations.address,
  ]);
  await token.waitForDeployment();

  const latestBlock = await ethers.provider.getBlock("latest");
  const unlockTime = latestBlock.timestamp + YEAR;
  const lock = await ethers.deployContract("SaydamLiquidityLock", [
    await token.getAddress(),
    operations.address,
    unlockTime,
  ]);
  await lock.waitForDeployment();

  await (
    await token.transfer(await lock.getAddress(), ethers.parseEther("100"))
  ).wait();
  return { token, lock, unlockTime };
}

test("cannot release LP tokens before the fixed unlock time", async () => {
  const { lock } = await deployFixture();
  await assert.rejects(lock.connect(caller).release());
});

test("releases the entire balance only to the fixed beneficiary", async () => {
  const { token, lock, unlockTime } = await deployFixture();

  await ethers.provider.send("evm_setNextBlockTimestamp", [unlockTime]);
  await ethers.provider.send("evm_mine", []);
  await (await lock.connect(caller).release()).wait();

  assert.equal(
    await token.balanceOf(operations.address),
    ethers.parseEther("30000100"),
  );
  assert.equal(await token.balanceOf(await lock.getAddress()), 0n);
});
