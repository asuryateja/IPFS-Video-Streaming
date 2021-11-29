import React from 'react'
import './Main.css'
import Lottie from "react-lottie";
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css'
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
        <ToastContainer style = {{marginTop: "5%"}}
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
        <Lottie options={defaultOptions} height={400} width={400} />
        <About />
        </div>
        </>
    )
}

export default Main
