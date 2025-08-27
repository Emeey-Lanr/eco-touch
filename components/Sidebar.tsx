'use client'
import Image from "next/image";
import React from "react"

const Sidebar:React.FC<{sideBarStatus:boolean, handleSidebar:React.MouseEventHandler<HTMLButtonElement>}> = ({sideBarStatus, handleSidebar}) => {
   
  return (
    <div
      className={
        sideBarStatus
          ? "w-full h-full fixed top-0 transfrom-x-[0px]  transition z-[6] duration-1000  bg-brand-900 md:hidden"
          : "w-full h-full fixed top-0  translate-x-[770px] transition z-[6] duration-1000   bg-brand-900 md:hidden"
      }
    >
      <div className="px-[32px] py-[16px] grid justify-center grid-cols-[40px_80%] border-b-[1px]">
        <button onClick={handleSidebar} className="text-grey-50">
          <span className="block w-[18px] h-[2px] rounded-full rotate-[45deg] bg-grey-50" />
          <span className="block w-[18px] h-[2px] rounded-full rotate-[-45deg]  bg-grey-50" />
        </button>

        <div className="">
          <div className="relative w-[22px] h-[43px] mx-auto">
            <Image src={"/images/eco-touch-vector.svg"} alt="" fill />
          </div>
          <h2 className="text-grey-50 font-semibold text-[16px] text-center">
            EcoTouch
          </h2>
        </div>
      </div>

      <div className="">
        <ul>
          <li className="px-[32px] py-[16px] border-b-[1px] border-grey-50/70">
            <button
              className="text-[32px] font-montserrat text-grey-50"
              onClick={handleSidebar}
            >
              <a href="#home">Home</a>
            </button>
          </li>

          <li className="px-[32px] py-[16px] border-b-[1px] border-grey-50/70">
            <button
              className="text-[32px] font-montserrat text-grey-50"
              onClick={handleSidebar}
            >
              <a href="#services">Services</a>
            </button>
          </li>

          <li className="px-[32px] py-[16px] border-b-[1px] border-grey-50/70">
            <button
              className="text-[32px] font-montserrat text-grey-50"
              onClick={handleSidebar}
            >
              <a href="#about-us">About Us</a>
            </button>
          </li>

          <li className="px-[32px] py-[16px] border-b-[1px] border-grey-50/70">
            <button
              className="text-[32px] font-montserrat text-grey-50"
              onClick={handleSidebar}
            >
              <a href="#contact-us">Contact Us</a>
            </button>
          </li>

          <li className="px-[32px] pt-[16px]">
            <button
              className="text-[32px] font-montserrat text-grey-50"
              onClick={handleSidebar}
            >
              <a href="#">Call Us Today</a>
            </button>
          </li>

          <li className="px-[32px]  py-[16px]">
            <a href="tel:+447867286358">
              <button className="w-full flex justify-center items-center text-gray-50 font-montserrat bg-brand-500  rounded-full h-[44px] text-[16px] font-bold shadow-md hover:bg-brand-900 hover:translate-x-2 transition duration-1000 lg:h-[56px] lg:w-[200px]">
                Calls Us Today{" "}
                <span className="w-[24px] h-[24px] ml-[16px] block relative ">
                  <Image
                    src={"/icons/phone.svg"}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar