import React,{useEffect,useState} from 'react'
import axios from 'axios'

import './Cart.css'
function Cart() {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        var userID = localStorage.getItem('userID')
        const fetchData = async () => {
            const result = await axios(
              `http://localhost:3000/api/v1/product/${userID}`,
            );
            return result.data;
        };
        fetchData().then((response)=>{setProducts(response)});
    },[])

  return (
    <div>
      {products.map((product)=>{
        return (
            <div className="productCard" key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
            </div>
        )
      })}

      <div className='test'>
      </div>
      <div>Checkout</div>
    </div>
  )
}

export default Cart;