import React from 'react'
import { Link } from 'react-router-dom'
function Data() {
    return (
        <>
        <div className='px-10 mt-10'>
        <div className='md:flex   bg-[#d2ddea] p-4 shadow-lg rounded-xl justify-between gap-15 text-[#2f3238]'>
            <div className='py-4'>
                <h1 className='underline my-4'>Social Links</h1>
                <h1 className='underline my-4'>Reach us</h1>
                <p>G. Narayanamma Institute of Technology & Science,<br /> Autonomous, Shaikpet, Hyderabad – 500104</p>
                <p className='underline text-sm'>+91-040-29565856</p>
                <p className='underline text-sm'>Principal@gnits.ac.in</p>
            </div>
            <div className='py-4'>
                <h1 className='underline my-4'>Bachelors Progams</h1>
                <p className='my-2'>
                    Computer Science Engineering <br />
                    Computer Science & Engineering (Artificial Intelligence & Machine Learning)<br />
                    Computer Science & Engineering (Data Science)<br />
                    Computer Science and Technology<br />
                    Information Technology<br />
                    Electronics and Communication Engineering<br />
                    Electrical and Electronics Engineering<br />
                    Electronics and Telematics Engineering
                    </p>
            </div>
            <div className='py-4'>
                <h1 className='underline my-4'>Quick Links</h1>
                    <p className='my-2'><Link to="/">HOME</Link></p>
                    <p className='my-2' ><Link to="/about">ABOUT</Link></p> 
                    <p className='my-2'><Link to="/clubs">CLUBS</Link></p>
                    <p className='my-2'><Link to="/events">EVENTS</Link></p>
                    <p className='my-2'><Link to="/hackathons">HACKATHONS</Link></p>
                    
            </div>
        </div>  
        </div>
        
        </>
    )
}

export default Data
