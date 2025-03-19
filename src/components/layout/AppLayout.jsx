import React from 'react'
import Header from '../UI/Header.jsx'
import Footer from '../UI/Footer.jsx'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='bg-gray-700'>
      <Header />
      <main className="container py-8 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout