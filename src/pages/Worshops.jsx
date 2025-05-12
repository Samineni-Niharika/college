import React from 'react'
import { useState,useEffect } from 'react';
function Worshops() {
   const [data,setData] = useState([]);
           
               useEffect(() => {
                 fetch( 'https://eventapi-auth.onrender.com/api/otherworkshops/')
                   .then((res) => res.json())
                   .then((data) => {
                    
                     setData(data)
                   });
               }, []);
               return (
                   <div className=''>
                        
                        <div className=' text-[#fb9039]'>
                       
                        
             </div>
                       <div className=' pt-36 font-sans  text-black-600'>
                          
                       {
                           data.map((item)=>(
                               <div key={item.Sno}>
                                   <div className=' mx-auto  px-5 text-black w-[85%] sm:w-[75%]'>
                                   <h1 className='my-6 font-black text-[#fb9039] text-2xl underline'>{item.Name}</h1>
                                   <div className='p-5 hover:scale-105 bg-[#d2ddea]  hover:border-0  border-blue-200 border drop-shadow-lg rounded-xl m-2'>
                                       <div className='px-3'>
                                       <pre className=' font-sans break-words  text-ellipsis whitespace-pre-line'><span className=' font-black'>Description: </span>{item.Description}</pre>
                                       <p><span className=' font-black'>Event Date: </span>{item.date}</p>
                                       </div>
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

export default Worshops
