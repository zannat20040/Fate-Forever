import React from "react";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className=" min-h-screen container mx-auto my-14">
      <div className="hero-content flex flex-col md:grid md:grid-cols-2 gap-8 justify-between">
        <Slider></Slider>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-3 text-rose-700">
            Welcome to FateForever!
          </h1>
          <span className="text-xl">Creating Your Dream Wedding</span>
          <p className="py-6 text-base">
            At FateForever we specialize in turning your wedding dreams into a
            reality. From intimate gatherings to grand celebrations, we are your
            trusted partner in crafting the perfect wedding experience. 
          </p>
          <button className="btn bg-rose-700 text-white border-0 items-center ">
            Explore Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
