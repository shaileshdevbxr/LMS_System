import React from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import aboutusMission from "../assets/images/aboutus-mission.png";
import BreadCrumbs from "../common/components/BreadCrumbs";
import Footer from "../components/footer/Footer";

const AboutUs = () => {
  return (
    <HomeLayouts>
      <div className="mt-[4rem] lg:mt-[7rem] mb-10">
        <div className="px-4 lg:px-20 mt-10 mb-10">
          <BreadCrumbs
            list={[
              { name: "Home", path: "/" },
              { name: "AboutUs", path: "/about-us" },
            ]}
          />
          <h2 className="my-10 text-4xl font-bold text-center">About Us</h2>
          <p className="text-md text-left leading-[21px] md:leading-6 font-normal pb-6">
            Maurya Infotech' mission is to permeate through every
            student/professional's outlook towards jobs and change their
            attitude and perspective from "How Can I Do It?" to "Of Course I Can
            Do It". We aim to do this by providing exceptional up skilling
            courses at affordable rates, while being tech-forward so anyone,
            anywhere can access and improve their ability to be successful in
            life.
          </p>
          <img
            src="https://media.istockphoto.com/id/530686073/photo/young-woman-delivering-speech-before-audience-in-conference-room.jpg?s=612x612&w=0&k=20&c=dnAdFJGotZNvruNGxD2tvcIyIB2ebbpvNNQoxZkMcnI="
            alt=""
            className="w-full h-[60vh] rounded-md"
          />
        </div>
        <div className="px-4 lg:px-10 mt-10 mb-10 bg-gray-900">
          <div className="my-10 py-10">
            <h2 className="mt-10 mb-12 text-4xl font-bold text-center">
              Our Mission
            </h2>
            <div className="flex flex-col lg:!flex-row-reverse items-center">
              <img src={aboutusMission} alt="about-us" className="lg:px-12" />
              <p className="text-md text-left leading-[21px] md:leading-6 font-normal">
                Maurya Infotech is the result of a continual effort to
                exponentially increase the employability of every Indian,
                irrespective of their socioeconomic status. With accessibility
                and affordability being the support structure of high-quality,
                industry-relevant courses, Maurya Infotech aims to empower
                professionals and students alike to either jumpstart their
                careers or leverage existing skills with new, future-driven
                upgrades that will help them realise their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </HomeLayouts>
  );
};

export default AboutUs;
