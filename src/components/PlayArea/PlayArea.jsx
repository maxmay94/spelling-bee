import React from 'react'

import Tile from '../Tile/Tile'

const PlayArea = ({starters, center}) => {
  return (
    <div className='flex w-full h-full'>
      <div className='mx-auto mt-10 w-2/3 h-2/3 bg-gray-200/[0.3]'>
        <div className=' w-full h-full'>
          <div className='grid grid-cols-3 grid-rows-5 gap-0 place-content-center w-72 h-64 min-w-1/4 min-h-1/3 mx-auto p-4'>

            <div></div>
            {/* top middle */}
              <div className='w-full h-full'>
                <Tile letter={starters[1]}/>
              </div>

            <div></div>

            {/* top left */}
              <div className='w-full h-full'>
                <Tile letter={starters[0]}/>
              </div>   
              <div></div>

            {/* top right */}
              <div className='w-full h-full'>
                <Tile letter={starters[2]}/>
              </div>   

              <div></div>

            {/* center */}
              <div className='w-full h-full'>
                <Tile center={center}/>
              </div>
              <div></div>

            {/* bottom left */}
              <div className='w-full h-full'>
                <Tile letter={starters[3]}/>
              </div>    

              <div></div>

            {/* bottom right */}
              <div className='w-full h-full'>
                <Tile letter={starters[4]}/>
              </div>  

              <div></div>

            {/* bottom middle */}
              <div className='w-full h-full'>
                <Tile letter={starters[5]}/>
              </div>    
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayArea