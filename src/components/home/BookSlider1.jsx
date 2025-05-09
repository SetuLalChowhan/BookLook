import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import b1 from "@/assets/images/b1.png";
import b2 from "@/assets/images/b2.png";
import b3 from "@/assets/images/b3.png";
import b4 from "@/assets/images/b4.png";
import b5 from "@/assets/images/b5.png";
import b6 from "@/assets/images/b6.png";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const BookSlider1 = () => {
  const books = [
    {
      id: 1,
      image: b1,
      title: "Romance",
    },
    {
      id: 2,
      image: b2,
      title: "Thriller",
    },
    {
      id: 3,
      image: b3,
      title: "Self-help",
    },
    {
      id: 4,
      image: b4,
      title: "Comedy",
    },
    {
      id: 5,
      image: b5,
      title: "Horror",
    },
    {
      id: 6,
      image: b5,
      title: "Biography",
    },
    {
      id: 1,
      image: b1,
      title: "Romance",
    },
    {
      id: 2,
      image: b2,
      title: "Thriller",
    },
    {
      id: 3,
      image: b3,
      title: "Self-help",
    },
    {
      id: 4,
      image: b4,
      title: "Comedy",
    },
    {
      id: 5,
      image: b5,
      title: "Horror",
    },
    {
      id: 6,
      image: b5,
      title: "Biography",
    },
    {
      id: 1,
      image: b1,
      title: "Romance",
    },
    {
      id: 2,
      image: b2,
      title: "Thriller",
    },
    {
      id: 3,
      image: b3,
      title: "Self-help",
    },
    {
      id: 4,
      image: b4,
      title: "Comedy",
    },
    {
      id: 5,
      image: b5,
      title: "Horror",
    },
    {
      id: 6,
      image: b5,
      title: "Biography",
    },
  ];
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on("slideChange", handleSlideChange);
      // Initialize the state based on initial position
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  }, []);
  return (
    <div className=" bg-[#F6F1E9] section-padding-x py-12 flex flex-col gap-8">
      <div className=" flex items-center gap-6 justify-between w-full">
        <p className=" font-medium text-[32px] text-[#000] font-poppins">
          FEATURED CATEGORIES
        </p>
        <Link to={`#`} className=" flex items-center gap-1">
          <p className="text-[20px] font-inter font-normal">All Categories</p>
          <span>
            <IoIosArrowForward size={20} />
          </span>
        </Link>
      </div>

      <div className="w-full overflow-hidden relative">
        <button
          ref={prevRef}
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full bg-white sm:w-[40px] w-[35px] sm:h-[40px] h-[35px] z-50 flex justify-center items-center shadow ${
            isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
          } transition-opacity duration-200`}
        >
          <IoIosArrowBack color="#715A10" size={20} />
        </button>
        <button
          ref={nextRef}
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full sm:w-[40px] w-[35px] sm:h-[40px] h-[35px]  z-50 flex justify-center items-center shadow ${
            isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
          } transition-opacity duration-200`}
        >
          <IoIosArrowForward color="#715A10" size={20} />
        </button>

        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView="auto"
          modules={[Navigation]}
          className="!overflow-visible"
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
            disabledClass: "opacity-0 pointer-events-none",
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            // Initialize the state
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onReachEnd={() => setIsEnd(true)}
          onReachBeginning={() => setIsBeginning(true)}
          onFromEdge={() => {
            const swiper = swiperRef.current.swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {books.map((item, index) => (
            <SwiperSlide key={index} className=" !w-[160px] " >
              <div className=" flex flex-col gap-1">
                <div className=" h-[238px] group overflow-hidden duration-200 hover:scale-[1.05] ">
                  <img
                    className=" w-full h-full object-cover duration-200 "
                    src={item?.image}
                    alt={item?.title}
                  />
                </div>
                <p
                  className="pl-4 font-dm text-lg font-medium text-[#000]"
                  style={{ textShadow: "1px 1px 0px #768C86" }}
                >
                  {item?.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookSlider1;
