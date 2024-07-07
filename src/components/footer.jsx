import { useEffect } from "react";
import { NavLink  } from "react-router-dom";
export default function Footer() {
  useEffect(() => {
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
      const currentYear = new Date().getFullYear();
      yearElement.textContent = `© ${currentYear} Madolla vape™. All Rights Reserved.`;
    }
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  return (

    

<footer className="bg-gray-300 rounded-lg shadow dark:bg-gray-900 m-4 mb-4 md:mx-12">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
               <a
          href="/"
          className="italic text-[#0A005A] mb-8 text-2xl font-extrabold lg:ml-4 flex items-center space-x-2 rtl:space-x-reverse"
        >
          Madolla <span className="ml-2 text-[#FC411E] "> vape</span> 
        </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
      <li>
        <NavLink to="/about" onClick={scrollToTop} className="hover:underline me-4 md:me-6">
          About Us
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/privacy-policy" onClick={scrollToTop} className="hover:underline me-4 md:me-6">
          Privacy Policy
        </NavLink>
      </li>
      <li>
        <NavLink to="/licensing" onClick={scrollToTop} className="hover:underline me-4 md:me-6">
          Licensing
        </NavLink>
      </li> */}
      <li>
        <NavLink to="/contact" onClick={scrollToTop} className="hover:underline">
          Contact Us
        </NavLink>
      </li>
    </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span id="currentYear" className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> </span>
    </div>
</footer>





    // <footer className="bg-white rounded-lg shadow mx-4 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
    //   <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    //       <span id="currentYear" className="text-sm text-gray-500 sm:text-center dark:text-gray-400">{" "}
    //       <a
    //         href="#"
    //         className="italic text-gray-900 text-2xl font-extrabold dark:text-white "
    //       >
    //         Madolla vape
    //       </a>
    //       . All Rights Reserved.
    //     </span>
    //     <div className="flex mt-4 sm:justify-center sm:mt-0">
    //       <p className="text-sm text-gray-900 dark:text-white mr-2">Follow us:</p>

    //       <a
    //         href="#"
    //         className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    //       >
    //         <svg
    //           className="w-5 h-5"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="24"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //         >
    //           <path
    //             fill="currentColor"
    //             fillRule="evenodd"
    //             d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
    //             clipRule="evenodd"
    //           />
    //         </svg>

    //         <span className="sr-only">Instagram page</span>
    //       </a>
    //       <a
    //         href="#"
    //         className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
    //       >
    //         <svg
    //           className="w-4 h-4"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="currentColor"
    //           viewBox="0 0 8 19"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //         <span className="sr-only">Facebook page</span>
    //       </a>
    //       <a
    //         href="#"
    //         className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
    //       >
    //         <svg
    //           className="w-4 h-4"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="currentColor"
    //           viewBox="0 0 20 17"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //         <span className="sr-only">Twitter page</span>
    //       </a>
    //     </div>
    //   </div>
    // </footer>
  );
}
