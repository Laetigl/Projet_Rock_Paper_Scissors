import React from 'react'
import logo from "../assets/images/logo.svg"
import "./../components/Home.css"


export default function Home() {
  return (
    <div className='w-screen flex justify-center relative'>
        <div className='w-[90%] h-[150px] border border-[white]  rounded-[20px] mt-[100px] flex justify-center items-center gap-[60px]'>
        <div className='title w-fit text-[30px] text-white p-[10px]'>
            <img className="w-[130px]" src={logo} alt="" />
        </div>
        <div className='score w-[30%] h-[70%] p-[20px] bg-white rounded-[20px] flex flex-col justify-center items-center'>
            <p className='score'>SCORE</p>
            <p>#</p>
        </div>
        </div>
    </div>
  )
}
