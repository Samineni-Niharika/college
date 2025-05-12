import React from 'react'
import Clubsintro from '../components/Clubsintro'
import club from '../assets/video.mp4'
import Data from '../components/Data'


import { Link } from 'react-router-dom'

function Clubs() {
   
    return (
        <>
            <div>
                <video src={club} loop autoPlay muted className='w-100vw max-w-full h-50vh mb-12'></video>
            <Clubsintro />
            
            <h1 className='text-center text cursor-pointer font-bold  bg-[#162a3f] text-[#fb9039]  my-8 rounded-2xl w-[30%] mx-auto p-2' ><Link to='/workshops'>Explore WorkShops</Link></h1>
            
            <Data/>
            </div>

        </>
    )
}

export default Clubs
