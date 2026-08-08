import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((item) => {
    const term = searchTerm.toLowerCase().trim();

    const matchesSearch =
      item.title.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term);

    const matchesCategory = category === "all" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        category,
        setCategory,
        filteredProducts,
        loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
