//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Hash {
    string public ipfsHash;

    function sendHash(string memory str) public {
        ipfsHash = str;
    }

    function getHash() public view returns (string memory) {
        return ipfsHash;
    }
}