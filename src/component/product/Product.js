import React from 'react';
import './Product.css'

const Product =()=>{
	return(<div className='main_product_div'>
	<img className='product_full_image' src='https://5.imimg.com/data5/GL/KU/LT/SELLER-29605436/mens-nike-sports-shoes-500x500.jpg'/>
<div className='product_details'>
<span >Nike</span>
<span>Shoes</span>
<span>Rating</span>
<span>Price</span>
<div>
<span className='add_to_cart_button'>Add to cart</span>
<span className='buy_button'>Buy</span>
</div>
</div>
	
	</div>)
}

export default Product;




