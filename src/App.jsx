import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Rules from './components/Rules'
import Choices from './components/Choices'
import Paper from './components/Paper'
import Scissors from './components/Scissors'
import Rock from './components/Rock'
import HouseChoice from './components/HouseChoice'

export default function App() {
  const [rulesDisplay, setRulesDisplay] = useState(0)
  const [userChoice,setUserChoice] = useState("choice")
  const [randomChoice,setRandomChoice] = useState("random")

  return (
    <div className="boardBg w-[100vw] h-[1000px] bg-gradient-to-t from-[#1F3656] to-[#131538] flex flex-col justify-center items-center relative">
      <Home></Home>

      <div>
      {/* Display the choice of the player with a condition and calling the right component */}
        {userChoice == "paper" && <Paper ></Paper>}
        {userChoice == "rock" && <Rock ></Rock>}
        {userChoice == "scissors" && <Scissors ></Scissors>}
        {userChoice == "choice" && <Choices setUserChoice={setUserChoice} ></Choices>}
      </div>

      {/* Display of the rules modal */}
      <button onClick={()=> {setRulesDisplay(1)}} className='homeRules border border-white text-white w-[150px] p-[10px]'>RULES</button>
      {rulesDisplay == "1" && <Rules setRulesDisplay={setRulesDisplay}></Rules>}

    </div>
  )
}
