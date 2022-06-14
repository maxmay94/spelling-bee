import React from 'react'

import Tile from '../Tile/Tile'

const PlayArea = ({starters, center}) => {
  return (
    <div className='flex w-full h-full'>
      <div className='mx-auto mt-10 w-2/3 h-2/3  bg-gray-200/[0.3]'>
        
        <div className='relative w-full h-full'>
          {/* top left */}
            <div className='absolute inset-y-1/3 inset-x-1/4 ml-16 w-24 h-24'>
              <Tile letter={starters[0]}/>
            </div>   
          {/* top middle */}
            <div className='absolute inset-x-1/3 inset-y-1/4 ml-20 w-24 h-24'>
              <Tile letter={starters[1]}/>
            </div>
          {/* top right */}
            <div className='absolute inset-x-1/2 inset-y-1/3 ml-3 w-24 h-24'>
              <Tile letter={starters[2]}/>
            </div>   
          {/* bottom left */}
            <div className='absolute inset-y-1/2 inset-x-1/4 ml-16 mt-4 w-24 h-24'>
              <Tile letter={starters[3]}/>
            </div>    
          {/* bottom middle */}
            <div className='absolute inset-1/3 mt-40 ml-20 bottom-0 w-24 h-24'>
              <Tile letter={starters[5]}/>
            </div>     
          {/* bottom right */}
            <div className='absolute inset-1/2 ml-3 mt-3  w-24 h-24'>
              <Tile letter={starters[4]}/>
            </div>    
          {/* center */}
       
            <div className='absolute inset-1/3 mt-14 ml-20 w-24 h-24 '>
              <Tile center={center}/>
            </div>
        </div>

        {/* {
          starters &&
          starters?.map((letter, i) => (
            <div key={i} >
              <Tile letter={letter}/>
            </div>
          ))
        } */}
      </div>
    </div>
  )
}

export default PlayArea