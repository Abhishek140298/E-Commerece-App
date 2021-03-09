import React from 'react';
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='nav_div'>
      <span className='home_span'>HOME</span>
      <div className='nav_sub_div'>
      <span className='nav_option'>Product</span>
      <span className='nav_option'>Cart</span>
      <span className='nav_option'>Login</span>
      </div>
      
    </div>
  );
};

export default NavBar;
