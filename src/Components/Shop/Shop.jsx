import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../fakeData/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        // console.log(products);
        const storedCart = getShoppingCart();
        const savedCart = [];
        // console.log(storedCart);
        // step 1 get id of the added product
        for(const id in storedCart){
            // console.log(id);
            // step 2 get the product by using id
            const addedProduct = products.find(product => product.id === id)
            console.log(addedProduct);
            if(addedProduct){

                // step 3 get quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4 add the addedproduct to the saved cart
                savedCart.push(addedProduct);
            }
            console.log('added product', addedProduct);
        }
        //step 5 set the cart
        setCart(savedCart);
    }, [products])
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);

    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}>

                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
import './Shop.css';
export default Shop;