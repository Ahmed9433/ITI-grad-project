import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "./search.css";

const Search = () => {
  const { searchTerm, setSearchTerm, filteredProducts } = useSearch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleResultClick = () => {
    setSearchTerm("");
    setShowDropdown(false);
  };

  return (
    <div className="position-relative">
      <div className="position-relative">
        <input
          type="text"
          className="px-3"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setShowDropdown(false);
            }
          }}
        />
        <CiSearch id="searc-icon" />
      </div>

      {showDropdown && searchTerm.trim() && (
        <ul
          className="list-group position-absolute w-100 shadow"
          style={{ zIndex: 1000 }}
          onMouseDown={(e) => e.preventDefault()}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 6).map((item) => (
              <li key={item.id} className="list-group-item p-0">
                <Link
                  to={`/products/${item.id}`}
                  onClick={handleResultClick}
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none text-dark"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width="30"
                    height="30"
                    style={{ objectFit: "contain" }}
                  />
                  <span className="text-truncate">{item.title}</span>
                </Link>
              </li>
            ))
          ) : (
            <li className="list-group-item text-muted">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
