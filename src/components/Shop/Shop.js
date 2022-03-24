import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Shoes from '../Shoes/Shoes';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCard = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <>

            <div className="shop-products">

                <div className=" products" >

                    {
                        products.map(product => <Shoes
                            key={product.id}
                            product={product}
                            handleAddToCard={handleAddToCard}
                        >

                        </Shoes>)
                    }
                </div>

                <div className="card information">
                    <Cart cart={cart}></Cart>
                </div>

            </div>




        </>
    );
};

export default Shop;