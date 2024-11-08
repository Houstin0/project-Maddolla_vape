import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import productsData from "../db.json";

export default function Navbar({ onSearch, cartItems }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(() => {
    const storedCartOpen = localStorage.getItem("isCartOpen");
    return storedCartOpen === "true";
  });
  const [previousLocation, setPreviousLocation] = useState(() => {
    return localStorage.getItem("previousLocation");
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Fetch data and initialize search suggestions
    const productTitles = productsData.products.map((product) => product.title);
    setSearchSuggestions(productTitles);
  }, []);

  useEffect(() => {
    localStorage.setItem("isCartOpen", isCartOpen);
  }, [isCartOpen]);

  useEffect(() => {
    localStorage.setItem("previousLocation", previousLocation);
  }, [previousLocation]);

  useEffect(() => {
    if (location.pathname !== "/cart") {
      setIsCartOpen(false);
    }
  }, [location.pathname]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter suggestions based on current query
    const filteredSuggestions = searchSuggestions.filter((title) =>
      title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchSuggestions(filteredSuggestions);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      // navigate("/");
      // Hide the search bar after search
      setIsSearchVisible(false);
    } else {
      onSearch(searchQuery);
      setIsSearchVisible(false);
      // Navigate to search results page
      navigate("/search");
      // Clear the search query
      setSearchQuery("");
    }
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleCart = () => {
    if (!isCartOpen) {
      setPreviousLocation(location.pathname);
      setIsCartOpen(true);
      navigate("/cart"); // Navigate to the cart page
    } else {
      setIsCartOpen(false);

      navigate(previousLocation || "/"); // Navigate back to the previous location or home if none
      localStorage.setItem("isCheckout", false);
    }
  };

  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Calculate total items in cart
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartItemCount(totalItems);
  }, [cartItems]);

  return (
    <nav className="fixed w-full z-20 top-0 start-0 bg-gray-100 border-gray-200 dark:bg-black ">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-1">
        <NavLink
          to="/"
          className="italic text-[#0A005A] text-2xl font-extrabold ml-2 lg:ml-10 flex items-center space-x-2 rtl:space-x-reverse"
        >
          Madolla <span className="ml-2 text-[#FC411E] "> vape</span>
        </NavLink>

        <div className="ml-auto mr-6 flex items-center space-x-2">
          {!isSearchVisible ? (
            <button
              onClick={toggleSearchVisibility}
              className="flex items-center p-2 bg-white dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-600"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
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
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          ) : (
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center ml-auto relative"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-64 md:w-[500px] border border-[#0A005A] dark:border-black rounded-l-lg focus:outline-none dark:bg-gray-800 dark:text-white"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#FC411E]  rounded-r-lg"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
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
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>

              {/* Autocomplete suggestions dropdown */}
              {searchQuery.length > 0 && (
                <div className="absolute w-64 md:w-[500px] bg-white border border-gray-300 rounded-lg shadow-lg z-10 left-0 top-full max-h-64 overflow-y-auto">
                  {searchSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setSearchQuery(suggestion);
                        onSearch(suggestion);
                        navigate("/search");
                        setSearchQuery("");
                      }}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </form>
          )}

          <button onClick={toggleCart} className="relative p-2 ml-2">
            {!isCartOpen ? (
              <div>
                <img
                  src="/icons/shopping-cart.png"
                  alt="Cart Icon"
                  className="w-8 h-8"
                />
                {cartItemCount > 0 && (
                  <span className="absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FC411E] rounded-full flex items-center justify-center text-black text-xs">
                    {cartItemCount}
                  </span>
                )}
              </div>
            ) : (
              <svg
                className="me-1.5 h-8 w-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#E02424"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
