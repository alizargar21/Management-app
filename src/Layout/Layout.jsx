import React from 'react'
import Navbar from '../components/Navbar'


const Layout = ({children}) => {
  return (
    <main className='w-full h-screen bg-gray-200 '>
        <header className='w-full h-12 bg-blue-700 text-gray-200 p-2'>
            <Navbar />
        </header>
    {children}
    </main>
  )
}

export default Layout