import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SchoolIcon from "@mui/icons-material/School";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function CourseCard({
  id,
  course_image,
  course_name,
  teacher_names,
  start_date,
  supporting,
  course_price,
  discount,
  uses_for_whom,
  totalSlide,
  isFreeAvailable
}) {

  const naviagate = useNavigate();
  // console.log(course_image);
  return (
    <div
      className="disable-select carousel-item block relative w-full max-w-sm h-[82vh] bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer overflow-hidden"
      id={`slide${id}`}
      onClick={(event) => {
        naviagate(`/course_detail/${id}`);
        event.stopPropagation();
      }}
    >
      {/* <a href="/home" className="block"> */}
      <img className="w-full h-[30vh] rounded-t-lg" src={course_image} alt="" />
      {/* </a> */}
      <div className="pl-4 pb-8 pr-2">
        <div className="w-full pt-4 flex justify-between items-start">
          <h1 className="w-3/4 text-sm lg:text-2xl word-wrap text-nowrap">
            {course_name}
          </h1>
          <span
            className="inline-block border-b text-orange-500 border-orange-500 border-t pl-2 pr-2 pb-1 text-xl cursor-pointer rounded-full mr-2 shadow-lg"
            onClick={(event) => {
              const userName = window.prompt("Please Enter Your Name.");
              userName &&
                toast.success(
                  `Thank You ${userName} right now our team working on this project.`,
                  {
                    duration: 4000,
                    position: "bottom-left",
                  }
                );
              event.stopPropagation();
            }}
          >
            &#x27A6;
          </span>
        </div>
        <div className="pt-4 flex flex-col gap-2">
          {teacher_names && (
            <div className="flex items-center gap-4 pl-2">
              <PersonIcon sx={{ color: "gray" }} />{" "}
              <span className="font-semibold">
                {teacher_names[0] + " "}{" "}
                {teacher_names.length > 1 && (
                  <span className="text-gray-400">
                    and {teacher_names.length - 1} more
                  </span>
                )}
              </span>
            </div>
          )}
          {start_date && (
            <div className="flex items-center gap-4 pl-2">
              <DateRangeIcon sx={{ color: "gray" }} />{" "}
              <span className="font-semibold">{start_date}</span>
            </div>
          )}
          {supporting && (
            <div className="flex items-center gap-4 pl-2">
              <VideoLibraryIcon sx={{ color: "gray" }} />{" "}
              <span className="font-semibold">{supporting}</span>
            </div>
          )}
          {uses_for_whom && (
            <div className="flex items-center gap-4 pl-2">
              <SchoolIcon sx={{ color: "gray" }} />{" "}
              <span className="font-semibold">{uses_for_whom}</span>
            </div>
          )}
        </div>
      </div>

      <div className="absolute left-0 bottom-0 w-full m-auto">
        <span className="inline-block w-[87%] ml-[6%] border-gray-600 m-auto border-b"></span>
        <div className="flex justify-center">
          {course_price && (
            <div className="flex gap-4 items-center">
              <strong className="font-semibold text-xl">
                ₹{" "}
                {discount &&
                  (course_price - course_price * (discount / 100)).toFixed(
                    2
                  )}{" "}
                {discount ? (
                  <span className="line-through text-sm">
                    {course_price}.00
                  </span>
                ) : (
                  <span className="text-xl">{course_price}.00</span>
                )}{" "}
              </strong>
              {discount && (
                <b className="flex gap-2">
                  <img
                    width="20"
                    src="https://img.icons8.com/ios-filled/50/40C057/discount--v1.png"
                    alt="discount--v1"
                  />

                  <span className="iniline-flex items-center font-400 text-green-500">
                    {discount}% Discount
                  </span>
                </b>
              )}
            </div>
          )}
          {
            !course_price && isFreeAvailable&& (
              <strong className="text-xl">FREE</strong>
            )
          }
        </div>
        <div className="w-full mt-4">
          <button className="w-1/2 text-md font-semibold p-4 bg-white text-orange-700 hover:bg-gray-200 transition-all duration-600 ease-in-out rounded-bl-3xl">
            Explore
          </button>
          <button className="w-1/2 text-md p-4 bg-orange-600 hover:bg-orange-700 transition-all duration-600 ease-in-out rounded-br-3xl">
            Enroll now
          </button>
        </div>
      </div>
    </div>
  );
}

// line-clamp-1 w-3/4
