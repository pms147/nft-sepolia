require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
const { url } = require("inspector");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 11155111
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/tYh9xoyEkWOIa4LBU3ZJGDeqNCe4-EIO`,
      accounts: [`c9ab6020e654336ccba5afd5da29d6c5aa433c523fe17feafb844b39c806ac82`]
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: {
      sepolia: "SARE1T2U8TMFBVPUMGST2Z2JNF1FFWHJMD" // Your etherscan API key
    },
  },
};