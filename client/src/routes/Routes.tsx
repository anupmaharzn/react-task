import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../page/Auth/Login'
import Register from '../page/Auth/Register'

import LandingScreen from '../page/Home/LandingScreen'
import Navbar from '../components/common/Partials/Navbar'
import Footer from '../components/common/Partials/Footer'
import ScrollButton from '../components/common/ScrollButton'
import * as RouteList from './constant'

const Routess = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={RouteList.home} element={<LandingScreen />} />
          <Route path={RouteList.login} element={<Login />} />
          <Route path={RouteList.register} element={<Register />} />
        </Routes>
        <Footer />
        <ScrollButton />
      </BrowserRouter>
    </>
  )
}

export default Routess
