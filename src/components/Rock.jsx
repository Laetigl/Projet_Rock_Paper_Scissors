import React from 'react'
import rock from "../assets/images/icon-rock.svg"
import HouseChoice from './HouseChoice'

export default function Rock() {
  
  return (
    <div className='flex justify-center items-center gap-[40px] text-white text-[25px]'>
      <div className='bottomHand flex flex-col justify-center items-center gap-[60px]'>
          <button className='borderCircleRock rounded-[50%] p-[30px] bg-white '> 
          <img className='iconImg' src={rock} alt="rock" /></button>
      </div>
    </div>
  )
}