import React, { useEffect, useRef, useState } from "react";
import harry from "@/assets/images/harry.png";
import Rating from "../common/icons/Rating";
import bg1 from "@/assets/images/bg1.png";
import bg2 from "@/assets/images/bg2.png";
import bg3 from "@/assets/images/bg3.png";
import bg4 from "@/assets/images/bg4.png";
import bg5 from "@/assets/images/bg5.png";
import bg6 from "@/assets/images/bg6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid } from "swiper/modules";
import { Link } from "react-router-dom";
import smallRating from "@/assets/images/smallRating.png";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const BookGroup = () => {
  const books = [
    {
      id: 1,
      image: bg1,
      name: "Liar’s Beach",
      text: "by Katie Cotugno",
      rating: 5,
      price: 15.99,
    },
    {
      id: 2,
      image: bg2,
      name: "Black Girl You Are Atlas",
      text: "by Renēe Watson",
      rating: 5,
      price: 34.99,
    },
    {
      id: 3,
      image: bg3,
      name: "The Girl I’ve Been",
      text: "by  Tess Sharpe",
      rating: 5,
      price: 25.99,
    },
    {
      id: 4,
      image: bg4,
      name: "Check & Mate",
      text: "by Ali Hazelwood",
      rating: 5,
      price: 27.99,
    },
    {
      id: 5,
      image: bg5,
      name: "Reign",
      text: "by Katharine McGee",
      rating: 5,
      price: 67.99,
    },
    {
      id: 6,
      image: bg6,
      name: "One of Us is Back",
      text: "by  Karen M.McManus",
      rating: 5,
      price: 38.99,
    },
    {
      id: 1,
      image: bg1,
      name: "Liar’s Beach",
      text: "by Katie Cotugno",
      rating: 5,
      price: 15.99,
    },
    {
      id: 2,
      image: bg2,
      name: "Black Girl You Are Atlas",
      text: "by Renēe Watson",
      rating: 5,
      price: 34.99,
    },
    {
      id: 3,
      image: bg3,
      name: "The Girl I’ve Been",
      text: "by  Tess Sharpe",
      rating: 5,
      price: 25.99,
    },
    {
      id: 4,
      image: bg4,
      name: "Check & Mate",
      text: "by Ali Hazelwood",
      rating: 5,
      price: 27.99,
    },
    {
      id: 5,
      image: bg5,
      name: "Reign",
      text: "by Katharine McGee",
      rating: 5,
      price: 67.99,
    },
    {
      id: 6,
      image: bg6,
      name: "One of Us is Back",
      text: "by  Karen M.McManus",
      rating: 5,
      price: 38.99,
    },
    {
      id: 1,
      image: bg1,
      name: "Liar’s Beach",
      text: "by Katie Cotugno",
      rating: 5,
      price: 15.99,
    },
    {
      id: 2,
      image: bg2,
      name: "Black Girl You Are Atlas",
      text: "by Renēe Watson",
      rating: 5,
      price: 34.99,
    },
    {
      id: 3,
      image: bg3,
      name: "The Girl I’ve Been",
      text: "by  Tess Sharpe",
      rating: 5,
      price: 25.99,
    },
    {
      id: 4,
      image: bg4,
      name: "Check & Mate",
      text: "by Ali Hazelwood",
      rating: 5,
      price: 27.99,
    },
    {
      id: 5,
      image: bg5,
      name: "Reign",
      text: "by Katharine McGee",
      rating: 5,
      price: 67.99,
    },
    {
      id: 6,
      image: bg6,
      name: "One of Us is Back",
      text: "by  Karen M.McManus",
      rating: 5,
      price: 38.99,
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
    <div className=" pt-[155px] pb-[60px] flex gap-[62px] bg-[#F6F1E9] w-full section-padding-x">
      <div className=" w-[30%]  relative">
        <img
          src={harry}
          alt="harry-potter"
          className=" w-full h-full object-cover block "
        />
        <div className=" absolute bottom-4 px-6 flex flex-col gap-2">
          <p className=" text-[#FEF1D5] text-[24px] font-medium font-dm italic">
            Harry Potter
          </p>
          <p className="text-[#FEF1D5] text-xs font-medium opacity-80 font-dm max-w-[417px] ">
            The Harry Potter series follows the journey of Harry Potter, a young
            wizard who discovers on his 11th birthday that he is a wizard and
            has been accepted into Hogwarts School of Witchcraft and Wizardry.
            As he learns magic, he befriends Ron Weasley and Hermione Granger
            and discovers the truth...{" "}
            <span className="text-[#F37021] ">Read more</span>
          </p>

          <p className="text-[#FEF1D5] text-xs font-medium opacity-80 font-dm max-w-[417px] ">
            by<span className="text-[#F37021] "> J.K. Rowling</span>
          </p>

          <div className=" flex items-center gap-1">
            <div className="flex gap-1 text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                  <Rating />
                </span>
              ))}
            </div>
            <p className="text-[#FEF1D5] text-xs font-normal font-dm">4.5</p>
          </div>
        </div>
      </div>
      <div className=" w-[70%] relative">
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
          slidesPerView="auto"
          grid={{
            rows: 2,
            fill: "row",
          }}
       ref={swiperRef}
          spaceBetween={20}
          modules={[Grid,Navigation]}
          className="recommendation-swiper"
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
            <SwiperSlide key={item.id} className="!w-[200px] ">
              <div className=" flex flex-col gap-3">
                <div className=" h-[301px] group overflow-hidden duration-200 hover:scale-[1.05] ">
                  <img
                    className=" w-full h-full object-cover duration-200 "
                    src={item?.image}
                    alt={item?.title}
                  />
                </div>
                <p className="text-sm text-[#000] italic font-dm font-normal">
                  {item?.name}
                </p>
                <div className=" flex items-center gap-1">
                  <p className="font-inter text-[10px] font-normal text-[rgba(0, 0, 0, 0.67)]">
                    {item?.text}
                  </p>
                  <div className="flex gap-1 text-yellow-500">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <img key={i} src={smallRating} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#000] font-normal">
                  ${item?.price}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookGroup;
