import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Courses from "../components/our-courses/Courses";
import cours_data from "../jsons/coursdetail.json";

const HomeLayouts = ({ children }) => {
  const [coursData, setCoursData] = useState(cours_data);
  return (
    <div className="min-h-[80vh]">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default HomeLayouts;
