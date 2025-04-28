import React from "react";
import BannerImage from "@/assets/images/Banner.png";
import { MdArrowForward } from "react-icons/md";
import Books from "@/assets/images/Books.png";

const Banner = () => {
  return (
    <section>
      <div
        className={`bg-cover bg-center bg-no-repeat w-full h-[743px] flex gap-11 pt-20 section-padding-x`}
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="flex flex-col gap-[60px] w-[50%] items-start">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <p 
                className="text-[#E5E034] text-[35px] font-beth font-normal"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                BOI.
              </p>
              <h1 
                className="text-[#FEF1D5] text-[64px] font-caslon font-medium"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Bestsellers, classics, and new arrivals—all in one place.
              </h1>
            </div>
            <p 
              className="font-poppins font-normal text-[#FEF1D5] text-[20px]"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Explore a wide range of books that will keep you hooked. Whether you love fiction, non-fiction, or poetry, we have something for everyone. Buy your favorite books for delivery or read online anytime
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button 
              className="shadow-custom px-[34px] py-[14px] flex justify-center items-center border-[1px] border-primary rounded-[12px] text-primary text-lg font-bold font-miriam bg-opacity-[0.18] bg-primary transition-all  duration-300 hover:scale-105 group "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className=" ">READ MORE</p>
            </button>

            <button 
              className="flex items-center font-miriam gap-1 text-primary text-lg font-bold group hover:gap-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <p>ORDER NOW</p>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <MdArrowForward color="#FEF1D5"/>
              </span>
            </button>
          </div>
        </div>

        <div 
          className="w-[50%]"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <img 
            src={Books} 
            alt="books" 
            className="object-cover block hover:scale-105 transition-transform duration-500 ease-in-out" 
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;