import AudioBook from "@/components/home/AudioBook";
import Banner from "@/components/home/Banner";
import BestSellingSlider from "@/components/home/BestSellingSlider";
import BookGroup from "@/components/home/BookGroup";
import BookSlider1 from "@/components/home/BookSlider1";
import ReviewSection from "@/components/home/ReviewSection";
import React from "react";

const Home = () => {
  return (
    <div className=" flex flex-col ">
      <Banner />
      <BookSlider1 />
      <BestSellingSlider />
      <BookGroup />
      <AudioBook />
      <ReviewSection />
    </div>
  );
};

export default Home;
