import React from 'react'
import rules from "../assets/images/image-rules.svg"
import closeBtn from "../assets/images/icon-close.svg"

export default function Rules(props) {
  return (
    <div className='bg-[#1d1b1b80] absolute w-[1600px] h-[1000px] flex justify-center items-center'>
      <div className='lg:w-[30%] lg:h-[60%] lg:rounded-[10px] lg:items-start lg:justify-center flex justify-center items-center flex-col absolute w-[100vw] h-[1000px] bg-white gap-[70px] p-[30px]'>
        <div className='lg:flex lg:gap-[250px] lg:justify-center lg:items-start'>
            <h1 className='text-[40px] text-black'>RULES</h1>
            <button  className='absolute top-[800px] right-[200px] lg:top-[85px] lg:right-[50px]' onClick={()=>{props.setRulesDisplay(0)}}>
              <img src={closeBtn} alt="" />
            </button>
        </div>
          <img className='flex justify-center items-center lg:ps-[35px]' src={rules} alt="" /> 
      </div>
    </div>
  )
}
