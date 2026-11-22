import React from 'react'

const Buttons = ({text}) => {
  return (
    <button className='h-12 w-full rounded-lg bg-blue-600 px-7 text-base font-semibold text-white hover:bg-blue-700'>
        {text}
    </button>
  )
}

export default Buttons