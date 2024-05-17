
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Landing from "./pages/Landing/Landing";
import Cart from './pages/Cart/Cart'; 

import RegisterCustomer from './pages/RegisterCustomer/RegisterCustomer'; 
import Login from './pages/Login/Login'; 

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Create from './pages/Admin/Create/Create'
import Delete from './pages/Admin/Delete/Delete'
import Update from './pages/Admin/Update/Update'

function App() {

  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<RegisterCustomer />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/product/:id" element={<Product />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/create" element={<Create />} /> 
          <Route path="/admin/delete" element={<Delete />} /> 
          <Route path="/admin/update" element={<Update />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
