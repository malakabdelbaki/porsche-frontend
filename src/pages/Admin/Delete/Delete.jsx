import React, { useState,useEffect } from 'react';
import axios from 'axios';

import '../Admin.css'

const Delete = () => {
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


  const handleSelectDeleteChange = (e)=>{
    const product = products.find(product => product.name === e.target.value);
    console.log(product);
    setSelectedDeleteProduct(product);
    console.log(selectedDeleteProduct);
  }


  function handleDeleteProduct(){
      const productID = selectedDeleteProduct._id;
      let token = localStorage.getItem('token');
      const headers = {headers: {'Content-Type': 'application/json','Authorization': 'Bearer ' + token}};
      const sendRequest = async () => {
          const result = await axios.delete(
            `http://localhost:3000/api/v1/product/${productID}`, { ...headers }
          );
          return result;
      };
      sendRequest();
  }

  

  return (
    <div className="product">
      <h2> Delete a product</h2>
          <br />          
          <select onChange={handleSelectDeleteChange}>
        {products.map((item) => (
          <option key={item._id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
           <br />
          <button onClick={()=>handleDeleteProduct()}> Delete</button>
    </div>

  )
}

export default Delete