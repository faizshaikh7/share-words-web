function Header() {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-4 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <img
                src="https://cdn.pixabay.com/photo/2016/10/12/23/22/owl-1736292_1280.png"
                className="mr-3 h-6 sm:h-20"
                alt="TrendX"
              />
              <span className="self-center text-2xl text-blue-800  font-semibold whitespace-nowrap dark:text-white">
                BluBirds
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <button
                type="button"
                className="text-white text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full  px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
