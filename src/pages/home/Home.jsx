import Banner from "@/components/home/Banner";
import BookSlider1 from "@/components/home/BookSlider1";
import React from "react";

const Home = () => {
  return (
    <div className=" flex flex-col ">
      <Banner />
      <BookSlider1/>
    </div>
  );
};

export default Home;
