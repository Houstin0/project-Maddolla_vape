import React, { useEffect, useState } from "react";
import ProductPopup from "./ProductPopup";
import ShoppingCart from "./shoppingCart";


function ProductCards({ products ,addToCart, cartItems,removeFromCart,updateQuantity,showShoppingCart}) {
  const [selectedProduct, setSelectedProduct] = useState(
    JSON.parse(localStorage.getItem("selectedProduct")) || null
  );
 

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    // Store selected product in localStorage
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
  }, [selectedProduct]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
      {products.map((product) => (
        <div
        key={product.id}
        className="max-w-sm bg-gray-200 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-4"
        onClick={() => openPopup(product)} 
      >
          {/* Product Image */}
          <a href="#">
            <img
              className="p-4 rounded-t-lg"
              src={product.image}
              alt="product"
            />
          </a>
          {/* Product Details */}
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
            </a>
            {/* Rating */}
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {[...Array(Number(product.rating))].map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {product.rating}
              </span>
            </div>
            {/* Price and Order Button */}
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                Ksh.{product.price}
              </span>
       
            </div>
          </div>
        </div>
      ))}

{selectedProduct && (
        <ProductPopup
          product={selectedProduct}
          onClose={closePopup}
          addToCart={addToCart}
        />
      )}
       {showShoppingCart && <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}


    </div>
  );
}

export default ProductCards;
