import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import PromoPage from '../PromoPage/PromoPage'
import BlackSlidePage from '../BlackSlidePage/BlackSlidePage'
import DishesTypePage from '../DishesTypePage/DishesTypePage'
import BlueSlidePage from '../BlueSlidePage/BlueSlidePage'
import MenuPage from '../MenuPage/MenuPage'

const Home = () => {
  return (
    <div>
            <Navbar/>
            <Header/>
            <PromoPage/>
            <BlackSlidePage/>
            <DishesTypePage/>
            <BlueSlidePage/>
            <MenuPage/>
            

    </div>
  )
}

export default Home