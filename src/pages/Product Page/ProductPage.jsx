import axios from "axios";
import { useEffect, useState } from "react";
import { useSearch } from "../../context/SearchContext";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./productpage.css";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const data = useParams();
  const { addToCart } = useCart();
  const { loading } = useSearch();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${data.id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [data.id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center my-5 py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5 p-5">
      <div id="product-details-image">
        <img src={product?.image} alt={product?.title} />
      </div>
      <div
        id="product-details"
        className="d-flex flex-column gap-3 text-center text-lg-start justify-content-center px-5"
      >
        <div id="product-title">
          <h2>{product?.title}</h2>
        </div>
        <div id="product-description">
          <p
            id="description-text"
            className="description"
            onClick={() =>
              document
                .getElementById("description-text")
                .classList.toggle("description")
            }
          >
            {product?.description}
          </p>
        </div>
        <div id="product-category">
          <h5>{product?.category}</h5>
        </div>
        <div id="product-price">
          <h4>
            <b>${product?.price}</b>
          </h4>
        </div>
        <div
          id="product-detils-button"
          className="d-flex justify-content-center align-items-center gap-3"
        >
          <div id="product-quantity">
            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity((q) => q - 1);
                }
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => {
                setQuantity((q) => q + 1);
              }}
            >
              +
            </button>
          </div>
          <Link
            id="add-to-cart"
            onClick={() => {
              addToCart(product, quantity);
              setQuantity(1);
            }}
            to="/cart"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
