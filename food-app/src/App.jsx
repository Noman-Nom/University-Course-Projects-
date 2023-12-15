import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Test from './Test'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Test/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App