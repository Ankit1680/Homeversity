import React from 'react'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import NavBar from './components/NavBar'
import {Route,Routes} from "react-router-dom"
import Service from './components/Service'
import Contact from './components/Contact'
import PG from './components/PG'
import Hostel from './components/Hostel'
function App() {
  return (
    <div className='overflow-x-hidden overflow-y-auto'>
    <NavBar/>
    <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<AboutUs/>}></Route>
       <Route path='/service' element={<Service/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/pg' element={<PG/>}></Route>
       <Route path='/hostel' element={<Hostel/>}></Route>


    </Routes>
    
    </div>
  )
}

export default App