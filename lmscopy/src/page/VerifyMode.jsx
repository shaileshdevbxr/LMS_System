import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/maurya-infotech-logo.png";
import signinBg from "../assets/images/signin-img.png";
import OtpInput from "react-otp-input";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { createAccount } from "../Redux/slice/AuthSlice";
import {createAccount} from "../api/loginApi";

import Loader from "../common/components/Loader";

const style = {
  width: "2.8em",
  lineHeight: "2.8em",
  textAlign: "center",
};

  // useEffect(() => {
  //   if (localStorage.getItem("isAuthenticated")) {
  //     const token = localStorage.getItem("token");
  //     token && callVerifyToken(token);
  //   }
  // }, []); 

const VerifyMode = ({ countryType, mobNumber }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [otp, setOtp] = useState();
  const [userRegisterData, setUserRegisterData] = useState({
    userFName: "",
    userLName: "",
    userEmail: "",
    term_condition: false,
    userMobNumber: mobNumber,
  });
  const loaderRef = useRef();
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const navigate = useNavigate();

  function userRegisterHandle(event) {
    const { name, value } = event.target;
    setUserRegisterData({ ...userRegisterData, [name]: value });
  }

  // const callVerifyToken = async (token) => {
  //   loaderRef.current.handleOpen();
  //   try {
  //     const response = await verifyToken(token);
  //     if (response?.status == 200 && response?.data?.success) {
  //       setIsAuthenticated(true);
  //     }
  //   } catch (error) {
  //     loaderRef.current.handleClose();
  //   }
  //   loaderRef.current.handleClose();
  // };
  const createNewAccount = async () => {
    try {
      if (
        !userRegisterData.userFName ||
        !userRegisterData.userLName ||
        !userRegisterData.userEmail ||
        !userRegisterData.term_condition ||
        !otp
      ) {
        toast.error("Please fill the all require fields !");
        return;
      }
      if (!userRegisterData.userEmail.match(emailRegex)) {
        toast.error("Please enter a valid email.");
      }
      // let formData = new FormData();
      // formData.append(
      //   "firstName",
      //   userRegisterData.userFName + " " + userRegisterData.userLName
      // );
      // formData.append("userEmail", userRegisterData.userEmail);
      // formData.append("term_condition", userRegisterData.term_condition);
      // formData.append("otp", otp);
      // console.log(formData.get("fullName"));
      const userData = {
        firstName : userRegisterData.userFName,
        lastName:userRegisterData.userLName,
        email:userRegisterData.userEmail,
        mobNumber: userRegisterData.userMobNumber
      }
      console.log(userData)
      // const response =await createAccount(formData);
      // const param = {
      //   userMobNumber: userRegisterData.userMobNumber,
      //   verifyOtp: otp,
      // };
      loaderRef.current.handleOpen();
      const response = await createAccount(userData);
      // console.log(response)
      if (response?.status == 200 && response?.data?.status) {
        // setIsAuthenticated(true);
        // localStorage.setItem("isAuthenticated", true);
        // localStorage.setItem("token", response?.data?.token);
      }
      loaderRef.current.handleClose();
    } catch (error) {
      loaderRef.current.handleClose();
    }
  };

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${signinBg})`,
        backgroundPosition: "120% 90%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full lg:w-[35%] h-screen bg-white float-right shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] pl-8 pr-5 py-6">
        <div className="w-full flex flex-col gap-2 items-start text-black">
          <div className="w-full flex items-start justify-between mb-8">
            <img
              src={logo}
              alt="Maurya Infotech"
              className="w-28 bg-gray-600 rounded-lg"
            />
            <div className="flex items-center gap-4 bg-gray-100 rounded-md py-1 px-4 mt-4 cursor-pointer">
              <span className="text-white bg-orange-600 w-6 text-center rounded-full">
                ?
              </span>
              <span className="text-black">Help</span>
            </div>
          </div>
          <div>
            <p
              className="cursor-pointer font-semibold text-gray-500 flex items-center gap-1"
              onClick={() => {
                navigate("/hsd");
              }}
            >
              <span className="text-2xl">←</span> Back
            </p>
          </div>
          <div className="w-full flex flex-col gap-2 lg:items-start items-center text-center mb-2">
            <h2 className="text-center font-bold text-xl mt-4 mb-2">
              Just One More Step
            </h2>
            <p className="mb-2 text-gray-600">
              Please enter the code sent to your phone
            </p>
            <div className="mb-2 flex items-center gap-2">
              <span className="font-semibold">({countryType})</span>
              <h3 className="font-semibold">{mobNumber}</h3>
            </div>
            <div className="text-black">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                required
                renderSeparator={<span>-</span>}
                renderInput={(props) => (
                  <input
                    type="number"
                    {...props}
                    style={style}
                    className="text-black bg-gray-200 border border-gray-500 rounded-sm shadow-md outline-none"
                  />
                )}
              />
            </div>
            <div className="flex items-center gap-2">
              <span>00:00 |</span>
              <span>Didn’t get an OTP?</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="pl-4 pr-4 pt-1 pb-1 cursor-pointer transition duration-500 ease-in-out hover:bg-gray-200 hover:text-orange-600 rounded-full">
              Resend OTP
            </span>
            <span>OR</span>
            <span className="pl-4 pr-4 pt-1 pb-1 cursor-pointer transition duration-500 ease-in-out hover:bg-gray-200 hover:text-green-600 rounded-full">
              Resend OTP On
              <span className="ml-1">
                <WhatsAppIcon />
              </span>
            </span>
          </div>
          <div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="w-full min-w-full flex items-center gap-3 flex-wrap pr-4">
                <TextField
                  type="text"
                  className="w-full lg:w-[45%]"
                  id="standard-basic"
                  label="First Name"
                  variant="standard"
                  required
                  name="userFName"
                  value={userRegisterData.userFName}
                  onChange={userRegisterHandle}
                />
                <TextField
                  type="text"
                  className="w-full lg:w-[45%]"
                  id="standard-basic"
                  label="Last Name"
                  variant="standard"
                  required
                  name="userLName"
                  value={userRegisterData.userLName}
                  onChange={userRegisterHandle}
                />
              </div>
              <div className="w-full pr-4">
                <TextField
                  type="email"
                  className="w-full"
                  id="standard-basic"
                  label="Email (optional)"
                  variant="standard"
                  required
                  name="userEmail"
                  value={userRegisterData.userEmail}
                  onChange={userRegisterHandle}
                />
              </div>
              <div
                className="w-full flex items-center gap-2"
                style={{ marginTop: "2vw" }}
              >
                <input
                  type="checkbox"
                  name="suggestion"
                  required
                  id=""
                  checked={userRegisterData.term_condition}
                  onChange={() =>
                    setUserRegisterData({
                      ...userRegisterData,
                      term_condition: !userRegisterData.term_condition,
                    })
                  }
                  className="cursor-pointer"
                  style={{ width: "20px", height: "20px" }}
                />
                <span className="font-semibold">I agree</span>
                <span className="font-semibold text-orange-600">
                  Terms & Conditions
                </span>
              </div>
            </Box>
            <button
              // disabled={true}
              onClick={createNewAccount}
              className="opacity-60 mt-6 bg-orange-400 text-white hover:bg-orange-600 text-sm px-3 py-[10px] medium:text-base medium:px-6 medium:py-3 font-semibold rounded-md flex gap-2 justify-center items-center font-nunitoSans w-full medium:!w-4/5"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <Loader ref={loaderRef} />
    </div>
  );
};

export default VerifyMode;
