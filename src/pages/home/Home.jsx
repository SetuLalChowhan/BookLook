import Banner from "@/components/home/Banner";
import BestSellingSlider from "@/components/home/BestSellingSlider";
import BookGroup from "@/components/home/BookGroup";
import BookSlider1 from "@/components/home/BookSlider1";
import React from "react";

const Home = () => {
  return (
    <div className=" flex flex-col ">
      <Banner />
      <BookSlider1/>
      <BestSellingSlider/>
      <BookGroup/>
    </div>
  );
};

export default Home;
