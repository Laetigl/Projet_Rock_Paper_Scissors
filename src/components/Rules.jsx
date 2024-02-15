import React from 'react'
import rules from "../assets/images/image-rules.svg"
import closeBtn from "../assets/images/icon-close.svg"

export default function Rules(props) {
  return (
    <div className='flex flex-col justify-center items-center absolute w-[100vw] h-[100vh] bg-white gap-[20px]'>
        <h1 className='text-[30px] text-black'>RULES</h1>
        <img src={rules} alt="" />
        <button onClick={()=>{props.setRulesDisplay(0)}}>
          <img src={closeBtn} alt="" />
        </button>
    </div>
  )
}
