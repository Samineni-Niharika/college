import React from 'react'
import Events from '../components/Events';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Clubsaccess from '../components/Clubsaccess';
function Otherevents() {
    const [data,setData] = useState([]);
      useEffect(() => {
                    fetch('https://eventapi-auth.onrender.com/api/clubevents/')
                      .then((res) => res.json())
                      .then((data) => {
                        
                        setData(data) 
                      });
                  }, []);  
                  const [data1,setData1] = useState([]);
      useEffect(() => {
                    fetch('https://eventapi-auth.onrender.com/api/otherevents/')
                      .then((res) => res.json())
                      .then((data) => {
                        setData1(data) 
                      });
                  }, []);  
            return (
                
                <div className=''>
                  <div className=' text-[#fb9039]'>
                  
                       <div className='bg-[#162a3f] top-[70%] transform -translate-y-1/2 right-12 rotate-90 origin-right rounded-4xl  z-10 flex justify-center gap-2  fixed'>
                        <Link to='/clubevents' className='hover:bg-white  hover:scale-105 hover:rounded-4xl p-3'>Club Events</Link>
                        <Link className='hover:bg-white hover:rounded-4xl hover:scale-105 p-3' to='/otherevents'>Other Events</Link>
                        
                       </div>
                       
                        
                  </div>
                  <div className=' pt-36  text-black-600'>
                      <h1 className='text-center text-[#4a85c3] underline font-black text-4xl'>Club Events</h1> 
                    {
                        data.map((item)=>(
                            <div key={item.id}>
                                <div className='mx-auto text-black  w-[65%]'>
                                <h1 className='my-6 font-black text-[#fb9039] text-2xl underline'>{item.Name}</h1>
                                <div className='p-5  hover:scale-105 bg-[#d2ddea] hover:border-0  border-blue-200 border drop-shadow-lg rounded-xl m-2'>
                                    <p className='text-ellipsis whitespace-pre-line break-words'><span className=' font-black'>Description: </span>{item.Description}</p>
                                    <p><span className=' font-black'>Date: </span>{item.Date}</p>
                                    <p><span className=' font-black'>Club Name: </span>{item.Club}</p>
                                </div>
                                </div>
                                <br />
                            </div>
                            
                        ))
                    }
                    </div>
                    <div className=' pt-36  text-black-600'>
                      <h1 className='text-center text-[#4a85c3] underline font-black text-4xl'>Other Events</h1> 
                    {
                        data1.map((item)=>(
                           
                               
                                   <div key={item.id}>
                                            <div className='mx-auto text-black  w-[65%]'>
                                            <h1 className='my-6 font-black text-[#fb9039] text-2xl underline'>{item.Name}</h1>
                                            <div className='p-5  hover:scale-105 bg-[#d2ddea] hover:border-0  border-blue-200 border drop-shadow-lg rounded-xl m-2'>
                                                <p className='text-ellipsis whitespace-pre-line break-words'><span className=' font-black'>Description: </span>{item.description}</p>
                                                <p><span className=' font-black'>Date: </span>{item.date}</p>
                                                
                                            </div>
                                            </div>
                                            <br />
                                        
                                    
                            </div>
                            
                        ))
                    }
                    </div>
                   
                    <Link to='/workshops'><h1 className=' mt-3 text-center cursor-pointer  font-bold  text ' ><span className='my-8   text-[#fb9039] bg-[#162a3f] p-3 hover:bg-[#162a3fc7] rounded-2xl w-32 mx-auto'>Explore WorkShops </span></h1></Link>
                   
                </div>
            )

}

export default Otherevents
