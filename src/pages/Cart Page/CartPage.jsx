import { useCart } from "../../context/CartContext";
import CartProductCard from "../../components/Cart Product Card/CartProductCard";
import "./cartpage.css";

const CartPage = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      {cartItems.length === 0 ? (
        <div id="cart-empty">
          <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
            Your cart is empty.
          </h2>
        </div>
      ) : (
        <>
          <div id="cart-container">
            <ul className="list-group shadow-sm">
              {cartItems.map((item) => (
                <CartProductCard key={item.id} product={item} />
              ))}
            </ul>

            <div id="cart-summary" className="align-self-center">
              <div id="order-total">
                <h3>Order total:</h3>
                <h3>${totalPrice.toFixed(2)}</h3>
              </div>
              <div id="order-checkout" className="align-self-center">
                <button>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
