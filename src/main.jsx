import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { PopProvider } from "./context/Popcontext.jsx";

createRoot(document.getElementById("root")).render(

  
  <BrowserRouter>
    <CartProvider>
      <PopProvider>
      <App />
      </PopProvider>
    </CartProvider>
  </BrowserRouter>,
);
