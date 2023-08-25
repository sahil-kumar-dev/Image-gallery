import React from 'react'

export default function Card({ title, description, id, url }) {
    function showDetail(){
        
    }
    return (
        <div className="w-11/12 h-auto rounded-lg overflow-hidden shadow-lg shadow-black" onClick={showDetail}>
            <div className='cursor-pointer'>
                <img src={url} className='w-full h-full'></img>
            </div>
        </div>
    )
}
