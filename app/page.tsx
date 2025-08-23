'use client'
import Sidebar from '@/components/Sidebar';
import Image from 'next/image'
import {useState} from "react"


export default function Home() {
   const [sideBarStatus, setSideBarStatus] = useState<boolean>(false)

  const handleSideBar = () => {
  
    setSideBarStatus(!sideBarStatus)
  }
  return (
    <div className="bg-bc relative overflow-hidden w-full h-full">
      <nav className="flex justify-between items-center bg-transparent py-[16px] px-[16px] sticky top-0 lg:px-[48px] lg:box-border">
        {/* Logo */}
        <div className="h-[78px] w-[78px]  relative md:w-[103px] md:h-[70px]">
          <Image
            src={"/icons/logo.svg"}
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* navlinks */}
        <div className="hidden md:flex items-center">
          <a
            href="#home"
            className="font-montserrat font-medium text-grey-700 text-[16px] h-[48px] flex justify-center items-center  hover:border-b-4  hover:border-brand-500 transition-all"
          >
            Home
          </a>
          <a
            href="#services"
            className="font-montserrat font-medium text-grey-700 mx-[24px] text-[16px] h-[48px] flex justify-center items-center  hover:border-b-4 hover:border-brand-500 transition-border"
          >
            Services
          </a>
          <a
            href="#about-us"
            className="font-montserrat font-medium text-grey-700 mr-[16px] text-[16px] h-[48px] flex justify-center items-center  hover:border-b-4  hover:border-brand-500 transition-border"
          >
            About Us
          </a>
          <a
            href="#contact-us"
            className="font-montserrat  text-gray-50 px-[16px] rounded-3xl flex justify-center items-center text-[16px] bg-brand-900 h-[48px] hover:bg-brand-500 hover:translate-x-1 hover:translate-y-1 transition duration-1000"
          >
            Contact Us <span className='h-[16px] w-[16px] relative ml-[12px]'><Image  src={"/icons/arrow-forward.svg"} alt='' fill className='object-contain'/></span>
          </a>
        </div>

        {/* harburger */}
        <button className="relative w-[40px] h-[40px] md:hidden" onClick={handleSideBar}>
          <Image
            src={"/icons/harmburger.svg"}
            fill
            className="object-contain"
            alt={"harmbuger menu"}
          />
        </button>
      </nav>

      <main className="px-[16px]">
        {/* Hero */}
        <section className='w-full h-[80vh] relative overflow-hidden lg:h-[100vh]'>
          <Image src={"/images/hero.webp"} alt='hero' className='rounded-xl absolute top-0' fill />
          <div className='relative flex justify-center items-end h-full px-[16px] lg:items-center lg:justify-start lg:px-[48px]'>
            <div className='mb-[48px] lg:mb-0'>
               <p className='font-montserrat italic text-[18px] text-gray-50 lg:text-[24px] lg:w-[500px]'>From dust to trust, from living rooms to kennels; We clean it</p>
            <h1 className="font-opensans text-[32px] font-bold text-gray-50 mt-[8px] mb-[12px] lg:text-[64px] lg:w-[800px]">
              Healthier homes where fresh meet <span className='bg-brand-500 rounded-3xl p-[8px]'>green</span> plant
            </h1>
            <p className='font-montserrat text-[16px] text-grey-50 mb-[48px] leading-[24px] lg:text-[18px] lg:leading-[36px] lg:w-[600px] lg:mb-[64px]'>An Eco-friendly, sustainble, non toxic cleaning for <span className='font-bold'>families</span>, <span className='font-bold'>pets</span> and <span className='font-bold'>business</span></p>
            <button  className='w-full flex justify-center items-center text-gray-50 font-montserrat bg-brand-500  rounded-full h-[44px] text-[16px] font-bold shadow-md hover:bg-brand-900 hover:translate-x-2 transition duration-1000 lg:h-[56px] lg:w-[200px]'>
              Calls Us Today <span className='w-[24px] h-[24px] ml-[16px] block relative '><Image src={"/icons/phone.svg"} alt='' fill className='object-contain'/></span>
            </button>
        </div>
           
          </div>
        </section>

        {/* services */}
        <section></section>

        {/* what we do */}
        <section></section>

        {/* what set us apart  */}
        <section></section>

        {/* Abous us */}
        <section></section>

        {/* our vision */}
        <section></section>

        {/* our mission */}
        <section></section>

        {/* Contact us */}
        <section></section>
      </main>

      <footer></footer>
      
      <Sidebar sideBarStatus={sideBarStatus} handleSidebar={ handleSideBar} />
    </div>
  );
}
