import React from 'react'
import Login from './Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './SignUp/SignUp'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>

        </Routes>
      </BrowserRouter>

      {/* <Login /> */}
    </div>
  )
}

export default App