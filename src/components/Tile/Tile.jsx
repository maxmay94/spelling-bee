import React from 'react'

const Tile = ({letter, center, guess, setGuess}) => {

  let background = center !== undefined ? 
    'mask mask-hexagon-2 bg-yellow-500 hover:bg-yellow-600 w-full h-full p-10 text-black font-bold drop-shadow-xl' 
    : 'mask mask-hexagon-2 bg-gray-300 hover:bg-gray-400 w-full h-full p-10  text-black drop-shadow-xl'

  return (
    <button 
      className='w-full h-full'
      onClick={() => setGuess(guess + (center || letter))}
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