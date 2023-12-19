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
import AllFoodPage from './Pages/AllFoodPage/AllFoodPage'

const App = () => {
  return (
    <div>

     
      <BrowserRouter>
      <Routes>
        
     <Route path='/' index element={<Home/>}  />
     <Route path='/menu' index element={<MenuPage/>}   />
     <Route path='/food' element={<AllFoodPage/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App