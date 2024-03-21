import React from 'react'
import {Route,Routes} from "react-router-dom"
import HomePage from '../Pages/HomePage '
import flow from '../Components/flow'
import SignUpPage from '../Pages/SignUpPage'
import LoginPage from '../Pages/LoginPage'

const MainRoutes = () => {
  return (
    <div>
       <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/flow' element={<flow />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    </div>
  )
}

export default MainRoutes