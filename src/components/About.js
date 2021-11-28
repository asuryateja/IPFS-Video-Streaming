import React from 'react'
import Typical from 'react-typical'
import {Link} from 'react-router-dom'


function About() {
    const style = {
        fontWeight: 'bold'
    }
    return (
        
        <>
            <div class="container text-center mt-5">
                <h4>
            A Decentralized Video Streaming Service built over  <h4  class='pt-2' className="text"><Typical
            steps={['IPFS', 1000, 'IPFS For Smarter Experience.', 500]}
            loop={Infinity}
            wrapper="h5" /></h4>
                </h4>
                <div class='text-center'>
                    <Link to='/upload'>
                <button type="button" class="btn btn-light mt-5" style={style}  data-toggle="button" aria-pressed="false" autocomplete="off">
                    Get Started 
                </button> 
                </Link>
                </div>
            </div>
        </>
    )
}

export default About
