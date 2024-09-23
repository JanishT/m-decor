import React from "react";
import bannerImg from "./imgs/bannerImg.png";
import aboutHead from "./imgs/About Us.png";

function Banner() {
  return (
    <div className="relative">
      <img src={bannerImg} alt="" className="w-full" />
      <div className="absolute bottom-0  md:bottom-10 lg:bottom-20 w-full flex flex-col justify-center items-center gap-4">
        <img src={aboutHead} alt="" className="h-[20px] md:h-[65px] w-[200px] md:w-[500px] " />
        <p className="text-customWhite text-xs md:text-xl w-[340px] md:w-[540px]">
          The mission of M Decor is to create a distinct living space for every
          client. We create designs that add value to your project.
        </p>
      </div>
    </div>
  );
}

export default Banner;
