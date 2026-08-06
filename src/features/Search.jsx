import { useState } from "react";
import { useSearch } from "../context/useSearch";
import { Link } from "react-router-dom";

const Search = () => {
  const { searchTerm, setSearchTerm, filteredProducts } = useSearch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleResultClick = () => {
    setSearchTerm("");
    setShowDropdown(false);
  };

  return (
    <div className="position-relative">
      <input
        type="text"
        className="form-control pe-4"
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

   {searchTerm && (
  <button
    type="button"
    className="btn-close position-absolute end-0 top-50 translate-middle-y me-2"
    style={{ 
      fontSize: "0.75rem",
      filter: "invert(30%) sepia(100%) saturate(500%) hue-rotate(190deg)" 
    }}
    onClick={() => setSearchTerm("")}
    aria-label="Clear search"
  />
)}
      {showDropdown && searchTerm.trim() && (
        <ul className="list-group position-absolute w-100 shadow" style={{ zIndex: 1000 }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 6).map((item) => (
              <li key={item.id} className="list-group-item p-0">
                <Link
                  to={`/products/${item.id}`}
                  onClick={handleResultClick}
                  className="d-flex align-items-center gap-2 p-2 text-decoration-none text-dark"
                >
                  <img src={item.image} alt={item.title} width="30" height="30" style={{ objectFit: "contain" }} />
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