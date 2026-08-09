import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // 👈 غيرنا BrowserRouter لـ HashRouter
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";

// Import all Context Providers
import { CartProvider } from "./context/CartContext.jsx";
import { PopProvider } from "./context/Popcontext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <CartProvider>
      <PopProvider>
        <FavoritesProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </FavoritesProvider>
      </PopProvider>
    </CartProvider>
  </HashRouter>
);