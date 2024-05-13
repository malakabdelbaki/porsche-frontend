import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Product.css";


const ProductDetail = () => {
  const { id } = useParams(); // Access the id parameter from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/v1/product/${id}`);
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
      await axios.post('/api/v1/purchase', { productId: id });
      alert('Product added to cart successfully!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('Failed to add product to cart. Please try again later.');
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Production Year: {product.production_year}</p>
          <p>Quantity: {product.quantity}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      ) : (
        <p>No product data available</p>
      )}
    </div>
  );
};

export default ProductDetail;

