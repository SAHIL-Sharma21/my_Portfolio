import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {

  const animationClass = `transition ease-out delay-100`;


  return (
    <>
        <div className='w-full h-auto bg-primary z-10 shadow-white top-0'>

          <div className='max-w-full flex flex-wrap justify-around'>
                <h1 className='font-Anton text-white text-2xl lg:mb-3'> <Link to={'/'}>Sahil<em className='text-varRed text-5xl font-mono'>.</em></Link></h1>

          <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2"'>
              <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0" lg:mb-2'>
                  <li className=''>
                      <NavLink to={"/"} className={({isActive}) => `${isActive ? "text-varYellow" : "text-[#808080] "} ${animationClass}`}>Home</NavLink>
                  </li>
                  <li>
                      <NavLink to={"skills"} className={({isActive}) => `${isActive ? "text-varYellow" : "text-[#808080]"} ${animationClass} hover:underline `}>Skills</NavLink>
                  </li>
                  <li>
                      <NavLink to={"about"} className={({isActive}) => `${isActive ? "text-varYellow" : "text-[#808080]"} ${animationClass} `}>About</NavLink>
                  </li>
                  <li>
                      <NavLink to={"projects"} className={({isActive}) => `${isActive ? "text-varYellow" : "text-[#808080]"} ${animationClass} `}>Projects</NavLink>
                  </li>
              </ul>
          </div>
          

        <button  name='contact'>
          <NavLink to={"contact"} className={() => `text-white font-semibold bg-varRed rounded-lg px-4 py-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-varYellow`}>Contact me</NavLink>
        </button>
         
</div>

       
        </div>

        
    </>
    
  )
}

export default Header



