import React, { useState, useEffect, useRef } from "react";
import Loader from "../common/components/Loader";
import { getAllFrequentQuestion } from "../api/frequentAskedApi";
import HomeLayouts from "../layouts/HomeLayouts";

const AskedQuesionPage = () => {
  const loaderRef = useRef();

  const [frequentlyAskQues, setFrequentlyAskQues] = useState([]);

  useEffect(() => {
    fetchApiData();
  }, []);
  

  async function fetchApiData() {
    try {
      loaderRef.current.handleOpen();
      const response = await getAllFrequentQuestion();
      // console.table(response);
      if (!response?.status == 200) return;
      setFrequentlyAskQues(response?.data);
      loaderRef.current.handleClose();
    } catch (error) {
      console.log(error);
    }
    loaderRef.current.handleClose();
  }
  const showDescription = (e, data) => {
    data.isDescriptionVisible = !data.isDescriptionVisible;
    setFrequentlyAskQues([...frequentlyAskQues]);
  };
  return (
    <HomeLayouts>
      <div className="w-[90%] mx-auto mt-16 lg:mt-28 pt-10 mb-10">
        <h1 className="w-full text-center text-4xl font-bold">
          Frequently Asked Questions
        </h1>

        <div className="w-full relative flex flex-col gap-6 my-10 ">
          {frequentlyAskQues?.map((data) => {
            return (
              <div
                key={data?.id}
                className={`w-full relative border border-gray-500 px-4 py-4 rounded-lg cursor-pointer relative ${data?.isDescriptionVisible ? "bg-gray-900" : "bg-transparent"} transition-all duration-1000 ease-in-out`}
                onClick={(e) => showDescription(e, data)}
              >
                <div className={`w-full relative flex justify-between items-center transition-all duration-1000 ease-in-out`}>
                  <b className="lg:text-2xl text-lg md:text-xl">{data?.askedQuestion}</b>
                  {data?.isDescriptionVisible ? (
                    <svg
                      className="w-6 h-6 text-gray-200 shrink-0"
                      viewBox="0 0 512 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="currentColor"
                        d="M112 328L256 184L400 328"
                        strokeWidth="48"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-200 shrink-0"
                      viewBox="0 0 512 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M112 184L256 328L400 184"
                        stroke="currentColor"
                        strokeWidth="48"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  )}
                </div>
                <div
                  className={`w-full transition-all duration-1000 ease-in-out rounded mt-4 ${
                    data?.isDescriptionVisible ? "block" : "hidden"
                  }`}
                >
                  <p className={`text-gray-400 ${data?.isDescriptionVisible ? "h-fit" : "h-0"} h-0 overflow-hidden transition-all duration-1000 ease-in-out text-sm md:text-base font-normal !text-gray-650 text-left`}>
                    {data?.askedQuestionDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Loader ref={loaderRef} />
    </HomeLayouts>
  );
};

export default AskedQuesionPage;
