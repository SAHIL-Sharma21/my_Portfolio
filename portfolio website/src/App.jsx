import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import {Outlet} from 'react-router-dom'

function App() {
  

  return (
    <>
      <Header />
      {/* all the components will render here in outlet */}
      <Outlet /> 
      <Footer />
    </>
  )
}

export default App
