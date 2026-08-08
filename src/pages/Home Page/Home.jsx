
import { useSearch } from "../../context/SearchContext";
import ProductCard from "../../components/Product Card/ProductCard";
import Landing from "../../components/Landing/Landing";
import "./home.css";

const Home = () => {
  const {
    filteredProducts,
    loading,
    category,
    setCategory,
  } = useSearch();

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
      {/* Landing */}
      <Landing />

      {/* Filter */}
      <div className="filter-container">

        <button
          type="button"
          className={category === "all" ? "filter-active" : ""}
          onClick={() => setCategory("all")}
        >
          All
        </button>

        <button
          type="button"
          className={
            category === "men's clothing"
              ? "filter-active"
              : ""
          }
          onClick={() => setCategory("men's clothing")}
        >
          Men's Clothing
        </button>

        <button
          type="button"
          className={
            category === "women's clothing"
              ? "filter-active"
              : ""
          }
          onClick={() => setCategory("women's clothing")}
        >
          Women's Clothing
        </button>

        <button
          type="button"
          className={
            category === "jewelery"
              ? "filter-active"
              : ""
          }
          onClick={() => setCategory("jewelery")}
        >
          Jewelry
        </button>

        <button
          type="button"
          className={
            category === "electronics"
              ? "filter-active"
              : ""
          }
          onClick={() => setCategory("electronics")}
        >
          Electronics
        </button>

      </div>

      {/* Products */}
      <div id="product-list">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try another category or search term.</p>
          </div>
        )}

      </div>
    </>
  );
};

export default Home;

