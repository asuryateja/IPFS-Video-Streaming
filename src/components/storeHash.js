import web3 from './web3';


const address = '0x2C728f05B9222108449E6208D9e0F75CDa5ae828';

const abi = [
    {
      "inputs": [],
      "name": "getHash",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ipfsHash",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "str",
          "type": "string"
        }
      ],
      "name": "sendHash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  

  export default new web3.eth.Contract(abi, address);