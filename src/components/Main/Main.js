import React, { useContext } from 'react'
import  './Main.css'
import user from '../../image/Mecchi pfp.jfif'
import { IoBulbOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaBandcamp } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { MdInsertPhoto } from "react-icons/md";
import {Context} from  "../../context/Context"
import ChatAI from "../../image/ChatAi-removebg-preview.png"

const Main = () => {
    const{
        input,
        setInput,
        recent,
        onSent,
        showResult,
        result,
        loading,} = useContext(Context)
  return (
    <div className='main'>
      <div className='nav'>
        <p>Chat AI</p>
         <img alt='' src={user}/>
      </div>
      <div className='main-container'>
      {
        !showResult?
        <>
        <div className='greet'>
            <p><span>Hello , Dev</span></p>
            <p>How can i Help you tday</p>
        </div>
        <div className='cards'>
            <div className ='card'>
                <p>Suggest beauiful place to see on an upcoming road trip</p>
                <div className='img'><FaBandcamp /></div>
            </div>
            <div className ='card'>
                <p>Brifly summarize this concept: urban planning</p>
                <div className='img'><IoBulbOutline /></div>
            </div>
            <div className ='card'>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <div className='img'><MdOutlineMessage /></div>
            </div>
            <div className ='card'>
                <p>Improve the readability of the following code</p>
                <div className='img'><FaCode /></div>
            </div>
          </div>
        </>:
       
        <div className='result'>
           <div className='result-title'>
              <img alt='' src={user}/>
              <p>{recent}</p>
           </div>
           <div className='result-data'>
                   <img alt='' src={ChatAI}></img>
                   {loading?
                   <div className='loader'>
                    <hr/>
                    <hr/>
                    <hr/>
                   </div>:
                   <p dangerouslySetInnerHTML={{ __html:result}}></p>
                   }
                   
           </div>
        </div>
      }
       
        <div className='main-bottom'>
            <div className='search-box'>
                <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
                <div className='allimg'>
                    <div className='img'><MdInsertPhoto /></div>
                    <div className='img'><FaMicrophone /></div>
                    {input?<div onClick={()=>onSent()} className='img'><IoSend /></div>:null}
                </div>
            </div>
            <p className='bottom-infor'>Chat AI can make msitakes.Check Important Info.</p>
        </div>
      </div>
    </div>
  )
}

export default Main
