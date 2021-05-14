import React from 'react';
import {FormControl,Select,MenuItem} from '@material-ui/core';

const Cart = () => {
  return (
    <div>
      <img src='https://5.imimg.com/data5/GL/KU/LT/SELLER-29605436/mens-nike-sports-shoes-500x500.jpg' alt ='productImage'/>
			<div>
			<span>Price</span>
			<FormControl>
			<Select><MenuItem value='0'>0(Delete)</MenuItem>
			<MenuItem>1</MenuItem></Select>
			</FormControl>
			<span>Buy</span>
			</div>
    </div>
  );
};

export default Cart;
