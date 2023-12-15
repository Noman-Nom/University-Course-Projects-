import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Test from './Test'
import Add from './Add'
import Update from './Update'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Test/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/update/:id' element={<Update/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App