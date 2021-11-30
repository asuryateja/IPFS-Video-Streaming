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
        </div>
        <div class='container py-5'>
          <div class='row align-items-center'>
            <div class='tx col-lg-6 col-md-6 col-12 w-50'>
              <About />
              </div>
              <div class='imgg col-lg-6 col-md-6 col-12 w-50'>
              <Lottie options={defaultOptions} height={400} width={400} />
              </div>
          </div>
        </div>
        </>
    )
}

export default Main
