import React from 'react'
import Header from '../UI/Header.jsx'
import Footer from '../UI/Footer.jsx'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default AppLayout