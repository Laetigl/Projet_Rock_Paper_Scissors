import React from 'react'

export default function Restart(props) {
  return (
    <div className="rounded-[20px] flex flex-col justify-center items-center  w-[200px] h-[50px] bg-white gap-[20px]">
        <button onClick={()=> {props.setUserChoice("choice") ; props.setPickHouse ("");props.counter()}} className='text-[20px] text-black'>PLAY AGAIN</button>
    </div>
  )
}
