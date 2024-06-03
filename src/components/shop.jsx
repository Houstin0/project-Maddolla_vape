import { useState } from "react";

import productsData from "../db.json";

export default function Shop() {
  const Products=productsData.products
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [showAll, setShowAll] = useState(false);
  
  

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filtered = Products.filter((product) => {
      // Check if the product name matches the search term
      const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      // Check if any flavor matches the search term
      const flavorMatch = product.flavours.some((flavor) =>
        flavor.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // Return true if either name or flavor matches the search term
      return nameMatch || flavorMatch;
    });
    setFilteredProducts(filtered);
    setShowAll(true);
  };

  const handleShowAll = () => {
    setFilteredProducts(Products); 
    setShowAll(false); 
  };

   // Function to handle order button click
   const handleOrderClick = (product) => {
    // const flavor = prompt("Enter the flavor you want:");
    // if (flavor === null) {
    //   // If the user cancels the prompt, return early
    //   return;
    // }  

  // const message = `
  //   I want to order ${product.name}.
  //   Flavor: ${flavor}.
  //   Price: Ksh.${product.price}.
  // `;

  const message = `
  I want to order ${product.name}.
  Flavor: ${product.flavours.join(", ")}.
  Price: Ksh.${product.price}.
`;
    const phoneNumber = "+254727041155"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <main className=" mt-12 ">
 
      <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto mt-10">

        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Vapes,  ..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
          
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
          >
            Search
          </button>
        </div>
      </form>

      {showAll && ( 
          <button
            type="button"
            onClick={handleShowAll}
            className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
          >
            All
          </button>
        )}
        
      <div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mr-8">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
        >
          
            <img
              className="p-8 rounded-t-lg"
              src={product.imageSrc}
              alt="product image"
            />
          
          <div className="px-5 pb-5">
            
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
            
            <div className="mb-3">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Flavors:</span> {product.flavours.join(", ")}
          </p>
        </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                Ksh.{product.price}
              </span>
              <button
                onClick={() => handleOrderClick(product)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    
       
      </div>
    </main>
  );
}
