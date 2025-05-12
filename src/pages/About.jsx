import React from 'react'
import Data from '../components/Data'
import { Link } from 'react-router-dom'
import hack from '../assets/hack.png'
import eve from '../assets/eve.png'
import Imageset from '../components/Imageset'
import club from '../assets/club.png'

import { FaArrowCircleRight } from "react-icons/fa";

function About({toggle1}) {
    return (
        <>
        <div className={`${toggle1 ? `text-white`:`text-[#2f3238]`}`}>
            <Imageset />
            <div className='p-10 text-lg w-full justify-center'>
                <h1>
                Welcome to the official GNITS Clubs, Hackathons, and Events platform! This website 
                serves as a one-stop destination for students to stay updated on all the exciting
                activities happening within GNITS. Whether you're looking for upcoming hackathons, 
                club events,or campus-wide competitions, you'll find everything here in one place.
                </h1>
                <ul className='list-disc p-15'>
                    <li > Explore College Clubs – Learn about various student clubs at GNITS, their activities, and how to join.</li>
                    <li>Hackathon Hub – Stay informed about ongoing and upcoming hackathons, along with event details, rules, and schedules.</li>
                    <li>Get real-time updates on technical and cultural events organized by different clubs and departments.</li>
                    <li>Quickly find events based on category, date, or organizing club with sorting, filtering, and pagination.</li>
                </ul>
                <h1>
                This platform is designed to make event discovery simple and efficient, ensuring that 
                every GNITS student can participate, engage, and contribute to the vibrant campus community.
                Stay connected, explore opportunities, and make the most of your college experience! 
                </h1>
                <div className='flex flex-wrap justify-center items-center gap-10 lg:gap-20 mt-24 mb-10'>
    
                    <div className='flex-wrap lg:flex-nowrap flex justify-center gap-2 w-full  mx-auto  items-center'>
                        <img className='mx-auto inline-block  h-80 object-cover'  src={club} alt="" />
                        <div className='mt-5 mx-auto'>
                            <h1 className='text mb-4 border border-b-2 text-center text-5xl font-black bg-gradient-to-r from-[#fb9039] to-[#fb9039a7] bg-clip-text text-transparent '>Clubs</h1>
                                <div className='p-5 text-xl'>
                                    <h1>Technical Clubs</h1>
                                    <h1>Sports Clubs</h1>
                                    <h1>Cultural Clubs</h1>
                                    <h1>Community-Service Clubs</h1>
                                    <Link to='/clubs' ><h1 className='mt-3 cursor-pointer gap-3  font-bold flex items-center text hover:underline ' ><FaArrowCircleRight className='text-[#646c79] hover:text-[#7d7d7d] text-3xl ' />Explore The Clubs</h1></Link>
                                </div>
                        </div>
                    </div>
                
                
                    <div className='flex-wrap lg:flex-nowrap flex justify-center gap-2 w-full  mx-auto  items-center'>
                        <img className='mx-auto inline-block  h-80 object-cover'  src={eve} alt="" />
                        <div className='mt-5 mx-auto'>
                            <h1 className='text mb-4 text-center text-5xl font-black bg-gradient-to-r from-[#fb9039] to-[#fb9039a7] bg-clip-text text-transparent '>Events</h1>
                                <div className='p-5 text-xl'>
                                    
                                    <Link to='/events' ><h1 className='mt-3 cursor-pointer gap-3  font-bold flex items-center text hover:underline ' ><FaArrowCircleRight className='text-[#646c79] hover:text-[#7d7d7d] text-3xl ' />Explore The Events</h1></Link>
                                </div>
                        </div>
                    </div>
                    <div className='flex-wrap lg:flex-nowrap flex justify-center gap-2 w-full  mx-auto  items-center'>
                        <img className='mx-auto inline-block  h-80 object-cover'  src={hack} alt="" />
                        <div className='mt-5 mx-auto'>
                            <h1 className='text mb-4 text-center text-5xl font-black bg-gradient-to-r from-[#fb9039] to-[#fb9039a7] bg-clip-text text-transparent '>Hackathons</h1>
                                <div className='p-5 text-xl'>
                                    
                                    <Link to='/hackathons' ><h1 className='mt-3 cursor-pointer gap-3  font-bold flex items-center text hover:underline ' ><FaArrowCircleRight className='text-[#646c79] hover:text-[#7d7d7d] text-3xl ' />Explore The Hackathons</h1></Link>
                                </div>
                        </div>
                    </div>
                    </div>
                <Link to='/clubs'>
                    
                </Link>
            </div>
            
            <Data/>
        </div>
        </>
    )
}

export default About
