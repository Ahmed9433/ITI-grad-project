import { Route, Routes , useLocation} from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import Home from "./pages/Home Page/Home";
import ProductPage from "./pages/Product Page/ProductPage";
import CartPage from "./pages/Cart Page/CartPage";
import LoginPage from "./pages/Login Page/LoginPage";
import SignupPage from "./pages/Signup Page/SignupPage";
import Navbar from "./components/Navbar/Navbar";
import FavoritesPage from "./pages/Favorites Page/FavoritesPage";
import "./App.css"
import Footer from "./components/Footer/Footer";
 
import Aboutpage from "./pages/About Page/Aboutpage";

function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <SearchProvider>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/about" element={<Aboutpage/>} />
      </Routes>
      {!hideNavbar &&<Footer />}
    </SearchProvider>
  );
}

export default App;
