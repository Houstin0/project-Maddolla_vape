import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import SearchResults from "./components/searchResults";
import CategoryPage from "./components/CategoryPage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showShoppingCart, setShowShoppingCart] = useState(() => {
    const storedCartState = localStorage.getItem("showShoppingCart");
    return storedCartState ? storedCartState === "true" : false;
  });
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    // Check if there is a stored search query in localStorage
    const storedQuery = localStorage.getItem("searchQuery");
    if (storedQuery) {
      setSearchQuery(storedQuery);
    }
  }, []);

  useEffect(() => {
    // Save the search query to localStorage
    localStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    localStorage.setItem("showShoppingCart", showShoppingCart.toString());
  }, [showShoppingCart]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const toggleCart = () => {
    setShowShoppingCart((prevState) => !prevState);
  };
  // Function to add item to cart
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // If item already exists in cart, update quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // Otherwise, add new item to cart
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Function to update quantity of item in cart
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(newQuantity, 0) }
          : item
      )
    );
  };

  return (
    <Router>
      <div className="bg-gray-100 dark:bg-black">
        <NavBar
          onSearch={handleSearch}
          toggleCart={toggleCart}
          showShoppingCart={showShoppingCart}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                showShoppingCart={showShoppingCart}
              />
            }
          />
          <Route
            path="/search"
            element={<SearchResults searchQuery={searchQuery} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/category/:category"
            element={
              <CategoryPage
                addToCart={addToCart}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                showShoppingCart={showShoppingCart}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
