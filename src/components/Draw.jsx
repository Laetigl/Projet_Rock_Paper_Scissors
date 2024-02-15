import React from 'react'
import Restart from './Restart'

export default function Draw(props) {
  return (
<div className='flex flex-col justify-center items-center gap-[80px]'>
      <div className='flex gap-[80px] '>
        <p className='text-white text-[20px]'>YOU PICKED</p>
        <p className='text-white text-[20px]'>THE HOUSE PICKED</p>
      </div>
      <div className='flex flex-col gap-[20px] justify-center items-center'>
        <h1 className='text-white text-[70px] font-bold'>DRAW</h1>
        <Restart setUserChoice={props.setUserChoice} setPickHouse ={props.setPickHouse}></Restart>
        </div>
    </div>
  )
}