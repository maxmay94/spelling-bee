import React, { useEffect, useState } from 'react'

import { getStarters } from '../../data/STARTERS'
import { wordList_4 } from '../../data/4-letters' 
import { wordList_5 } from '../../data/5-letters'
import { wordList_6 } from '../../data/6-letters'
import { wordList_7 } from '../../data/7-letters'
import { wordList_8 } from '../../data/8-letters'
import { wordList_9 } from '../../data/9-letters'
import { wordList_10 } from '../../data/10-letters'
import { wordList_11 } from '../../data/11-letters'
import { wordList_12 } from '../../data/12-letters'


import PlayArea from '../../components/PlayArea/PlayArea'
import StatsAndScore from '../../components/StatsAndScore/StatsAndScore'

import right from '../../Audio/right.wav'
import wrong from '../../Audio/wrong.wav'
const rightSound = new Audio(right)
const wrongSound = new Audio(wrong)

const GameScreen = (props) => {
  let [starters, setStarters] = useState([])
  let [center, setCenter] = useState('')
  let [guess, setGuess] = useState('')
  let [score, setScore] = useState(0)
  let [totalWords, setTotalWords] = useState(0)
  let [correctGuesses, setCorrectGuesses] = useState([])
  let [words_4, setWords_4] = useState([])
  let [words_5, setWords_5] = useState([])
  let [words_6, setWords_6] = useState([])
  let [words_7, setWords_7] = useState([])
  let [words_8, setWords_8] = useState([])
  let [words_9, setWords_9] = useState([])
  let [words_10, setWords_10] = useState([])
  let [words_11, setWords_11] = useState([])
  let [words_12, setWords_12] = useState([])


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
    setWords_10(validWord(wordList_10, center, starters))
    setWords_11(validWord(wordList_11, center, starters))
    setWords_12(validWord(wordList_12, center, starters))
  }, [center, starters])

  useEffect(() => {
    setTotalWords(
      words_4.length
      + words_5.length
      + words_6.length
      + words_7.length
      + words_8.length
      + words_9.length
      + words_10.length
      + words_11.length
      + words_12.length
    )
  },[words_4, words_5, words_6, words_7, words_8, words_9, words_10, words_11, words_12])

  const handleSubmit = () => {
    if(guess.length > 3 && guess.length <= 12 && eval('words_' + guess.length).includes(guess)) {
      if(guess.length === 4 && !correctGuesses.includes(guess)) {
        setScore(score + 1)
        setCorrectGuesses([...correctGuesses, guess])
        rightSound.play()
      } else if(!correctGuesses.includes(guess)) {
        setScore(score + guess.length)
        setCorrectGuesses([...correctGuesses, guess])
        rightSound.play()
      }
    } else {
      console.log('Word Not Found....')
      wrongSound.play()
    }
    setGuess('')
  }

  const handleShuffle = () => {
    setStarters(starters.sort((a, b) => 0.5 - Math.random()))
  }

  return (
    <div className='bg-yellow-300 h-screen w-screen'>
      <h1 className='font-thin text-6xl text-center p-5 text-yellow-600 underline underline-offset-1 decoration-dotted decoration-black decoration-2'>spelling bee</h1>
      <div className='lg:flex'>
        <div className='lg:flex-1 lg:pl-20'>
          <PlayArea 
            starters={starters} 
            center={center}  
            guess={guess} 
            setGuess={setGuess} 
            handleSubmit={handleSubmit}
            handleShuffle={handleShuffle}
          />
        </div>
        <div className='lg:flex-1 lg:pr-20'>
          <StatsAndScore 
            score={score}
            totalWords={totalWords}
            correctGuesses={correctGuesses}
          />
        </div>
      </div>
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