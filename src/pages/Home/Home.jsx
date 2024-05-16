import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navbar from '../Navbar/Navbar';

import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/product');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching all products:', error);
            }
        };

        fetchAllProducts();
    }, []); // Run only once on component mount

    useEffect(() => {
        const fetchProductsBySearch = async () => {
            if (searchTerm.trim() === '') {
                // If search term is empty, reset to all products
                try {
                    const response = await axios.get('http://localhost:3000/api/v1/product');
                    setProducts(response.data);
                } catch (error) {
                    console.error('Error fetching all products:', error);
                }
            } else {
                try {
                    const response = await axios.get(`http://localhost:3000/api/v1/product/search?name=${searchTerm}`);
                    setProducts(response.data);
                } catch (error) {
                    console.error('Error fetching products by search:', error);
                }
            }
        };

        fetchProductsBySearch();
    }, [searchTerm]); // Run whenever searchTerm changes

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to the product detail page
    };

    return (
        <div>
            <Navbar />
        <div className="container">
            <h1>Find Your Dream Prosche</h1>
            <input
                type="text"
                className="search-input"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className="products-grid">
                {products.map(product => (
                    <div
                        key={product._id}
                        className="product-box"
                        onClick={() => handleProductClick(product._id)} // Add click handler
                    >
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Production Year: {product.production_year}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Home;
