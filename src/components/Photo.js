import React, {useState}from 'react'

function Photo() {
    const style = {
        margin: '0 auto'
    }
    const [url, getUrl] = useState('QmQdPv397hXgXYj7RLimTmXEHiQ3C257NUB8NSnW1H4dKE');
    const link = (e) => {
        const val = e.target.value;
        getUrl(val);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(url);
        
    }

    const picUrl = `https://ipfs.io/ipfs/${url}`;
    console.log(picUrl)

    return (
        <>
            <div class='container  pt-5'>
                <div class="row">
			        <div class="col-md-12 text-center align-items-center">
                    <img src={picUrl} class="img-fluid" alt="Responsive image" />
                        <form class="form-inline  " onSubmit={handleSubmit} >
                            <div class="form-group mb-2">
                                <label htmlFor="staticEmail2" class="sr-only pt-5">Enter Hash:</label>
                            </div>
                            <div class="form-group ">
                                <input type="text"   onChange={link} autoComplete='off' style={{width: '50%', borderRadius: '5px', justifyContent: 'center', textDecoration: 'none', borderStyle: 'none', textAlign: 'center', color: 'white', marginTop: '2px'}}  class=" text-white bg-dark mt-2 mb-2 " id="staticEmail2" />
                            </div>
                            <button type="submit" class="btn btn-light mb-2 mt-3">Submit</button>
                        </form>
			        </div>
		        </div>
            </div>
        </>
    )
}

export default Photo
