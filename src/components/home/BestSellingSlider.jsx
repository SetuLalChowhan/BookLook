import React, { useEffect, useRef, useState } from "react";
import bs1 from "@/assets/images/bs1.png";
import bs2 from "@/assets/images/bs2.png";
import bs3 from "@/assets/images/bs3.png";
import bs4 from "@/assets/images/bs4.png";
import bs5 from "@/assets/images/bs5.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Rating from "../common/icons/Rating";
import { motion } from "framer-motion";

const BestSellingSlider = () => {
  const bestSellingBooks = [
    {
      id: 1,
      image: bs1,
      name: "Harlem Rhapsody",
      text: "by Victoria Christopher Murray",
      rating: 5,
      price: 84.78,
    },
    {
      id: 2,
      image: bs2,
      name: "Three Days In June",
      text: "by  Anne Tyler",
      rating: 5,
      price: 34.99,
    },
    {
      id: 3,
      image: bs3,
      name: "We All Live Here",
      text: "by  Jojo Moyes",
      rating: 5,
      price: 15.99,
    },
    {
      id: 4,
      image: bs4,
      name: "Good Dirt",
      text: "by Charmaine Wilkerson",
      rating: 5,
      price: 84.99,
    },
    {
      id: 5,
      image: bs5,
      name: "And Then There Were None",
      text: "by Agatha Christie",
      rating: 5,
      price: 84.78,
    },
    {
      id: 1,
      image: bs1,
      name: "Harlem Rhapsody",
      text: "by Victoria Christopher Murray",
      rating: 5,
      price: 84.78,
    },
    {
      id: 2,
      image: bs2,
      name: "Three Days In June",
      text: "by  Anne Tyler",
      rating: 5,
      price: 34.99,
    },
    {
      id: 3,
      image: bs3,
      name: "We All Live Here",
      text: "by  Jojo Moyes",
      rating: 5,
      price: 15.99,
    },
    {
      id: 4,
      image: bs4,
      name: "Good Dirt",
      text: "by Charmaine Wilkerson",
      rating: 5,
      price: 84.99,
    },
    {
      id: 5,
      image: bs5,
      name: "And Then There Were None",
      text: "by Agatha Christie",
      rating: 5,
      price: 84.78,
    },
    // repeated items can be here if needed...
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
    <div className="bg-[#F8D34E] py-12 section-padding-x flex flex-col gap-11">
      <div className="flex items-center justify-center text-center">
        <p className="text-[#000] font-medium text-[32px]">BEST SELLING BOOKS</p>
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
          {bestSellingBooks.map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`} className="!w-[200px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{  duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col gap-6 cursor-pointer"
              >
                <div className="h-[301px] overflow-hidden duration-200">
                  <img
                    className="w-full h-full object-cover duration-200"
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[#000] font-normal text-lg italic">{item.name}</p>
                  <p className="font-inter text-xs font-normal text-[rgba(0, 0, 0, 0.67)]">
                    {item.text}
                  </p>
                  <div className="flex gap-1 text-yellow-500">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>
                        <Rating />
                      </span>
                    ))}
                  </div>
                  <p className="text-[#000] text-lg font-normal">${item.price}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellingSlider;
