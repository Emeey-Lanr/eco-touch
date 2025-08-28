'use client'
import Sidebar from '@/components/Sidebar';
import Image from 'next/image'
import {useState, useRef, ChangeEvent, FormEvent} from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger)
export default function Home() {
  const root = useRef<HTMLDivElement | null>(null)

  const [sideBarStatus, setSideBarStatus] = useState<boolean>(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "", newsLetter: false })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value, checked } = e.target as HTMLInputElement 
    
    setFormData({...formData, [name]: type === "checkbox" ? checked : value})
  }  

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    const phoneNumber = `+447867286358`;
    const text = `Name:${formData.name}%0AEmail:${formData.email}%0AMessage:${formData.message}%0ASubscribeToNewsLetter:${formData.newsLetter}`
    const url = `https://wa.me/${phoneNumber}?text=${text}`
    window.open(url, "_blank")
    
  }
  useEffect(()=>{
    if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    
    const animation = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".revealY").forEach((value, index) => {
        gsap.fromTo(
          value,
          { opacity: 0, y: 50 },
          {
            opacity:1,
            y:0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: value,
              start:"top 80%",
              toggleActions:"play none none reverse"
            }
          }
        )
      })

       gsap.utils.toArray<HTMLElement>(".revealX").forEach((value, index) => {
        gsap.fromTo(
          value,
          { opacity: 0, x: 50 },
          {
            opacity:1,
            x:0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: value,
              start:"top 80%",
              toggleActions:"play none none reverse"
            }
          }
        )
      })

    }, root)

  },[])

  const handleSideBar = () => {
  
    setSideBarStatus(!sideBarStatus)
  }
  return (
    <div ref={root} className="bg-bc relative w-full h-full">
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
        <section
          id={"home"}
          className="w-full h-[80vh] relative overflow-hidden lg:h-[100vh]"
        >
          <Image
            src={"/images/hero.webp"}
            alt="hero"
            className="rounded-xl absolute top-0 object-cover"
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
            </div>
          </div>
        </section>

        {/* services */}
        <section
          id={"services"}
          className="py-[24px] px-[16px] lg:pt-[48px] lg:pb-0"
        >
          <h2 className="revealY font-opensans text-grey-900 text-[28px] font-semibold text-center lg:font-bold lg:text-[32px]">
            Our Services
          </h2>
          <div className="grid grid-cols-2 pt-[24px] lg:grid-cols-4  lg:justify-center">
            <div className="revealY py-[16px] lg:flex lg:justify-center lg:items-center ">
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

            <div className="revealY py-[16px] lg:flex lg:justify-center lg:items-center">
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

            <div className="revealY py-[16px] lg:flex lg:justify-center lg:items-center ">
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

            <div className="revealY py-[16px] lg:flex lg:justify-center lg:items-center ">
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

            <div className="revealY py-[16px] lg:flex lg:justify-center lg:items-center ">
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

            <div className="revealY py-[16px] lg:flex lg:justify-center lg:items-center ">
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

            <div className="revealY py-[16px] lg:flex lg:justify-center lg:items-center ">
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

            <div className="revealY py-[16px] lg:flex lg:justify-center lg:items-center ">
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
        <section className="px-[16px] py-[16px] lg:grid lg:grid-cols-2 lg:justify-center lg:items-center lg:py-[120px]">
          <div className="revealY w-full h-[50vh] relative lg:w-[80%] lg:mx-auto">
            <Image
              src={"/images/family.webp"}
              alt=""
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="revealY py-[16px] lg:w-[80%]">
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

      <main>
        {/* what set us apart  */}
        <section className="bg-brand-900  py-[16px] relative lg:py-[48px]  overflow-hidden">
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
            <h2 className="revealY font-opensans text-center text-grey-50 text-[24px] lg:text-[32px] lg:font-bold">
              Discover what set us apart
            </h2>
            <p className="revealY font-montserrat text-[14px] text-grey-50 py-[12px] text-center lg:text-[16px] lg:w-[70%] lg:mx-auto">
              know more about our distinguishing features and advantages that
              put us ahead of our competitors.
            </p>
          </div>

          <div className="px-[32px] lg:grid lg:grid-cols-[40%_200px_40%] lg:justify-center lg:items-center">
            <div className="mt-[16px]">
              <h2 className="revealY font-opensans font-semibold text-[20px] text-grey-50 py-[16px] lg:text-center lg:text-[28px]">
                Others
              </h2>
              <div className="revealY flex lg:w-full">
                <div className=" flex items-center px-[8px] py-[8px] bg-brand-500 rounded-md lg:w-full lg:py-[12px]">
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

              <div className="revealY w-full h-[32px] border-r-[1px] border-grey-50" />

              <div className="revealY flex">
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

              <div className="revealY w-full h-[32px] border-r-[1px] border-grey-50" />

              <div className="revealY flex">
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

              <div className="revealY w-full h-[32px] border-r-[1px] border-grey-50" />

              <div className="revealY flex">
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

              <div className="revealY w-full h-[32px] border-r-[1px] border-grey-50" />

              <div className="revealY flex">
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

            <div className="revealY flex justify-center items-center py-[16px]">
              <span className="relative w-[42px] h-[63px]">
                <Image src={"/images/eco-touch-vector.svg"} alt="" fill />
              </span>
            </div>

            <div className="lg:w-full">
              <h2 className="revealY font-opensans font-semibold text-[20px] ml-[12px] text-grey-50 py-[16px] lg:text-center lg:text-[28px]">
                Eco Touch
              </h2>
              <div className="revealY flex">
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

              <div className="revealY w-full h-[32px] border-l-[1px] border-grey-50" />

              <div className="revealY flex">
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

              <div className="revealY w-full h-[32px] border-l-[1px] border-grey-50" />

              <div className="revealY flex">
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

              <div className="revealY w-full h-[32px] border-l-[1px] border-grey-50" />

              <div className="revealY flex">
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

              <div className="revealY w-full h-[32px] border-l-[1px] border-grey-50" />

              <div className="revealY flex">
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
        <section className="w-full py-[32px] lg:grid lg:grid-cols-2 lg:justify-center lg:py-[120px]">
          <div className="px-[32px] py-[32px] w-full lg:py-[0] lg:px-0 ">
            <div className="revealY relative w-full h-[50vh] lg:h-full lg:w-[84%] lg:ml-auto">
              <Image
                src={"/images/aboutUs.webp"}
                fill
                alt=""
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          <div id={"about-us"} className="w-full">
            <div className="revealY px-[32px] ">
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

            <div className="revealY bg-[#F3E9D8] px-[32px] py-[24px] my-[24px]">
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

            <div className="revealY px-[32px] ">
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
        <section className="px-[32px] pb-[32px] lg:pb-[120px] lg:relative lg:px-[64px]">
          <div className="revealY lg:w-[75%] lg:relative lg:z-[2]">
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
            <div className="w-[1px] h-[90%] border-l-[2px] border-dashed border-grey-200 left-[40vw] bottom-0 absolute lg:hidden" />

            <div className="hidden lg:block revealY absolute w-[61vw] h-[5px] left-[12vw] rotate-[-20deg] top-[35vh] border-t-[4px] border-grey-200 border-dashed" />
            <div className="hidden lg:block revealY absolute w-[61vw] h-[45%]  top-[50vh] left-[15vw] lg:rotate-[-10deg] rounded-tr-[400px] rounded-br-[500px] border-t-[4px] border-r-[4px] border-b-[4px] border-grey-200 border-dashed" />

            <div className="py-[24px] relative lg:block md:grid md:grid-cols-2 md:gap-4">
              <div className="revealY bg-[#ffff] rotate-0 py-[24px] rounded-xl shadow-xl lg:w-[386px] lg:relative lg:left-[60vw] lg:rotate-[10deg] md:rotate-0 md:w-full">
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

              <div className="revealY bg-[#ffff] rotate-0 py-[24px] rounded-xl shadow-xl my-[62px] lg:my-0  lg:relative lg:left-[2vw] lg:w-[386px] lg:rotate-[-10deg] md:rotate-0 md:w-full">
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

              <div className="revealY bg-[#ffff] rotate-0 py-[24px]  rounded-xl shadow-xl lg:relative lg:w-[386px] lg:left-[60vw] lg:rotate-[10deg] md:rotate-0 md:w-full">
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

              <div className="revealY bg-[#ffff] rotate-0 py-[24px] rounded-xl shadow-xl mt-[62px] lg:mt-0 lg:relative lg:left-[3vw] lg:w-[386px] lg:rotate-[-10deg] md:rotate-0 md:w-full">
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
        <section className="px-[32px] pb-[32px] lg:px-[64px] lg:pb-[120px]">
          <div className="revealY relative w-full h-[25vh] flex justify-center items-center lg:h-[30vh]">
            <Image
              src={"/images/ourMission.webp"}
              fill
              alt=""
              className="absolute rounded-xl object-cover"
            />
            <h2 className="text-[28px] font-opensans font-semibold text-grey-50 relative lg:text-[32px] ">
              Our Mission
            </h2>
          </div>

          <div>
            <div className="revealY grid grid-cols-[20px_95%] gap-3 py-[32px] lg:w-[50%] lg:py-[64px]">
              <span className="w-full h-[20px] bg-brand-900 flex justify-center items-center rounded-full font-montserrat text-grey-50 text-[20px]">
                *
              </span>
              <p className="text-grey-700 font-montserrat leading-[26px] text-[14px] lg:text-[16px]">
                To become Yolkshire’s most trusted eco-cleaning brand and to
                grow into a business that grows our impact and workforce.
                EcoTouch aims to be a regional leader in ethical cleaning
                services, supporting local employment and contributing to the
                green economy and inclusive opportunities.
              </p>
            </div>

            <div className="revealY grid grid-cols-[20px_95%] gap-3 lg:w-[50%] lg:ml-auto">
              <span className="w-full h-[20px] bg-brand-900 flex justify-center items-center rounded-full font-montserrat text-grey-50 text-[20px]">
                *
              </span>
              <p className="text-grey-700 font-montserrat leading-[26px] text-[14px] lg:text-[16px]">
                We aim to be a platform that create second-chance employment
                pathways, offering work to individuals rebuilding their lives,
                and contributing positively to the community.
              </p>
            </div>
          </div>
        </section>

        {/* Contact us */}
        <section
          id={"contact-us"}
          className="px-[32px] py-[32px] lg:w-[87%] lg:mx-auto lg:grid lg:grid-cols-[45%_45%] justify-between"
        >
          <div className="revealY pb-[16px]">
            <h2 className="font-opensans text-[28px] text-grey-800 font-semibold lg:text-[32px]">
              Contact Us
            </h2>
            <p className="leading-[26px] text-[14px] font-montserrat text-grey-700 lg:text-[16px]">
              By filling the form you can reach out to us and if you have any
              question, we will be happy to hear from you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="revealY bg-brand-900 rounded-xl mt-[28px] px-[28px] py-[24px] lg:mt-0 lg:py-[48px]"
          >
            <div>
              <label className="text-[14px] text-grey-50 font-montserrat block lg:text-[16px]">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full text-[14px] text-grey-50 bg-brand-900 font-montserrat h-[40px] rounded-xl border border-grey-50 px-2 focus:outline-brand-500 focus:border-0 transition duration-700 lg:h-[46px]"
              />
            </div>

            <div className="py-[16px]">
              <label className="text-[14px] text-grey-50 font-montserrat block lg:text-[16px]">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-[14px] text-grey-50 bg-brand-900 font-montserrat h-[40px] rounded-xl border border-grey-50 px-2 focus:outline-brand-500 focus:border-0 transition duration-700 lg:h-[46px]"
              />
            </div>

            <div>
              <label className="text-[14px] text-grey-50 font-montserrat block lg:text-[16px]">
                Message
              </label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[120px] text-grey-[14px] py-[8px] rounded-xl px-2 w-full text-grey-50 bg-brand-900 resize-none border border-grey-50 focus:outline-brand-500 focus:border-0 transition duration-700 lg:h-[92px]"
              ></textarea>
            </div>

            <div className="grid grid-cols-[16px_98%] gap-2 py-[16px]">
              <label
                htmlFor="checkboxHide"
                className="w-[16px] h-[16px] rounded-sm border border-grey-50 flex justify-center items-center "
              >
                <span
                  className={
                    formData.newsLetter
                      ? "w-[8px] rounded-full h-[8px] bg-brand-100"
                      : "w-[8px] rounded-full h-[8px]"
                  }
                />
                <input
                  onChange={handleChange}
                  id="checkboxHide"
                  name="newsLetter"
                  checked={formData.newsLetter}
                  hidden
                  className=""
                  type="checkbox"
                />
              </label>

              <p className="font-montserrat text-[12px] text-grey-50 ml-[4px] lg:text-[14px]">
                Signup for our email lists, updates, promotion and more
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="w-full text-grey-50 bg-brand-500 rounded-full h-[40px] font-opensans flex justify-center items-center font-semibold lg:h-[46px]"
              >
                Contact us
                <span className="relative w-[16px] h-[16px]">
                  <Image src={"/icons/arrow-forward.svg"} alt="" fill />
                </span>
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-brand-900  w-full lg:mt-[120px]">
        <div className="w-[74px] h-[110px] absolute right-0 top-[30px] lg:top-[20px]">
          <Image src={"/images/background-eco.svg"} alt="" fill />
        </div>

        <div className="w-[74px] h-[110px] absolute hidden top-[25px] lg:block lg:top-[30px]">
          <Image src={"/images/background-eco.svg"} alt="" fill />
        </div>

        <div className="w-[74px] h-[110px] absolute right-0 hidden top-[200px] lg:block lg:top-[250px] lg:right-[400px]">
          <Image src={"/images/background-eco.svg"} alt="" fill />
        </div>

        <div className="w-[74px] h-[110px] absolute top-[500px]  lg:top-[220px] lg:left-[400px]">
          <Image src={"/images/background-eco.svg"} alt="" fill />
        </div>

        <div className="w-full h-[32px] rounded-b-3xl bg-bc" />

        <div className="px-[32px] py-[32px] box-border  lg:py-[16px]">
          <div className="relative w-[42px] h-[63px] lg:mx-auto">
            <Image src={"/images/eco-touch-vector.svg"} alt="" fill />
          </div>
          <h2 className="text-grey-50 font-bold text-[28px] lg:text-center">
            EcoTouch
          </h2>
          <p className="font-montserrat text-[14px] italic text-grey-50 lg:text-center">
            "created to fill a growing gap in the local cleaning industry"
          </p>
        </div>

        <div className="px-[32px] pb-[32px] lg:flex lg:justify-center lg:items-center lg:pb-[16px]">
          <div className="grid grid-cols-[16px_95%] gap-2 items-center">
            <span className="h-[16px] relative w-[16px]">
              <Image src={"/icons/location.svg"} alt="" fill />
            </span>
            <p className="text-grey-50 font-montserrat text-[14px]">
              Huddersfield, West Yorkshire
            </p>
          </div>

          <div className="grid grid-cols-[16px_95%] gap-2 items-center py-[16px] lg:py-0 lg:px-[12px]">
            <span className="h-[16px] relative w-[16px]">
              <Image src={"/icons/mail.svg"} alt="" fill />
            </span>
            <p className="text-grey-50 font-montserrat text-[14px]">
              info@ecotouchclean.co.uk
            </p>
          </div>

          <div className="grid grid-cols-[16px_95%] gap-2 items-center">
            <span className="h-[16px] relative w-[16px]">
              <Image src={"/icons/phone.svg"} alt="" fill />
            </span>
            <p className="text-grey-50 font-montserrat text-[14px]">
              + 44 7867 286358
            </p>
          </div>
        </div>

        <div className="px-[32px] pb-[32px] lg:flex lg:justify-center lg:items-center lg:px-[16px]">
          <a
            href="#"
            className="block text-grey-50 font-montserrat lg:text-[16px]"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-grey-50 font-montserrat py-[16px] lg:py-0 lg:text-[16px] lg:px-[12px]"
          >
            Services
          </a>
          <a
            href="#"
            className="block text-grey-50 font-montserrat pb-[16px] lg:py-0 lg:text-[16px] lg:pr-[12px]"
          >
            About us
          </a>
          <a
            href="#"
            className="block text-grey-50 font-montserrat lg:text-[16px]"
          >
            Contact us
          </a>
        </div>

        <div className="border-t border-grey-50/30 px-[32px] py-[16px]">
          <p className="text-grey-50 font-montserrat text-[12px] text-center ">
            {" "}
            Copyright &copy; 2025 EcoTouch Cleaning Services - All Rights
            Reserved{" "}
          </p>
        </div>
      </footer>

      <Sidebar sideBarStatus={sideBarStatus} handleSidebar={handleSideBar} />
    </div>
  );
}
