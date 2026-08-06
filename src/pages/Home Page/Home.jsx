import { useSearch } from "../../context/SearchContext";
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
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div id="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
