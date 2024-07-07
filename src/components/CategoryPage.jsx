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
    <div className="flex flex-col mt-14">
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



      <div>
        <nav className="flex ml-4 lg:ml-12" aria-label="Breadcrumb ">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
      <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>

            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
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
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {category}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>



      <h2 className="text-3xl font-bold ml-4 lg:ml-12 text-[#0A005A] dark:text-[#FC411E]">
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
