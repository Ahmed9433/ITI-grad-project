import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home Page/Home";
import ProductPage from "./pages/Product Page/ProductPage";
import CartPage from "./pages/Cart Page/CartPage";
import LoginPage from "./pages/Login Page/LoginPage";
import SignupPage from "./pages/Signup Page/SignupPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
