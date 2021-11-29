const hre = require("hardhat");
let addr = null

async function main() {
    const Hash = await hre.ethers.getContractFactory("Hash");
    console.log('Deploying Hash...');
    const hash = await Hash.deploy();
    await hash.deployed();
    addr = hash.address;
    console.log(addr)
    console.log("Hash deployed to:", hash.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });