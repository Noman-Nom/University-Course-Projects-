import React from 'react'
import Home from './Pages/Home/Home'
import PromoPage from './Pages/PromoPage/PromoPage'
import BannerPage from './Pages/BannerPage/BannerPage'
import BlackSlidePage from './Pages/BlackSlidePage/BlackSlidePage'
import DishesTypePage from './Pages/DishesTypePage/DishesTypePage'
import BlueSlidePage from './Pages/BlueSlidePage/BlueSlidePage'

const App = () => {
  return (
    <div>

      <Home/>
      <PromoPage/>
      <BannerPage/>
      <BlackSlidePage/>
      <DishesTypePage/>
      <BlueSlidePage/>
    </div>
  )
}

export default App