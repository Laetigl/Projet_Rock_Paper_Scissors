import React from 'react'
import logo from "../assets/images/logo.svg"

export default function Home() {
  return (
    <div className='w-screen h-screen flex justify-center relative'>
        <div className='w-[90%] h-[150px] border border-[white]  rounded-[20px] mt-[100px] flex justify-center items-center gap-[60px]'>
        <div className='title w-fit text-[30px] text-white p-[10px]'>
            <img className="w-[130px]" src={logo} alt="" />
        </div>
        <div className='score w-[30%] h-[70%] p-[20px] bg-white rounded-[20px] flex flex-col justify-center items-center'>
            <p>SCORE</p>
            <p>nombre</p>
        </div>
        </div>
    </div>
  )
}
