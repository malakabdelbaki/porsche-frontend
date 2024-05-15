import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

        const fetchProductsBySearch = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/product/search?name=${searchTerm}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products by search:', error);
            }
        };

        if (searchTerm.trim() !== '') {
            fetchProductsBySearch();
        } else {
            // If search term is empty, fetch all products
            fetchAllProducts();
        }
    }, [searchTerm]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <h1>Browse Products</h1>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <p>{product.category}</p>
                        <p>{product.quantity}</p>
                        <p>{product.production_year}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;
