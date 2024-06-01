import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/navBar";
import Home from "./components/home";

import Shop from "./components/shop";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="bg-gray-200 border-gray-200 dark:bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
