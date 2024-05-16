import React, { useState,useEffect } from 'react';
import axios from 'axios';

import '../Admin.css'

const Create = () => {
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [productionYear , setProductionYear] = useState("2000-01-01")
  const [quantity, setQuantity] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedDeleteProduct, setSelectedDeleteProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/api/v1/product');
      setProducts(result.data);
      if (result.data.length > 0) {
        setSelectedProduct(result.data[0]);
      }
    };

    fetchData()
  }, []);


  function handleSubmit(e){
    e.preventDefault();
    console.log(name, price, description, category, productionYear, quantity);
    const body = {
      "name":name,
      "price":price,
      "description":description,
      "category":category,
      "production_year":productionYear,
      "quantity":quantity
    }
    let token = localStorage.getItem('token');
    const headers = {headers: {'Content-Type': 'application/json','Authorization': 'Bearer ' + token}};
    const sendRequest = async () => {
      const result = await axios.post(
        `http://localhost:3000/api/v1/product`,body, headers
      );
      return result;
    };
    sendRequest().then((result)=>console.log(result));
  }

  return (
    <div className="product">
      <h2> Create a new product</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label> Enter the name of the product:</label>
        <input 
          type="text"
            required
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <label> Enter price:</label>
        <input 
          type="number"
          required
          value={price} 
          onChange={(e)=>setPrice(e.target.value)}
          />
          <br />
          <label> Description:</label>
        <input 
          type="text"
          required
          value={description}  
          onChange={(e)=>setDescription(e.target.value)}
          />
          <br />
          <label> Enter Category:</label>
        <input 
          type="text"
          required
          value={category}  
          onChange={(e)=>setCategory(e.target.value)}
          />
          <br />
          <label> Production year:</label>
        <input 
          type="date"
          required
          value={productionYear}  
          onChange={(e)=>setProductionYear(e.target.value)}
          />
          <br />
          <label> Enter Quantity:</label>
        <input 
          type="number"
          required
          value={quantity}  
          onChange={(e)=>setQuantity(e.target.value)}
          />
          <br />
          <button>Create</button>
          <br />
      </form>

    </div>

  )
}

export default Create;