import React from 'react'
import scissors from "../assets/images/icon-scissors.svg"
import HouseChoice from './HouseChoice'
export default function 
() {
  return (
    <div className='flex justify-center items-center gap-[40px] text-white text-[25px]'>
        <div className='topHand flex flex-col justify-center items-center gap-[60px]'>
            <button className='borderCircleScissors rounded-[50%] p-[30px] bg-white'> <img className='iconImg' src={scissors} alt="scissors" /></button>
       
        </div>
    </div>
    
  )
}
