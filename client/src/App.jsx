import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import History from './pages/History'
import Dashboard from "./pages/Dashboard";

const App = () => {
  
  const {showLogin} = useContext(AppContext)

  return (
    <div className='flex flex-col min-h-screen px-4 sm:px-10 md:px-14 lg:px-28 bg-gradient-to-br from-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right'/>

      <Navbar/>
      <div className="flex-1">
        { showLogin && <Login />}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/buy' element={<BuyCredit/>}/>
          <Route path='/history' element={<History />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
      
    </div>
  )
}

export default App
