import React from "react";
import menu from "./imgs/menu.png";
import logo from "./imgs/logo.png";
import contacts from "./imgs/contacts (2).png";
import cart from "./imgs/cart.png";
import search from "./imgs/searchIcc.png";
function Navbar() {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex py-5">
        <div className="flex gap-4 w-1/3 px-6 items-center ">
          {" "}
          <img src={menu} alt="" className="w-[20px] h-[20px]" />
          <img src={search} alt="" className="flex md:hidden w-[23px] h-[25px] bottom-5" />
          <div className="relative">
            <img src={search} alt="" className="absolute w-[23px] bottom-0" />
            <input
              type="text"
              className="border border-black h-[25px] rounded-full hidden md:flex"
            />
          </div>
        </div>

        <div className="w-1/3 flex justify-center">
          <img src={logo} alt="" />
        </div>

        <div className="flex w-1/3 justify-end gap-6 px-8">
          <img src={contacts} alt="" className="w-[20px] h-[25px]" />
          <img src={cart} alt="" className="w-[20px] h-[25px]" />
        </div>
      </div>
      <div className="lg:flex gap-3 w-full justify-around py-2 hidden">
        <p>HOME</p>
        <p>ABOUT US</p>
        <p>DINING</p>
        <p>BATH</p>
        <p>OUTDOOR</p>
        <p>LIGHTNING</p>
        <p>TEXTILES</p>
        <p>RUGS</p>
        <p>DECOR</p>
        <p>BABY & CHILD</p>
        <p>TEEN</p>
        <p>SALE</p>
        <p>INTERIOR DESIGN</p>
      </div>
    </div>
  );
}

export default Navbar;
