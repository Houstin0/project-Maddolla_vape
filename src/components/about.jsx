export default function About() {
  return (
    <section className="bg-gray-200 antialiased dark:bg-gray-900 pb-6 pt-16 mx-4 md:mx-12">
      <div>
        <nav className="flex ml-12" aria-label="Breadcrumb ">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
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
                  About Us
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl flex items-center justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              About
            </span>{" "}
            Us
          </h1>
          <div className="mx-auto max-w-2xl space-y-6">
            <p className="text-base font-normal text-black dark:text-gray-400">
              Welcome to Madolla Vape, Your Premier Destination for Quality Vape
              Pens At Madolla Vape, we are passionate about delivering the best
              vaping experience to our customers. We specialize in offering a
              curated selection of premium vape pens crafted with precision,
              designed for exceptional performance, flavor, and style.
            </p>
            <h2 className="text-teal-600">Our Journey</h2>

            <p className="text-base font-normal text-black dark:text-gray-400">
              Madolla Vape started as a small venture fueled by a shared love
              for vaping and a vision to provide enthusiasts with top-notch
              products. Over the years, our commitment to quality and customer
              satisfaction has propelled us to become a trusted name in the
              vaping community.
            </p>

            <p className="text-base font-semibold text-gray-900 dark:text-white">
              What Sets Us Apart:
            </p>
            <ul className="list-outside list-disc space-y-4 pl-4 text-base font-normal text-gray-700 dark:text-gray-400">
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {" "}
                  Quality Assurance:{" "}
                </span>
                We handpick each vape pen, ensuring they meet the highest
                standards of quality, safety, and performance.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {" "}
                  Diverse Selection:{" "}
                </span>
                From sleek and portable designs to advanced features, our
                collection caters to every vaping preference and style.
              </li>

              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {" "}
                  Expert Guidance:{" "}
                </span>
                Our knowledgeable team is here to guide you, whether you&apos;re
                a seasoned vaper or new to the experience, ensuring you find the
                perfect vape pen for your needs.
              </li>

              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {" "}
                  Customer Experience:{" "}
                </span>
                Your satisfaction is our priority. We strive to provide a
                seamless shopping experience, from browsing our website to
                receiving your order.
              </li>
            </ul>
          </div>

          <div className="mx-auto mb-6 max-w-3xl space-y-6 md:mb-12">
            <h2 className="text-teal-600">Join Us on Instagram</h2>
            <p className="text-base font-normal text-black dark:text-gray-400">
              Connect with us on Instagram (@madollavape) to stay updated with
              the latest trends, product launches, and exclusive offers. Our
              Instagram community is vibrant and engaging, filled with vaping
              enthusiasts sharing tips, tricks, and experiences
            </p>
            <h2 className="text-teal-600">Our Commitment</h2>
            <p className="text-base font-normal text-black dark:text-gray-400">
              At Madolla Vape, we are committed to innovation, quality, and
              customer satisfaction. Whether you&apos;re looking for a new vape
              pen, accessories, or expert advice, we&apos;re here to elevate
              your vaping journey. Join us at Madolla Vape – Where Quality Meets
              Passion!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
