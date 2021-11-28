import React from 'react'
import './Main.css'
import Lottie from "react-lottie";
import animationData from './blockchain.json'
import Typicaal from './Typicaal';
import About from './About';

function Main() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          // preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <>
        <Typicaal />
        <div class='container pt-5'>
        <Lottie options={defaultOptions} height={400} width={400} />
        <About />
        </div>
        </>
    )
}

export default Main
