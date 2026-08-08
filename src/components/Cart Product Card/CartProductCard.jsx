import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import "./cartproductcard.css";

const CartProductCard = ({ product }) => {
  const { removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <li className="list-group-item d-flex align-items-center gap-4 p-2">
      <img
        src={product.image}
        alt={product.title}
        width="30"
        height="30"
        style={{ objectFit: "contain" }}
      />

      <span className="title text-truncate flex-grow-1">{product.title}</span>
      <div className="cont d-flex align-items-center gap-3">
        <div className="text-black-50">
          <p className="m-0 price">
            <span>$</span>
            {product.price.toFixed(2)}
          </p>
        </div>

        <div id="product-quantity" className="d-flex align-items-center">
          <button
            onClick={() => updateQuantity(product.id, -1)}
            disabled={product.quantity <= 1}
          >
            -
          </button>
          <span>{product.quantity}</span>
          <button onClick={() => updateQuantity(product.id, 1)}>+</button>
        </div>

        <button id="product-trash" onClick={() => removeFromCart(product.id)}>
          <FaTrashAlt size={16} />
        </button>
      </div>
    </li>
  );
};

export default CartProductCard;