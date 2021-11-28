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
		
        </>
    )
}

export default Upload
