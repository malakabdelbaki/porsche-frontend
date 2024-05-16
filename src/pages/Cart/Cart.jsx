import {useEffect,useState} from 'react'
import axios from 'axios'
import { MdDelete } from "react-icons/md";
import './Cart.css'
import { useNavigate } from "react-router-dom";
function Cart() {
    const navigate = useNavigate();
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);

    function handleDelete(productID){
      const data = {productID:productID}
      let token = localStorage.getItem('token');
      console.log(token);
      const headers = {headers: {'Content-Type': 'application/json','Authorization': 'Bearer ' + token}};
      console.log(headers.headers)
      const sendRequest = async () => {
          const result = await axios.delete(
            `http://localhost:3000/api/v1/customer`, { data, ...headers }
          );
          return result;
      };
      sendRequest().then(()=>filterArray(productID));

    }

    function filterArray(productID){
      setCart(cart.filter((product)=>product._id!==productID));
    }

    function handleCheckout(){
      let token = localStorage.getItem('token');
      const headers = {headers: {'Content-Type': 'application/json','Authorization': 'Bearer ' + token}};
      const sendRequest = async () => {
          const result = await axios.post(
            `http://localhost:3000/api/v1/purchase`, {}, headers
          );
          return result;
      };
      sendRequest().then((result)=>console.log(result));
    }

    

    useEffect(()=>{
        let token = localStorage.getItem('token');
        if(!token) navigate('/login');
        const headers = {headers: {'Content-Type': 'application/json','Authorization': 'Bearer ' + token}};
        const fetchData = async () => {
            const result = await axios(
              `http://localhost:3000/api/v1/customer/cart`, headers
            );
            return result.data;
        };
        
        fetchData().then((response)=>{setCart(response.cart);});
    },[])

    useEffect(()=>{
      setTotal((cart.reduce((acc,product)=>acc+product.price,0)));
    },[cart])

  return (
    <main className='background'>
      <div className='wrapper'>
        <div>
        {cart.map((product)=>{
          return (
              <div className="productCard" key={product._id}>
                  <h2>{product.name}</h2>
                  <div className='price'>
                  <p>${product.price}</p>
                  <button className='delete_button' onClick={()=>handleDelete(product._id)}>
                  <MdDelete size={30} />
                  </button>
                  </div>
              </div>
          )
        })}
        {cart.length===0 && <h2>Your cart is empty</h2>}
        </div>
        <div className='total'>
          <p>Total: ${total}</p>
        <button className='checkout_button' onClick={()=>handleCheckout()}>Checkout</button>
        </div>

      </div>
    </main>
  )
}

export default Cart;