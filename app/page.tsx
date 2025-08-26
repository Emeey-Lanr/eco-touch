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
    <div className="bg-bc relative w-full h-full">
      <nav className="flex justify-between items-center  py-[16px] px-[16px] sticky z-[5] bg-bc/60 backdrop-blur-md   top-0 lg:px-[48px] lg:box-border">
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
            Contact Us{" "}
            <span className="h-[16px] w-[16px] relative ml-[12px]">
              <Image
                src={"/icons/arrow-forward.svg"}
                alt=""
                fill
                className="object-contain"
              />
            </span>
          </a>
        </div>

        {/* harburger */}
        <button
          className="relative w-[40px] h-[40px] md:hidden"
          onClick={handleSideBar}
        >
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
        <section className="w-full h-[80vh] relative overflow-hidden lg:h-[100vh]">
          <Image
            src={"/images/hero.webp"}
            alt="hero"
            className="rounded-xl absolute top-0"
            fill
          />
          <div className="relative flex justify-center items-end h-full px-[24px] lg:items-center lg:justify-start lg:px-[48px]">
            <div className="mb-[48px] lg:mb-0">
              <p className="font-montserrat italic text-[18px] text-gray-50 lg:text-[24px] lg:w-[500px]">
                From dust to trust, from living rooms to kennels; We clean it
              </p>
              <h1 className="font-opensans text-[32px] font-bold text-gray-50 mt-[8px] mb-[12px] lg:text-[64px] lg:w-[800px]">
                Healthier homes where fresh meet{" "}
                <span className="bg-brand-500 rounded-3xl p-[8px]">green</span>{" "}
                plant
              </h1>
              <p className="font-montserrat text-[16px] text-grey-50 mb-[48px] leading-[24px] lg:text-[18px] lg:leading-[36px] lg:w-[600px] lg:mb-[64px]">
                An Eco-friendly, sustainble, non toxic cleaning for{" "}
                <span className="font-bold">families</span>,{" "}
                <span className="font-bold">pets</span> and{" "}
                <span className="font-bold">business</span>
              </p>
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
            </div>
          </div>
        </section>

        {/* services */}
        <section className="py-[24px] px-[16px] lg:py-[48px]">
          <h2 className="font-opensans text-grey-900 text-[28px] font-semibold text-center lg:font-bold lg:text-[32px]">
            Our Services
          </h2>
          <div className="grid grid-cols-2 pt-[24px] lg:grid-cols-4  lg:justify-center">
            <div className="py-[16px] lg:flex lg:justify-center lg:items-center ">
              <span className="w-[32px] h-[32px]  flex justify-center items-center mx-auto relative lg:w-[48px] lg:h-[48px] lg:m-0 lg:pr-[12px]">
                <Image
                  src={"/icons/domestic.svg"}
                  fill
                  alt=""
                  className="object-contain  shadow-sm"
                />
              </span>
              <p className="font-montserrat pt-[12px] text-[14px] leading-[18px] w-[150px] mx-auto font-semibold text-center lg:text-[16px] lg:w-[200px] lg:m-0 lg:text-left lg:pl-[12px] lg:leading-[22px]">
                Regular Domestics Cleaning
              </p>
            </div>

            <div className="py-[16px] lg:flex lg:justify-center lg:items-center">
              <span className="w-[32px] h-[32px]  flex justify-center items-center mx-auto relative lg:w-[48px] lg:h-[48px] lg:m-0 lg:pr-[12px]">
                <Image
                  src={"/icons/office-cleaning.svg"}
                  fill
                  alt=""
                  className="object-contain shadow-sm rounded-sm"
                />
              </span>
              <p className="font-montserrat pt-[12px] text-[14px] leading-[18px] w-[150px] mx-auto font-semibold text-center lg:text-[16px] lg:w-[150px] lg:m-0 lg:text-left lg:pl-[12px] lg:leading-[22px]">
                Office Space Cleaning
              </p>
            </div>

            <div className="py-[16px] lg:flex lg:justify-center lg:items-center ">
              <span className="w-[32px] h-[32px]  flex justify-center items-center mx-auto relative lg:w-[48px] lg:h-[48px] lg:m-0 lg:pr-[12px]">
                <Image
                  src={"/icons/eco-friendly.svg"}
                  fill
                  alt=""
                  className="object-contain shadow-sm rounded-sm"
                />
              </span>
              <p className="font-montserrat pt-[12px] text-[14px] leading-[18px] w-[130px] mx-auto font-semibold text-center lg:text-[16px] lg:w-[160px] lg:m-0 lg:text-left lg:pl-[12px] lg:leading-[22px]">
                Eco-friendly One Off Cleaning
              </p>
            </div>

            <div className="py-[16px] lg:flex lg:justify-center lg:items-center ">
              <span className="w-[32px] h-[32px]  flex justify-center items-center mx-auto relative lg:w-[48px] lg:h-[48px] lg:m-0 lg:pr-[12px]">
                <Image
                  src={"/icons/end-of-deep-cleaning.svg"}
                  fill
                  alt=""
                  className="object-contain shadow-sm rounded-sm"
                />
              </span>
              <p className="font-montserrat pt-[12px] text-[14px] leading-[18px] w-[150px] mx-auto font-semibold text-center lg:text-[16px] lg:w-[200px] lg:m-0 lg:text-left lg:pl-[12px] lg:leading-[22px]">
                End-of-tenancy & Deep Cleaning
              </p>
            </div>

            <div className="py-[16px] lg:flex lg:justify-center lg:items-center ">
              <span className="w-[32px] h-[32px]  flex justify-center items-center mx-auto relative lg:w-[48px] lg:h-[48px] lg:m-0 lg:pr-[12px]">
                <Image
                  src={"/icons/community.svg"}
                  fill
                  alt=""
                  className="object-contain shadow-sm rounded-sm"
                />
              </span>
              <p className="font-montserrat pt-[12px] text-[14px] leading-[18px] w-[150px] mx-auto font-semibold text-center lg:text-[16px] lg:w-[150px] lg:m-0 lg:text-left lg:pl-[12px] lg:leading-[22px]">
                Communal Cleaning
              </p>
            </div>

            <div className="py-[16px] lg:flex lg:justify-center lg:items-center ">
              <span className="w-[32px] h-[32px]  flex justify-center items-center mx-auto relative lg:w-[48px] lg:h-[48px] lg:m-0 lg:pr-[12px]">
                <Image
                  src={"/icons/kennel.svg"}
                  fill
                  alt=""
                  className="object-contain shadow-sm rounded-sm"
                />
              </span>
              <p className="font-montserrat pt-[12px] text-[14px] leading-[18px] w-[150px] mx-auto font-semibold text-center lg:text-[16px] lg:w-[140px] lg:m-0 lg:text-left lg:pl-[12px] lg:leading-[22px]">
                Kennel Cleaning
              </p>
            </div>

            <div className="py-[16px] lg:flex lg:justify-center lg:items-center ">
              <span className="w-[32px] h-[32px]  flex justify-center items-center mx-auto relative lg:w-[48px] lg:h-[48px] lg:m-0 lg:pr-[12px]">
                <Image
                  src={"/icons/customer-eco.svg"}
                  fill
                  alt=""
                  className="object-contain shadow-sm rounded-sm"
                />
              </span>
              <p className="font-montserrat pt-[12px] text-[14px] leading-[18px] w-[150px] mx-auto font-semibold text-center lg:text-[16px] lg:w-[200px] lg:m-0 lg:text-left lg:pl-[12px] lg:leading-[22px]">
                Custom Eco Allergy Care
              </p>
            </div>

            <div className="py-[16px] lg:flex lg:justify-center lg:items-center ">
              <span className="w-[32px] h-[32px]  flex justify-center items-center mx-auto relative lg:w-[48px] lg:h-[48px] lg:m-0 lg:pr-[12px]">
                <Image
                  src={"/icons/airbnb.svg"}
                  fill
                  alt=""
                  className="object-contain shadow-sm rounded-sm"
                />
              </span>
              <p className="font-montserrat pt-[12px] text-[14px] leading-[18px] w-[150px] mx-auto font-semibold text-center lg:text-[16px] lg:w-[200px] lg:m-0 lg:text-left lg:pl-[12px] lg:leading-[22px]">
                Airbnb Turnover Cleaning
              </p>
            </div>
          </div>
        </section>

        {/* what we do */}
        <section className="px-[16px] py-[16px] lg:grid lg:grid-cols-2 lg:justify-center lg:items-center lg:py-[32px]">
          <div className="w-full h-[50vh] relative lg:w-[80%] lg:mx-auto">
            <Image
              src={"/images/family.webp"}
              alt=""
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="py-[16px] lg:w-[80%]">
            <h2 className="font-opensans font-semibold text-[24px] text-grey-800 lg:text-[32px] lg:font-bold lg:w-[80%]">
              Eco-Touch Cleaning Service is ideal for:
            </h2>
            <p className="font-montserrat text-grey-700 text-[14px] leading-[22px] mt-[12px] lg:text-[16px] lg:leading-[32px]">
              Families who want safe, chemical-free cleaning, Environmentally
              conscious homeowners, Landlords & letting agents looking for
              ethical cleaning partners, business owners who value wellness and
              sustainability.
            </p>
          </div>
        </section>
      </main>

      <main >
        {/* what set us apart  */}
        <section className="bg-brand-900  py-[16px] relative lg:py-[48px] lg:my-[62px] overflow-hidden">
          <div className="w-[74px] h-[110px] absolute right-0">
            <Image src={"/images/background-eco.svg"} alt="" fill />
          </div>

          <div className="w-[74px] h-[110px] absolute top-[400px]">
            <Image src={"/images/background-eco.svg"} alt="" fill />
          </div>

          <div className="w-[74px] h-[110px] absolute top-[700px] right-0 lg:bottom-[400px]">
            <Image src={"/images/background-eco.svg"} alt="" fill />
          </div>

          <div className="w-[74px] h-[110px] absolute top-[1100px] lg:bottom-[0px]">
            <Image src={"/images/background-eco.svg"} alt="" fill />
          </div>

          <div className="px-[32px]">
            <h2 className="font-opensans text-center text-grey-50 text-[24px] lg:text-[32px] lg:font-bold">
              Discover what set us apart
            </h2>
            <p className="font-montserrat text-[14px] text-grey-50 py-[12px] text-center lg:text-[16px] lg:w-[70%] lg:mx-auto">
              know more about our distinguishing features and advantages that
              put us ahead of our competitors.
            </p>
          </div>

          <div className="px-[32px] lg:grid lg:grid-cols-[40%_200px_40%] lg:justify-center lg:items-center">
            <div className="mt-[16px]">
              <h2 className="font-opensans font-semibold text-[20px] text-grey-50 py-[16px] lg:text-center lg:text-[28px]">
                Others
              </h2>
              <div className="flex lg:w-full">
                <div className="flex items-center px-[8px] py-[8px] bg-brand-500 rounded-md lg:w-full lg:py-[12px]">
                  <div className="w-[24px] h-[24px] bg-brand-800 flex justify-center items-center  rounded-full">
                    <span className="relative block  w-[10px] h-[10px]">
                      <Image
                        src={"/icons/times.svg"}
                        alt=""
                        fill
                        className=""
                      />
                    </span>
                  </div>

                  <p className="font-montserrat font-medium text-[14px] pl-[8px] w-[90%] text-grey-800 lg:text-[16px]">
                    Use of harsh toxic chemical that are not safe for pets and
                    children
                  </p>
                </div>
                <div className="grid grid-rows-2">
                  <div className="w-[12px]" />
                  <div className="w-[12px] border-t-[1px] border-r-[1px] border-grey-50" />
                </div>
              </div>

              <div className="w-full h-[32px] border-r-[1px] border-grey-50" />

              <div className="flex">
                <div className="flex items-center px-[8px] py-[8px] bg-brand-500 rounded-md lg:w-full lg:py-[12px]">
                  <div className="w-[24px] h-[24px] bg-brand-800 flex justify-center items-center  rounded-full">
                    <span className="relative block  w-[10px] h-[10px]">
                      <Image
                        src={"/icons/times.svg"}
                        alt=""
                        fill
                        className=""
                      />
                    </span>
                  </div>

                  <p className="font-montserrat font-medium text-[14px] pl-[8px] w-[90%] text-grey-800 lg:text-[16px]">
                    use of disposable wipes, single-use bottles and
                    unsustainable packaging
                  </p>
                </div>
                <div className="grid grid-rows-2">
                  <div className="w-[12px] border-r-[1px] border-grey-50" />
                  <div className="w-[12px] border-t-[1px] border-r-[1px] border-grey-50 " />
                </div>
              </div>

              <div className="w-full h-[32px] border-r-[1px] border-grey-50" />

              <div className="flex">
                <div className="flex items-center px-[8px] py-[8px] bg-brand-500 rounded-md lg:py-[12px]">
                  <div className="w-[24px] h-[24px] bg-brand-800 flex justify-center items-center  rounded-full">
                    <span className="relative block  w-[10px] h-[10px]">
                      <Image
                        src={"/icons/times.svg"}
                        alt=""
                        fill
                        className=""
                      />
                    </span>
                  </div>

                  <p className="font-montserrat font-medium text-[14px] pl-[8px] w-[90%] text-grey-800 lg:text-[16px]">
                    Providing rushed, generic cleans and failing to build
                    lasting relationships with clients
                  </p>
                </div>
                <div className="grid grid-rows-2">
                  <div className="w-[12px] border-r-[1px] border-grey-50" />
                  <div className="w-[12px] border-t-[1px] border-r-[1px] border-grey-50 " />
                </div>
              </div>

              <div className="w-full h-[32px] border-r-[1px] border-grey-50" />

              <div className="flex">
                <div className="flex items-center px-[8px] py-[8px] bg-brand-500 rounded-md lg:py-[12px]">
                  <div className="w-[24px] h-[24px] bg-brand-800 flex justify-center items-center  rounded-full">
                    <span className="relative block  w-[10px] h-[10px]">
                      <Image
                        src={"/icons/times.svg"}
                        alt=""
                        fill
                        className=""
                      />
                    </span>
                  </div>

                  <p className="font-montserrat font-medium text-[14px] pl-[8px] w-[90%] text-grey-800 lg:text-[16px]">
                    High employee turnover with little support or growth
                    opportunities for local staff
                  </p>
                </div>
                <div className="grid grid-rows-2">
                  <div className="w-[12px] border-r-[1px] border-grey-50" />
                  <div className="w-[12px] border-t-[1px] border-r-[1px] border-grey-50 " />
                </div>
              </div>

              <div className="w-full h-[32px] border-r-[1px] border-grey-50" />

              <div className="flex">
                <div className="flex items-center px-[8px] py-[8px] bg-brand-500 rounded-md lg:py-[12px]">
                  <div className="w-[24px] h-[24px] bg-brand-800 flex justify-center items-center  rounded-full">
                    <span className="relative block  w-[10px] h-[10px]">
                      <Image
                        src={"/icons/times.svg"}
                        alt=""
                        fill
                        className=""
                      />
                    </span>
                  </div>

                  <p className="font-montserrat font-medium text-[14px] pl-[8px] w-[90%] text-grey-800 lg:text-[16px]">
                    Lack of transparency with pricing, unclear services and
                    hidden product ingredients
                  </p>
                </div>
                <div className="grid grid-rows-2">
                  <div className="w-[12px] border-r-[1px] border-b-[1px] border-grey-50" />
                  <div className="w-[12px]" />
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center py-[16px]">
              <span className="relative w-[42px] h-[63px]">
                <Image src={"/images/eco-touch-vector.svg"} alt="" fill />
              </span>
            </div>

            <div className="lg:w-full">
              <h2 className="font-opensans font-semibold text-[20px] ml-[12px] text-grey-50 py-[16px] lg:text-center lg:text-[28px]">
                Eco Touch
              </h2>
              <div className="flex">
                <div className="grid grid-rows-2">
                  <div className="w-[12px]" />
                  <div className="w-[12px] border-t-[1px] border-l-[1px] border-grey-50" />
                </div>
                <div className="flex items-center px-[8px] py-[8px] bg-brand-800 rounded-md lg:w-full  lg:py-[12px]">
                  <div className="w-[24px] h-[24px] bg-brand-500 flex justify-center items-center  rounded-full">
                    <span className="relative block  w-[10px] h-[10px]">
                      <Image src={"/icons/mark.svg"} alt="" fill className="" />
                    </span>
                  </div>

                  <p className="font-montserrat font-medium text-[14px] pl-[8px] w-[90%] text-grey-50 lg:text-[16px]">
                    Use of biogradable, plant based product that are child and
                    pet safe
                  </p>
                </div>
              </div>

              <div className="w-full h-[32px] border-l-[1px] border-grey-50" />

              <div className="flex">
                <div className="grid grid-rows-2">
                  <div className="w-[12px] border-l-[1px] border-grey-50" />
                  <div className="w-[12px] border-t-[1px] border-l-[1px] border-grey-50" />
                </div>
                <div className="flex items-center px-[8px] py-[8px] bg-brand-800 rounded-md lg:py-[12px]">
                  <div className="w-[24px] h-[24px] bg-brand-500 flex justify-center items-center  rounded-full">
                    <span className="relative block  w-[10px] h-[10px]">
                      <Image src={"/icons/mark.svg"} alt="" fill className="" />
                    </span>
                  </div>

                  <p className="font-montserrat font-medium text-[14px] pl-[8px] w-[90%] text-grey-50 lg:text-[16px]">
                    We rely on reusable microfibre cloths, refillable bottles,
                    and sustainable packaging. 
                  </p>
                </div>
              </div>

              <div className="w-full h-[32px] border-l-[1px] border-grey-50" />

              <div className="flex">
                <div className="grid grid-rows-2">
                  <div className="w-[12px] border-l-[1px] border-grey-50" />
                  <div className="w-[12px] border-t-[1px] border-l-[1px] border-grey-50" />
                </div>
                <div className="flex items-center px-[8px] py-[8px] bg-brand-800 rounded-md  lg:py-[12px]">
                  <div className="w-[24px] h-[24px] bg-brand-500 flex justify-center items-center  rounded-full">
                    <span className="relative block  w-[10px] h-[10px]">
                      <Image src={"/icons/mark.svg"} alt="" fill className="" />
                    </span>
                  </div>

                  <p className="font-montserrat font-medium text-[14px] pl-[8px] w-[90%] text-grey-50 lg:text-[16px]">
                    We prioritise detailed, personalised cleans and build
                    long-term relationships with clients
                  </p>
                </div>
              </div>

              <div className="w-full h-[32px] border-l-[1px] border-grey-50" />

              <div className="flex">
                <div className="grid grid-rows-2">
                  <div className="w-[12px] border-l-[1px] border-grey-50" />
                  <div className="w-[12px] border-t-[1px] border-l-[1px] border-grey-50" />
                </div>
                <div className="flex items-center px-[8px] py-[8px] bg-brand-800 rounded-md  lg:py-[12px]">
                  <div className="w-[24px] h-[24px] bg-brand-500 flex justify-center items-center  rounded-full">
                    <span className="relative block  w-[10px] h-[10px]">
                      <Image src={"/icons/mark.svg"} alt="" fill className="" />
                    </span>
                  </div>

                  <p className="font-montserrat font-medium text-[14px] pl-[8px] w-[90%] text-grey-50 lg:text-[16px]">
                    Our future goal is to offer a supportive, growth-oriented
                    workplace for local staff we sponsor. 
                  </p>
                </div>
              </div>

              <div className="w-full h-[32px] border-l-[1px] border-grey-50" />

              <div className="flex">
                <div className="grid grid-rows-2">
                  <div className="w-[12px] border-l-[1px] border-b-[1px] border-grey-50" />
                  <div className="w-[12px] " />
                </div>
                <div className="flex items-center px-[8px] py-[8px] bg-brand-800 rounded-md  lg:py-[12px]">
                  <div className="w-[24px] h-[24px] bg-brand-500 flex justify-center items-center  rounded-full">
                    <span className="relative block  w-[10px] h-[10px]">
                      <Image src={"/icons/mark.svg"} alt="" fill className="" />
                    </span>
                  </div>

                  <p className="font-montserrat font-medium text-[14px] pl-[8px] w-[90%] text-grey-50 lg:text-[16px]">
                    We’re upfront with pricing, services, and product
                    ingredients, no surprises
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Abous us */}
        <section className="w-full mt-[32px] py-[16px] lg:grid lg:grid-cols-2 lg:justify-center">
          <div className="px-[32px] py-[32px] w-full lg:py-[0] lg:px-0 ">
            <div className="relative w-full h-[50vh] lg:h-full lg:w-[84%] lg:ml-auto">
              <Image
                src={"/images/aboutUs.webp"}
                fill
                alt=""
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="px-[32px] ">
              <h2 className="text-[28px] font-opensans font-semibold text-grey-800 pb-[16px] lg:text-[32px]">
                About Us
              </h2>
              <p className="text-grey-700 text-[14px] font-montserrat leading-[23px] lg:text-[16px] lg:w-[85%]  lg:leading-[26px]">
                EcoTouch Cleaning Service is a Westyolkshire-based cleaning
                company committed to providing safe, effective, and
                environmentally responsible cleaning solutions for homes and
                small businesses. We believe that a clean space should never
                come at the cost of the environment or your health
              </p>
            </div>

            <div className="bg-[#F3E9D8] px-[32px] py-[24px] my-[24px]">
              <h5 className="text-[18px] font-opensans text-grey-800 pb-[16px] lg:w-[60%] lg:text-[24px]">
                Founded on the principles of{" "}
                <span className="font-bold">
                  Trust, Transparency & Sustainability.
                </span>
              </h5>
              <p className="text-grey-700 text-[14px] font-montserrat leading-[23px] lg:text-[16px] lg:w-[85%] lg:leading-[26px]">
                EcoTouch was created to fill a growing gap in the local cleaning
                industry: high-quality, affordable cleaning that respects both
                people and the planet. At EcoTouch Cleaning Service, we believe
                a clean space shouldn’t compromise your health, pets, or the
                environment.
              </p>
            </div>

            <div className="px-[32px] ">
              <h6 className="font-opensans text-[18px] text-grey-800 pb-[16px] lg:w-[60%] lg:text-[24px]">
                <span className="font-bold">EcoTouch</span> is raising the
                standard of what clean truly means.
              </h6>
              <p className="text-grey-700 text-[14px] font-montserrat leading-[23px] lg:text-[16px] lg:w-[85%] lg:leading-[26px]">
                Founded in Huddersfield, our mission is to deliver high-quality,
                eco-friendly cleaning that’s plant-safe, pet-safe, and
                toxin-free. From regular home and office cleaning to vet clinic
                care and pet area sanitisation.
              </p>
            </div>
          </div>
        </section>

        {/* our vision */}
        <section className="px-[32px] py-[32px] lg:mt-[94px] lg:relative lg:px-[64px]">
          <div className="lg:w-[75%] lg:relative lg:z-[2]">
            <h2 className="text-[28px] font-opensans text-grey-800 font-semibold lg:text-[32px]">
              Our Vision
            </h2>
            <p className="text-grey-700 text-[14px] font-montserrat leading-[23px] lg:text-[16px]  lg:leading-[26px]">
              To deliver premium cleaning services using only non-toxic,
              eco-certified products and reusable tools protecting your space,
              your loved ones, and the environment with every clean. We’re
              committed to creating safe, healthy spaces not just for people,
              but also for pets and plants, because we believe cleanliness
              should support all life in your home or business. We’re not just
              cleaning, we’re building a company that
            </p>
          </div>

          <div className="relative overflow-hidden lg:top-[-95px] lg:z-[1] lg:py-[16px] md:top-[unset]">
            <div className="w-[1px] h-[90%] border-l-[2px] border-dashed border-grey-200 left-[40vw] bottom-0 absolute lg:hidden"/>
        
            <div className='hidden lg:block absolute w-[61vw] h-[5px] left-[12vw] rotate-[-20deg] top-[35vh] border-t-[4px] border-grey-200 border-dashed'/>
            <div className='hidden lg:block absolute w-[61vw] h-[45%]  top-[50vh] left-[15vw] lg:rotate-[-10deg] rounded-tr-[400px] rounded-br-[500px] border-t-[4px] border-r-[4px] border-b-[4px] border-grey-200 border-dashed'/>
            

            
            <div className="py-[24px] relative lg:block md:grid md:grid-cols-2 md:gap-4">
              <div className="bg-[#ffff] py-[24px] rounded-xl shadow-xl lg:w-[386px] lg:relative lg:left-[60vw] lg:rotate-[10deg] md:rotate-0 md:w-full">
                <div className="w-full h-[94px]">
                  <div className="w-[30px] h-[30px] border-[1px] border-grey-200 rounded-full shadow-inner mx-auto">
                    <span className="w-[20px] h-[20px] bg-brand-900 rounded-full block"></span>
                  </div>
                </div>
                <div className="bg-[#F3E9D8] flex justify-center py-[32px] items-center px-[16px] w-[90%] rounded-xl mx-auto ">
                  <div className="w-[90%] mx-auto">
                    <h4 className="text-[24px] font-bold font-opensans text-grey-800 lg:w-[28px]">
                      01
                    </h4>
                    <h4 className="text-[20px] font-bold font-opensans py-[20px] text-grey-800 lg:text-[24px]">
                      Support
                    </h4>
                    <p className="text-[14px] leading-[23px] font-montserrat text-grey-700 lg:text-[16px]">
                      we supports wellbeing with toxin-free spaces
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#ffff] py-[24px] rounded-xl shadow-xl my-[62px] lg:my-0  lg:relative lg:left-[2vw] lg:w-[386px] lg:rotate-[-10deg] md:rotate-0 md:w-full">
                <div className="w-full h-[94px]">
                  <div className="w-[30px] h-[30px] border-[1px] border-grey-200 rounded-full shadow-inner mx-auto">
                    <span className="w-[20px] h-[20px] bg-brand-900 rounded-full block"></span>
                  </div>
                </div>
                <div className="bg-[#F3E9D8] flex justify-center py-[32px] items-center px-[16px] w-[90%] rounded-xl mx-auto ">
                  <div className="w-[90%] mx-auto">
                    <h4 className="text-[24px] font-bold font-opensans text-grey-800 lg:w-[28px]">
                      02
                    </h4>
                    <h4 className="text-[20px] font-bold font-opensans py-[20px] text-grey-800 lg:text-[24px]">
                      Empowerment
                    </h4>
                    <p className="text-[14px] leading-[23px] font-montserrat text-grey-700 lg:text-[16px]">
                      we empower comunities through job creation and development
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#ffff] py-[24px] rounded-xl shadow-xl lg:relative lg:w-[386px] lg:left-[60vw] lg:rotate-[10deg] md:rotate-0 md:w-full">
                <div className="w-full h-[94px]">
                  <div className="w-[30px] h-[30px] border-[1px] border-grey-200 rounded-full shadow-inner mx-auto">
                    <span className="w-[20px] h-[20px] bg-brand-900 rounded-full block"></span>
                  </div>
                </div>
                <div className="bg-[#F3E9D8] flex justify-center py-[32px] items-center px-[16px] w-[90%] rounded-xl mx-auto ">
                  <div className="w-[90%] mx-auto">
                    <h4 className="text-[24px] font-bold font-opensans text-grey-800 lg:w-[28px]">
                      03
                    </h4>
                    <h4 className="text-[20px] font-bold font-opensans py-[20px] text-grey-800 lg:text-[24px]">
                      Champion
                    </h4>
                    <p className="text-[14px] leading-[23px] font-montserrat text-grey-700 lg:text-[16px]">
                      we champion sustainability in every service
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#ffff] py-[24px] rounded-xl shadow-xl mt-[62px] lg:mt-0 lg:relative lg:left-[3vw] lg:w-[386px] lg:rotate-[-10deg] md:rotate-0 md:w-full">
                <div className="w-full h-[94px]">
                  <div className="w-[30px] h-[30px] border-[1px] border-grey-200 rounded-full shadow-inner mx-auto">
                    <span className="w-[20px] h-[20px] bg-brand-900 rounded-full block"></span>
                  </div>
                </div>
                <div className="bg-[#F3E9D8] flex justify-center py-[32px] items-center px-[16px] w-[90%] rounded-xl mx-auto lg:py-[64px]">
                  <div className="w-[90%] mx-auto">
                    <h4 className="text-[24px] font-bold font-opensans text-grey-800 lg:w-[28px]">
                      04
                    </h4>
                    <h4 className="text-[20px] font-bold font-opensans py-[20px] text-grey-800 lg:text-[24px]">
                      Professional
                    </h4>
                    <p className="text-[14px] leading-[23px] font-montserrat text-grey-700 lg:text-[16px]">
                      We’re here to make your space look good, feel fresh, and
                      live well, with a professional touch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* our mission */}
        <section className='px-[32px]'>
          <div className='relative w-full h-[25vh]'>
            <Image src={"/images/ourMission.webp"} fill alt="" className='absolute' />
             
          </div>

        </section>

        {/* Contact us */}
        <section></section>
      </main>

      <footer></footer>

      <Sidebar sideBarStatus={sideBarStatus} handleSidebar={handleSideBar} />
    </div>
  );
}
