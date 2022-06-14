import React from 'react'

const Tile = ({letter, center}) => {

  let background = center !== undefined ? 
    'mask mask-hexagon-2 bg-yellow-500 hover:bg-yellow-600 w-full h-full p-10 text-center text-black' 
    : 'mask mask-hexagon-2 bg-gray-300 hover:bg-gray-400 w-full h-full p-10 text-center text-black'
  return (
    // <button className= 'flex'>
    <div className='w-full h-full'>
      <div className={background}>
        <div className=''>
          {center || letter}
        </div>
      </div>
    </div>
    // </button>
  )
}

export default Tile