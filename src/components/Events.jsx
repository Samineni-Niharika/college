import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
function Events() {
    const [data,setData] = useState([]);
    const [upcoming,setupcoming] = useState(false);
        const [ongoing,setongoing] = useState(false);
        
            useEffect(() => {
              fetch('https://eventapi-auth.onrender.com/api/otherevents/')
                .then((res) => res.json())
                .then((data) => {
                  setData(data) 
                });
            }, []);
            
            
            function ongoingHandler(){
                setongoing(!ongoing)
            }
            function upcomingHandler(){
                setupcoming(!upcoming)
            }


            let upco=data.filter(item => new Date(item.start_date) >= new Date())
            // console.log(upco)
            let ongo=data.filter(item => new Date(item.start_date) <= new Date()).filter((item)=>item.end_date>=new Date())   
            // console.log(ongo) 
            
            
    return (
        <div>
             <div className=' text-[#fb9039]'>
                  <div className='bg-[#162a3f] top-[68%] transform -translate-y-1/2 left-12 -rotate-90 origin-left rounded-4xl  z-10 flex justify-center gap-2  fixed'>
                        <button  onClick={ongoingHandler} className='hover:bg-white  hover:scale-105 hover:rounded-4xl p-3'>Ongoing </button>
                        <button onClick={upcomingHandler} className='hover:bg-white hover:rounded-4xl hover:scale-105 p-3'>Upcoming </button>
                        
                       </div>
                       <div className='bg-[#162a3f] top-[70%] transform -translate-y-1/2 right-12 rotate-90 origin-right rounded-4xl  z-10 flex justify-center gap-2  fixed'>
                        <Link to='/clubevents' className='hover:bg-white  hover:scale-105 hover:rounded-4xl p-3'>Club Events</Link>
                        <Link className='hover:bg-white hover:rounded-4xl hover:scale-105 p-3' to='/otherevents'>Other Events</Link>
                        
                       </div>
                       
                        
                  </div>
           
                              
                                   
                                    
                            
                              {upcoming ? 
                        <div className='pt-36  text-black-600'>
                            <h1 className='text-center font-black text text-4xl my-8 text-[#4a85c3]'>UPCOMING EVENTS</h1>
                        {
                            upco.map((item)=>(
                                <div key={item.Sno}>
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
                                    <br />
                                </div>
                                
                            ))
                            
                        }
                        </div>: ''}
                        {ongoing ? 
                        <div className='pt-36  text-black-600'>
                        <h1 className='text-center font-black text text-4xl my-8 text-[#4a85c3]'>ONGOING EVENTS</h1>
                        {
                            ongo.map((item)=>(
                                <div key={item.Sno}>
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
                                    <br />
                                </div>
                                
                            ))
                            
                        }
                        </div>: ''}
           
            <div className=' pt-32  text-black-600'>
                        
                        <h1 className='text-center  text-[#4a85c3] underline font-black text-4xl'>Other Events</h1> 
    
                        {
                            data.map((item)=>(
                                <div key={item.Sno}>
                                    <div className='mx-auto text-black pt-8 w-[65%]'>
                                    <h1 className='my-6 font-black text-[#fb9039] text-2xl underline'>{item.Name}</h1>
                                    <div className='p-5  hover:scale-105 bg-[#d2ddea] hover:border-0  border-blue-200 border drop-shadow-lg rounded-xl m-2'>
                                        <p className='text-ellipsis whitespace-pre-line break-words'><span className=' font-black'>Description: </span>{item.description}</p>
                                        <p><span className=' font-black'>Event Date: </span>{item.date}</p>
                                    </div>
                                    </div>
                                    <br />
                                    
                                </div>
                                
                            ))
                        }
                        </div>
                        </div>
    )
}

export default Events
