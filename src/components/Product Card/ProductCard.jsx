import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';
import "./productcard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFav = favorites.some((item) => item.id === product.id);

  const rating = product.rating.rate;
  const ratingPercentage = Math.round(rating * 2 * 10);

  const getRatingColor = (rating) => {
    if (rating >= 4) return "#799351";
    if (rating >= 3) return "#E6D385";
    return "#D25959";
  };

  return (
    <>
      <div id="product-card" key={product.id}>
        <div id="product-image">
          <img src={product.image} alt={product.title} />
          <button onClick={() => toggleFavorite(product)} className="fav-btn">{isFav ? '❤️' : '🤍'}</button>
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
          <h6 className="m-0">{product.title}</h6>
        </div>
        <div id="product-price">
          <p className="m-0">
            <sup>$</sup>
            {product.price}
          </p>
        </div>
        <div id="product-button">
          <button onClick={() => navigate(`/products/${product.id}`)}>
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
