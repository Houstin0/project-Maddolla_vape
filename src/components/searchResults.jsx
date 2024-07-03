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
      
      <div>
        <nav className="flex ml-12" aria-label="Breadcrumb ">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
      <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>

            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Search Results
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>



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
