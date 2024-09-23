import React from "react";
import hazleMDecor from "./imgs/Hazel & M Decor cOLLECTIONS@2x.png";
import collectionbg from "./imgs/collectionsid.png";
import fiveyears from "./imgs/fiveyears.png";
import twofivehundred from "./imgs/twofivehundred.png";
import imgtwoFive from "./imgs/imgtwoFive.png";
import threeM from "./imgs/imgthreeM+.png";
import imgthreeM from "./imgs/threeM+.png";

function Collections() {
  return (
    <div className="w-full flex flex-col md:flex-row md:gap-2 mt-10 mb-20 gap-80">
      <div className="w-full md:w-1/2 text-md flex flex-col px-12 ">
        <p className="text-customGray text-start mb-6">
          We create designs that add value to your project
        </p>
        <img src={hazleMDecor} alt="" className="mb-10" />
        <div className="flex flex-col  ">
          {" "}
          <p className="mb-6 text-start text-customGray">
            The mission of M Decor is to create a distinct living space for
            every client. We create designs that add value to your project.
          </p>
          <p className="mb-6 text-start text-customGray">
            We are an Omani company with a diverse team with an international
            and local twist. We bring a wealth of knowledge and experience to
            every project. M Decor isa full-service interior design firm with
            its own carpentry workshop and live furniture showroom. 
          </p>
          <p className="mb-6 text-start text-customGray">
            With various interior design projects, we have earned a proud
            reputation as highly versatile innovators and creative problem
            solvers.
          </p>
          <p className="mb-6 text-start text-customGray">
            Our expertise extends across all stages of design and construction
            from planning applications to conceptual, and detailed design. We
            also monitor construction on-site, procurement, dressing, and
            hand-over, ensuring each project is finished to the highest level of
            quality.
          </p>
        </div>
        <div className="flex gap-10">
          <div className=" flex flex-col items-start">
            <div className="flex items-center gap-3">
              {" "}
              <img src={imgtwoFive} className="w-[30px] md:w-[60px] h-[30px] md:h-[60px]" alt="" />
              <img src={twofivehundred} alt="" className="w-[100px] md:w-[200px]"/>
            </div>
            <p className="text-customGray">Complete project</p>
          </div>
          <div className=" flex flex-col items-start">
            <div className="flex items-center gap-3">
              {" "}
              <img src={threeM} className="w-[30px] md:w-[60px] h-[30px] md:h-[60px]" alt="" />
              <img src={imgthreeM} alt=""className="w-[100px] md:w-[200px]" />
            </div>
            <p className="text-customGray">Company Followers</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative md:top-10 top-20 px-4 md:px-0">
        <img src={collectionbg} alt="" className="rounded-xl absolute md:right-40 bottom-10 md:top-10"/>
       <div className=""><img src={fiveyears} alt="" className="bg-customGreen rounded-2xl absolute bottom-40 md:bottom-30 h-[200px] w-[200px] p-10 left-0"/></div> 
      </div>
    </div>
  );
}

export default Collections;
