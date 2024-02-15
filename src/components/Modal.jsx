import React from 'react'

export default function Modal(props) {
  return (
    <div>
        <button onClick={()=> props.setRulesDisplay("rules")} className='rounded-[10px] w-[150px] h-[40px] border border-white  absolute bottom-[100px] right-[50px] -z-[-1]'>RULES</button>
    </div>
  )
}