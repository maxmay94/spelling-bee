import React from 'react'

const InputBox = ({guess}) => {
  return (
    <div className=''>
      <input 
        type='text'
        className='rounded-3xl p-3 text-center cursor-default' 
        placeholder='make a guess'
        value={guess}
        required
      />
    </div>
  )
}

export default InputBox