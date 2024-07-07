import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import SearchResults from "./components/searchResults";
import CategoryPage from "./components/CategoryPage";
import ShoppingCart from "./components/shoppingCart";
import Banner from "./components/banner";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedQuery = localStorage.getItem("searchQuery");
    if (storedQuery) {
      setSearchQuery(storedQuery);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                price:
                  (cartItem.originalPrice || cartItem.price) *
                  (cartItem.quantity + 1),
              }
            : cartItem
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...item, quantity: 1, originalPrice: item.price },
      ]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: Math.max(newQuantity, 0),
              price:
                (item.originalPrice || item.price) * Math.max(newQuantity, 0),
            }
          : item
      )
    );
  };

  return (
    <Router>
      <div className="bg-gray-100 dark:bg-black">
        <Banner />

        <NavBar onSearch={handleSearch} cartItems={cartItems} />

        <Routes>
          <Route
            path="/"
            element={<Home addToCart={addToCart} cartItems={cartItems} />}
          />
          <Route
            path="/search"
            element={
              <SearchResults searchQuery={searchQuery} addToCart={addToCart} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/category/:category"
            element={
              <CategoryPage addToCart={addToCart} cartItems={cartItems} />
            }
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                emptyCart={() => setCartItems([])}
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
