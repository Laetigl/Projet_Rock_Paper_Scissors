import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Modal from './components/Modal'
import Rules from './components/Rules'
import Choices from './components/Choices'

export default function App() {
  const [rulesDisplay, setRulesDisplay] = useState(0)
  // Modal - Affichage conditionnel = mettre à 0 de base (ne saffiche pas) mais si mis à 1 alors s'affiche

  return (
    <div className="boardBg w-[100vw] h-[1000px] bg-gradient-to-t from-[#1F3656] to-[#131538] flex flex-col justify-center items-center relative">
      <Home></Home>
      <Choices></Choices>
     
        <button onClick={()=> {setRulesDisplay(1)}} className=' border border-white'> Button</button>
        {rulesDisplay == "1" && <Rules setRulesDisplay={setRulesDisplay}></Rules>}
     

    </div>
  )
}
