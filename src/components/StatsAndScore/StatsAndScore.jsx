import React from 'react'

const StatsAndScore = ({score, totalWords, correctGuesses}) => {

  return (
    <div className='mx-auto mt-5 w-3/4 h-full bg-white/[0.8] drop-shadow-xl'>
      <div className=' flex'>
        <p className='flex-1 text-center p-3 text-black'>Score: {score}</p>
        <p className='flex-1 text-center p-3 mr-5 text-black '>{correctGuesses.length} / {totalWords} total words</p>
      </div>
      <div className=''>
        {
          correctGuesses &&
          <ul className='text-black font-light px-5'>
            {
              correctGuesses?.map((word, i) => (
                <li key={i} className=''>{word}</li>
              ))
            }
          </ul>
        }
      </div>
    </div>
  )
}

export default StatsAndScore