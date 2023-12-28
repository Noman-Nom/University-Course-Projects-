import React from 'react'
import AllFood from '../../Components/AllFood/AllFood'
import Navbar from '../../Components/Navbar/Navbar'
import './AllFoodPage.scss'

const AllFoodPage  =  () => {
  return (
    <div className='container'>

      <div className='top'>
      <Navbar/>

      </div>

      <div className='bottom'>

      <AllFood/>
      </div>
    </div>
  )
}

export default AllFoodPage
