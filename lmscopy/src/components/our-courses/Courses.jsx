import React, { useState } from "react";
import { CourseCard } from "./CourseCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
const Courses = ({ data }) => {


  const [coursePosition, setCoursePosition] = useState({
    trending: true,
    live: false,
    community: false,
  });

  function trendingCourseHandler() {
    setCoursePosition({
      ...coursePosition,
      trending: true,
      live: false,
      community: false,
    });
  }
  function liveCourseHandler() {
    setCoursePosition({
      ...coursePosition,
      trending: false,
      live: true,
      community: false,
    });
  }
  function communityCourseHandler() {
    setCoursePosition({
      ...coursePosition,
      trending: false,
      live: false,
      community: true,
    });
  }

  const navigate = useNavigate();
  return (
    <section className="w-full py-8 large:py-14 px-[5.5%]">
      <div className="flex justify-between my-2">
        <h1 className="lg:text-3xl text-2xl font-bold text-white">
          Our Courses
        </h1>
        <button
          className="lg:py-2 lg:px-4 px-2 lg:text-md bg-white text-black cursor-pointer rounded-md"
          onClick={() => {
            navigate("/our_all_courses");
          }}
        >
          View all &#8594;{" "}
        </button>
      </div>
      <div className="flex items-center justify-start border-b border-stroke-300 gap-x-4 text-gray-650">
        <div className="relative h-full flex items-center justify-center">
          <button
            className={`text-md py-[10px] medium:text-base medium:px-6 medium:py-3 font-semibold flex gap-2 justify-center items-center font-nunitoSans cursor-pointer  ${
              coursePosition.trending
                ? "text-orange-400 font-bold text-[18px]"
                : "text-white"
            }`}
            onClick={trendingCourseHandler}
          >
            Trending
          </button>
          <div
            className={`${
              coursePosition.trending
                ? "block border border-orange-400 absolute bottom-[-1px] w-[100%]"
                : "hidden"
            }`}
          ></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <button
            className={`text-md py-[10px] medium:text-base medium:px-6 medium:py-3 font-semibold flex gap-2 justify-center items-center font-nunitoSans cursor-pointer rounded-none px-1  ${
              coursePosition.live
                ? "text-orange-400 font-bold text-[18px]"
                : "text-white"
            }`}
            onClick={liveCourseHandler}
          >
            Live
          </button>
          <div
            className={`${
              coursePosition.live
                ? "block border border-orange-400 absolute bottom-[-1px] w-[100%]"
                : "hidden"
            }`}
          ></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <button
            className={`text-md py-[10px] medium:text-base medium:px-6 medium:py-3 font-semibold flex gap-2 justify-center items-center font-nunitoSans cursor-pointer rounded-none px-1  ${
              coursePosition.community
                ? "text-orange-400 font-bold text-[18px]"
                : "text-white"
            }`}
            onClick={communityCourseHandler}
          >
            Community
          </button>
          <div
            className={`${
              coursePosition.community
                ? "block border border-orange-400 absolute bottom-[-1px] w-[100%]"
                : "hidden"
            }`}
          ></div>
        </div>
      </div>
      {/* <div className="w-full mt-6">
        <Slider
          {...settings}
          style={{ paddingLeft: "2%", paddingRight: "0px" }}
        >
          {data &&
            data.map((data_detail) => {
              return (
                <CourseCard
                  {...data_detail}
                  key={data_detail.course_id}
                  totalSlide={data_detail.length}
                />
              );
            })}
        </Slider>
      </div> */}

      <div className="carousel flex gap-14 mt-6">
        {data && coursePosition.live
          ? data
              .filter(
                (data_detail) => data_detail.filter_by_user.status_live
              )
              .map((data_detail, i) => (
                <CourseCard
                  {...data_detail}
                  key={i}
                  totalSlide={data_detail.length}
                />
              ))
          : coursePosition.community
          ? data
              .filter(
                (data_detail) => data_detail.filter_by_user.status_community
              )
              .map((data_detail) => {
                return (
                  <CourseCard
                    {...data_detail}
                    key={data_detail.course_id}
                    totalSlide={data_detail.length}
                  />
                );
              })
          : data
              .filter(
                (data_detail) => data_detail.filter_by_user.status_trending
              )
              .map((data_detail) => {
                return (
                  <CourseCard
                    {...data_detail}
                    key={data_detail.course_id}
                    totalSlide={data_detail.length}
                  />
                );
              })}
      </div>
    </section>
  );
};
export default Courses;
