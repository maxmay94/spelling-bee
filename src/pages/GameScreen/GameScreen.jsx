import React, { useEffect, useState } from 'react'
import { getStarters } from '../../data/STARTERS'

import PlayArea from '../../components/PlayArea/PlayArea'

const GameScreen = (props) => {
  let [starters, setStarters] = useState([])
  let [center, setCenter] = useState('')

  useEffect(() => {
    setStarters(getStarters())
  }, []) 

  useEffect(() => {
    setCenter(starters.pop())
  },[starters])

  console.log('STARTERS -->',starters)  
  console.log('CENTER -->',center)

  return (
    <div className='bg-yellow-300 h-screen w-screen'>
      <h1 className='font-thin text-5xl text-center p-5 text-yellow-600 underline underline-offset-1 decoration-dotted decoration-1'>spelling bee</h1>
      <PlayArea starters={starters} center={center}/>
    </div>
  )
}

export default GameScreen
