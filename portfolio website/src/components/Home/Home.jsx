import React from 'react'
import {NavLink} from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='w-full bg-background flex justify-center mb-5 '>
        <div className='w-9/12 flex justify-around  rounded-lg mt-6 h-max shadow-lg shadow-primary mb-6'>
             <div className='bg-primary text-white rounded-tl-lg rounded-bl-lg w-3/4'>
                <div className='p-4 flex flex-col justify-around  align-middle gap-5 mt-5'>
                    <h1 className='text-4xl font-sans font-bold text-varYellow'> <span className='text-xl text-white'>Hi, <br /> I am </span>  Sahil Sharma</h1>
                    <p className='mt-5 font-OpenSans'>Hey there, tech enthusiast! I'm <span className='font-OpenSans font-bold text-varYellow'>Sahil Sharma</span> , a passionate Front-End Developer and Software Sorcerer on a mission to turn lines of code into captivating digital experiences. 🌐✨ <br /> As a relentless explorer of the ever-evolving tech landscape, I bring ideas to life through sleek designs, seamless user interfaces, and rock-solid code structures. <br /> Ready to embark on a tech-driven adventure? Scroll down, explore my creations, and let's build the future together—one line of code at a time! 💻✨</p>
                    <button  name='contact'>
                        <NavLink to={"contact"} className={() => `text-white font-semibold bg-varRed rounded-lg px-4 py-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-varYellow focus:ring-2`}>Hire Me!</NavLink>
                    </button>
                </div> 
              </div>
              <div className='w-1/4'>
                <img  className='rounded-tr-lg rounded-br-lg h-min'  src='src\assets\photos\Sahil_port.jpg' alt='My profile image' />
              </div>
        </div>
      </div>
    </>
  )
}

export default Home