import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { useCart } from "../../context/CartContext";
import { FaRegHeart, FaHeart ,FaShoppingCart } from "react-icons/fa";
import "./productcard.css";


const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFav = favorites.some((item) => item.id === product.id);
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(product);
  };
  
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const rating = product.rating.rate;
  const ratingPercentage = Math.round(rating * 2 * 10);

  const getRatingColor = (rating) => {
    if (rating >= 4) return "#799351";
    if (rating >= 3) return "#E6D385";
    return "#D25959";
  };

  return (
    <>
      {message && <div className="login-message">{message}</div>}
      <div id="product-card" key={product.id}>
        <div id="product-image">
          <img src={product.image} alt={product.title} />

          <button onClick={handleFavoriteClick} id="favorite-btn">
            {isFav ? (
              <FaHeart style={{ color: "red", fontSize: "1.5rem" }} />
            ) : (
              <FaRegHeart style={{ fontSize: "1.5rem" }} />
            )}
          </button>

          <div
            id="rating-badge-border"
            style={{
              background: `conic-gradient(${getRatingColor(rating)} 0% ${ratingPercentage}%, #fff ${ratingPercentage}% 100%)`,
            }}
          >
            <div id="rating-badge-inner">
              <span id="rating-number">{rating}</span>
            </div>
          </div>
        </div>
        <div id="product-title">
          <h3>{product.title}</h3>
        </div>
        <div>
          <p id="product-price" className="m-0">
            <span>$</span>
            {product.price.toFixed(2)}
          </p>
        </div>
        <div id="product-button">
          <button onClick={() => navigate(`/products/${product.id}`)}>
            View Details
          </button>
          <Link 
            to={currentUser ? "/cart" : "#"}
              onClick={(e) => {
                if (!currentUser) {
                  e.preventDefault();
                  setMessage(
                    "Please sign in first to add products to your cart.",
                  );
                  setTimeout(() => {
                    setMessage("");
                    navigate("/login");
                  }, 2000);
                  return;
                }
                addToCart(product, quantity);
                setQuantity(1);
              }} 
              className="add-to"
            >
            <FaShoppingCart size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
