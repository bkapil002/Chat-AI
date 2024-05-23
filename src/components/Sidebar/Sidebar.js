import React, { useContext, useState } from 'react'
import './Sidevar.css'
import { MdOutlineMenu } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { LuHelpCircle } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import {Context} from  "../../context/Context"




const Sidebar = () => {
  const [extenad , setExtenad] = useState(false)
  const {onSent ,prevPromt,setRecent,newChat}=useContext(Context)
  const loadPcompt = async(userInput) =>{
    setRecent(userInput)
    await onSent(userInput)
  }
  return (
    <div className='sidebar'>
       <div className='top'>
         <div className='menu' onClick={()=>setExtenad(prev=>!prev)}><MdOutlineMenu /></div>

         <div onClick={()=>newChat()} className='new-chat'>
               <div className='add'><IoMdAdd /></div>
               {extenad?<p>New Chat</p>:null}
         </div>
         {extenad
          ?<div className='recent'>
            <p className='recent-title'>Recent</p>
            {prevPromt.map((item , index)=>{
                return(
                   <div onClick={()=>loadPcompt(item)} className='recent-entry'>
                  <div><FaRegMessage /></div>
                  <p>{item.slice(0,18)}...</p>
                 </div>
                )
            })}
             
         </div>:null
         }
         
       </div>
       <div className='button'>
            <div className='bottom-item recent-entry'>
              <div className='img'><LuHelpCircle /></div>
              {extenad?<p>Help</p>:null}
            </div>
            <div className='bottom-item recent-entry'>
              <div className='img'><MdHistory /></div>
               {extenad?<p>History</p>:null} 
            </div>
            <div className='bottom-item recent-entry'>
              <div className='img'><IoSettingsOutline /></div>
               {extenad?<p>Setting</p>:null}
            </div>
       </div>
    </div>
  )
}

export default Sidebar
