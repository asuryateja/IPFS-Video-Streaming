import React from 'react'
import Typical from 'react-typical'
import './Typicaal.css'

function Typicaal() {
    return (
        <>
        <div class="container text-center pt-5">
        <h1 className="text"><Typical
            steps={['Decentralized', 1000, 'Decentralized File Streaming Service', 500]}
            loop={Infinity}
            wrapper="p"
        /></h1>
        </div>
        </>
    )
}

export default Typicaal
