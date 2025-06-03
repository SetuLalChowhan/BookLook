import React from "react";

const AudioBook = () => {
  return (
    <div className="section-padding-x bg-customBg w-full h-[1712px]  py-20">
      <div className=" flex flex-row gap-[53px]">
        <div className=" flex flex-col gap-5 w-[50%]">
          <div className=" flex flex-col gap-4">
            <p className="font-caslon text-[80px] font-medium bg-gradient-to-b from-[#FFE100] via-[#FEF197] to-[#FEF1D5] bg-clip-text text-transparent">
              Listen popular audio books anytime
            </p>
            <p className=" text-[24px] text-[#FEF1D5] font-medium font-poppins">Dive into captivating stories and insightful knowledge with popular audiobooks available anytime. Listen on the go, relax with your favorite narrators, and enjoy seamless storytelling whenever you want.Discover bestselling novels, thrilling mysteries, heartwarming romances, and inspiring non-fiction—all narrated by top voice artists. Never miss out on a great story again—plug in and start listening today!</p>
          </div>
        </div>

        <div className=" w-[50%]">

        </div>
      </div>
    </div>
  );
};

export default AudioBook;
