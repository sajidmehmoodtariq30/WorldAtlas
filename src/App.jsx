import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Country from './pages/Country'
import CountryDetails from './components/UI/CountryDetails'
import AppLayout from './components/layout/AppLayout'
import Error from './pages/Error'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />} errorElement={<Error />} >
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/country' element={<Country />} />
          <Route path='/country/:countryCode' element={<CountryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
