import React from 'react'

const Chips = ({ text }) => {
    return (
        <button className='rounded-full bg-blue-100 px-3.5 py-1.5 text-sm font-medium text-blue-950 hover:bg-blue-200'>
            {text}
        </button>
    )
}

export default Chips