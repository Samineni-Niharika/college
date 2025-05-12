import React from 'react'
import college from '../assets/coll.png'
function Imageset() {
    return (
        <div>
            <div className='overflow-hidden'>
                <img className=' object-cover h-[500px] w-full' src={college} alt="" />
                <p className='text text-4xl sm:text-6xl md:text-7xl font-bold top-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute text-white'>─────GNITS─────</p>   
                </div>
        </div>
    )
}

export default Imageset
