import React from 'react'
import paper from "../assets/images/icon-paper.svg"
import scissors from "../assets/images/icon-scissors.svg"
import rock from "../assets/images/icon-rock.svg"
import "./../components/Choices.css"

export default function Choices(props) {
  // Creating an random choice for the house based on a string (will be called in the App.jsx)
  let arrayChoice =["paper","rock","scissors"]
  let randomImg =()=>{
    return arrayChoice[Math.floor(Math.random()*3)]
  } 

  return (
    <div className='flex justify-center items-center'>
        <div className="triangleBg flex flex-col justify-center items-center gap-[50px]">
            <div className='topHand flex gap-[60px] '>
                {/* Call the choice of the user and the random with the button */}
                <button onClick={() => {props.setUserChoice("paper");props.setPickHouse(randomImg())}} className='borderCirclePaper rounded-[50%] p-[30px] bg-white lg:w-[200px] lg:h-[200px] lg:flex lg:justify-center lg:items-center '> <img className='iconImg w-[80px] h-[100px] lg:w-[80px] lg:h-[100px]' src={paper} alt="paper" /></button>
                <button onClick={() => {props.setUserChoice("scissors");props.setPickHouse(randomImg())}} className='borderCircleScissors rounded-[50%] p-[30px] bg-white lg:w-[200px] lg:h-[200px] lg:flex lg:justify-center lg:items-center '> <img className='iconImg w-[80px] h-[100px] lg:w-[80px] lg:h-[100px]' src={scissors} alt="scissors" /></button>
            </div>
            <div className='"bottomHand'>
                <button onClick={() => {props.setUserChoice("rock");props.setPickHouse(randomImg())}} className='borderCircleRock rounded-[50%] p-[30px] bg-white w-[200px] h-[200px] lg:w-[200px] lg:h-[200px] lg:flex lg:justify-center lg:items-center '> <img className='iconImg w-[80px] h-[100px] lg:w-[80px] lg:h-[100px]' src={rock} alt="" /></button>
            </div>
        </div>
    </div>
  )
}
