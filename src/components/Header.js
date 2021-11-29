import React, {useState} from 'react'
import '../../node_modules/react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
import './Header.css'
import ipfs from './ipfs.svg'
import {Link} from 'react-router-dom'
const Web3 = require('web3')





function Header() {
    const [text, setText] = useState('Connect')
    const [connected, setConnected] = useState(false)
    const ethEnabled = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setText(accounts[0]);
            setConnected(true)
          }
          else{
            toast.dark('Please Install MetaMask', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          }
    }

    return (
        <>
            <nav class="navbar  navbar-custom">
                <div class="container">
                        <Link to='/'><img
                            src={ipfs}
                            height="40"
                            alt=""
                            className="filter-green"
                            loading="lazy"
                        /></Link>
                        <div class='d-flex flex-row align-items-center'>
                     {
                         connected ?<div> <Link style={{ textDecoration: 'none' , fontWeight: 'bold', color: 'white', paddingLeft: '15px'}} to='/upload'>Upload</Link>
                         <Link style={{ textDecoration: 'none' , fontWeight: 'bold', color: 'white', paddingLeft: '15px', paddingRight: '15px'}} to='/stream'>Video</Link>
                         <Link style={{ textDecoration: 'none' , fontWeight: 'bold', color: 'white', paddingRight: '15px'}} to='/photo'>Photo</Link>
                         <button type="button" id='loginButton' class='bts' onClick={ethEnabled} style={{borderRadius: '10px', padding: "5px", fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'}}><span class="blink_me"></span>{ ' '+ text}</button>
                         </div> : <button type="button" id='loginButton' onClick={ethEnabled} style={{borderRadius: '10px', padding: "5px", fontWeight: 'bold', marginLeft: '10px', marginRight: '10px'}}>{text}</button>
                     }
                                               
                        </div>
                </div>
            </nav>
        </>
    )
}

export default Header
