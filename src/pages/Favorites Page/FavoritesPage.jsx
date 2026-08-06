import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';
import ProductCard from '../../components/Product Card/ProductCard';
import "./FavoritesPage.css"

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>No favorite products</h2>;
  }

  return (
    <div className="favorites-page">
      <h2>Favorite Products</h2>
      <div id='favorites-list'>
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}