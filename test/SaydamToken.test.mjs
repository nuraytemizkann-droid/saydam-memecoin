import assert from "node:assert/strict";
import test from "node:test";
import { network } from "hardhat";

const { ethers } = await network.connect();
const [liquidity, community, teamVesting, operations, recipient] =
  await ethers.getSigners();

async function deployToken() {
  const token = await ethers.deployContract("SaydamToken", [
    liquidity.address,
    community.address,
    teamVesting.address,
    operations.address,
  ]);
  await token.waitForDeployment();
  return token;
}

test("mints the fixed supply into the published allocations", async () => {
  const token = await deployToken();

  assert.equal(await token.totalSupply(), ethers.parseEther("1000000000"));
  assert.equal(await token.balanceOf(liquidity.address), ethers.parseEther("820000000"));
  assert.equal(await token.balanceOf(community.address), ethers.parseEther("100000000"));
  assert.equal(await token.balanceOf(teamVesting.address), ethers.parseEther("50000000"));
  assert.equal(await token.balanceOf(operations.address), ethers.parseEther("30000000"));
});

test("supports a standard transfer without changing supply", async () => {
  const token = await deployToken();

  await (await token.transfer(recipient.address, ethers.parseEther("1"))).wait();
  assert.equal(await token.balanceOf(recipient.address), ethers.parseEther("1"));
  assert.equal(await token.totalSupply(), ethers.parseEther("1000000000"));
});

test("rejects a zero allocation address", async () => {
  await assert.rejects(
    ethers.deployContract("SaydamToken", [
      ethers.ZeroAddress,
      community.address,
      teamVesting.address,
      operations.address,
    ]),
  );
});
