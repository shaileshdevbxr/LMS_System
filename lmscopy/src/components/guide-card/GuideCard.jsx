import React from "react";
import "./guide-card.css";

const GuideCard = () => {
  return (
    <div className="guide-card-container my-12">
      <div className="card-main">

        <div className="card-image glass">
          <div className="sm-card bg1 w-1/2">
            <div className="w-full h-full">
              <div className="detail-card">
                <h1 className="w-[98%] lg:w-[60%] text-white text-2xl lg:text-4xl font-semibold font-serif">
                  Guiding You At Every Step!
                </h1>
                <p className="w-3/4 lg:w-1/2">
                  Our Top Mentors show you the way, to becoming a thorough
                  professional!
                </p>

                <div className="flex lg:gap-6 gap-4 mt-2 lg:mt-6">
                  <img
                    src="https://pwskills.com/images/homePage/offerbanner/amazon-logo.svg"
                    alt=""
                  />
                  <img
                    src="https://pwskills.com/images/homePage/offerbanner/google-logo.svg"
                    alt=""
                  />
                  <img
                    src="https://pwskills.com/images/homePage/offerbanner/walmart-logo.svg"
                    alt=""
                  />
                </div>
                <div className="flex gap-6 mt-2 lg:mt-6">
                  <img
                    src="https://pwskills.com/images/homePage/offerbanner/microsoft-logo.svg"
                    alt=""
                  />
                  <img
                    src="https://pwskills.com/images/homePage/offerbanner/linkedin-logo.svg"
                    alt=""
                  />
                </div>

                <span className="mt-2 lg:mt-8 ml-1 text-yellow-600">
                  & more...
                </span>

                <button className="w-32 lg:w-[150px] p-1 lg:p-2 inline-flex justify-center items-center text-lg font-bold bg-white text-black rounded-lg outline-none border-none">
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
                <span className="mt-2 lg:mt-6 inline-flex gap-3 justify-start items-center text-2xl lg:text-3xl cursor-pointer">
                  Skip
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
                </span>
              </div>
            </div>
          </div>
          <div className="circle-box cb-bg-1 inline-flex flex-col justify-center items-center">
            <div>
              <span className="text-xl">“Your</span>
              <h1 className="text-3xl font-bold">Aspiration</h1>
              <div className="flex gap-2 items-center">
                <b className="text-xl">is our</b>{" "}
                <h1 className="text-3xl font-bold">goal”</h1>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 h-full">
            <img
              src="https://freelancebusiness.eu/wp-content/uploads/2022/06/freelancer-IT-platofrms-e1662738596445-800x551.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>


        <div className="card-image glass">
          <div className="sm-card bg2 w-1/2">
            <div className="w-full h-full">
              <div className="detail-card">
                <h1 className="w-[98%] lg:w-[60%] text-white text-2xl lg:text-4xl font-semibold font-serif">
                  One Stop Destination For All Placement Needs
                </h1>
                <p className="w-3/4 lg:w-1/2">
                  Resume Support, Mock Interview, Exclusive Job Offers!
                </p>

                <div className="flex gap-6 mt-2 mb-12 lg:mt-6">
                  <div className="flex flex-col gap-2 items-center">
                    <img
                      src="https://pwskills.com/images/homePage/offerbanner/trophy.png"
                      alt=""
                    />
                    <p className="w-24 text-center">50+ Hiring Partners</p>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <img
                      src="https://pwskills.com/images/homePage/offerbanner/placement.png"
                      alt=""
                    />
                    <p className="w-24 text-center">500+ Placements</p>
                  </div>
                </div>
                <button className="w-32 lg:w-[150px] p-1 lg:p-2 inline-flex justify-center items-center text-lg font-bold bg-white text-black rounded-lg outline-none border-none">
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
                <span className="mt-2 lg:mt-6 inline-flex gap-3 justify-start items-center text-2xl lg:text-3xl cursor-pointer">
                  Skip
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
                </span>
              </div>
            </div>
          </div>

          <div className="circle-box cb-bg-2 inline-flex flex-col justify-center items-center">
            <div>
              <span className="text-xl">“From</span>
              <h1 className="text-3xl font-bold">Learning</h1>
              <div className="flex gap-2 items-center">
                <h1 className="text-3xl font-bold">To Earning”</h1>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 h-full">
            <img
              src="https://eco-cdn.iqpc.com/eco/images/channel_content/images/avoid_bias_in_hiringOs5JHgrfF23XjDfkeuTDmaBpQmbf68eIkHbhlwJV.webp"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>


        <div className="card-image">
          <div className="sm-card bg3 w-1/2">
            <div className="w-full h-full">
              <div className="detail-card">
                <h1 className="w-[98%] lg:w-[60%] text-white text-2xl lg:text-4xl font-semibold font-serif">
                  Real-Time Industry Experience
                </h1>
                <p className="lg:w-3/4 w-full">
                  Learn & experience real-time development as per industry
                  standards
                </p>
                <div className="flex gap-4 mt-2 mb-12 lg:mt-6">
                  <div className="flex flex-col items-start">
                    <b className="text-gray-400 text-xl">2+</b>
                    <p className="w-24 text-left font-semibold">Domains</p>
                  </div>
                  <div className="flex flex-col items-start">
                    <b className="text-gray-400 text-xl">200+</b>
                    <p className="w-24 text-left font-semibold">Projects</p>
                  </div>
                  <div className="flex flex-col  items-start">
                    <b className="text-gray-400 text-xl">1000+</b>
                    <p className="w-24 text-left font-semibold">Interns</p>
                  </div>
                  
                </div>

                <button className="w-32 lg:w-[150px] p-1 lg:p-2 inline-flex justify-center items-center text-lg font-bold bg-white text-black rounded-lg outline-none border-none">
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
                <span className="mt-2 lg:mt-6 inline-flex gap-3 justify-start items-center text-2xl lg:text-3xl cursor-pointer">
                  Skip
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
                </span>
              </div>
            </div>
          </div>
          <div className="circle-box cb-bg-3 inline-flex flex-col justify-center items-center">
            <div>
              <span className="text-xl">“Earn your</span>
              <h1 className="text-3xl font-bold">Experience</h1>
              <div className="flex gap-2 items-center">
                <h1 className="text-3xl font-bold">Letter”</h1>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 h-full">
            <img
              src="https://www.webstore9.com/assets/img/service/details/best-software-development-company-in-delhi-noida-india.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>


        <div className="card-image">
          <div className="sm-card bg4 w-1/2">
            <div className="w-full h-full">
              <div className="detail-card">
                <h1 className="w-[98%] lg:w-[70%] text-white text-2xl lg:text-4xl font-semibold font-serif">
                  Flexible Learning Just For You!
                </h1>
                <p className="lg:w-3/4 w-full">
                  RPW Skills courses are designed to fit every individual's
                  needs. Learn through LIVE & self-paced courses!
                </p>
                 <div className="flex gap-6 mt-2 mb-12 lg:mt-6">
                  <div className="flex flex-col gap-2 items-center">
                    <img
                      src="https://pwskills.com/images/homePage/offerbanner/course.png"
                      alt=""
                    />
                    <p className="w-32 text-center">11+ Self Paced Courses</p>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <img
                      src="https://pwskills.com/images/homePage/offerbanner/live.png"
                      alt=""
                    />
                    <p className="w-24 text-center">5+ Live Courses</p>
                  </div>
                </div>

                <button className="w-32 lg:w-[150px] p-1 lg:p-2 inline-flex justify-center items-center text-lg font-bold bg-white text-black rounded-lg outline-none border-none">
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
                <span className="mt-2 lg:mt-6 inline-flex gap-3 justify-start items-center text-2xl lg:text-3xl cursor-pointer">
                  <a>Skip</a>
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
                </span>
              </div>
            </div>
          </div>
          <div className="circle-box cb-bg-4 inline-flex flex-col justify-center items-center">
            <div>
              <h1 className="text-3xl font-bold">“Learning</h1>
              <strong>Made For</strong>
              <div className="flex gap-2 items-center">
                <h1 className="text-3xl font-bold">“Learning</h1>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 h-full">
            <img
              src="https://www.mipm.co.in/wp-content/uploads/2023/06/mothers_courses_001_-7-683x1024-1.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
