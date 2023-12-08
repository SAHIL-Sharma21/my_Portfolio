import React from 'react'
import {Link} from 'react-router-dom'
import { Facebook, Instagram, Github, Linkedin, Copyright, Heart  } from 'lucide-react';

const hoverClass = 'transition  hover:-translate-y-1 hover:scale-110 duration-300';

function Footer() {
  return (
    <>
      <div className='w-full bg-primary h-auto bottom-0 fixed'>
        <div className='w-9/12  mx-auto'>
          <div className='grid  gap-0.5   place-items-center items-center align-middle mx-auto '>
                <div className='font-Anton text-white p-2 m-auto text-2xl '> <Link to={'/'}>Sahil<em className='text-varRed text-5xl font-mono'>.</em></Link>
                </div>
                <h2 className='text-varYellow p-2 m-auto'>Follow me</h2>
                <div className='mt-1 flex justify-between gap-x-3 my-2'>
                   <Link to={'https://www.facebook.com/profile.php?id=100007484589958'} className={hoverClass}  target='__blank'> <Facebook color='#0866FF' size={30}/> </Link> 
                   <Link to={'https://instagram.com/isahilsharma21_?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'} target='__blank' className={hoverClass}> <Instagram  color='#C7399C' size={30}/></Link> 
                   <Link to={'https://github.com/SAHIL-Sharma21'} target='__blank' className={hoverClass}> <Github  color='#161414' size={30}/></Link> 
                   <Link to={'https://www.linkedin.com/in/sahil-sharma2001/'} target='__blank' className={hoverClass}> <Linkedin color='#0A66C2' size={30} /></Link> 
                </div>
          </div>
          <hr className='mt-3 text-white'/>
          <div className='flex justify-between my-3'>
            <div className='flex gap-1'> <Copyright color='white'/> <p className='text-white'>2024 | All rights reserved.</p> </div>
            <div className='flex gap-2 text-white'>made with <Heart color='#F73E2F' size={18} className='items-center mt-1' /> by <span className='text-varYellow font-bold'>Sahil Sharma</span></div> 
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Footer