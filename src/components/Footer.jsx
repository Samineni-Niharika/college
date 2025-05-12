import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <>
             <div className='w-full bottom-0  mt-12 bg-[#162a3f] p-7 lg:p-5 '>
             <div className=' lg:text-5xl md:text-4xl text-4xl text-white flex justify-center items-center mb-7 gap-10 '>
            <FaFacebookF className='cursor-pointer' />
            <FaInstagram className='cursor-pointer'/>
            <FaYoutube className='cursor-pointer' />
            <FaLinkedinIn className='cursor-pointer' />
            </div> 
            <div className=' text-white text-center '>
                
                <div className='hidden  lg:flex items-center font-bold gap-10 text-sm my-2 justify-center'>
                    <Link className='hover:text-sky-300'  to="/">IQAC</Link>
                    <Link className='hover:text-sky-300'  to="/">NIRF</Link>
                    <Link className='hover:text-sky-300'  to="/">NAAC</Link>
                    <Link className='hover:text-sky-300'  to="/">NBA</Link>
                    <Link className='hover:text-sky-300'  to="/">AICTE</Link>
                    <Link className='hover:text-sky-300'  to="/">JNTUH</Link>
                    <Link className='hover:text-sky-300'  to="/">UGC</Link>
                </div>
                <h1 className='lg:text-sm cursor-pointer lg:mt-7'>&copy; 2024 G. Narayanamma Institute of Technology & Science.</h1>
            </div> 
            
          </div>
        </>
    )
}

export default Footer
