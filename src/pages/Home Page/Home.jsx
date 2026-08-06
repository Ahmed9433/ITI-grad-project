
import { useSearch } from "../../context/useSearch";
import ProductCard from "../../components/Product Card/ProductCard";
import "./home.css";

const Home = () => {
  const { filteredProducts, searchTerm, loading } = useSearch();

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
    <div className="container my-4">
      {searchTerm.trim() !== "" && (
        <h3 className="mb-4">
          Search results for: <span className="text-primary">"{searchTerm}"</span>
        </h3>
      )}

      {filteredProducts.length === 0 && searchTerm.trim() !== "" ? (
        <div className="text-center py-5">
          <h4>No products found matching "{searchTerm}"</h4>
        </div>
      ) : (
        <div id="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;