import React from 'react'
import { ExternalLink } from 'react-external-link';
import Typical from 'react-typical'
import './About.css'



function About() {
    const style = {
        fontWeight: 'bold',
        textDecoration: 'none !important'
    }
    return (
        
        <>
            <div class="container mt-5">
                <h5>
            A Decentralized File Streaming Service built on the Ethereum Blockchain.
            To Experience the power of the IPFS, you need to have an Ethereum Wallet. <br/><br/>
            Built using Ethereum Blockchain 🌍 + IPFS 📦 + ReactJS ⚛️ + Web3⚡+ Hardhat ⚒️.
                </h5>
                <div class='text-center'>
                    
                <button type="button"  class="btn d-flex flex-start btn-light mt-5" style={style}  data-toggle="button" aria-pressed="false" autocomplete="off">
                <ExternalLink class='e' href="https://github.com/0ffs3c/IPFS-Video-Streaming.git">Github</ExternalLink>
                </button> 
            
                </div>
            </div>
        </>
    )
}

export default About
