import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    // console.log(props);
    const { img, name, seller, ratings, quantity, price } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h6 className='product-name'>{name}</h6>
                <p>price: ${price}</p>
                <p>manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};
import './Product.css';
export default Product;