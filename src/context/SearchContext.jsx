import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts = searchTerm.trim()
    ? products.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, filteredProducts }}
    >
      {children}
    </SearchContext.Provider>
  );
};