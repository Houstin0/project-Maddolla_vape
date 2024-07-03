import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation  } from "react-router-dom";
import productsData from "../db.json";

export default function Navbar({ onSearch, cartItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    // Update isDarkMode state immediately
    setIsDarkMode((prev) => !prev);

    // Use the updated isDarkMode state
    const updatedIsDarkMode = !isDarkMode;

    if (typeof window !== "undefined") {
      const themeToggleDarkIcon = document.getElementById(
        "theme-toggle-dark-icon"
      );
      const themeToggleLightIcon = document.getElementById(
        "theme-toggle-light-icon"
      );

      if (!updatedIsDarkMode) {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.backgroundColor = "var(--bg-color-light)";
        localStorage.setItem("color-theme", "light");
        themeToggleDarkIcon.classList.remove("hidden");
        themeToggleLightIcon.classList.add("hidden");
      } else {
        document.documentElement.style.backgroundColor = "var(--bg-color-dark)";
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        themeToggleDarkIcon.classList.add("hidden");
        themeToggleLightIcon.classList.remove("hidden");
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
      setIsDarkMode(isDark);

      // Apply the dark mode settings on initial load
      if (isDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.style.backgroundColor = "var(--bg-color-dark)";
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.backgroundColor = "var(--bg-color-light)";
      }
    }
  }, []);

  // Check isDarkMode initially and set visibility for icons
  useEffect(() => {
    const themeToggleDarkIcon = document.getElementById(
      "theme-toggle-dark-icon"
    );
    const themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );

    if (isDarkMode) {
      themeToggleDarkIcon.classList.add("hidden");
      themeToggleLightIcon.classList.remove("hidden");
    } else {
      themeToggleDarkIcon.classList.remove("hidden");
      themeToggleLightIcon.classList.add("hidden");
    }
  }, [isDarkMode]);

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
  }, [previousLocation])

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
      navigate("/");
                        // Hide the search bar after search
                        setIsSearchVisible(false);
    } else {
      onSearch(searchQuery);
      // Navigate to search results page
      navigate("/search");
            // Clear the search query
            setSearchQuery("");

                  // Hide the search bar after search
      setIsSearchVisible(false);
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
      localStorage.setItem("isCheckout", false );
    }
  };

  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Calculate total items in cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
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

        <div className="ml-auto mr-2 flex items-center space-x-2">
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
            <form onSubmit={handleSearchSubmit} className="flex items-center ml-auto relative">
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



<button
              id="theme-toggle"
              type="button"
              onClick={toggleDarkMode}
              className=" text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700  rounded-lg text-sm p-1"
            >
              <svg
                id="theme-toggle-dark-icon"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>


        </div>



        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-100 dark:bg-black md:dark:bg-black dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </NavLink>
            </li>
            
           


  
 
          </ul>

         
        </div>


      </div>
 
    </nav>
  );
}
