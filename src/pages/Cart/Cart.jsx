import {useEffect,useState} from 'react'
import axios from 'axios'
import { MdDelete } from "react-icons/md";
import './Cart.css'
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar';

function Cart() {
    const navigate = useNavigate();
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);
    const [confirm_msg, setconfirmmsg]= useState('')

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
            `http://localhost:3000/api/v1/purchase`, {},headers
          );
          return result;
      };
      sendRequest().then((result) => {
        // console.log(result.data.message);
        setconfirmmsg(result.data.message); 
    });
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
    },[confirm_msg])

    useEffect(()=>{
      setTotal((cart.reduce((acc,product)=>acc+product.price,0)));
    },[cart])

  return (
    <div>
      <Navbar />
    <main className='background'>
      <div className='wrapper'>
        {!confirm_msg? (<><div>
        {cart && cart.map((product)=>{
          return (
              <div className="productCard" key={product._id}>
                  <div className='prod'>{product.name}</div>
                  <div className='price'>
                  <p>${product.price}</p>
                  <button className='delete_button' onClick={()=>handleDelete(product._id)}>
                  <MdDelete size={30} />
                  </button>
                  </div>
              </div>
          )
        })}
        {cart.length===0 && <div className='prod'>Your cart is empty</div>}
        </div>
        <div className='total'>
          <p>Total: ${total}</p>
        <button className='checkout_button' onClick={()=>handleCheckout()}>Checkout</button>
        </div></>):(
        <div className="confirm_msg">
          {confirm_msg && <p>{confirm_msg}</p>}
        </div>)}
      </div>
    </main>
    </div>
  )
}

export default Cart;