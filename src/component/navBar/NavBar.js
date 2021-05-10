import React, { useState } from 'react';
import './NavBar.css';
const arr1 = ['Apple', 'Mango', 'Grapes', 'orange'];
const NavBar = () => {
  const [search, setSearch] = useState('');
  const searchInput = (event) => {
    setSearch(event.target.value);
  };

  const filteredArray = arr1.filter((cval) => {
    if (cval.slice(0, search.length).toLowerCase() == search.toLowerCase()) {
      return cval;
    }
  });
  console.log(filteredArray);
  return (
    <div className='nav_div'>
      <span className='home_span'>HOME</span>
      <div className='nav_sub_div'>
        <input placeholder='Search' onChange={searchInput} />
        <span className='nav_option'>PRODUCT</span>
        <span className='nav_option'>CART</span>
        {filteredArray.map((cval) => {
          return <span>{cval}</span>;
        })}
        <span className='nav_option'>LOGIN</span>
      </div>
    </div>
  );
};

export default NavBar;
