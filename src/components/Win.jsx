import React from 'react'
import Restart from './Restart'

export default function Win(props) {
  // Creating a function for adding to the score
  let plus=()=>{
    props.setCounting(props.counting+1)
  }
  return (
    <div className='flex flex-col justify-center items-center gap-[80px]'>
      <div className='flex gap-[80px] '>
        <p className='text-white text-[20px]'>YOU PICKED</p>
        <p className='text-white text-[20px]'>THE HOUSE PICKED</p>
      </div>
      <div className='flex flex-col gap-[20px] justify-center items-center'>
        <h1 className='text-white text-[70px] font-bold'>YOU WIN</h1>
        <Restart setUserChoice={props.setUserChoice} setPickHouse ={props.setPickHouse} counter={plus}></Restart>
        </div>
    </div>
  )
}
