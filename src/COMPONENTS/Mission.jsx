import React from "react";
import MissionHead from "./imgs/Our Mission.png";
import services from "./imgs/Services.png";
import interior from "./imgs/Interior.png";
import Edesign from "./imgs/Edesign.png";
import ggp from "./imgs/ggp.png";
import hazlehead from "./imgs/Hazel & M Decor cOLLECTIONS.png";

function Mission() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center w-full items-center mb-16">
        {" "}
        <img src={MissionHead} alt="" className="w-[400px] mb-2" />
        <p>
          We strive to create a distinct living space for every client. We
          create designs that add value to your project.
        </p>
      </div>
      <div className="flex flex-col">
        {" "}
        <div className="w-full flex justify-center items-center mb-20">
          <img
            src={services}
            alt=""
            className="w-[330px] flex justify-center items-center"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 ">
            <div className="flex flex-col justify-center items-center h-full">
              {" "}
              <img src={hazlehead} alt="" className="mb-10 md:mb-4" />
              <p className="text-customGray mb-6 md:mb-0">
                We create designs that add value to your project
              </p>
            </div>
          </div>
          <div className=" w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex  gap-2 w-full md:w-3/4">
              {" "}
              <img src={interior} alt="" className=" w-[100px] md:w-[160px] h-[100px] md:h-[130px]" />
              <div className="flex flex-col text-start">
                {" "}
                <p className="text-customGreen text-2xl mb-5">
                  Interior Design
                </p>
                <p className="text-customGray">
                  Interior consultation & strategic planning Programming & space
                  planning Finish selection and specification Furniture
                  selection and specification Lighting consultation and design
                  Interior detailing custom millwork and furniture design Wide
                  range fabric selection 3D drawings Chinaware Crystalware
                  Silverware Art and antique consultation Procurement and
                  Installation Construction supervision and coordination
                </p>
              </div>
            </div>
            <div className="flex  gap-2 w-full md:w-3/4">
              {" "}
              <img src={Edesign} alt="" className="w-[100px] md:w-[140px] h-[100px] md:h-[130px]" />
              <div className="flex flex-col text-start">
                {" "}
                <p className="text-2xl mb-5 text-customGreen">
                  E Design service
                </p>
                <ul className="text-customGray">
                  <li>Economy Package</li>
                  <li>
                    Custom Package <br /> All Packages exclude B.O.Q
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-2 items-center w-full md:w-3/4">
              {" "}
              <img src={ggp} alt="" className="w-[100px] md:w-[140px] h-[100px] md:h-[130px]" />
              <div className="flex flex-col text-start">
                {" "}
                <p className="text-2xl mb-5 text-customGreen">
                  C.G.P Construction (official Partner)
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
