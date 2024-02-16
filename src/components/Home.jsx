import React from 'react'
import logo from "../assets/images/logo.svg"
import "./../components/Home.css"


export default function Home(props) {
  return (
    <div className='lg:w-[60%] w-screen flex justify-center relative'>
        <div className='lg:mt-[100px] lg:m-0 lg:gap-[400px] w-[90%] h-[150px] border border-[white]  rounded-[20px] mt-[100px] flex justify-center items-center gap-[60px]'>
        <div className='title w-fit text-[30px] text-white p-[10px]'>
            <img className="w-[130px] lg:w-[150px]" src={logo} alt="" />
        </div>
        <div className='score lg:w-[20%] lg:h-[85%] w-[30%] h-[70%] p-[20px] bg-white rounded-[20px] flex flex-col justify-center items-center'>
            <p className='score'>SCORE</p>
            <p className='text-[60px] font-bold'>{props.counting}</p>
        </div>
        </div>
    </div>
  )
}
