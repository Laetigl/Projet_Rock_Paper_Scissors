import React, { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <div className='w-screen h-screen bg-gradient-to-t from-[#1F3656] to-[#131538] flex justify-center'>
        <div className='w-[60%] h-[200px] border border-[white]  rounded-[20px] mt-[100px] flex justify-center items-center gap-[50%]'>
          <div className='title w-fit text-[30px] text-white p-[20px]'>
            <p className='p-0 m-0'>ROCK</p>
            <p className='p-0 m-0'>PAPER</p>
            <p className='p-0 m-0'>SCISSORS</p>
          </div>
          <div className='score w-[20%] h-[80%] p-[20px] bg-white rounded-[20px] flex flex-col justify-center items-center'>
            <p>SCORE</p>
            <p>nombre</p>
          </div>


        </div>
    </div>
  )
}
