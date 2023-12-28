import React from 'react';
import Menu from '../../Components/Menu/Menu';
import Navbar from '../../Components/Navbar/Navbar';
import './MenuPage.scss';

const MenuPage = () => {
  return (
    <div className='container'>

      <div className='top'>

        <Navbar className="navbar" />
      </div>


      <div className='bottom'>

        <Menu />
      </div>

     <div className="back">
       
      </div>

    </div>
  );
};

export default MenuPage;
