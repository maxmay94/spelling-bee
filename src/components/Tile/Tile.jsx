import React from 'react'

import click from '../../Audio/click.wav'
const clickSound = new Audio(click)

const Tile = ({letter, center, guess, setGuess}) => {

  let background = center !== undefined ? 
    'mask mask-hexagon-2 bg-yellow-500 hover:bg-yellow-600 w-full h-full p-10 text-black font-bold drop-shadow-xl' 
    : 'mask mask-hexagon-2 bg-gray-300 hover:bg-gray-400 w-full h-full p-10  text-black drop-shadow-xl'

  const handleSetGuess = (char) => {
    setGuess(guess + char)
    clickSound.play()
  }

  return (
    <button 
      className='w-full h-full'
      onClick={() => handleSetGuess(letter || center)}
    >
      <div className=''>
        <div className={background}>
          <p className='text-center'>
            {center || letter}
          </p>
        </div>
      </div>
    </button>
  )
}

export default Tile