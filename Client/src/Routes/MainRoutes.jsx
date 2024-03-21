import React from 'react'
import {Route,Routes} from "react-router-dom"
import HomePage from '../Pages/Homepage'

import SignUpPage from '../Pages/SingupPage'
import LoginPage from '../Pages/LoginPage'
import DnDFlow from '../Components/flow'
import Navbar from '../Components/Navbar'
import PrivateRoute from './PrivateRoute'

const MainRoutes = () => {

  return (
    <div>
      <Navbar/>
       <Routes>
            {/* <Route path='/' element={<HomePage />} /> */}
            <Route path='/' element={<PrivateRoute><DnDFlow /></PrivateRoute> } />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    </div>
  )
}

export default MainRoutes