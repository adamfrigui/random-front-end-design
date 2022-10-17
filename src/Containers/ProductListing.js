
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios'
import { SetProducts } from '../Redux/Actions/ProductActions';
import { useEffect } from 'react';
import './Product.css'
import Header2 from '../components/Header/Header2'; 

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(SetProducts(response.data));
      
  }



  useEffect(() => {
    fetchProducts();
  },[] );
  
  console.log("products :", products)


  return (
    <div className='haha'>
    <Header2/>
    <div className='gallery'>
      <ProductComponent />
      </div>
      </div>
  )
};

export default ProductListing