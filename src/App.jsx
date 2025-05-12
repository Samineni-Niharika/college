import { Route ,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Hackathon from "./pages/Hackathon"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Error from "./components/Error"
import Clubs from "./pages/Clubs"
import Footer from "./components/Footer"
import Otherevents from "./pages/Otherevents"
import Worshops from "./pages/Worshops"
import { useState } from "react"
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
import Events from "./components/events"
import Clubsaccess from "./components/Clubsaccess"


import DetailesClubs from "./components/DetailesClubs"
import {useEffect } from "react"
function App() {
   const [toggle1,settoggle1]=useState(false)
   const [data,setData] = useState([]);
   useEffect(() => {
    fetch('https://eventapi-auth.onrender.com/api/clubevents/')
      .then((res) => res.json())
      .then((data) => {
        setData(data) 
      });
  }, []);
   function handletoggle(){
    settoggle1(!toggle1)
    console.log(toggle1)
    
    
  }  
  return (
    <>
    
      <div className={`${toggle1 ? `bgblack text-white`:`bg`}`}>
        <Navbar data={data} />
      
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route  path="/hackathons" element={<Hackathon/>}/>
        <Route path="/about" element={<About toggle1={toggle1}/>} />
        <Route path="/clubs" element={<Clubs/>} />
        <Route path="/events" element={<Otherevents/>} />
        <Route path="/workshops" element={<Worshops/>} />
        <Route path="/otherevents" element={<Events/>} />
        <Route path="/clubevents" element={<Clubsaccess data={data}/>} />
        
        <Route path='/clubs/:name' element={<DetailesClubs />} />
        <Route path="*" element={<Error/>} />
      </Routes>
      
      <Footer/>
      </div>
      <div className=' left-2 fixed z-10 top-32   justify-center bg-white text-neutral-500 gap-1 items-center rounded-full border'>
          <div className={` p-2 ${!toggle1 ? `text-[#162a3f]`:'rounded-full text-white bg-[#162a3f]'}`}  onClick={handletoggle} >< CiLight/></div>
          <div className={` p-2 ${toggle1 ? `text-[#162a3f]`:'rounded-full bg-[#162a3f] text-white'}`} onClick={handletoggle}> <MdNightlight/></div>
      </div>
     
    </>
  )
}

export default App
