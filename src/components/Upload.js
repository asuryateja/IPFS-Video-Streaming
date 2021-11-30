import React, {useState} from 'react'
import storeHash from './storeHash';
import { ExternalLink } from 'react-external-link';
import ipfs from './ipfs'
import './Upload.css'
import web3 from './web3';



function Upload() {
const [hash, setHash] = useState([]);
const [click, setClick] = useState(false);
const [contractAdd, setcontractAdd] = useState(null);
const [file, setFile] = useState(null);
const [transactionHas, settransactionHas] = useState(null);
const [recep, setrecep] = useState(null);
const [blockNum, setblockNum] = useState(null);
const [gasUsed, setgasUsed] = useState(null);
const reader = new window.FileReader();

const captureFile = (e) => {
	e.stopPropagation();
	e.preventDefault();
	const file = e.target.files[0]
	reader.readAsArrayBuffer(file);
	reader.onloadend = () => convertToBuffer(reader)
};

const convertToBuffer = async(e) => {
	const buffer = await Buffer.from(reader.result)
	setFile(buffer)
}

const handleSubmit = async (e) => {
	e.preventDefault();
	await ipfs.add(file, (err, ipfsHash) => {
		console.log(err, ipfsHash);
		setHash(ipfsHash[0].hash);
	})

    const accounts = await web3.eth.getAccounts();
    console.log('Sending from Metamask account: ' + accounts[0]);
    const ethAddress= await storeHash.options.address;
    setcontractAdd(ethAddress);
    storeHash.methods.sendHash(hash).send({from: accounts[0]}, (err, transactionHash) => {
        settransactionHas(transactionHash);
    })
    setblockNum("Waiting...")
    setgasUsed("Waiting...")
}



const getRec = async() => {
   let tx = await web3.eth.getTransactionReceipt(transactionHas);
   if(tx != null){
       console.log(tx.gasUsed)
       setgasUsed(tx.gasUsed);
       console.log(tx.blockNumber)
       setblockNum(tx.blockNumber);
   }
   setClick(true);
}

const url = `https://ropsten.etherscan.io/address/${contractAdd}`;


    return (
        <>
		<div class='containerr  pt-5 mt-5'>
		<form onSubmit={handleSubmit} >
            <input type="file" onChange={captureFile} />
			<button type="submit" > Upload </button>
		</form>
		</div>
		<div class='containerr pt-5 text-center'>
			{hash.length !== 0 ?<h5>Hash: <code>{hash}</code></h5> : null}
		</div>
		<div class='containerr pt-5 text-center'>
			<button type="submit" onClick={getRec}>Get Receipt</button>
		</div>
        {
            click ? <div><table class="table container w-50 table-bordered table-dark table-striped text-center mt-5">
            <tbody >
           <tr>
               <td>IPFS Hash</td>
               <td>{hash}</td>
           </tr>
           <tr>
               <td>Contract Address</td>
                
               <td><ExternalLink class='ea' href={url}>{contractAdd}</ExternalLink></td>
           </tr>
       <tr>
           <td>Tx Hash</td>
           <td>{transactionHas}</td>
       </tr>
       <tr>
               <td>Block Number</td>
               <td>{blockNum}</td>
           </tr>
       <tr>
           <td>Gas Used</td>
           <td>{gasUsed}</td>
       </tr>
       </tbody>
    </table></div> : null
        }
		
        </>
    )
}

export default Upload
