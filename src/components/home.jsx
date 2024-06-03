import Shop from "./shop";

export default function Home() {
  return (
    <main>
      <section
        className="bg-center bg-no-repeat bg-fixed bg-contain bg-gray-500 bg-blend-multiply mt-12 py-16 lg:py-20"
        style={{ 
          backgroundImage: "url(/assets/vapes_2.jpg)",
          minHeight: "94vh"
        }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-8 lg:py-12"> 
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl">
            Elevate your vaping experience and Discover the latest Vape pen for
            you.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-6"> 
            Experience cutting-edge vape technology that redefines your vaping
            journey. Immerse yourself in the world of advanced vaping technology
            with our premium vape pens crafted with precision for the best
            performance with exceptional flavor and sleek designs.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/shop"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Buy Now
            </a>
          </div>
        </div>
      </section>
      <Shop/>
    </main>
  );
}