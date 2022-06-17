import React from 'react'

const StatsAndScore = ({score}) => {
  return (
    <div className='mx-auto mt-5 w-3/4 h-full bg-white/[0.8] drop-shadow-xl'>
      <div className='h-full w-full'>
        <p className='text-center p-3 text-black border-solid border border-b-gray-400 '>Score: {score}</p>
      </div>
    </div>
  )
}

export default StatsAndScore