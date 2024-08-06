import { useState } from 'react';
export default function Contact () {

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Display the popup message
    setPopupVisible(true);
        // Clear the form inputs
        setEmail('');
        setSubject('');
        setMessage('');
  
  };


  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-8 md:py-20">
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
                Contact Us
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>

    <div className=" px-4 mx-auto max-w-screen-md">

      <p className="my-8 lg:my-10 text-xl font-semibold text-center text-black dark:text-white">
      We’d love to hear from you! Whether you have questions about our services or need support, here’s how you can reach us:
      </p>




      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Information
          </h2>
         
          <div className="grid grid-cols-2 items-start">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="/icons/phone-call.gif"
                alt="Number"
                width={40}
                height={40}
              />
              <div>
                <h3 className="font-semibold text-black dark:text-white">
                  Phone Number
                </h3>
                <p className="text-black dark:text-white">+254 727 041 155</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/icons/email.gif"
                alt="email"
                width={40}
                height={40}
                
              />
              <div>
                <h3 className="font-semiboldtext-black dark:text-white">
                  Email
                </h3>
                <p className="text-black dark:text-white">
                  info@MadollaVape.co.ke
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 className="my-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Write to us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let us know how we can help you"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
      {isPopupVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow-lg">
              <p className="text-center text-xl font-bold">Message sent! You will get an email reply soon.</p>
              <button
                onClick={() => setPopupVisible(false)}
                className="mt-4 px-4 py-2 text-white rounded-lg bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}


    </div>
  </section>
  )
}