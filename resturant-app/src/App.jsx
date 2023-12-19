import React from 'react'
import Home from './Pages/Home/Home'
import PromoPage from './Pages/PromoPage/PromoPage'
import BannerPage from './Pages/BannerPage/BannerPage'
import BlackSlidePage from './Pages/BlackSlidePage/BlackSlidePage'
import DishesTypePage from './Pages/DishesTypePage/DishesTypePage'
import BlueSlidePage from './Pages/BlueSlidePage/BlueSlidePage'
import MenuPage from './Pages/MenuPage/MenuPage'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Menu from './Components/Menu/Menu'

const App = () => {
  return (
    <div>

     
      <BrowserRouter>
      <Routes>
        
     <Route path='/' index element={<Home/>}  />
     <Route path='/food' index element={<MenuPage/>}   />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App