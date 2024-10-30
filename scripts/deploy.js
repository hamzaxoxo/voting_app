const hre = require("hardhat");

async function main() {
    const Voting = await hre.ethers.getContractFactory("Voting");
    const VotingContract = await Voting.deploy(["Hamza", "Ali", "Ahmed"], 90); //instance of contract

    await VotingContract.waitForDeployment();
    console.log("Address of contract:", await VotingContract.getAddress());
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});