import React from 'react';
import './Cart.css';
// const Cart = (props) => {
const Cart = ({cart}) => {
    // option-1
    // const cart = props.cart
    // option-2
    // const {cart} = props;
    
    console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    // akane 7 parcent tex ber kora hoica
    const tax = totalPrice  * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;


    
    return (
        <div className='cart'>
            <h4>order summary</h4>
            <p>selected Items: {cart.length}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Total Shipings: ${totalShipping}</p>
            <p>tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;