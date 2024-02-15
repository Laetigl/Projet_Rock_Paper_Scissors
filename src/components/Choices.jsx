import React from 'react'
import bgTriangle from "../assets/images/bg-triangle.svg"
import paper from "../assets/images/icon-paper.svg"
import scissors from "../assets/images/icon-scissors.svg"
import rock from "../assets/images/icon-rock.svg"
import "./../components/Choices.css"
export default function Choices() {
  return (
    <div className='flex justify-center items-center'>
        <div className="triangleBg flex flex-col justify-center items-center gap-[50px]">
            <div className='topHand flex gap-[60px]'>
                <button className='borderCirclePaper rounded-[50%] p-[30px] bg-white'> <img src={paper} alt="paper" /></button>
                <button className='borderCircleScissors rounded-[50%] p-[30px] bg-white '> <img src={scissors} alt="scissors" /></button>
            </div>
            <div className='"bottomHand'>
                <button className='borderCircleRock rounded-[50%] p-[30px] bg-white'> <img src={rock} alt="" /></button>
            </div>
        </div>
    </div>
  )
}
