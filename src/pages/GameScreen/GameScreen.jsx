import React, { useEffect, useState } from 'react'
import { getStarters } from '../../data/STARTERS'

import { valid_4 } from '../../data/4-letters' 

import PlayArea from '../../components/PlayArea/PlayArea'

const GameScreen = (props) => {
  let [starters, setStarters] = useState([])
  let [center, setCenter] = useState('')
  let [words_4, setWords_4] = useState([])

  useEffect(() => {
    setStarters(getStarters())
  }, []) 

  useEffect(() => {
    setCenter(starters.pop())
    setWords_4(valid_4(starters, center))
    console.log('WORDS_4 -->',words_4)
  }, [starters])

  // useEffect(() => {
  //   setWords_4(valid_4(starters, center))
  //   console.log('words_4 --> ',words_4)
  // },[starters])

  // console.log('STARTERS -->',starters)  
  // console.log('CENTER -->',center)

  return (
    <div className='bg-yellow-300 h-screen w-screen'>
      <h1 className='font-thin text-5xl text-center p-5 text-yellow-600 underline underline-offset-1 decoration-dotted decoration-1'>spelling bee</h1>
      <PlayArea starters={starters} center={center}/>
    </div>
  ) 
}

export default GameScreen
