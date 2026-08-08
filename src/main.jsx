import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
<<<<<<< HEAD
import { PopProvider } from "./context/Popcontext.jsx";
=======
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
>>>>>>> 0ae2cba9ce96bc13601333da5d8a88be9c71140f

createRoot(document.getElementById("root")).render(

  
  <BrowserRouter>
    <CartProvider>
      <PopProvider>
      <App />
      </PopProvider>
      <SearchProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </SearchProvider>
    </CartProvider>
  </BrowserRouter>,
);
