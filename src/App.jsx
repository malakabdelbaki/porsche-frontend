
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Landing from "./pages/Landing/Landing";
import Cart from './pages/Cart/Cart'; 
import Product from './pages/Product/Product';
// import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
// import RegisterCustomer from './pages/RegisterCustomer/RegisterCustomer';
function App() {

  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/home" element={<Home />} />
          {/* <Route path="/register" element={<RegisterCustomer />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
