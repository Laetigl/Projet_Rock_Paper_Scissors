import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Rules from './components/Rules'
import Choices from './components/Choices'
import Paper from './components/Paper'
import Scissors from './components/Scissors'
import Rock from './components/Rock'
import HouseChoice from './components/HouseChoice'
import Win from './components/Win'
import Restart from './components/Restart'
import Looser from './components/Looser'

export default function App() {
  const [rulesDisplay, setRulesDisplay] = useState(0)
  const [restart, setRestart] = useState(1)
  const [userChoice,setUserChoice] = useState("choice")
  const [pickUser, setPickUser] = useState("")
  const [pickHouse, setPickHouse] = useState("")

  return (
    <div className="boardBg w-[100vw] h-[1000px] bg-gradient-to-t from-[#1F3656] to-[#131538] flex flex-col justify-center items-center relative">
      <Home></Home>

      <div className='flex gap-4'>
      {/* Display the choice of the player with a condition and calling the right component */}
        
        {userChoice == "paper" && <Paper ></Paper>}
        {userChoice == "rock" && <Rock ></Rock>}
        {userChoice == "scissors" && <Scissors ></Scissors>}
        {userChoice == "choice" && <Choices setUserChoice={setUserChoice}  setPickHouse={setPickHouse}></Choices>}

        {pickHouse == "paper" && <Paper ></Paper> }
        {pickHouse == "rock" && <Rock ></Rock> }
        {pickHouse == "scissors" && <Scissors ></Scissors> }

      
      </div>
      {/* Winner conditions */}
      {userChoice == "paper" && pickHouse == "rock" ? <Win setUserChoice={setUserChoice} setPickHouse ={setPickHouse}></Win> : null}
      {userChoice == "rock" && pickHouse == "scissors" ? <Win setUserChoice={setUserChoice} setPickHouse ={setPickHouse}></Win> : null}
      {userChoice == "scissors" && pickHouse == "paper" ? <Win setUserChoice={setUserChoice} setPickHouse ={setPickHouse}></Win> : null}
      
      {/* Looser conditions */}
      {pickHouse == "paper" && userChoice == "rock" ? <Looser setUserChoice={setUserChoice} setPickHouse ={setPickHouse}></Looser> : null}
      {pickHouse == "rock" && userChoice == "scissors" ? <Looser setUserChoice={setUserChoice} setPickHouse ={setPickHouse}></Looser> : null}
      {pickHouse == "scissors" && userChoice == "paper" ? <Looser setUserChoice={setUserChoice} setPickHouse ={setPickHouse}></Looser> : null}

      {/* Display of the rules modal */}
      <button onClick={()=> {setRulesDisplay(1)}} className='homeRules border border-white text-white w-[150px] p-[10px]'>RULES</button>
      {rulesDisplay == "1" && <Rules setRulesDisplay={setRulesDisplay}></Rules>}

    </div>
  )
}
