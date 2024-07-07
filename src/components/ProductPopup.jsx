import { useEffect, useRef, useState } from "react";

function ProductPopup({ product, onClose, addToCart }) {
  const scrollPosition = useRef(null);
  const [scrollable, setScrollable] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Check if the content height exceeds the container height
    const containerHeight = scrollContainerRef.current.clientHeight;
    const contentHeight = scrollContainerRef.current.scrollHeight;
    setScrollable(contentHeight > containerHeight);
  }, [product]);

  useEffect(() => {
    // Store current scroll position
    scrollPosition.current = window.pageYOffset;
    // Add class to body when popup is open
    document.body.classList.add("overflow-hidden");

    // Function to restore scroll position when popup closes
    const restoreScrollPosition = () => {
      if (scrollPosition.current !== null) {
        window.scrollTo(0, scrollPosition.current);
        scrollPosition.current = null;
      }
    };

    // Add event listener to handle scroll restoration
    window.addEventListener("scroll", restoreScrollPosition);

    // Cleanup function
    return () => {
      // Remove class from body when popup is closed
      document.body.classList.remove("overflow-hidden");
      // Remove event listener
      window.removeEventListener("scroll", restoreScrollPosition);
      // Restore scroll position
      restoreScrollPosition();
    };
  }, []);

  return (
    <div className="mt-14 py-2 fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-30">
      <div className="relative bg-gray-100 dark:bg-gray-900 w-full mx-5 md:mx-0 md:w-5/6 max-h-full rounded-lg overflow-y-auto hide-scrollbar">
        <button
          className="absolute top-0 right-0 p-3 z-40 "
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            className="me-1.5 h-10 w-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </button>
        <section
          className={`my-8 md:my-12 dark:bg-gray-900 antialiased ${
            scrollable ? "overflow-y-auto hide-scrollbar" : ""
          }`}
          ref={scrollContainerRef}
        >
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <img
                  className="w-full lg:max-h-[420px]"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                  {product.title}
                </h1>
                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                  <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                    Ksh.{product.price}
                  </p>
                </div>
                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <button
                    onClick={() => addToCart(product)}
                    className="text-white mt-4 sm:mt-0 bg-[#0A005A] lg:hover:bg-[#FC411E]   font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary flex items-center justify-center"
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
                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                <p className="mb-6 text-gray-500 dark:text-gray-400">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductPopup;
