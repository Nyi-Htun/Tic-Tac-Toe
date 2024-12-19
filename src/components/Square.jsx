import React, { useState } from 'react'

function Square({ value, handleClick }) {

  return (
    <>
        <button 
            className='w-12 h-10 border border-black'
            onClick={handleClick}
        >
            {value}
        </button>
    </> 
  )
}

export default Square