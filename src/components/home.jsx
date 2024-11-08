import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../db.json";
import ProductCards from "./productCards";

function Home({ addToCart, cartItems }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const imageDivRef = useRef(null);

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
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      console.log("Carousel dimensions:", {
        width: carouselRef.current.offsetWidth,
        height: carouselRef.current.offsetHeight,
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    if (imageDivRef.current) {
      console.log("Image div dimensions:", {
        width: imageDivRef.current.offsetWidth,
        height: imageDivRef.current.offsetHeight,
      });
    }
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/category/${category}`);
  };

  const categories = [
    "Accessories",
    "Starter kits",
    "Disposables",
    "E-liquids",
    "Dry herb",
    "Pod mods",
    "Nic salts",
    "Pod devices",
    "Pipes",
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-12 items-start mt-16">
        {/* Carousel */}
        <div
          id="default-carousel"
          className="relative w-full lg:w-2/3 rounded-3xl "
          data-carousel="slide"
          ref={carouselRef}
        >
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
                  className="absolute block w-full h-full rounded-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain "
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
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none opacity-0 hover:opacity-100"
            onClick={prevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white/30 group-hover:bg-gray-800/60 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white rtl:rotate-180"
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
                className="w-4 h-4 text-white rtl:rotate-180"
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

        {/* Category List */}
        <div className="w-full lg:w-1/2 lg:ml-4 mt-2 lg:mt-0 mb-2">
          <h2 className="text-2xl font-bold mb-2 text-center text-[#0A005A] dark:text-[#FC411E] ">
            Categories
          </h2>

          <div className="flexbox space-y-2 lg:grid lg:grid-cols-3 gap-1 items-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`mx-1 px-3 py-1 font-semibold text-sm sm:text-base rounded  text-gray-900 dark:text-white ${
                  selectedCategory === category
                    ? "bg-[#FC411E]"
                    : "bg-gray-300 dark:bg-gray-900"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div
            className="hidden lg:flex justify-center h-[200px] mt-4 rounded-lg"
            ref={imageDivRef}
          >
            <img
              src="/assets/delivery_ad.png"
              alt="Delivery Ad"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Product cards */}
      <section id="products" className="w-full mt-1 sm:mt-3">
        <h2 className="text-3xl font-bold ml-4 lg:ml-12 mb-3 text-[#0A005A] dark:text-[#FC411E]">
          New Arrivals
        </h2>
        <ProductCards
          products={productsData.products}
          addToCart={addToCart}
          cartItems={cartItems}
        />
      </section>
    </div>
  );
}

export default Home;
