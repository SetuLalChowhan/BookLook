import React from "react";
import BannerImage from "@/assets/images/Banner.png";
import { MdArrowForward } from "react-icons/md";
import Books from "@/assets/images/Books.png";
import { motion } from "framer-motion";

const Banner = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const leftItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };

  return (
    <section>
      <div
        className={`bg-cover bg-center bg-no-repeat w-full h-screen flex gap-20 pt-20 section-padding-x`}
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        {/* Left Content - Animated to slide from left */}
        <motion.div 
          className="flex flex-col gap-[60px] w-[50%] items-start"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="flex flex-col gap-5" variants={leftItemVariants}>
            <div className="flex flex-col gap-1">
              <p className="text-[#E5E034] text-[35px] font-beth font-normal">
                BOI.
              </p>
              <h1 className="text-[#FEF1D5] text-[64px] font-caslon font-medium">
                Bestsellers, classics, and new arrivals—all in one place.
              </h1>
            </div>
            <p className="font-poppins font-normal text-[#FEF1D5] text-[20px]">
              Explore a wide range of books that will keep you hooked. Whether you love fiction, non-fiction, or poetry, we have something for everyone. Buy your favorite books for delivery or read online anytime
            </p>
          </motion.div>

          <motion.div 
            className="flex items-center gap-6"
            variants={leftItemVariants}
          >
            <motion.button 
              className="shadow-2xl px-[34px] py-[14px] flex justify-center items-center border-[1px] border-primary rounded-[12px] text-primary text-lg font-bold font-miriam bg-opacity-[0.10] bg-primary"
              whileHover={buttonHover}
            >
              <p>READ MORE</p>
            </motion.button>

            <motion.button 
              className="flex items-center font-miriam gap-1 text-primary text-lg font-bold group"
              whileHover={buttonHover}
            >
              <p>ORDER NOW</p>
              <motion.span 
                className="group-hover:translate-x-1 transition-transform duration-300"
                whileHover={{ x: 5 }}
              >
                <MdArrowForward color="#FEF1D5"/>
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image - Animated to slide from right */}
        <motion.div 
          className="w-[50%]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.img 
            src={Books} 
            alt="books" 
            className="object-cover block" 
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.5, ease: "easeInOut" }
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;