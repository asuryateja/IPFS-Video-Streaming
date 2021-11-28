import React from 'react'
import './Header.css'
import ipfs from './ipfs.svg'
import {Link} from 'react-router-dom'

function Header() {
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
                        <div class='d-flex flex-row'>
                            
                        <Link style={{ textDecoration: 'none' , fontWeight: 'bold', color: 'white', paddingRight: '15px'}} to='/stream'>Hash</Link>
                        
                        <Link style={{ textDecoration: 'none' , fontWeight: 'bold', color: 'white', paddingLeft: '15px'}} to='/upload'>Upload</Link>
                        </div>
                </div>
            </nav>
        </>
    )
}

export default Header
