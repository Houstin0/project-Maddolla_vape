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
        <h1 className="text-center mb-10 text-4xl font-extrabold text-[#0A005A] dark:text-[#FC411E]">
          No results
        </h1>
      ) : (
        <div>
          <h1 className="mb-6 text-center text-2xl font-extrabold text-[#0A005A] dark:text-[#FC411E]">
            Search Results for<span className="text-[#FC411E]"> &quot;{searchQuery}&quot;</span> 
          </h1>
          <ProductCards products={searchResults} />
        </div>
      )}
    </div>
  );
}
