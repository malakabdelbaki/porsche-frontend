import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';

import '../Admin.css'

const Update = () => {
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

  const handleSelectChange = (e) => {
    const product = products.find(product => product.name === e.target.value);
    setSelectedProduct(product);
  };

  const handleInputChange = (e, field) => {
    setSelectedProduct({...selectedProduct, [field]: e.target.value});
  };


  const handleUpdate = () => {
    const body = {
      "name":selectedProduct.name,
      "price":selectedProduct.price,
      "description":selectedProduct.description,
      "category":selectedProduct.category,
      "production_year":selectedProduct.productionYear,
      "quantity":selectedProduct.quantity
    }
    let token = localStorage.getItem('token');
    const productID = selectedProduct._id;
    const headers = {headers: {'Content-Type': 'application/json','Authorization': 'Bearer ' + token}};
    const sendRequest = async () => {
      const result = await axios.patch(
        `http://localhost:3000/api/v1/product/${productID}`,body, headers
      );
      return result;
    };
    sendRequest().then(alert('Product updated successfully!'));
  }


  

  return (
    <div>
      <Navbar />
    <div className="product">
    <div className='title'> Update a product</div>
          <br />
          <label> Select Product:</label>
          <br />
          <select value={selectedProduct} onChange={handleSelectChange}>
        {products.map((item) => (
          <option key={item._id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <label> Enter name:</label>
      <input 
          type="text"
          required  
          value={selectedProduct ? selectedProduct.name : ''}
          onChange={(e)=>handleInputChange(e, 'name')}
        />
        <br />
        <label> Enter price:</label>
        <input 
          type="number"
          required
          value={selectedProduct ? selectedProduct.price : ''} 
          onChange={(e)=>handleInputChange(e, 'price')}
          />
        <br />
        <label> Description:</label>
        <input 
          type="text"
          required
          value={selectedProduct ? selectedProduct.description : ''} 
          onChange={(e)=>handleInputChange(e, 'description')}
        />
        <br />
        <label> Enter category:</label>
        <input 
          type="text"
          required
          value={selectedProduct ? selectedProduct.category : ''} 
          onChange={(e)=>handleInputChange(e, 'category')}
          />
          <br />
        <label> production year:</label>
        <input 
          type="date"
          required
          value={selectedProduct ? selectedProduct.productionyear : ''} 
          onChange={(e)=>handleInputChange(e, 'productionyear')}
          />
          <br />
        <label> Enter quantity:</label>
        <input 
          type="number"
          required
          value={selectedProduct ? selectedProduct.quantity : ''} 
          onChange={(e)=>handleInputChange(e, 'quantity')}
          />
           <br />
           <button onClick={()=>handleUpdate()}>Update</button>
           <br />
    </div>
    </div>

  )
}

export default Update;