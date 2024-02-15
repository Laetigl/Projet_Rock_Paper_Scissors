import React from 'react'
import paper from "../assets/images/icon-paper.svg"
import rock from "../assets/images/icon-rock.svg"
import scissors from "../assets/images/icon-scissors.svg"

export default function HouseChoice() {

  return (  
    <div className='flex flex-col justify-center items-center gap-[20px] text-white text-[25px]'>
        <div className='topHand flex  flex-col justify-center items-center gap-[60px]'>
            <button className='borderCirclePaper rounded-[50%] p-[30px] bg-white'> <img className='iconImg' src={randomImg} alt="paper" /></button> 
            {randomImg == "paper" && "border-[red]"}

        <p>THE HOUSE PICKED</p>
        </div>
    </div>
  )
}
