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
import { motion } from "framer-motion";

const BookSlider1 = () => {
  const books = [
    { id: 1, image: b1, title: "Romance" },
    { id: 2, image: b2, title: "Thriller" },
    { id: 3, image: b3, title: "Self-help" },
    { id: 4, image: b4, title: "Comedy" },
    { id: 5, image: b5, title: "Horror" },
    { id: 6, image: b6, title: "Biography" },
    { id: 7, image: b1, title: "Romance" },
    { id: 8, image: b2, title: "Thriller" },
    { id: 9, image: b3, title: "Self-help" },
    { id: 10, image: b4, title: "Comedy" },
    { id: 11, image: b5, title: "Horror" },
    { id: 12, image: b6, title: "Biography" },
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
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  }, []);

  return (
    <motion.div
      className="bg-[#F6F1E9] section-padding-x py-12 flex flex-col gap-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Header */}
      <motion.div
        className="flex items-center gap-6 justify-between w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="font-medium text-[32px] text-[#000] font-poppins">
          FEATURED CATEGORIES
        </p>
        <Link to="#" className="flex items-center gap-1 group">
          <p className="text-[20px] font-inter font-normal">All Categories</p>
          <motion.span
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <IoIosArrowForward size={20} />
          </motion.span>
        </Link>
      </motion.div>

      {/* Slider */}
      <div className="w-full overflow-hidden relative">
        <motion.button
          ref={prevRef}
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full bg-white sm:w-[40px] w-[35px] sm:h-[40px] h-[35px] z-50 flex justify-center items-center shadow ${
            isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
          } transition-opacity duration-200`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoIosArrowBack color="#715A10" size={20} />
        </motion.button>

        <motion.button
          ref={nextRef}
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full sm:w-[40px] w-[35px] sm:h-[40px] h-[35px] z-50 flex justify-center items-center shadow ${
            isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
          } transition-opacity duration-200`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoIosArrowForward color="#715A10" size={20} />
        </motion.button>

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
          {books.map((item) => (
            <SwiperSlide key={item.id} className="!w-[160px]">
              <motion.div
                className="flex flex-col gap-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="h-[238px] group overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                </motion.div>
                <motion.p
                  className="pl-4 font-dm text-lg font-medium text-[#000]"
                  style={{ textShadow: "1px 1px 0px #768C86" }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default BookSlider1;
