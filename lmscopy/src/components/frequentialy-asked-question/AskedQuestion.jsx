import React, { useEffect, useRef, useState } from "react";
import "./asked-question.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useNavigate } from "react-router-dom";

const AskedQuestion = () => {
  const [isSuggestDisplay, setIsSuggestDisplay] = useState({
    quesSeggest1: true,
    quesSeggest2: false,
    quesSeggest3: false,
    quesSeggest4: false,
  });
  const navigate = useNavigate();

  return (
    <div className="w-[90%] my-12 m-auto">
        <div>
          <div className="w-full m-auto flex flex-wrap-reverse justify-center lg:justify-between items-center gap-4">
            <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
            <button
              className="py-2 lg:px-4 px-2 lg:text-md bg-white text-black cursor-pointer rounded-md"
              onClick={() => {
                navigate("/frequent_asked_question")
              }}
            >
              View all &#8594;{" "}
            </button>
          </div>
          <div className="flex justify-between items-start my-4">
            <div className="w-[60%] flex flex-col gap-8">
              <div
                className="w-full flex items-center justify-between gap-2 cursor-pointer border-b-2 border-gray-700 pb-4"
                onClick={() => {
                  setIsSuggestDisplay({
                    ...isSuggestDisplay,
                    quesSeggest2: false,
                    quesSeggest1: true,
                    quesSeggest3: false,
                    quesSeggest4: false,
                  });
                }}
              >
                <div>
                  <h2
                    className={`disable-select ${
                      isSuggestDisplay.quesSeggest1
                        ? "text-gray-300"
                        : "text-gray-600"
                    } font-semibold text-2xl`}
                  >
                    I need to purchase a course. Whom should I contact ?
                  </h2>
                </div>
                <div>
                  <ArrowCircleRightIcon
                    sx={{
                      color: isSuggestDisplay.quesSeggest1
                        ? "#d1d5db"
                        : "#4b5563",
                    }}
                  />
                </div>
              </div>
              <div
                className="w-full flex items-center justify-between gap-2 cursor-pointer border-b-2 border-gray-700 pb-4"
                onClick={() => {
                  setIsSuggestDisplay({
                    ...isSuggestDisplay,
                    quesSeggest2: true,
                    quesSeggest1: false,
                    quesSeggest3: false,
                    quesSeggest4: false,
                  });
                }}
              >
                <div>
                  <h2
                    className={`disable-select ${
                      isSuggestDisplay.quesSeggest2
                        ? "text-gray-300"
                        : "text-gray-600"
                    } font-semibold text-2xl`}
                  >
                    I am not able to view my enrolled course. What to do/whom to
                    contact ?
                  </h2>
                </div>
                <div>
                  <ArrowCircleRightIcon
                    sx={{
                      color: isSuggestDisplay.quesSeggest2
                        ? "#d1d5db"
                        : "#4b5563",
                    }}
                  />
                </div>
              </div>
              <div
                className="w-full flex items-center justify-between gap-2 cursor-pointer border-b-2 border-gray-700 pb-4"
                onClick={() => {
                  setIsSuggestDisplay({
                    ...isSuggestDisplay,
                    quesSeggest2: false,
                    quesSeggest1: false,
                    quesSeggest3: true,
                    quesSeggest4: false,
                  });
                }}
              >
                <div>
                  <h2
                    className={`disable-select ${
                      isSuggestDisplay.quesSeggest3
                        ? "text-gray-300"
                        : "text-gray-600"
                    } font-semibold text-2xl`}
                  >
                    What is an experience portal ? How to use it ?
                  </h2>
                </div>
                <div>
                  <ArrowCircleRightIcon
                    sx={{
                      color: isSuggestDisplay.quesSeggest3
                        ? "#d1d5db"
                        : "#4b5563",
                    }}
                  />
                </div>
              </div>
              <div
                className="w-full flex items-center justify-between gap-2 cursor-pointer border-b-2 border-gray-700 pb-4"
                onClick={() => {
                  setIsSuggestDisplay({
                    ...isSuggestDisplay,
                    quesSeggest2: false,
                    quesSeggest1: false,
                    quesSeggest3: false,
                    quesSeggest4: true,
                  });
                }}
              >
                <div>
                  <h2
                    className={`disable-select ${
                      isSuggestDisplay.quesSeggest4
                        ? "text-gray-300"
                        : "text-gray-600"
                    } font-semibold text-2xl`}
                  >
                    How to get Placements and Job assistance ?
                  </h2>
                </div>
                <div>
                  <ArrowCircleRightIcon
                    sx={{
                      color: isSuggestDisplay.quesSeggest4
                        ? "#d1d5db"
                        : "#4b5563",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="suggest-box w-[35%] h-36 relative hidden lg:block md:block overflow-hidden transition-all duration-100">
              <p
                className={`suggest-text relative ${
                  isSuggestDisplay.quesSeggest1 ? "block" : "block"
                } ${
                  isSuggestDisplay.quesSeggest1 ? "top-0" : "top-[200px]"
                } w-full text-gray-400 my-2 transition-all duration-1000 ease-in-out`}
              >
                Contact our counselors through the chat support on our website.
                Look for the chat option on the bottom right of the Homepage.
                Name the course you’re interested in, and the counseling team
                will guide you through the admission process.
              </p>
              <p
                className={`suggest-text relative ${
                  isSuggestDisplay.quesSeggest2 ? "block" : "block"
                } ${
                  isSuggestDisplay.quesSeggest2 ? "top-[-100px]" : "top-24"
                } w-full text-gray-400 my-2 transition-all duration-1000 ease-in-out`}
              >
                To access your enrolled course, ensure you have logged in at
                learn.pwskills.com. If the course is still not visible, email
                your payment receipt to support@mauryaInfotech.com for
                assistance within 24 hours.
              </p>
              <p
                className={`suggest-text relative ${
                  isSuggestDisplay.quesSeggest3 ? "block" : "block"
                } ${
                  isSuggestDisplay.quesSeggest3 ? "top-[-220px]" : "top-24"
                } w-full text-gray-400 my-2 transition-all duration-1000 ease-in-out`}
              >
                Our experience portal offers real-time industrial projects for
                students and professionals. These unpaid, remote, and self-paced
                internships provide valuable experience. Choose and complete as
                many projects as you like to receive an internship experience
                letter. Students as well as working professionals can do these
                internships.
              </p>
              <p
                className={`suggest-text relative ${
                  isSuggestDisplay.quesSeggest4 ? "block" : "block"
                } ${
                  isSuggestDisplay.quesSeggest4 ? "top-[-340px]" : "top-24"
                } w-full text-gray-400 my-2 transition-all duration-1000 ease-in-out`}
              >
                For job placements and assistance: Enroll in our job assurance
                program for resume building, mock interviews, job referrals, and
                an assured job opportunity. Opt for our job assistance course
                for resume building, mock interviews, and job alerts (job
                assurance not included).
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AskedQuestion;
