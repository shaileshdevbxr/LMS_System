import React from "react";
import "./ecosystem.css";

const Ecosystem = () => {
  return (
    <div className="w-full py-8 lg:py-14 px-[5.5%] " id="main-eco">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Explore Our Ecosystem</h1>
        <p className="text-xl">
          A one-stop destination for all your learning to placement needs
        </p>
      </div>
      <div className="w-full main-eco-card">
        <div className="w-full flex flex-col items-center lg:flex-row gap-6 justify-between">
          {/* here will be seen one explore cards */}

          <div className="flex flex-col justify-center gap-6">
            <div className="exp_card card1 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all ease-in-out duration-200">
              <img
                src="https://pwskills.com/images/homePage/products-icon1.png"
                alt=""
              />
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Maurya Infotech Lab
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Buying a new PC is no longer required, Access unlimited
                computing power!
              </p>
              <button className="exp_btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all ease-in-out duration-200">
                Explore
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>

            <div className="exp_card card2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                src="https://pwskills.com/images/homePage/products-icon2.png"
                alt=""
              />
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Experience Portal
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Self-paced portal prioritizes hands-on training with 570+
                internship projects.
              </p>
              <button className="exp_btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Explore
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>

            <div className="exp_card card3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                src="https://pwskills.com/images/homePage/products-icon3.png"
                alt=""
              />
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hall Of Fame
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Our student placements and 100K+ career transitions speak
                volumes.
              </p>
              <button className="exp_btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Explore
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* here will be seen two explore cards */}

          <div className="flex flex-col justify-center gap-6">
            <div className="exp_card card4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                src="https://pwskills.com/images/homePage/products-icon4.png"
                alt=""
              />
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Job Portal
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Use exceptional templates for a stand-out resume minus the sign
                up process.
              </p>
              <button className="exp_btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Explore
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>{" "}
            <div className="exp_card card5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                src="https://pwskills.com/images/homePage/products-icon5.png"
                alt=""
              />

              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Become an affiliate
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Explore affiliate marketing opportunities and attain financial
                freedom.
              </p>
              <button className="exp_btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Explore
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* here will be gif  */}

          <div className="flex items-center rounded-lg">
            <img
              src="../../../src/assets/gif/output-onlinegiftools.gif"
              alt=""
              width={"450px"}
              height={"400px"}
              className="hidden lg:block rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
