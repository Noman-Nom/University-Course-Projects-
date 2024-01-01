import React from 'react'
import Cart from '../../Components/Cart/Cart'
import Navbar from '../../Components/Navbar/Navbar'

const CartPage = () => {
  return (
    <div>
        <div className='top'>

<Navbar className="navbar" />
</div>

        <Cart/>
    </div>
  )
}

export default CartPage