import React, { useEffect, useState } from 'react'

import { getStarters } from '../../data/STARTERS'
import { wordList_4 } from '../../data/4-letters' 
import { wordList_5 } from '../../data/5-letters'
import { wordList_6 } from '../../data/6-letters'
import { wordList_7 } from '../../data/7-letters'
import { wordList_8 } from '../../data/8-letters'
import { wordList_9 } from '../../data/9-letters'

import PlayArea from '../../components/PlayArea/PlayArea'

const GameScreen = (props) => {
  let [starters, setStarters] = useState([])
  let [center, setCenter] = useState('')
  let [guess, setGuess] = useState('')
  let [words_4, setWords_4] = useState([])
  let [words_5, setWords_5] = useState([])
  let [words_6, setWords_6] = useState([])
  let [words_7, setWords_7] = useState([])
  let [words_8, setWords_8] = useState([])
  let [words_9, setWords_9] = useState([])


  useEffect(() => {
    setStarters(getStarters())
  }, []) 

  useEffect(() => {
    setCenter(starters.pop())
  }, [starters])

  useEffect(() => {
    setWords_4(validWord(wordList_4, center, starters))
    setWords_5(validWord(wordList_5, center, starters))
    setWords_6(validWord(wordList_6, center, starters))
    setWords_7(validWord(wordList_7, center, starters))
    setWords_8(validWord(wordList_8, center, starters))
    setWords_9(validWord(wordList_9, center, starters))
  }, [center, starters])

  const handleSubmit = () => {
    if(eval('words_' + guess.length).includes(guess)) {
      if(guess.length === 4 ) {
        console.log('+1 Point!')
      } else {
        console.log(`+${guess.length} Points!`)
      }
    } else {
      console.log('no dice ....')
    }
    setGuess('')
  }

  return (
    <div className='bg-yellow-300 h-screen w-screen'>
      <h1 className='font-thin text-6xl text-center p-5 text-yellow-600 underline underline-offset-1 decoration-dotted decoration-black decoration-2'>spelling bee</h1>
      <PlayArea 
        starters={starters} 
        center={center}  
        guess={guess} 
        setGuess={setGuess} 
        handleSubmit={handleSubmit}
      />
    </div>
  ) 
}

export default GameScreen


function validWord(arr, center, starters) {
  let newList = []
  arr.forEach(word => {
    let wordValid = true
    if(word.split('').includes(center)){
      word.split('').forEach(char => {
        if(!starters.includes(char) && char !== center) {
          wordValid = false
        }
      })
    } else {
      wordValid = false
    }
    wordValid && newList.push(word)
  })
  console.log(arr[0].length, newList)
  return newList
} 