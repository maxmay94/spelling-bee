import React from 'react'

const StatsAndScore = ({score, totalWords, correctGuesses}) => {

  return (
    <div className='mx-auto mt-5 lg:w-3/4 h-full bg-white/[0.3] drop-shadow-xl'>
      <div className=' flex'>
        <p className='flex-1 text-center p-3 text-black'>Score: {score}</p>
        <p className='flex-1 text-center p-3 mr-5 text-black'>{correctGuesses.length} / {totalWords} total words</p>
      </div>
      <div className=''>
        {
        correctGuesses &&
        <div className='overflow-scroll'>
          <ul className='text-black font-light w-1/3 flex-wrap px-5 h-1/3'>
            {
              correctGuesses?.map((word, i) => (
                <li key={i} className='border-b border-gray-400 my-1'>{word}</li>
              ))
            }
          </ul>
        </div>
        }
      </div>
    </div>
  )
}

export default StatsAndScore