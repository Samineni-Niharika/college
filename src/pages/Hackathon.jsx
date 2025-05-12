import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

const api='https://eventapi-auth.onrender.com/api/hackathons/'
import hack1 from '../assets/hack1.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Hackathon() {
    const [data,setData] = useState([]);
    const [upcoming,setupcoming] = useState(false);
    const [ongoing,setongoing] = useState(false);

    useEffect(() => {
      fetch('https://eventapi-auth.onrender.com/api/hackathons/')
        .then((res) => res.json())
        .then((data) => {
        //   console.log(data);
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
    console.log(upco)
    let ongo=data.filter(item => new Date(item.start_date) <= new Date()).filter((item)=>item.end_date>=new Date())   
    console.log(ongo)        
    return (
        <div className=''>
             <img src={hack1} alt="" className='h-[40vw] w-full object-cover'/>
             <div className=' text-[#fb9039]'>
                       <div className='bg-[#162a3f] top-[70%] transform -translate-y-1/2 right-8 rotate-90 origin-right rounded-4xl  z-10 flex justify-center gap-2  fixed'>
                        <Link to='/hackathons' onClick={ongoingHandler} className='hover:bg-white  hover:scale-105 hover:rounded-4xl p-3'>Ongoing </Link>
                        <Link onClick={upcomingHandler} className='hover:bg-white hover:rounded-4xl hover:scale-105 p-3' to='/hackathons'>Upcoming </Link>
                        
                       </div>
             </div>

             {upcoming ? 
            <div className='mt-12 text-black-600'>
            <h1 className='text-center font-black text text-4xl my-8 text-[#4a85c3]'>UPCOMING HACKATHONS</h1>
            {
                upco.map((item)=>(
                    <div key={item.Sno}>
                        <div className='mx-auto text-black w-[75%]'>
                        <h1 className='font-black text-[#fb9039] text-2xl underline'>{item.Name}</h1>
                        <div className='p-5  hover:scale-105 bg-[#d2ddea] hover:border-0  border-blue-200 border drop-shadow-lg rounded-xl m-2'>
                            <p><span className=' font-black'>Description: </span>{item.Description}</p>
                            <p><span className=' font-black'>Starting Date: </span>{item.start_date}</p>
                            <p><span className=' font-black'>End Date:</span>{item.end_date}</p>
                            <p><span className=' font-black'>Registration Deadline: </span>{item.reg_deadline}</p>
                            <p><span className=' font-black'>Registration Fee: </span>{item.reg_fee}</p>
                            <p><span className=' font-black'>Location: </span>{item.location}</p>
                            <p><span className=' font-black'>Prize Pool:</span> {item.prize}</p>
                            <p className=' whitespace-pre-line break-words text-blue-600'><span  className=' text-black font-black'>Link: </span>{item.reg_link}</p>
                        </div>
                        </div>
                        <br />
                    </div>
                    
                ))
                
            }
            </div>: ''}
            {ongoing ? 
            <div className='mt-12 text-black-600'>
            <h1 className='text-center font-black text text-4xl my-8 text-[#4a85c3]'>ONGOING HACKATHONS</h1>
            {
                ongo.map((item)=>(
                    <div key={item.Sno}>
                        <div className='mx-auto text-black w-[75%]'>
                        <h1 className='font-black text-[#fb9039] text-2xl underline'>{item.Name}</h1>
                        <div className='p-5  hover:scale-105 bg-[#d2ddea] hover:border-0  border-blue-200 border drop-shadow-lg rounded-xl m-2'>
                            <p><span className=' font-black'>Description: </span>{item.Description}</p>
                            <p><span className=' font-black'>Starting Date: </span>{item.start_date}</p>
                            <p><span className=' font-black'>End Date:</span>{item.end_date}</p>
                            <p><span className=' font-black'>Registration Deadline: </span>{item.reg_deadline}</p>
                            <p><span className=' font-black'>Registration Fee: </span>{item.reg_fee}</p>
                            <p><span className=' font-black'>Location: </span>{item.location}</p>
                            <p><span className=' font-black'>Prize Pool:</span> {item.prize}</p>
                            <p className=' whitespace-pre-line break-words text-blue-600'><span  className=' text-black font-black'>Link: </span>{item.reg_link}</p>
                        </div>
                        </div>
                        <br />
                    </div>
                    
                ))
                
            }
            </div>: ''}

            <div className='mt-12 text-black-600'>
                <h1 className='text-center font-black text text-4xl my-8 text-[#4a85c3]'>ALL HACKATHONS</h1>
            {
                data.map((item)=>(
                    <div key={item.Sno}>
                        <div className='mx-auto text-black w-[75%]'>
                        <h1 className='font-black text-[#fb9039] text-2xl underline'>{item.Name}</h1>
                        <div className='p-5  hover:scale-105 bg-[#d2ddea] hover:border-0  border-blue-200 border drop-shadow-lg rounded-xl m-2'>
                            <p><span className=' font-black'>Description: </span>{item.Description}</p>
                            <p><span className=' font-black'>Starting Date: </span>{item.start_date}</p>
                            <p><span className=' font-black'>End Date:</span>{item.end_date}</p>
                            <p><span className=' font-black'>Registration Deadline: </span>{item.reg_deadline}</p>
                            <p><span className=' font-black'>Registration Fee: </span>{item.reg_fee}</p>
                            <p><span className=' font-black'>Location: </span>{item.location}</p>
                            <p><span className=' font-black'>Prize Pool:</span> {item.prize}</p>
                            <p className=' whitespace-pre-line break-words text-blue-600'><span  className=' text-black font-black'>Link: </span>{item.reg_link}</p>
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

export default Hackathon


