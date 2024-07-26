import React, { useEffect, useState } from "react";
import SuccessCard from "./SuccessCard";
import { isMobile } from "react-device-detect";
import { Swiper, SwiperSlide } from "swiper/react";

import './successstories.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
// import { useSelector } from "react-redux";
// import { fetchSuccessStories } from "../../Redux/slice/SuccessStoriesSlice";
import { fetchAllSuccessStories } from "../../api/successStoriesApi";

const SuccessStories = () => {
  useEffect(() => {
    getSuccessStories();
  }, []);
  const [data, setData] = useState([]);
  async function getSuccessStories (){
    const response = await fetchAllSuccessStories();
    if(!response?.status==200)return
    setData(response?.data);
  }
  // console.log(data)

  return (
    <div className="success-container mt-10">
      <h1 className="text-4xl font-bold ml-[6%] my-10">Success Stories</h1>
      <div className="w-[86%] m-auto swiper-main">
        <div className="d-flex flex-direction-row justify-content-center align-items-center">
          <div className="swiper-button-prev left-btn"></div>
          <div style={{ width: "100%", overflow: "hidden" }}>
            <Swiper
              cssMode={true}
              //  navigation={true}

              navigation={{
                nextEl: ".right-btn",
                prevEl: ".left-btn",
              }}
              autoplay={{
                disableOnInteraction: true,
                delay:4000
              }}
              // speed={1000}
              keyboard={{ enabled: true }}
              simulateTouch={false}
              scrollbar={{
                hide: isMobile ? false : true,
              }}
              modules={[Navigation, Autoplay]}
              // injectStyles={[
              //   `.swiper-scrollbar.swiper-scrollbar-horizontal{
              //   position: static !important;
              //   margin-bottom: 8px !important;
              //   margin-left: 5px !important;
              // }
              // .swiper{
              //   display: flex !important;
              //   flex-direction: column-reverse !important;
              //   }`,
              // ]}
              breakpoints={{
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                  // slidesPerGroup:3,//one less from perview
                  // loopFillGroupWithBlank:true
                },
                768: {
                  slidesPerView: 3,
                  // spaceBetween: 10,
                },
                600: {
                  slidesPerView: 2.5,
                  spaceBetween: 0,
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
              }}
              // on={{// it will work for swiper-container
              //   slideChange: () => {
              //     console.log('slide changed')},
              //   progress: (s, progress) => console.log(`progress is ${progress}`),
              // }}
              onSlideChange={() => {
                // console.log("slide changed22");
              }}
              className=""
            >
              {data &&
                data.length > 0 &&
                data.map((data, index) => (
                  <SwiperSlide key={data?.student_id}>
                    <SuccessCard data={data} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
         <div className="swiper-button-next right-btn"></div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
