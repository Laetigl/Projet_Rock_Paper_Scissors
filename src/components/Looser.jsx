import React from 'react'
import Restart from './Restart'

export default function Looser(props) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white'>YOU LOOSE</h1>
        <Restart setUserChoice={props.setUserChoice} setPickHouse ={props.setPickHouse}></Restart>
    </div>
  )
}
