import React from 'react';
import './Shoes.css';
const Shoes = (props) => {
    // console.log(props.product);
    // console.log(props);
    const { name, img, seller, price, ratings } = props.product;
    const { handleAddToCard } = props;
    return (
        <div>
            <div className="card shop" >
                <img src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-text">price:{price}</h6>
                    <p className="card-text">{seller}</p>
                    <p className="card-text">{ratings}</p>

                </div>
                <button onClick={() => handleAddToCard(props.product)} className='btn btn-primary'>Add To Card</button>

            </div>
        </div>
    );
};

export default Shoes;