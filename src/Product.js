import React from 'react'
import "./Product.css";

const Product = () => {
  return (
    <div className='product'>
       <div className="product__info">
           <p>Almış olduğunuz bu ürün son derece dayanıkı bir üründür(black)😉</p>
           <p className='product__price'>
               <small>$</small>
               <strong>30</strong>
           </p>
             
           <div className="product__rating">⭐⭐</div>
       </div> 
       <img src="https://i.pinimg.com/originals/8b/d9/e1/8bd9e15460610cf906e97affd184397e.jpg" alt="product_image" />
       <button>Add to Basket</button>
    </div>
  )
}

export default Product