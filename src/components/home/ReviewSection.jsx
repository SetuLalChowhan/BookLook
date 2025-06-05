import React from "react";
import ReviewBg from "@/assets/images/reviewBg.png";
import avatar from "@/assets/images/review.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Comma from "../common/icons/Comma";
import { motion } from "framer-motion";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      image: avatar,
      reviews: `"I absolutely love using BOI for buying books online! The website is easy to navigate, and I can find all my favorite titles in one place. The ordering process is smooth, and the delivery is always on time. Plus, the collection is amazing, with both bestsellers and rare finds. Highly recommend BOI to all book lovers!"`,
    },
    {
      id: 2,
      image: avatar,
      reviews: `"BOI made it super easy to discover new authors. Their delivery is quick and the packaging is great. Highly recommended!"`,
    },
    {
      id: 3,
      image: avatar,
      reviews: `"The selection and service BOI offers is unmatched. Their site is fast and secure. I’ll be a repeat customer!"`,
    },
    {
      id: 4,
      image: avatar,
      reviews: `"Fast delivery, great prices, and lots of rare books. What more could you ask for?"`,
    },
  ];

  return (
    <div
      className="w-full h-[800px] section-padding-x py-[55px] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${ReviewBg})` }}
    >
      <div className="w-full flex justify-end items-end">
        <div className="relative">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={20}
            className="w-[400px] bg-[#F6F1E9] rounded-[24px]"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="w-full p-7">
                <motion.div
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-[90px] h-[90px] mx-auto rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={review.image}
                      alt="review"
                    />
                  </div>

                  <span className="w-full mx-auto flex justify-center items-center text-center">
                    <Comma />
                  </span>

                  <p className="text-[#000] font-normal text-sm text-center font-instrument">
                    {review.reviews}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
