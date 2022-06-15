import React from 'react'

const Tile = ({letter, center}) => {

  let background = center !== undefined ? 
    'mask mask-hexagon-2 bg-yellow-500 hover:bg-yellow-600 w-full h-full p-10 text-center text-black font-bold text-xl' 
    : 'mask mask-hexagon-2 bg-gray-300 hover:bg-gray-400 w-full h-full p-10 text-center text-black font-bold text-xl'
  return (
    // <button className= 'flex'>
    <button className='w-full h-full'>
      <div className='w-full h-full'>
        <div className={background}>
          <div className=''>
            {center || letter}
          </div>
        </div>
      </div>
    </button>
    // </button>
  )
}

export default Tile