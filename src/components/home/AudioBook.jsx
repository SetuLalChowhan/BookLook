import React from "react";
import { FaHeadphones } from "react-icons/fa";
import Img1 from "@/assets/images/img1.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import image1 from "@/assets/images/a1.png";
import image2 from "@/assets/images/a2.png";
import image3 from "@/assets/images/a3.png";
import image4 from "@/assets/images/a4.png";
import image5 from "@/assets/images/a5.png";
import Rating from "../common/icons/Rating";
import PlayBtn from "../common/icons/PlayBtn";
import StoreImage from "@/assets/images/store.png";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const bookCardVariants = {
  hover: {
    y: -10,
    scale: 1.03,
    transition: { duration: 0.3 }
  }
};

const AudioBook = () => {
  const audiobooks = [
    {
      image: image1,
      title: "Becoming",
      author: "Michelle Obama",
      rating: 5,
      price: 1.99,
    },
    {
      image: image2,
      title: "The Seven Husbands Of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      rating: 5,
      price: 1.99,
    },
    {
      image: image3,
      title: "Educated A Memoir",
      author: "Tara Westover",
      rating: 5,
      price: 1.99,
    },
    {
      image: image4,
      title: "I'm Glad My Mom Died",
      author: "Jennete McCurdy",
      rating: 5,
      price: 1.99,
    },
    {
      image: image5,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      rating: 5,
      price: 1.99,
    },
    {
      image: image1,
      title: "Becoming",
      author: "Michelle Obama",
      rating: 5,
      price: 1.99,
    },
  ];

  const storeInfo = [
    {
      id: 1,
      label: "Gulshan 2",
      address: "House 15, Road 71, Gulshan 2, Dhaka 1212."
    },
    {
      id: 2,
      label: "Banani",
      address: "Address: Road 8/A, House 27, Dhanmondi, Dhaka 1209."
    },
    {
      id: 3,
      label: "Dhanmondi",
      address: "House 47, Block E, Banani Road 12, Dhaka 1213."
    },
  ];

  const serviceItems = [
    "Try our 3 book 30 day free trial, only <strong>$14.95/month</strong> afterwards",
    "Get any <strong>2 books, plus a bonus VIP book</strong> in your free trial.",
    "<strong>Cancel anytime</strong> during your free trial, no strings attached.",
    "<strong>125,000+ best sellers.</strong> new releases, and classic favorites",
    "<strong>Access 8,500+ free</strong> audiobooks",
    "<strong>Cancel anytime</strong> during your free trial, no strings attached."
  ];

  return (
    <div className="section-padding-x bg-customBg w-full py-20 overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-row gap-[53px] items-center">
        <motion.div 
          className="flex flex-col gap-5 w-[50%]"
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft}
        >
          <div className="flex flex-col gap-4">
            <motion.p 
              className="font-caslon text-[80px] font-medium bg-gradient-to-b from-[#FFE100] via-[#FEF197] to-[#FEF1D5] bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Listen popular audio books anytime{" "}
              <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaHeadphones
                  size={60}
                  className="inline-block"
                  color="#FEF1D5"
                />
              </motion.span>
            </motion.p>

            <motion.p 
              className="text-[24px] max-w-[700px] text-[#FEF1D5] font-medium font-poppins"
              variants={itemVariants}
            >
              Dive into captivating stories and insightful knowledge with
              popular audiobooks available anytime. Listen on the go, relax with
              your favorite narrators, and enjoy seamless storytelling whenever
              you want. Discover bestselling novels, thrilling mysteries,
              heartwarming romances, and inspiring non-fiction—all narrated by
              top voice artists. Never miss out on a great story again—plug in
              and start listening today!
            </motion.p>
          </div>

          <motion.div variants={itemVariants}>
            <Link
              to="#"
              className="text-[#1639FF] text-lg font-medium flex items-center gap-2 group transition-colors duration-300 hover:text-[#0f2fcc] focus:outline-none focus:ring-2 focus:ring-[#1639FF]"
            >
              <p>Explore Audio Books</p>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                <FaArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-[50%]"
          initial="hidden"
          animate="visible"
          variants={slideInFromRight}
        >
          <motion.img 
            src={Img1} 
            className="w-full h-auto block" 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.div>
      </div>

      {/* Audiobooks Grid */}
      <motion.div 
        className="mt-[76px] grid grid-cols-6 gap-[50px]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {audiobooks.map((book, index) => (
          <motion.div 
            key={index}
            className="flex flex-col gap-6"
            variants={itemVariants}
            whileHover="hover"
     
          >
            <motion.img 
              src={book?.image} 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="flex flex-col gap-2">
              <p className="text-[#390303] font-dm italic text-[20px] font-normal">
                {book?.title}
              </p>
              <div className="flex items-center gap-3">
                <p className="text-[#5A0608] font-normal text-sm font-inter">
                  by {book?.author}
                </p>
                <div className="flex gap-1 text-yellow-500">
                  {Array.from({ length: book.rating }).map((_, i) => (
                    <span key={i}>
                      <Rating />
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[#390303] text-sm font-normal font-dm">
                ${book?.price}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Service Overview */}
      <motion.div 
        className="mt-[120px] px-10 flex flex-col gap-11"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <motion.p 
          className="text-[#000] font-medium text-[40px] font-inter"
          whileInView={{ scale: [0.95, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Service <span className="font-bold">Overview</span>
        </motion.p>

        <motion.div 
          className="grid grid-cols-3 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {serviceItems.map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-4"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <motion.span 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <PlayBtn />
              </motion.span>
              <p 
                className="text-[24px] font-inter text-[#000]"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Store Section */}
      <motion.div 
        className="mt-[110px] flex flex-col gap-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-[45px] text-center font-caslon bg-gradient-to-r from-[#390404] to-[#963B25] bg-clip-text text-transparent"
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Visit Our Store – Explore, Browse, and Discover!
        </motion.p>

        <div className="flex gap-20 items-center">
          <motion.div 
            className="w-[50%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={StoreImage} 
              className="w-full h-auto block rounded-lg shadow-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          <motion.div 
            className="w-[50%] mt-16 flex flex-col gap-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {storeInfo.map((store, index) => (
              <motion.div 
                key={store.id}
                className="flex flex-col gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-lg"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-[#390303] text-[35px] font-semibold font-poppins">
                  {store.label}
                </p>
                <p className="text-[#841C1F] text-[27px] font-medium font-poppins">
                  {store?.address}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AudioBook;