import React, { useState } from 'react'
import paper from "../assets/images/icon-paper.svg"
import HouseChoice from './HouseChoice'
import Win from './Win'

export default function () {
    
  return (
    <div className='flex flex-wrap justify-center items-center gap-[40px] text-white text-[25px]'>
        <div className='topHand flex flex-col justify-center items-center gap-[60px]'>
            <button className='borderCirclePaper rounded-[50%] p-[30px] bg-white'> <img className='iconImg' src={paper} alt="paper" /></button>
        </div>
    </div>
  )
}
