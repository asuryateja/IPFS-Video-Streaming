import React , {useState}from 'react'
import ReactPlayer from 'react-player'


function Stream() {
    const style = {
        margin: '0 auto'
    }
    const [url, getUrl] = useState('QmbLG7qNcbR853Yka7pmHFUWWRATLQvHLXecFtCupnvhta')
    const videoUrl = `https://ipfs.io/ipfs/${url}`;
    console.log(videoUrl)
    return (
        <>
            <div class='container  pt-5'>
                <div class="row">
			        <div class="col-md-12 text-center align-items-center">
                        <ReactPlayer style={style} width='750px' height='500px' url={videoUrl} playIcon playing='true' controls='true'  />
                        <form class="form-inline  " >
                <div class="form-group mb-2">
                    <label for="staticEmail2" class="sr-only pt-5" onChange={event => getUrl(event.target.value)}>Enter Hash:</label>
                </div>
                <div class="form-group ">
                <input type="text" style={{width: '50%', borderRadius: '5px', justifyContent: 'center', textDecoration: 'none', borderStyle: 'none', textAlign: 'center'}}  class=" text-white bg-dark mt-2 mb-2 " id="staticEmail2" />
                </div>
                <button type="submit" class="btn btn-light mb-2 mt-3">Submit</button>
                </form>
			        </div>
		        </div>
            </div>
        </>
    )
}

export default Stream
