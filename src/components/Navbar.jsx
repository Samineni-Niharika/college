import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useState,useEffect } from 'react'
import Scrollbar from './scrollbar'
function Navbar({toggle1,handletoggle,data}) {
    const [isSet,setisset]=useState(false)
   
    
    useEffect(() => {
        function handleScroll(){
          if (window.scrollY-window.length > 200 ) {
            setisset(true);
          } else {           
            setisset(false);
          }
         }
        window.addEventListener('scroll',handleScroll)
        });
         
    return (
        <>
        <div>
          <div id='parent' className={`w-full  fixed z-10 top-0 left-0 `}  >
            <div className={`${isSet ? 'bg-[#162a3f]':''} md:py-6 lg:py-2 py-3`}>

           
            <div className='font-bold text-white text-center items-center flex justify-around'>
            <div className='flex items-center my-2 gap-5 '>
               <Link to='/'> <img className='rounded-full h-14  md:h-16' src={logo} alt="Gnits logo"  /></Link>
                <h1 className={`text-4xl  lg:text-4xl ${!isSet ? `text font-black text-[#fb9039]`:'text'}`} 
>GNITS  HUB</h1>
            </div>
            <Sidebar />
                <div className='hidden lg:flex gap-12 text-lg my-2 items-center'>
                    <NavLink className="text"  to="/">HOME</NavLink>
                    <NavLink className="text"  to="/about">ABOUT</NavLink>
                    <NavLink className="text"  to="/clubs">CLUBS</NavLink>
                    <NavLink className="text"  to="/events">EVENTS</NavLink>
                    <NavLink className="text"  to="/hackathons">HACKATHONS</NavLink>
                   
          
                </div>
                
            </div> 
            </div> 
            
            <Scrollbar data={data} />
          
           
          </div>
         
          </div>
        </>
    )
}

export default Navbar
