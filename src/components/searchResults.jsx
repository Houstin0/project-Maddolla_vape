import React, { useState, useEffect } from "react";
import productsData from "../db.json";
import ProductCards from "./productCards";

export default function SearchResults({ searchQuery }) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      // Filter products based on search query
      const filteredProducts = productsData.products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }
  }, [searchQuery]);

  return (
    <div className="mt-16">
      {searchResults.length === 0 ? (
        <h1 class="text-center mb-10 text-4xl font-extrabold dark:text-white">
          No results
        </h1>
      ) : (
        <div>
          <h1 class="mb-6 text-center text-2xl font-extrabold dark:text-white">
            Search Results for &quot;{searchQuery}&quot;
          </h1>
          <ProductCards products={searchResults} />
        </div>
      )}
    </div>
  );
}
