import { useParams, Link } from "react-router-dom";
import productsData from "../db.json";
import ProductCards from "./productCards";

function CategoryPage({ addToCart, cartItems}) {
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
    <div className="flex flex-col mt-16">
      <div className="flex flex-wrap items-center justify-center gap-2 mb-1 h-full py-3 mx-4 rounded-lg ">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/category/${cat}`}
            className={`px-2 py-2 md:px-4 md:py-2 font-semibold rounded-md text-gray-900 dark:text-white ${
              cat === category
                ? "bg-[#FC411E]"
                : "bg-gray-300 dark:bg-gray-900"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>
      <h2 className="text-3xl font-bold ml-12 text-[#0A005A] dark:text-[#FC411E]">
        {category}
      </h2>
      <section id="products" className="w-full mt-4">
        <ProductCards
          products={filteredProducts}
          addToCart={addToCart}
          cartItems={cartItems}
         
        />
      </section>
    </div>
  );
}

export default CategoryPage;
