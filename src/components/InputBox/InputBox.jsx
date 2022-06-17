import React from 'react'

const InputBox = ({guess}) => {

  return (
    <div className='text-black'>
      <input 
        type='text'
        className='rounded-3xl p-3 text-center cursor-default' 
        placeholder='make a guess'
        defaultValue={guess}
        required
      />
    </div>
  )
}

export default InputBox