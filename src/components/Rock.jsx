import React from 'react'
import rock from "../assets/images/icon-rock.svg"

export default function Rock() {
  return (
    <div className='flex flex-col justify-center items-center gap-[20px] text-white text-[25px]'>
      <div className='topHand flex gap-[60px]'>
          <button className='borderCircleRock rounded-[50%] p-[30px] bg-white '> 
          <img className='iconImg' src={rock} alt="rock" /></button>
      </div>
      <p>YOU PICKED </p>
    </div>
  )
}
