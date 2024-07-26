import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import NotFound from "./page/NotFound";
import Signup from "./page/Signup";
import AboutUs from "./page/AboutUs";
import CoursDetail from "./page/cours-detailes/CoursDetail";
import AskedQuesionPage from "./page/AskedQuesionPage";
import BreadCrumbs from "./common/components/BreadCrumbs";
import Courses from "./page/our-courses/Courses";


function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/course_detail/:courseId" element={<CoursDetail />} />
      <Route path="/frequent_asked_question" element={<AskedQuesionPage />} />
      <Route path="/our_all_courses" element={<Courses />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
