import React from "react";
import './succescard.css'

const SuccessCard = ({ data }) => {
  return (
    // <div>
    <div className="max-w-sm w-full lg:max-w-full rounded bg-gray-800 pb-2 my-4 h-[380px]">
      <div className="bg-gray-900 p-4 flex justify-center">
        {data?.incerement ? (
          <b className="text-green-600 text-lg">
            {" "}
            {data?.incerement}% Increment
          </b>
        ) : (
          <b className="text-green-600 text-lg"> {data?.salary} (Fresher)</b>
        )}
      </div>
      <div className="flex items-center justify-start gap-4 px-4 my-2">
        <div className="flex items-center justify-center rounded-full w-12 h-12 bg-gray-900 text-white">
          <strong className="text-lg">{data?.student_name.charAt(0)}</strong>
        </div>
        <div className="text-sm">
          <b className="text-white text-lg leading-none">
            {data?.student_name}
          </b>
          <p className="text-gray-300">{data?.student_developer_type}</p>
        </div>
      </div>
      <div className="w-full px-4 py-4">
        <p className="w-full text-gray-400 capitalize">
          {data?.student_detail}
        </p>
      </div>

      <div className="w-full px-4 pt-4 flex justify-between items-center">
        <div className="flex-col">
          <div className="mb-2">
            <p>From</p>
          </div>

          {data?.student_fresher ? (
            <div>
              <b>Fresher</b>
            </div>
          ) : (
            <div className="">
              <img
                src={data?.student_experience_company_from}
                alt=""
                width={100}

                className="worked-companylogo"
              />
            </div>
          )}
        </div>
        <div className="flex-col gap-4">
          <div className="mb-2">
            <p>To</p>
          </div>
          <div className="overflow-hidden">
            <img
              src={data?.student_experience_company_to}
              alt=""
              width={100}
              // style={{ maxHeight: "50px" }}
              className="worked-companylogo"
            />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SuccessCard;
