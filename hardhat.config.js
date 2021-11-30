require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
const ALCHEMY_API_KEY = "7aMSXrJPpzsJ-biU3gOpIN7H6Kjay0pi";
const ROPSTEN_PRIVATE_KEY = "61bc3b7c493a0b8a4cf3799653f97a8d1eebea3313b1c9600f757b9ba65f82b3";
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  }, 
  abiExporter: {
    path: './abi',
    clear: true,
    flat: true
  }
};
