import React from 'react'
import { Link } from 'react-router-dom'

import { BsArrowRightShort } from "react-icons/bs";
function Clubsint({name,clubnames}) {
    return (
        <>
            <div className='md:w-64 hover:scale-105 bg-[#fbead6]   hover:border-0 mix border-orange-200 relative border  p-10 drop-shadow-lg rounded-xl m-2'>
                <h1 className='text font-bold underline my-4'>{name}</h1>
                {
                    clubnames.map((club)=><h1 className='my-2' key={club.name}><Link to={`/clubs/${club.name}`} className='flex' ><h1 className='cursor-pointer  items-center text hover:underline hover:scale-110 flex' ><BsArrowRightShort className='text-2xl' />{club.name}</h1></Link>
</h1>)
                }
                
    </div>
        </>
    )
}

export default Clubsint
