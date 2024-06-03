import Shop from "./shop";

export default function Home() {
  return (
    <main>
      <section className="mt-14 relative h-[92vh] flex justify-center items-center">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-fill">
          <source src="/assets/carousel_vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative px-4 mx-auto max-w-screen-xl text-center text-white">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
            Elevate your vaping experience and Discover the latest Vape pen for
            you.
          </h1>
          <p className="mb-8 text-gray-400 text-lg font-normal lg:text-xl sm:px-6">
            Experience cutting-edge vape technology that redefines your vaping
            journey. Immerse yourself in the world of advanced vaping technology
            with our premium vape pens crafted with precision for the best
            performance with exceptional flavor and sleek designs.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/shop"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Buy Now
            </a>
          </div>
        </div>
      </section>
      <Shop />
    </main>
  );
}
