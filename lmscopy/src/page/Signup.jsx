import React, { useRef, useState } from "react";
import "./signup.css";
import HomeLayouts from "../layouts/HomeLayouts";
import signinBg from "../assets/images/signin-img.png";
import logo from "../assets/images/maurya-infotech-logo.png";
import VerifyMode from "./VerifyMode";
import toast from "react-hot-toast";

const Signup = () => {
  const nameRegex = /^([a-zA-Z ]){3,30}$/;
  const mobRgx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const [isVailidMobNo, setIsVailidMobNo] = useState(false);
  const [isOpenVerifyMode, setIsOpenVerifyMode] = useState(false);
  const [mobNumber, setMobNumber] = useState("");
  const [countryTypeNo, setCountryTypeNo]= useState("+91")
  const mobNumberRef = useRef();

  const sendOtpHandle = () => {
    if (!mobNumber?.match(mobRgx)) {
      toast.error("Please Enter a vailid mob number!");
      return;
    }
    setIsOpenVerifyMode(true);
  };
  // const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  // const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    // <HomeLayouts>
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${signinBg})`,
        backgroundPosition: "120% 90%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!isOpenVerifyMode && (
        <div className="w-full lg:w-[36%] h-screen bg-white float-right shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] pl-5 pr-5 py-12 lg:pl-16">
          <div className="flex flex-col gap-2 items-start">
            <img
              src={logo}
              alt="Maurya Infotech"
              className="bg-gray-900 rounded-2xl w-28 mb-12"
            />
            <h3 className="text-xl lg:text-3xl text-black font-bold w-[90%] line-clamp-1 lg:line-clamp-none sm:line-clamp-none mb-4">
              Get Onboard and jumpstart your career!
            </h3>
            <p className="text-black w-[90%] line-clamp-2 lg:line-clamp-none sm:line-clamp-none">
              Please enter your phone number to login/register
            </p>
            <div className="w-[90%] lg:w-[80%] border-b-[1px] border-black my-2">
              <div className="my-2 flex items center">
                <select
                  name=""
                  id=""
                  className="border-none font-bold text-xl text-black outline-none bg-transparent"
                  onChange={(e)=>setCountryTypeNo(e.target.value)}
                >
                  <option value="+91">IN +91</option>
                  <option value="+93">AF +93</option>
                  <option value="+358">AX +358</option>
                  <option value="+355">Al +355</option>
                  <option value="+213">DZ +213</option>
                </select>

                <span className="text-black lg:ml-2 xs:ml-1">|</span>
                <input
                  value={mobNumber}
                  onChange={(e) => {
                    setMobNumber(e.target.value);
                    if (mobNumber.length > 9) {
                      setMobNumber(false);
                      toast.error(
                        "Please enter a vailid number! mob number atleast should be 10 digits"
                      );
                      setIsVailidMobNo(false)
                    }
                    else if(mobNumber.length==9){
                      setIsVailidMobNo(!isVailidMobNo)
                    }
                  }}
                  ref={mobNumberRef}
                  type="number"
                  className="outline-none w-full px-2 bg-transparent text-black "
                  placeholder="Enter your number"
                />
              </div>
            </div>
            <button
              disabled={!isVailidMobNo}
              className={`opacity-60 bg-orange-400 text-white hover:bg-orange-600 
              ${isVailidMobNo && "bg-orange-600"}
              text-sm px-3 py-[10px] medium:text-base medium:px-6 medium:py-3 font-semibold rounded-md flex gap-2 justify-center items-center font-nunitoSans w-[90%] lg:w-[80%] 
              ${!isVailidMobNo ? "cursor-not-allowed" : "cursor-pointer"}
               `}
              onClick={sendOtpHandle}
            >
              Send OTP
            </button>
            <p className="text-sm medium:text-base leading-[21px] medium:leading-6 font-normal text-center ml-[42%] lg:ml-[32%] mt-5 text-black">
              OR
            </p>
          </div>
        </div>
      )}

      {isOpenVerifyMode && <VerifyMode mobNumber={mobNumber && mobNumber} countryType={countryTypeNo} />}
    </div>
    // </HomeLayouts>
  );
};

export default Signup;
