import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
const api='https://eventapi-auth.onrender.com/api/clubevents/'
function DetailesClubs() {
    const {name}=useParams();
    const [data,setData] = useState([]);
    const [upcoming,setupcoming] = useState(false);
           const [ongoing,setongoing] = useState(false);
    
    useEffect(()=>{
        fetch(api).then((res) => res.json())
    .then((data) => {
      setData(data)
    });
    },[]) 
    function ongoingHandler(){
        setongoing(!ongoing)
    }
    function upcomingHandler(){
        setupcoming(!upcoming)
    }


    let upco=data.filter(item => new Date(item.start_date) >= new Date())
    console.log(upco)
    let ongo=data.filter(item => new Date(item.start_date) <= new Date()).filter((item)=>item.end_date>=new Date())   
    console.log(ongo) 
    
    let clubname=data.filter((item)=>item.Club==name)
    let x = clubname.length > 0 ? clubname[0].recrut : null;

    return (
        
        <div>
           
            <div className='min-h-screen w-[65%] pt-36 text-black mx-auto' >
            <div className=' text-[#fb9039]'>
                              
                                   <div className='bg-[#162a3f] top-[70%] transform -translate-y-1/2 right-12 rotate-90 origin-right rounded-4xl  z-10 flex justify-center gap-2  fixed'>
                                    <button onClick={ongoingHandler} className='hover:bg-white  hover:scale-105 hover:rounded-4xl p-3'>ongoing</button>
                                    <button className='hover:bg-white hover:rounded-4xl hover:scale-105 p-3' onClick={upcomingHandler}>upcoming</button>
                                    
                                   </div>
                                   
                                    
                              </div>
           
           <h1 className='text-center text-[#4a85c3] text pb-12 underline font-black text-4xl text'>{name}</h1>
                {
                x=="y" ? <h1 className='top-32 right-12 fixed bg-emerald-400 hover:bg-emerald-200 p-2 rounded-xl'>Club is recurting</h1>: ''
                
               }
                {upcoming ? 
                        <div className='pt-36  text-black-600'>
                            <h1 className='text-center font-black text text-4xl my-8 text-[#4a85c3]'>UPCOMING CLUB EVENTS</h1>
                        {
                            upco.map((item)=>(
                                <div key={item.Sno} className='my-6'>
                                <h1 className='text-[#fb9039] text-2xl  font-bold'>{item.Name}</h1>
                                <div className='bg-[#d2ddea] rounded-xl p-5'>
                                   
                                    <h1>{item.Description}</h1>
                                    <h1>Date: {item.Date}</h1>
                                    
                                    
                                </div>
                                
                            </div>
                            ))
                            
                        }
                        </div>: ''}
                        {ongoing ? 
                        <div className='pt-36  text-black-600'>
                        <h1 className='text-center font-black text text-4xl my-8 text-[#4a85c3]'>ONGOING CLUB EVENTS</h1>
                        {
                            ongo.map((item)=>(
                                <div key={item.Sno} className='my-6'>
                                <h1 className='text-[#fb9039] text-2xl  font-bold'>{item.Name}</h1>
                                <div className='bg-[#d2ddea] rounded-xl p-5'>
                                   
                                    <h1>{item.Description}</h1>
                                    <h1>Date: {item.Date}</h1>
                                    
                                    
                                </div>
                                
                            </div>
                                
                            ))
                            
                        }
                        </div>: ''}

               <h1 className='text-center text-[#4a85c3] text font-bold text-2xl text'>All details</h1>
         {  
         clubname.map((item)=>(
           <div key={item.Sno} className='my-6'>
               <h1 className='text-[#fb9039] text-2xl  font-bold'>{item.Name}</h1>
               <div className='bg-[#d2ddea] rounded-xl p-5'>
                  
                   <h1>{item.Description}</h1>
                   <h1>Date: {item.Date}</h1>
                   
                   
               </div>
               
           </div>
           
         ))
         }
          
     
       </div>
        </div>
    )
}

export default DetailesClubs
