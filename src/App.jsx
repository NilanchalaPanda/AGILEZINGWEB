function App() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-2xl w-full px-4">
            <h1 className="text-white text-center">AGILEZINGWEB</h1>
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Coming Soon!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-6">
              Our website is under construction. We will be back soon!
            </p>
            <form className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                className="w-full md:w-80  py-2 px-4 border text-gray-800 dark:text-white border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700"
                type="email"
                placeholder="Enter your email address"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border dark:bg-blue-800">
                Notify Me
              </button>
            </form>
            <p className="text-gray-600 dark:text-gray-300 text-center mt-4 md:mt-4">
              To know more about us. Connect with {" "}
              <a
                href="https://www.linkedin.com/in/nilanchal-panda"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Nilanchala Panda
              </a>
              {" "}&{" "}
              <a
                href="https://www.linkedin.com/in/mohd-usmaan-mogale/"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Mohd. Usmaan Mogale.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
