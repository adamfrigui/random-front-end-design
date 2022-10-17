import React from 'react'
import './Product.css'
 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/Actions/ProductActions';

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products);

    const dispatch = useDispatch();
    const addToCart1 = (product) => {
        dispatch(addToCart(product));
        console.log(product)
    }

    const renderList = products.map((product) => {
        const { id, image, title, price } = product;
        return (
            <div className="content" key={id}>

                <img src={image} className="img-shop" alt='' />
                <h3>{title}</h3>
                 
                <h6>${price}</h6>
                <div className='btn-all'>

                    <button className='buy-btn1' onClick={() => addToCart1(product)}>Add cart</button>
                    <Link to={`/product/${id}`} style={{ textDecoration: "none", color: "black" }}>
                        <button className='buy-btn2'>View item</button>
                    </Link>
                </div>

            </div>
        )
    })
    return (
        <>{renderList}</>
    );
}

export default ProductComponent