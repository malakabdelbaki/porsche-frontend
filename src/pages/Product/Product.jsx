import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Product.css";
import Navbar from '../Navbar/Navbar';


const Product = () => {
  const { id } = useParams(); // Access the id parameter from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const type = localStorage.getItem('type');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/product/${id}`);
        console.log(response); // Log the API response(testing)
        if (response.data) {
          setProduct(response.data);
          setLoading(false);
        } else {
          setError('Empty response data received');
          setLoading(false);
        }
      } catch (error) {
        setError('Error fetching product');
        setLoading(false);
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      // Send a POST request to the backend to add the product to the cart
      let token = localStorage.getItem('token');
      const body = {
        productID: id,
      };
      console.log(body);
      const headers = {headers: {'Content-Type': 'application/json','Authorization': 'Bearer ' + token}};
      await axios.post('http://localhost:3000/api/v1/customer',body,headers);
      alert('Product added to cart successfully!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('Failed to add product to cart. Please try again later.');
    }
  };
 
<button onClick={handleAddToCart}>Add to Cart</button>
  

const withProductWrapper = (WrappedComponent) => ({ loading, error, product }) => {
  return (
    <div className="product-wrapper">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : (
        <WrappedComponent product={product} />
      )}
    </div>
  );
};

return (
  <div>
    <Navbar />
  <div className="productPageContainer">
    <div className="product-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : product ? (
        <div>
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-production-year">Production Year: {product.production_year}</p>
          {type=='customer' &&(
          <button className="btn-danger" onClick={handleAddToCart}>Add to Cart</button>
        )
          }
        </div>
      ) : (
        <p>No product data available</p>
      )}
    </div>
  </div>
  </div>
);
};


export default Product;



 
  
