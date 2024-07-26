import React, { useEffect, useState, useMemo, useRef } from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import herobg from "../assets/images/hero-bg-removebg-preview.png";
import { data } from "autoprefixer";
import Courses from "../components/our-courses/Courses";
import cours_data from "../jsons/coursdetail.json";
import Ecosystem from "../components/our_ecosystem/Ecosystem";
import { getAllCourseDetail } from "../api/courseDetailApi";
import toast from "react-hot-toast";
import Achievers from "../components/achievers-work/Achievers";
import Loader from "../common/components/Loader";
import GuideCard from "../components/guide-card/GuideCard";
import { fetchSuccessStories } from "../Redux/slice/SuccessStoriesSlice";
import { useSelector } from "react-redux";
import { fetchAllSuccessStories } from "../api/successStoriesApi";
import SuccessStories from "../components/success-stories/SuccessStories";
import Cube from "../components/cube/Cube";
import AskedQuestion from "../components/frequentialy-asked-question/AskedQuestion";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const {successStoriesData} = useSelector(state=>state?.successStories)
  // console.log(successStoriesData);
  useEffect(() => {
    new Typed(".auto-type", {
      strings: ["Coding", "Developer", "Affordable", "Teamleader"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });
  }, []);

  const [coursData, setCoursData] = useState([]);
  const loaderRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    loaderRef.current.handleOpen();
    try {
      const response = await getAllCourseDetail();
      // toast.promise(response, {
      //   loading:"Processing"
      // })
      if (response?.status == 200) {
        setCoursData(response?.data);
      } else {
        toast.error("Somthing went wrong !");
      }
    } catch (error) {
      console.log(error);
    }
    loaderRef.current.handleClose();
  };

  const informCompanyfeaturs = [
    {
      title: "Average Salary Hike",
      id: 1,
      imgaeUrl: "https://pwskills.com/images/homePage/statistics1.png",
      value: 55,
    },
    {
      title: "Different Courses",
      id: 2,
      imgaeUrl: "https://pwskills.com/images/homePage/statistics2.png",
      value: 10,
    },
    {
      title: "Career Transitions",
      id: 3,
      imgaeUrl: "https://pwskills.com/images/homePage/statistics3.png",
      value: 1100,
    },
    {
      title: "Hiring Partners",
      id: 4,
      imgaeUrl: "https://pwskills.com/images/homePage/statistics4.png",
      value: 5,
    },
  ];

  const [advanatesCompany, setAdvantegesCompany] = useState({
    salaryHike: 0,
    differentCourse: 0,
    careerTransition: 1,
    hiringPartners: 0,
  });
  let timeInterval;
  useEffect(() => {
    // timeInterval = setInterval(() => {
    //   if(advanatesCompany.salaryHike==55 && advanatesCompany.differentCourse==10, advanatesCompany.careerTransition==1100, advanatesCompany.hiringPartners==5)return
    //   setAdvantegesCompany();
    //   if(advanatesCompany.salaryHike==55 && advanatesCompany.differentCourse==10, advanatesCompany.careerTransition==1100, advanatesCompany.hiringPartners==5){
    //     clearInterval(timeInterval);
    //   }
    // }, 1000);
  }, []);

  if (
    (advanatesCompany.salaryHike == 55 &&
      advanatesCompany.differentCourse == 10,
    advanatesCompany.careerTransition == 1100,
    advanatesCompany.hiringPartners == 5)
  ) {
    clearInterval(timeInterval);
  }

  return (
    <HomeLayouts>
      <div className="mt-16 lg:mt-28 mb-2 px-5 lg:px-16">
        <div className="flex items-center flex-wrap flex-wrap-reverse justify-between gap-x-4 lg:!gap-y-6 gap-y-10 mb-4">
          <div className="disable-select">
            <h1 className="text-2xl lg:text-4xl font-semibold">
              Upscaling Made{" "}
              <span className="text-yellow-600">
                {"<"}
                <span className="auto-type"></span>
                {">"}
              </span>
            </h1>
            <h1 className="text-2xl lg:text-4xl my-3">With Maurya Infotech</h1>
            <h6 className="mt-2 mb-2 text-semibold text-md text-base medium:text-lg leading-6 medium:leading-[26px] large:!text-left mt-4 large:!w-[90%] large:!self-start">
              Muarya Infotech is your one-stop-shop for upscaling. Get maximum
              value for time <br className="regular:!block" />
              and resources you invest, with job-ready courses &amp;
              high-technology,
              <br className="regular:!block" />
              available at the lowest cost.
            </h6>
            <button className="d-flex bg-orange-600 my-4 text-white py-2 px-6 text-xl rounded cursor-pointer hover:bg-orange-700 transition-all ease-in-out duration-200" onClick={()=>navigate("/our_all_courses")}>
              Explore Course &#8594;{" "}
            </button>
          </div>
          <div className="">
            <img src={herobg} alt="" className="h-90" />
          </div>
        </div>

        <div className="flex medium:!flex-row items-center justify-center large:!justify-between gap-y-6 pt-8 large:pt-8 flex-wrap gap-x-7 w-full mt-6 mb-6">
          {informCompanyfeaturs &&
            informCompanyfeaturs?.map((featuresData) => (
              <div
                className="bg-white text-black rounded-lg p-[14px] m-2 font-nunitoSans flex items-center justify-start py-6 px-6 shadow-medium gap-x-4 w-80 regular:!w-72 large:!w-[23%] !m-0 large:!self-start"
                key={featuresData.id}
              >
                <img
                  src={featuresData.imgaeUrl}
                  alt="figure"
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-lg medium:text-xl leading-[26px] medium:leading-[30px] font-interSans font-bold text-gray-850">
                    {featuresData.value}
                  </h4>
                  <p className="text-sm medium:text-base leading-[21px] medium:leading-6 font-normal text-gray-850">
                    {featuresData.title}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Courses data={coursData} />

      <Ecosystem />

      <GuideCard />

      <div>
        <Achievers />
      </div>

      <div className="static mt-12">
        <SuccessStories />
      </div>
      <div>
        <AskedQuestion />
      </div>
      <div className="my-40">
        <Cube />
      </div>
      <Footer />
      <Loader ref={loaderRef} />
      
      {/* https://assets-global.website-files.com/61ebe5f773be1acd620f8208/61fa67097fdb00ecc6c36646_web-developer.gif */}

      
    </HomeLayouts>
  );
};

export default Home;
