import React from 'react'
import scissors from "../assets/images/icon-scissors.svg"

export default function 
() {
  return (
    <div className='flex flex-col justify-center items-center gap-[20px] text-white text-[25px]'>
      <div className='topHand flex gap-[60px]'>
          <button className='borderCircleScissors rounded-[50%] p-[30px] bg-white '> 
          <img className='iconImg' src={scissors} alt="scissors" /></button>
      </div>
              <p>YOU PICKED</p>

    </div>
    
  )
}
