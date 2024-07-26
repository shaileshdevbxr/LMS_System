import React from "react";

const AchiverCard = ({data}) => {
  return (
    <div className="">
      <div className="carousel-item">
        <div className="m-2 font-nunitoSans p-[6px] bg-white shadow-light rounded-2xl shrink-0 !w-[286px] regular:!w-[330px] !mx-3 regular:!mx-6">
          <figure className="flex items-center justify-center">
            <img
              src={data.achiverUrl}
              alt="Fractal"
              className="w-[60%] regular:!w-[70%] aspect-[4/2] object-contain mx-auto"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AchiverCard;
