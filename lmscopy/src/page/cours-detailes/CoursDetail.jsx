import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../common/components/Loader";
import { getCourseById } from "../../api/courseDetailApi";
import HomeLayouts from "../../layouts/HomeLayouts";
import Footer from "../../components/footer/Footer";
import BreadCrumbs from "../../common/components/BreadCrumbs";

const CoursDetail = () => {
  const { courseId } = useParams();
  const loaderRef = useRef();
  const [courseDetail, setCourseDetail] = useState({});
  useEffect(() => {
    getCoursDetail(courseId);
  }, []);

  async function getCoursDetail(courseId) {
    try {
      loaderRef.current.handleOpen();
      const response = await getCourseById(courseId);
      // console.log(response?.data);
      if (!response?.status == 200) return;
      setCourseDetail(response?.data);
      loaderRef.current.handleClose();
    } catch (error) {
      console.log(error);
    }
    loaderRef.current.handleClose();
  }

  return (
    <HomeLayouts>
      <div className="mt-[4rem] lg:mt-[7rem] mb-10 pt-6">
        <div className="ml-5 lg:ml-[5rem]">
        <BreadCrumbs
          list={[
            { name: "Home", path: "/" },
            { name: "Course_Details", path: "/course_detail" },
          ]}
        />
        </div>
        <div className="w-[90%] m-auto">
          <span></span>
          <div className="w-full my-4 flex flex-wrap gap-12 justify-between">
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                {courseDetail?.course_name}
              </h2>
              <p>{courseDetail?.course_detail}</p>
              {courseDetail?.course_price && (
                <div className="flex gap-6 items-center">
                  <strong className="font-bold text-lg lg:text-3xl">
                    ₹{" "}
                    {courseDetail?.discount &&
                      (
                        courseDetail?.course_price -
                        courseDetail?.course_price *
                          (courseDetail?.discount / 100)
                      ).toFixed(2)}{" "}
                    {courseDetail?.discount ? (
                      <span className="line-through text-xl">
                        {courseDetail?.course_price}.00
                      </span>
                    ) : (
                      <span className="text-xl">
                        {courseDetail?.course_price}.00
                      </span>
                    )}{" "}
                  </strong>
                  {courseDetail?.discount && (
                    <b className="flex items-center gap-2">
                      <img
                        width="20"
                        src="https://img.icons8.com/ios-filled/50/40C057/discount--v1.png"
                        alt="discount--v1"
                      />

                      <span className="iniline-flex items-center font-400 text-green-500">
                        {courseDetail?.discount}% Discount
                      </span>
                    </b>
                  )}
                </div>
              )}
              <div className="w-full lg:w-[70%] flex gap-4 items-center">
                <button className="w-1/2 text-md p-2 lg:p-4 bg-orange-600 hover:bg-orange-700 transition-all duration-600 ease-in-out rounded-xl">
                  Enroll now
                </button>
                <button className="w-1/2 text-md p-2 lg:p-4 bg-gray-300 hover:bg-gray-400 text-orange-700 transition-all duration-600 ease-in-out rounded-xl">
                  Share
                </button>
              </div>
            </div>
            <div className="w-full lg:w-[40%] px-0 lg:px-10">
              <img
                src={courseDetail?.course_image}
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <Loader ref={loaderRef} />
      </div>
      <Footer />
    </HomeLayouts>
  );
};

export default CoursDetail;
