import React, { useState } from 'react';


import './Admin.css'

const Admin = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [productionYear , setProductionYear] = useState('')
  const [quantity, setQuantity] = useState('')

  return (
    <div className="create product">
      <h2> Create a new product</h2>
      <form>
        <label> Enter the name of the product:</label>
        <input 
          type="text"
          required  
          onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <label> Enter price:</label>
        <input 
          type="number"
          required  
          onChange={(e)=>setPrice(e.target.value)}
          />
          <br />
          <label> Description:</label>
        <input 
          type="text"
          required  
          onChange={(e)=>setDescription(e.target.value)}
          />
          <br />
          <label> Enter Category:</label>
        <input 
          type="text"
          required  
          onChange={(e)=>setCategory(e.target.value)}
          />
          <br />
          <label> Production year:</label>
        <input 
          type="date"
          required  
          onChange={(e)=>setProductionYear(e.target.value)}
          />
          <br />
          <label> Enter Quantity:</label>
        <input 
          type="number"
          required  
          onChange={(e)=>setQuantity(e.target.value)}
          />
          <br />
          <button>Create</button>
          <br />
          <br />
          <label> Select Product:</label>
          <br />
          <select>
           value={name}
           onChange={(e)=> setName(e.target.value)}
           </select>
           <br />
           <button>Update</button>
           <br />
           <br />
          <label> Delete Product:</label>
          <br />
          <select>
           value={name}
           onChange={(e)=> setName(e.target.value)}
           </select>
           <br />
          <button>Delete</button>

      </form>

    </div>

  )
}

export default Admin