import vape1 from "../assets/vape_products/vape_1.jpg";
import vape2 from "../assets/vape_products/vape_11.jpg";
import vape3 from "../assets/vape_products/vape2.jpg";
import vape4 from "../assets/vape_products/vape3.jpg";
import vape5 from "../assets/vape_products/vape4.jpg";
import vape6 from "../assets/vape_products/vape5.jpg";
import vape7 from "../assets/vape_products/vape7.jpg";
import vape8 from "../assets/vape_products/vape8.jpg";
import vape9 from "../assets/vape_products/vape9.jpg";
import vape10 from "../assets/vape_products/vape10.jpg";
import vape11 from "../assets/vape_products/vape12.jpg";

const ProductCard = () => {
  const products = [
    {
      id: 1,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      price: 599,
      rating: 4,
      imageSrc: vape1,
    },
    {
      id: 2,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      price: 599,
      rating: 4,
      imageSrc: vape2,
    },
    {
      id: 3,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      price: 599,
      rating: 4,
      imageSrc: vape3,
    },
    {
      id: 4,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      price: 599,
      rating: 4,
      imageSrc: vape4,
    },
    {
      id: 5,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      price: 599,
      rating: 4,
      imageSrc: vape5,
    },
    {
      id: 6,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      price: 599,
      rating: 4,
      imageSrc: vape6,
    },
    {
      id: 7,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      price: 599,
      rating: 4,
      imageSrc: vape7,
    },
    {
      id: 8,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      price: 599,
      rating: 4,
      imageSrc: vape8,
    },
    {
      id: 9,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      price: 599,
      rating: 4,
      imageSrc: vape9,
    },
    {
      id: 10,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      price: 599,
      rating: 4,
      imageSrc: vape10,
    },
    {
      id: 11,
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      price: 599,
      rating: 4,
      imageSrc: vape11,
    },
  ];

  return (
    <main>
        <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-4"
        >
          <a href="#">
            <img
              className="p-8 rounded-t-lg"
              src={product.imageSrc}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {[...Array(product.rating)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {product.rating}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Order
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </main>
  );
};

export default ProductCard;
