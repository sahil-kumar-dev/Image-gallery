import React from 'react'

export default function Buttons({ title, func }) {
    return (
        <>
            <button
                className='border-2 border-solid border-black px-3 py-1 bg-gray-300 capitalize font-bold'
                onClick={func}>{title}
            </button>
        </>
    )
}
