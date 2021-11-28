import React, {useState} from 'react'
import ipfs from './ipfs'
import './Upload.css'


function Upload() {
const [hash, setHash] = useState([]);
const [file, setFile] = useState(null);
const [isCopied, setIsCopied] = useState(false);
const reader = new window.FileReader();

const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

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
}

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
			<button type="submit">Get Receipt</button>
		</div>
		<table class="table container w-50 table-bordered table-dark table-striped text-center mt-5">
		<tbody >
       <tr>
           <td>IPFS Hash</td>
           <td>{hash}</td>
       </tr>
       <tr>
           <td>Contract Address</td>
           <td>{}</td>
       </tr>
   <tr>
       <td>Tx Hash</td>
       <td>{}</td>
   </tr>
   <tr>
           <td>Block Number</td>
           <td>{}</td>
       </tr>
   <tr>
       <td>Gas Used</td>
       <td>{}</td>
   </tr>
   </tbody>
</table>
        </>
    )
}

export default Upload
