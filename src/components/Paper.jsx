import React from 'react'
import paper from "../assets/images/icon-paper.svg"

export default function () {
  return (
    <div className='flex flex-col justify-center items-center gap-[20px] text-white text-[25px]'>
        <div className='topHand flex justify-center items-center gap-[60px]'>
            <button className='borderCirclePaper rounded-[50%] p-[30px] bg-white'> <img className='iconImg' src={paper} alt="paper" /></button>
        </div>
        <p>YOU PICKED</p>
    </div>
  )
}
