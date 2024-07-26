import React, { useEffect, useMemo, useRef, useState } from "react";
import HomeLayouts from "../../layouts/HomeLayouts";
import BreadCrumbs from "../../common/components/BreadCrumbs";
import "./courses.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Loader from "../../common/components/Loader";
import {
  getAllCourseDetail,
  getCourseByFilterQuery,
} from "../../api/courseDetailApi";
import { CourseCard } from "../../components/our-courses/CourseCard";
import Footer from "../../components/footer/Footer";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function Courses() {
  const [filterNamesHideShow, setFilterNamesHideShow] = useState({
    filterByProfession: false,
    filterByProgram: false,
    filterByDomain: false,
    filterByCategory: false,
    filterByLanguage: false,
  });
  const [filterByProfession, setFilterByProfession] = useState({
    collegeStudent: false,
    schoolStudent: false,
    workingProfessional: false,
  });
  const [filterByProgram, setFilterByProgram] = useState({
    community: false,
    live: false,
    trending: false,
  });

  const [isFilterBoxShow, setIsFilterBoxShow] = useState(false);

  const loaderRef = useRef();
  const navigate = useNavigate();
  const [coursData, setCoursData] = useState([]);
  const [query, setQuery] = useSearchParams();
  const filterQuery = query.get("page");
  // console.log(filterQuery)
  useEffect(() => {
    getCourses();
    if (!filterQuery) {
      setFilterByProfession({
        collegeStudent: false,
        schoolStudent: false,
        workingProfessional: false,
      });
    }
  }, [filterQuery]);

  // let l = 0;
  // function getLengthOfCourseFilter() {
  //   coursData?.map((data) => {
  //     // if (data.status_live) {
  //     //   l = l + 1;
  //     // } else {
  //     //   return;
  //     // }
  //     data.profession.college_student?l+=1:0
  //     return l;
  //   });
  // }
  // getLengthOfCourseFilter();

  const getCourses = async () => {
    loaderRef.current.handleOpen();
    try {
      const response = filterQuery
        ? await getCourseByFilterQuery(filterQuery)
        : await getAllCourseDetail();
      if (!response?.status == 200) return;
      // console.log(response?.data[0].profession)
      filterQuery ? setCoursData(response) : setCoursData(response?.data);
    } catch (error) {
      console.log(error);
    }
    loaderRef.current.handleClose();
  };

  return (
    <HomeLayouts>
      <div className="lg:mt-[7rem] mt-[2rem] pt-4">
        <div className="px-0 lg:px-[5.5%] mt-10 mb-10">
          <div className="px-2 lg:px-0">
            <BreadCrumbs
              list={[
                { name: "Home", path: "/" },
                { name: "Courses", path: "/our_all_courses" },
              ]}
            />
          </div>
          <div className="w-full flex justify-between items-center mt-6 px-2 lg:px-0">
            <h2 className="text-3xl font-bold">Our Courses</h2>
            <span
              className="filterAltIcon rounded-full bg-gray-600 p-1"
              onClick={() => {
                setIsFilterBoxShow(true);
              }}
            >
              <FilterAltIcon
                sx={{ color: "#F97316", height: "30px", width: "30px" }}
              />
            </span>
          </div>

          <section className="filter-section my-6">
            <div
              className={`filter-name py-2 px-4`}
              style={{ display: isFilterBoxShow ? "block" : "" }}
            >
              <div className="w-full pb-4 border-b border-slate-700 flex justify-between ">
                <div className="flex gap-2 items-center">
                  <FilterListIcon />{" "}
                  <span className="font-semibold text-lg">Filters</span>
                </div>
                <span
                  className="clearall-btn text-orange-400 text-lg font-semibold cursor-pointer"
                  onClick={() => {
                    setQuery(false);
                    setFilterByProfession({
                      ...filterByProfession,
                      collegeStudent: false,
                      schoolStudent: false,
                      workingProfessional: false,
                    });
                  }}
                >
                  Clear ALL
                </span>
                <span
                  className="close-filter-name"
                  onClick={() => {
                    setIsFilterBoxShow(false);
                  }}
                >
                  x
                </span>
              </div>

              <div className="w-full py-4 border-b border-slate-700 flex flex-col">
                <div
                  className="w-full flex justify-between"
                  onClick={(e) => {
                    e.stopPropagation();
                    // console.log(filterByProfession?.collegeStudent)
                    setFilterNamesHideShow({
                      ...filterNamesHideShow,
                      filterByProfession:
                        !filterNamesHideShow?.filterByProfession,
                    });
                  }}
                >
                  <strong className="text-xl">Filter by Profession</strong>
                  <span className="cursor-pointer">
                    {filterNamesHideShow?.filterByProfession ? (
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
                    ) : (
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
                    )}
                  </span>
                </div>
                <ul
                  style={{ listStyle: "none" }}
                  className={`py-2 flex flex-col gap-4 mt-2 ${
                    !filterNamesHideShow?.filterByProfession
                      ? "block"
                      : "hidden"
                  }`}
                >
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="profession"
                      name="profession"
                      checked={filterByProfession?.collegeStudent}
                      onChange={(e) => {
                        setFilterByProfession({
                          ...filterByProfession,
                          collegeStudent: !filterByProfession?.collegeStudent,
                          schoolStudent: false,
                          workingProfessional: false,
                        });
                        navigate(
                          `/our_all_courses?${createSearchParams({
                            page: "college_student",
                          })}`
                        );
                      }}
                    />{" "}
                    <label
                      htmlFor="profession"
                      className="text-md font-semibold cursor-pointer"
                    >
                      College Student (
                      {coursData.reduce((acc, curr) => {
                        return (
                          acc + (curr.filter_by_user.college_student ? 1 : 0)
                        );
                      }, 0)}
                      ) 
                    </label>
                  </li>
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="profession2"
                      name="profession"
                      checked={filterByProfession?.schoolStudent}
                      onChange={(e) => {
                        setFilterByProfession({
                          ...filterByProfession,
                          schoolStudent: !filterByProfession?.schoolStudent,
                          collegeStudent: false,
                          workingProfessional: false,
                        });
                        navigate(
                          `/our_all_courses?${createSearchParams({
                            page: "school_student",
                          })}`
                        );
                      }}
                    />{" "}
                    <label
                      htmlFor="profession2"
                      className="text-md font-semibold cursor-pointer"
                    >
                      School Student (
                      {coursData.reduce((acc, curr) => {
                        return (
                          acc + (curr.filter_by_user.school_student ? 1 : 0)
                        );
                      }, 0)}
                      )
                    </label>
                  </li>
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="profession3"
                      name="profession"
                      checked={filterByProfession?.workingProfessional}
                      onChange={() => {
                        setFilterByProfession({
                          ...filterByProfession,
                          schoolStudent: false,
                          collegeStudent: false,
                          workingProfessional:
                            !filterByProfession?.workingProfessional,
                        });
                        navigate(
                          `/our_all_courses?${createSearchParams({
                            page: "working_professional",
                          })}`
                        );
                      }}
                    />{" "}
                    <label
                      htmlFor="profession3"
                      className="text-md font-semibold cursor-pointer"
                    >
                      Working Professional (
                      {coursData?.reduce((acc, curr) => {
                        return (
                          acc +
                          (curr.filter_by_user.working_professional ? 1 : 0)
                        );
                      }, 0)}
                      )
                    </label>
                  </li>
                </ul>
              </div>

              <div className="w-full py-4 border-b border-slate-700 flex flex-col">
                <div
                  className="w-full flex justify-between"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilterNamesHideShow({
                      ...filterNamesHideShow,
                      filterByProgram: !filterNamesHideShow?.filterByProgram,
                    });
                  }}
                >
                  <strong className="text-xl">Filter by Program</strong>
                  <span className="cursor-pointer">
                    {filterNamesHideShow?.filterByProgram ? (
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
                    ) : (
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
                    )}
                  </span>
                </div>
                <ul
                  style={{ listStyle: "none" }}
                  className={`py-2 flex flex-col gap-4 mt-2 ${
                    !filterNamesHideShow?.filterByProgram ? "block" : "hidden"
                  }`}
                >
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="program"
                      name="program"
                      checked={filterByProgram.cummunity}
                      onChange={() => {
                        setFilterByProgram({
                          ...filterByProgram,
                          community: !filterByProgram.cummunity,
                          live: false,
                          trending: false,
                        });
                        navigate(
                          `/our_all_courses?${createSearchParams({
                            page: "status_community",
                          })}`
                        );
                      }}
                    />{" "}
                    <label
                      htmlFor="program"
                      className="text-md font-semibold cursor-pointer"
                    >
                      Community(
                      {coursData?.reduce((acc, curr) => {
                        return (
                          acc + (curr.filter_by_user.status_community ? 1 : 0)
                        );
                      }, 0)}
                      )
                    </label>
                  </li>
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="program2"
                      name="program"
                      checked={filterByProgram.live}
                      onChange={() => {
                        setFilterByProgram({
                          ...filterByProgram,
                          live: !filterByProgram.live,
                          community: false,
                          trending: false,
                        });
                        navigate(
                          `/our_all_courses?${createSearchParams({
                            page: "status_live",
                          })}`
                        );
                      }}
                    />{" "}
                    <label
                      htmlFor="program2"
                      className="text-md font-semibold cursor-pointer"
                    >
                      Live (
                      {coursData?.reduce((acc, curr) => {
                        return acc + (curr?.filter_by_user.status_live ? 1 : 0);
                      }, 0)}
                      )
                    </label>
                  </li>
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="program3"
                      name="program"
                      checked={filterByProgram.trending}
                      onChange={() => {
                        setFilterByProgram({
                          ...filterByProgram,
                          live: false,
                          community: false,
                          trending: !filterByProgram.trending,
                        });
                        navigate(
                          `/our_all_courses?${createSearchParams({
                            page: "status_trending",
                          })}`
                        );
                      }}
                    />{" "}
                    <label
                      htmlFor="program3"
                      className="text-md font-semibold cursor-pointer"
                    >
                      Trending (
                      {coursData?.reduce((acc, curr) => {
                        return (
                          acc + (curr?.filter_by_user.status_trending ? 1 : 0)
                        );
                      }, 0)}
                      )
                    </label>
                  </li>
                </ul>
              </div>

              <div className="w-full py-4 border-b border-slate-700 flex flex-col">
                <div
                  className="w-full flex justify-between"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilterNamesHideShow({
                      ...filterNamesHideShow,
                      filterByDomain: !filterNamesHideShow?.filterByDomain,
                    });
                  }}
                >
                  <strong className="text-xl">Domain</strong>
                  <span className="cursor-pointer">
                    {filterNamesHideShow?.filterByDomain ? (
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
                    ) : (
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
                    )}
                  </span>
                </div>
                <ul
                  style={{ listStyle: "none" }}
                  className={`py-2 flex flex-col gap-4 mt-2 ${
                    !filterNamesHideShow?.filterByDomain ? "block" : "hidden"
                  }`}
                >
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="domain"
                      name="domain"
                    />{" "}
                    <label
                      htmlFor="domain"
                      className="text-md font-semibold cursor-pointer"
                    >
                      Data Science , AI & Data Analytics
                    </label>
                  </li>
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="domain2"
                      name="domain"
                    />{" "}
                    <label
                      htmlFor="domain2"
                      className="text-md font-semibold cursor-pointer"
                    >
                      Finance
                    </label>
                  </li>
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="domain3"
                      name="domain"
                    />{" "}
                    <label
                      htmlFor="domain3"
                      className="text-md font-semibold cursor-pointer"
                    >
                      Software & Tech
                    </label>
                  </li>
                </ul>
              </div>

              <div className="w-full py-4 border-b border-slate-700 flex flex-col">
                <div
                  className="w-full flex justify-between"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilterNamesHideShow({
                      ...filterNamesHideShow,
                      filterByCategory: !filterNamesHideShow?.filterByCategory,
                    });
                  }}
                >
                  <strong className="text-xl">Category</strong>
                  <span className="cursor-pointer">
                    {filterNamesHideShow?.filterByCategory ? (
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
                    ) : (
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
                    )}
                  </span>
                </div>
                <ul
                  style={{ listStyle: "none" }}
                  className={`py-2 flex flex-col gap-4 mt-2 ${
                    !filterNamesHideShow?.filterByCategory ? "block" : "hidden"
                  }`}
                >
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="category"
                      name="category"
                    />{" "}
                    <label
                      htmlFor="category"
                      className="text-md font-semibold cursor-pointer"
                    >
                      Data Analytics
                    </label>
                  </li>
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="category2"
                      name="category"
                    />{" "}
                    <label
                      htmlFor="category2"
                      className="text-md font-semibold cursor-pointer"
                    >
                      Data Science & AI
                    </label>
                  </li>
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="category3"
                      name="category"
                    />{" "}
                    <label
                      htmlFor="category3"
                      className="text-md font-semibold cursor-pointer"
                    >
                      Private Banking job Course
                    </label>
                  </li>
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="category4"
                      name="category"
                    />{" "}
                    <label
                      htmlFor="category4"
                      className="text-md font-semibold cursor-pointer"
                    >
                      Programming Courses
                    </label>
                  </li>
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="category5"
                      name="category"
                    />{" "}
                    <label
                      htmlFor="category5"
                      className="text-md font-semibold cursor-pointer"
                    >
                      Software Development
                    </label>
                  </li>
                </ul>
              </div>

              <div className="w-full py-4 border-b border-slate-700 flex flex-col">
                <div
                  className="w-full flex justify-between"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilterNamesHideShow({
                      ...filterNamesHideShow,
                      filterByLanguage: !filterNamesHideShow?.filterByLanguage,
                    });
                  }}
                >
                  <strong className="text-xl">Language</strong>
                  <span className="cursor-pointer">
                    {filterNamesHideShow?.filterByLanguage ? (
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
                    ) : (
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
                    )}
                  </span>
                </div>
                <ul
                  style={{ listStyle: "none" }}
                  className={`py-2 flex flex-col gap-4 mt-2 ${
                    !filterNamesHideShow?.filterByLanguage ? "block" : "hidden"
                  }`}
                >
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="category"
                      name="category"
                    />{" "}
                    <label
                      htmlFor="category"
                      className="text-md font-semibold cursor-pointer"
                    >
                      English
                    </label>
                  </li>
                  <li className="flex gap-2 items-center">
                    <input
                      type="radio"
                      className="cursor-pointer accent-red-400"
                      style={{
                        fontSize: "20px",
                        height: "20px",
                        width: "20px",
                      }}
                      id="category2"
                      name="category"
                    />{" "}
                    <label
                      htmlFor="category2"
                      className="text-md font-semibold cursor-pointer"
                    >
                      Hinglish
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="filter-cards">
              {coursData.map((data_detail, i) => {
                return <CourseCard {...data_detail} key={i} />;
              })}
            </div>
          </section>
        </div>
      </div>
      <div className="lg:block hidden">
        <Footer />
      </div>
      <Loader ref={loaderRef} />
    </HomeLayouts>
  );
}
export default Courses;
