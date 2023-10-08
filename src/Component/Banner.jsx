import React from "react";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className=" container mx-auto">
      <div className="hero-content flex flex-col-reverse md:grid md:grid-cols-2 gap-8 justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-3 text-amber-600">Welcome to FateForever!</h1>
          <span className="text-xl">Creating Your Dream Wedding</span>
          <p className="py-6 text-base">
            At FateForever we specialize in turning your wedding dreams into a
            reality. From intimate gatherings to grand celebrations, we are your
            trusted partner in crafting the perfect wedding experience. Our team
            of experienced wedding planners is dedicated to making your special
            day truly unforgettable. With attention to detail, creativity, and a
            passion for love, we ensure that every moment of your wedding is
            filled with joy and enchantment.
          </p>
          <button className="btn bg-amber-600 border-0 items-center ">Explore Us</button>
        </div>
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Banner;
