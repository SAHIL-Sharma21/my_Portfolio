import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Skills from './components/Skiils/Skills.jsx'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'


//making router
const router = createBrowserRouter(
  createRoutesFromElements(
    // home route 
    <Route path='/' element = {<App />}> 
      <Route path='' element = {<Home />} />
      <Route path='skills' element = {<Skills />} />
      <Route  path='about' element = {<About />}/>
      <Route path='projects' element = {<Projects />} />
      <Route  path='contact' element = {<Contact />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
