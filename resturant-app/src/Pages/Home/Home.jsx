import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import PromoPage from '../PromoPage/PromoPage'
import BlackSlidePage from '../BlackSlidePage/BlackSlidePage'
import DishesTypePage from '../DishesTypePage/DishesTypePage'
import BlueSlidePage from '../BlueSlidePage/BlueSlidePage'
import MenuPage from '../MenuPage/MenuPage'
import MenuFrontPage from '../MenuFrontPage/MenuFrontPage'
import MenuFront from '../../Components/FrontMenu/MenuFront'

const Home = () => {
  return (
    <div>
            <Navbar/>
            <Header/>
            <PromoPage/>
            <BlackSlidePage/>
            <DishesTypePage/>
            <BlueSlidePage/>
            <MenuFront/>
           {/* <MenuFrontPage/> */}
            

    </div>
  )
}

export default Home