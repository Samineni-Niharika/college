import React from 'react'
import video from '../assets/video.webm'
import Data from '../components/Data'
import Aboutsec from '../components/Aboutsec'
import img from '../assets/bac.png'

function Home() {
    return (
        <>
            <div className=''>
               
                <video src={video} controls loop autoPlay muted className='w-100vw max-w-full h-100vh'></video>
                   <Aboutsec/>
                   <img className='p-0.5 object-cover h-[400px] w-full' src={img} alt="" />
                   <Data/>
            </div> 
        </>
    )
}

export default Home
