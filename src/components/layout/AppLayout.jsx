import React from 'react'
import Header from '../UI/Header.jsx'
import Footer from '../UI/Footer.jsx'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="container py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default AppLayout