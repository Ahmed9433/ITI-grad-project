import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CiLogin } from "react-icons/ci";
import { GoPersonAdd } from "react-icons/go";
import { FaShoppingCart , FaRegUserCircle} from "react-icons/fa";
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';
import Search from "../../features/Search";
import "./navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
   const { favorites } = useContext(FavoritesContext);
   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div>
          <Link className="nav-logo" to="/">
            <b>Home</b>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarContent"
        >
          <div className="d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center gap-3">
            <div className="nav-search">
              <Search />
            </div>
            {currentUser ? 
              (<div className="user-info">
                    <FaRegUserCircle className="fs-5" />
                    <span className="ms-1">{currentUser.name.split(" ")[0] }</span>
                </div>)
              :(<div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                  <Link to="/login" className="navbar-link">
                    <CiLogin /> Log In
                  </Link>
                  <Link to="/signup" className="navbar-link">
                    <GoPersonAdd /> Sign Up
                  </Link>
                </div>)
            }
          <div className="d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center gap-3">
              <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                <Link to="/cart" className="cart-icon">
                  <FaShoppingCart size={24} />
                  {totalQuantity > 0 && (
                    <span className="cart-badge">{totalQuantity}</span>
                  )}
                </Link>
                <Link to="/favorites" className="nav-link">❤️
                 {favorites.length > 0 && (
                 <span className="fav-badge">{favorites.length}</span>)} </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
