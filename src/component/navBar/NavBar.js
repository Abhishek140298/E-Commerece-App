import React from 'react';
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='nav_div'>
      <span className='home_span'>HOME</span>
      <div className='nav_sub_div'>
      <input placeholder='Search'/>
      <span className='nav_option'>PRODUCT</span>
      <span className='nav_option'>CART</span>
      <span className='nav_option'>LOGIN</span>
      </div>
      
    </div>
  );
};

export default NavBar;
