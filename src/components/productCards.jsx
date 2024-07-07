import { useEffect, useState } from "react";
import ProductPopup from "./ProductPopup";

function ProductCards({ products, addToCart }) {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center mx-4 lg:mx-12 mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm bg-gray-300 rounded-lg shadow dark:bg-gray-900"
        >
          {/* Product Image */}
          <div onClick={() => openPopup(product)}>
            <img
              className="p-4 rounded-t-lg cursor-pointer md:h-[360px]"
              src={product.image}
              alt="product"
            />
          </div>
          {/* Product Details */}
          <div className="px-5 pb-5">
            <div onClick={() => openPopup(product)} className="cursor-pointer ">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
            </div>
            {/* Price */}
            <div
              onClick={() => openPopup(product)}
              className="flex items-center justify-between"
            >
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                Ksh.{product.price}
              </span>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="text-white mt-8 bg-[#0A005A] lg:hover:bg-[#FC411E] font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 -ms-2 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
              Add to cart
            </button>
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
    </div>
  );
}

export default ProductCards;
