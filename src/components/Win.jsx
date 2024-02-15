import React from 'react'
import Restart from './Restart'

export default function Win(props) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white text-[50px] pb-[200px]'>YOU WIN</h1>
        <Restart setUserChoice={props.setUserChoice} setPickHouse ={props.setPickHouse}></Restart>
    </div>
  )
}
