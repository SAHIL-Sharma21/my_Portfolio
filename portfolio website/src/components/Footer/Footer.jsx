import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='w-full bg-primary h-auto bottom-0 fixed'>
        <div className='lg:container w-9/12 flex flex-col justify-around mx-9'>
            <h1 className='font-Anton text-white text-2xl lg:mb-3'> <Link to={'/'}>Sahil<em className='text-varRed text-5xl font-mono'>.</em></Link></h1>
            <h2 className='text-white my-1'>Follow me:</h2>
        </div>
        
      </div>
    </>
  )
}

export default Footer