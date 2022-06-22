import React from 'react'

import Tile from '../Tile/Tile'
import InputBox from '../InputBox/InputBox'

const PlayArea = ({starters, center, guess, setGuess, handleSubmit, handleShuffle}) => {

  return (
    <div className='mx-auto mt-5 px-3 lg:w-3/4 h-full bg-white/[0.3] drop-shadow-xl'>
      <div className=' w-full h-full'>
        <div className=''>

          <div className='flex'>
            <div className='mx-auto mt-5 p-5'>
              <InputBox guess={guess} />
            </div>
          </div>
  
          <div className='grid grid-cols-3 grid-rows-5 gap-0 w-72 h-64 lg:min-w-1/4 lg:min-h-1/3 mx-auto p-4'>

            <div>
              {/* spacer */}
            </div>

            {/* top middle */}
            <div className='w-full h-full'>
              <Tile letter={starters[0]} guess={guess} setGuess={setGuess}/>
            </div>

            <div>
              {/* spacer */}
            </div>

            {/* top left */}
            <div className='w-full h-full'>
              <Tile letter={starters[1]} guess={guess} setGuess={setGuess}/>
            </div>   

            <div>
              {/* spacer */}
            </div>

            {/* top right */}
            <div className='w-full h-full'>
              <Tile letter={starters[2]} guess={guess} setGuess={setGuess}/>
            </div>   

            <div>
              {/* spacer */}
            </div>

            {/* center */}
            <div className='w-full h-full'>
              <Tile center={center} guess={guess} setGuess={setGuess}/>
            </div>

            <div>
              {/* spacer */}
            </div>

            {/* bottom left */}
            <div className='w-full h-full'>
              <Tile letter={starters[3]} guess={guess} setGuess={setGuess}/>
            </div>    

            <div>
              {/* spacer */}
            </div>

            {/* bottom right */}
            <div className='w-full h-full'>
              <Tile letter={starters[4]} guess={guess} setGuess={setGuess}/>
            </div>  

            <div>
              {/* spacer */}
            </div>

            {/* bottom middle */}
            <div className='w-full h-full'>
              <Tile letter={starters[5]} guess={guess} setGuess={setGuess}/>
            </div>  

          </div>
        </div>

        <div className='flex mx-auto mt-5 pt-10 lg:px-10 pb-5 lg:w-3/4'>
          <button 
            className='flex-1 bg-gray-100 hover:bg-gray-200 rounded-3xl text-black p-3 lg:px-5'
            onClick={() => setGuess(guess.substring(0, guess.length - 1))}
            >
            delete
          </button>
          <button 
            className='flex-1 mx-10 bg-gray-100 hover:bg-gray-200 rounded-3xl text-black p-3 lg:px-5'
            onClick={() => handleShuffle()}
          >
            ↺
          </button>
          <button 
            className='flex-1 bg-gray-100 hover:bg-gray-200 rounded-3xl text-black p-3 lg:px-5'
            onClick={() => handleSubmit()}
          >
            submit
          </button>
        </div>

      </div>
    </div>
  )
}

export default PlayArea