import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CiLogin } from "react-icons/ci";
import { GoPersonAdd } from "react-icons/go";
import { FaShoppingCart, FaRegUserCircle, FaHeart } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { useFavorites } from "../../context/FavoritesContext";
import Search from "../../features/Search";
import "./navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();
  const { favorites } = useFavorites();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const [currentUser, setCurrentUser] = useState(() =>
    JSON.parse(localStorage.getItem("currentUser")),
  );

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg py-2 py-lg-3">
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
          <div
            id="nav-content-container"
            className="w-100 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center gap-3"
          >
            <div className="nav-search">
              <Search />
            </div>

            <div className="d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center gap-3">
              <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                <Link to="/cart" className="nav-link">
                  <FaShoppingCart size={24} />
                  {totalQuantity > 0 && (
                    <span className="nav-link-badge">{totalQuantity}</span>
                  )}
                </Link>
                <Link to="/favorites" className="nav-link">
                  <FaHeart size={24} color="red" />
                  {favorites.length > 0 && (
                    <span className="nav-link-badge">{favorites.length}</span>
                  )}
                </Link>
              </div>
              {currentUser ? (
                <>
                  <div className="d-flex align-items-center">
                    <FaRegUserCircle className="fs-5" />
                    <span className="ms-1">
                      {currentUser.name.split(" ")[0]}
                    </span>
                  </div>
                  <button onClick={handleLogout} id="logout-btn">
                    <IoLogOutOutline size={24} /> <p className="m-0">Log Out</p>
                  </button>
                </>
              ) : (
                <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                  <Link to="/login" className="navbar-link">
                    <CiLogin /> Log In
                  </Link>
                  <Link to="/signup" className="navbar-link">
                    <GoPersonAdd /> Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
