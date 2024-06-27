import React, { useState, useEffect } from "react";
import productsData from "../db.json";
import ProductCards from "./productCards";

function Home( {addToCart,cartItems,removeFromCart,updateQuantity,showShoppingCart}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || null
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productsData.ads.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productsData.ads.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  const filteredProducts = selectedCategory
    ? productsData.products.filter((product) =>
        product.categories.includes(selectedCategory)
      )
    : productsData.products;

  const categories = [
    "Phones and tablets",
    "TVs and audio",
    "Appliances",
    "Health and beauty",
    "Home and office",
    "Fashion",
    "Computing",
    "Supermarket",
    "Baby products",
    "Sporting goods",
  ];

  return (
    <div>
      {/* Carousel */}
      <div className="flex justify-center items-center">
        <div
          id="default-carousel"
          className="relative w-4/5 ml-8 mt-20 mb-2 rounded-lg border border-gray-200 dark:border-gray-900"
          data-carousel="slide"
        >
          {/* Carousel Images */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {productsData.ads.map((product, index) => (
              <div
                key={product.id}
                className={`duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                data-carousel-item
              >
                <img
                  src={product.image}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={product.title}
                />
              </div>
            ))}
            {/* Carousel Navigation */}
            <div className="absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              {productsData.ads.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-gray-600" : "bg-gray-300"
                  }`}
                  aria-current={index === currentIndex ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={index}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            type="button"
            className=" absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none opacity-0 hover:opacity-100"
            onClick={prevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white/30 group-hover:bg-gray-800/60 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-black dark:black rtl:rotate-180"
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
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none opacity-0 hover:opacity-100"
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white/30 group-hover:bg-gray-800/60 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-black dark:text-black rtl:rotate-180"
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
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>


<section id="products">
        {/* Category List */}

        <div className="flex flex-wrap gap-2 md:gap-2 lg:gap-2">
        {/* Button to show all products */}
        <button
          className={`mx-2 px-4 py-2 rounded text-gray-900 dark:text-white ${
            selectedCategory === null
              ? "bg-gray-500"
              : "bg-gray-300 dark:bg-gray-800"
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All Categories
        </button>

        {/* Buttons for individual categories */}
        {categories.map((category, index) => (
          <button
            key={index}
            className={`mx-2 px-4 py-2 rounded text-gray-900 dark:text-white ${
              selectedCategory === category
                ? "bg-gray-500"
                : "bg-gray-300 dark:bg-gray-800"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product cards */}
<ProductCards
        products={
          filteredProducts.length ? filteredProducts : productsData.products
        } addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} showShoppingCart={showShoppingCart}
      />
</section>
    </div>
  );
}

export default Home;
