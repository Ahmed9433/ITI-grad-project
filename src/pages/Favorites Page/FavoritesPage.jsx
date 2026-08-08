import { useContext } from "react";
import { useFavorites } from "../../context/FavoritesContext";
import ProductCard from "../../components/Product Card/ProductCard";
import "./FavoritesPage.css";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        <div id="favorites-empty">
          <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
            No favorite products
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div
      className="favorites-page"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      <h2>Favorite Products</h2>
      <div id="favorites-list">
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
