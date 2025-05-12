import React from 'react'
import { Link } from 'react-router-dom'

import Clubsdetails from './Clubsdetails'
import Clubsint from './Clubsint';
function Clubsintro() {
    return (
        <>
           
        <div className='p-5 w-full flex justify-center'>
                <div className="grid grid-flow-row  md:grid-cols-2 lg:grid-cols-4 content-center justify-center text-[#2f3238] gap-15 lg:gap-5 xl:gap-10">
                    {
                        Clubsdetails.map((club)=><Clubsint key={club.category} name={club.category} clubnames={club.clubnames}/>)
                    }
                </div>
        </div>

        </>
    )
}

export default Clubsintro
