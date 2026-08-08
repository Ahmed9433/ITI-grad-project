import { useEffect } from "react";
import { useSearch } from "../../context/SearchContext";
import ProductCard from "../../components/Product Card/ProductCard";
import Landing from "../../components/Landing/Landing";
import "./home.css";

const Home = () => {
  const { filteredProducts, searchTerm, loading } = useSearch();

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center my-5 py-5">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Landing />
      <div
        id="product-list"
        style={{
          minHeight: "calc(100vh - 80px)",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;