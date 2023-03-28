import React from 'react';
import './Cart.css';
// const Cart = (props) => {
const Cart = ({cart}) => {
    // option-1
    // const cart = props.cart
    // option-2
    // const {cart} = props;
    
    console.log(cart);
    let total = 0;
    for (const product of cart){
        total = total + product.price;
    }
    return (
        <div className='cart'>
            <h4>order summary</h4>
            <p>selected Items: {cart.length}</p>
            <p>Total price: {total}</p>
            <p>Total Shipings:</p>
            <p>tax</p>
            <h6>Grand Total:</h6>
        </div>
    );
};

export default Cart;