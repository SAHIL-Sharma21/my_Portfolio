import React from 'react'

function Skills() {

  const cardClass = 'h-40 w-40 bg-primary mt-8 mb-8 p-4 rounded-md shadow-md flex flex-col justify-center items-center gap-1';

  //heading variable
  const headingStyle = 'text-varYellow font-OpenSans font-semibold';

  return (
    <>
      <div className='w-full bg-background flex justify-center items-center flex-col pb-5 gap-3 '>
          <h1 className='font-sans font-bold mt-4 text-3xl'>Skills</h1>
          <p className='font-OpenSans font-medium text-base'>Technologies I know and deep dive into.</p>
          <div className='w-9/12 grid grid-cols-3 justify-evenly justify-items-center gap-2  rounded-lg mt-6 h-full shadow-2xl bg-white  shadow-white mb-6'>
            <div className={cardClass}>
              <img src="src\assets\React_logo.svg" alt="react logo" width={100} height={100}/>
              <h1 className={headingStyle}>React js</h1>
            </div>
            <div className={cardClass}>
                <img src="src\assets\Javascript_logo.svg" alt="Javascript logo"  width={100} height={100}/>
                <h1 className={headingStyle}>Javacript</h1>
            </div>
            <div className={cardClass}>
              <img src="src\assets\HTML-Logo.svg" alt="HTML logo"  width={100} height={100}/>
              <h1 className={headingStyle}>HTML</h1>
            </div>
            <div className={cardClass}>
              <img src="src\assets\Css_Logo.svg" alt="CSS logo" width={100} height={100} />
              <h1 className={headingStyle}>CSS</h1>
            </div>
            <div className={cardClass}>
              <img src="src\assets\Git_Logo.svg" alt="git logo" width={100} height={100}/>
              <h1 className={headingStyle}>Git/GitHub</h1>
            </div>
            <div className={cardClass}>
              <img src="src\assets\npm_logo.svg" alt="npm logo" width={100} height={100}/>
              <h1 className={headingStyle}>NPM Package</h1>
            </div>
            <div className={cardClass}>
              <img src="src\assets\tailwind_logo.svg" alt="Tailwind logo" width={100} height={100}/>
              <h1 className={headingStyle}>Tailwind CSS</h1>
            </div>
            <div className={cardClass}>
              <img src="src\assets\node_icon.svg" alt="Nodejs logo" width={100} height={100}/>
              <h1 className={headingStyle}>Node Js</h1>
            </div>
            <div className={cardClass}>
              <img src="src\assets\java_logo.svg" alt="Java logo" width={50} height={50}/>
              <h1 className={headingStyle}>Java</h1>
            </div>
          </div>
      </div>
    </>
  )
}

export default Skills