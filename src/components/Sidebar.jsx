import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { TiDeleteOutline } from "react-icons/ti";
function Sidebar() {
    const [open,setopen]=useState(false);
    function handling(){
        setopen(!open); 
    }
    return (
        <div>
            <div className='lg:hidden text-4xl block   text-[#fb9039]'>
                <button onClick={handling} className='cursor-pointer hover:scale-110 hover:text-white' >
               { open? ' ':<IoMdMenu />}
                </button>
            </div>
            {open && (
                <div onClick={handling} className='absolute p-8 top-0 right-0 w-64 h-screen colour text-white'>
                    <button onClick={handling}  className='' >
                            { !open? '':<h1 className='flex items-center hover:scale-130 text-3xl text'><TiDeleteOutline className='text-5xl'/>close</h1>}
                    </button>
                    
                    
                    
                    <ul className='flex pt-20 flex-col'>
                    <NavLink className=' py-2 text'  to="/">HOME</NavLink>
                    <NavLink className='py-2 text' to="/about">ABOUT</NavLink>
                    <NavLink className='py-2 text'  to="/clubs">CLUBS</NavLink>
                    <NavLink className='py-2 text' to="/events">EVENTS</NavLink>
                    <NavLink className='py-2 text' to="/hackathons">HACKATHONS</NavLink>
                       
                       
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Sidebar
