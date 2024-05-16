
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Admin from "./pages/Admin/Admin";
import Landing from "./pages/Landing/Landing";
import Cart from './pages/Cart/Cart'; 
import RegisterCustomer from './pages/RegisterCustomer/RegisterCustomer'; 
import Login from './pages/Login/Login'; 


function App() {

  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<RegisterCustomer />} /> 
          <Route path="/login" element={<Login />} /> 
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
