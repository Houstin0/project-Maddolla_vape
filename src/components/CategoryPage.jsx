import React from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../db.json";
import ProductCards from "./productCards";

function CategoryPage({ addToCart, cartItems, removeFromCart, updateQuantity, showShoppingCart }) {
  const { category } = useParams();
  const filteredProducts = productsData.products.filter((product) =>
    product.categories.includes(category)
  );

  const categories = [
    "Accessories",
    "Starter kits",
    "Disposables",
    "E-liquids",
    "Dry herb",
    "Pod mods",
    "Nic salts",
    "Pod devices",
    "Pipes"
  ];

  return (
    <div className="flex flex-col mt-12">
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4 h-full py-3 mx-4 rounded-lg bg-blue-300">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/category/${cat}`}
            className={`px-4 py-2 rounded-md text-gray-900 dark:text-white ${
              cat === category
                ? "bg-gray-500 dark:bg-gray-800"
                : "bg-gray-400 dark:bg-gray-700"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>
      <h2 className="text-3xl font-bold ml-6 text-black dark:text-white">
        {category}
      </h2>
      <section id="products" className="w-full mt-8">
        <ProductCards
          products={filteredProducts}
          addToCart={addToCart}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          showShoppingCart={showShoppingCart}
        />
      </section>
    </div>
  );
}

export default CategoryPage;
