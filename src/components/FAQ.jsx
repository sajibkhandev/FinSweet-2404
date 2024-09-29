import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from 'react-icons/rx';

const FAQ = ({number,title,dec}) => {
    let [show,setShow]=useState(false)
    
    let handleClick=()=>{
        setShow(!show)
    }
   
    
  return (
    <div className='py-7 px-5 border-b-2 border-[#ECECF1]'>
           <div className='flex justify-between items-center '>
       <div className='flex gap-x-[60px]'>
       <p className='text-[#2405F2] text-2xl font-pop font-meduim'>{number}</p>
       <h2 onClick={handleClick} className='text-[#282938] text-2xl font-pop font-meduim cursor-pointer'>{title}</h2>
       </div>
        <div className='cursor-pointer' onClick={handleClick}>

            {
                show?
                <RxCross2 />
                :
                <FiPlus />
            }

            </div>
        
       </div>

       {
        show && <p className='px-[84px] py-4 text-red-500'>{dec}</p>
       }
      
       
    </div>
  )
}

export default FAQ