import React from "react";
import foodicon from "../images/foodicon.png";
import retailicon from "../images/retailicon.png";
import transporticon from "../images/transporticon.png";
import healthicon from "../images/healthicon.png";
import phonesectorpic from "../images/phonesectorpic.png";
import unlockservice from "../images/unlockservice.png";
import "../splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import innovation1 from "../images/innovation1.png";
import innovation2 from "../images/innovation2.png";
import arrow from "../images/arrow.png";
import needabarcode from "../images/needabarcode.png";
import bvr from "../images/bvr.png";
import fraud1 from "../images/fraud1.png";
import fraud2 from "../images/fraud2.png";
const AllServices = () => {
  const services = [
    {
      id: 1,
      title: "Food ",
      image: foodicon,
    },
    {
      id: 2,
      title: "Transport",
      image: transporticon,
    },
    {
      id: 3,
      title: "Heatlhcare",
      image: healthicon,
    },
    {
      id: 4,
      title: "Retail",
      image: retailicon,
    },
  ];
  const innovations = [
    {
      id: 1,
      title: "Thamani Online Platform",
      paragraph: "The seamless retail platform",
      image: innovation1,
    },
    {
      id: 2,
      title: "Healthcare",
      paragraph: "It starts with you!",
      image: innovation2,
    },
    {
      id: 3,
      title: "Thamani Online Platform",
      paragraph: "The seamless retail platform",
      image: innovation1,
    },
    {
      id: 4,
      title: "Healthcare",
      paragraph: "It starts with you!",
      image: innovation2,
    },
  ];

  return (
    <div>
      <div className="p-8">
        <h1 className="text-5xl my-4 font-bold">
          We Cater to the Following Sectors
        </h1>
        <div className="flex gap-8">
          {services.map((service) => (
            <div
              className="flex bg-[#F26334] flex-col items-center cursor-pointer hover:scale-105 transition ease-in-out duration-300"
              key={service.id}
              style={{
                borderRadius: "5px",
              }}
            >
              <img
                src={phonesectorpic}
                alt="service"
                className="w-[250px] h-[250px]"
              />
              <div className="flex py-2 items-center gap-2">
                <img
                  src={service.image}
                  alt="phonesectorpic"
                  className="w-[36px] h-[40px]"
                />
                <p className="text-2xl text-white font-bold">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex bg-cover bg-center h-[415px] justify-center items-center"
        style={{
          backgroundImage: `url(${unlockservice})`,
        }}
      />

      <div className="flex p-8 flex-col ">
        <h1 className="text-5xl my-4 font-bold">
          Unlock the Power of GS1 Standards
        </h1>
        <p className="w-[85%] text-xl">
          GS1 standards allow you to easily identify, manage, and share product
          data with your trading partners, supply chains, and customers to
          streamline operations, cut costs, and deliver richer, more satisfying
          customer experiences.
        </p>
        <button
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          className="w-[197px] text-start h-[64px] cursor-pointer hover:scale-105 transition duration-500 ease-in-out font-bold uppercase text-2xl bg-[#F26334] text-white flex justify-center items-center rounded-lg mt-4"
        >
          Learn More
        </button>
      </div>

      <div className="flex p-8 flex-col ">
        <h1 className="text-5xl my-4 font-bold">New Innovations</h1>
        <Splide
          className="px-16 w-[85%]"
          options={{
            perPage: 2,
            type: "loop",
            perMove: 1,
            rewind: true,
            gap: "1rem",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            arrows: true,
            pagination: false,
          }}
        >
          {innovations.map((innovation) => (
            <SplideSlide
              className="w-[348px] h-[348px] flex  items-end bg-cover bg-center bg-no-repeat"
              key={innovation.id}
              style={{
                backgroundImage: `url(${innovation.image})`,
              }}
            >
              <div className="p-8 text-white">
                <p className=" font-bold  text-2xl  text-center">
                  {innovation.title}
                </p>
                <p>{innovation.paragraph}</p>
                <div className="flex gap-2 text-white items-center">
                  <p className="underline">Learn More</p>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-[19.2px] h-[12px]"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="flex mt-8 gap-12">
        <img
          src={needabarcode}
          alt="needabarcode"
          className="w-[380px] h-[380px]"
        />
        <div className="flex  flex-col  justify-between">
          <h1 className="text-5xl font-bold">Need a Bar Code?</h1>
          <p className="w-[65%] leading-[24px] text-xl">
            GS1 Barcodes enable trading on a global scale with over 2 million
            companies currently using them. While barcodes play a very important
            role in the supply chain, when done wrong barcodes can cause so many
            problems that might lead to disruptions in the supply chain
            processes. It is due to this that GS1 Kenya offers services on
            barcoding to all supply chain stake holders to ensure that barcodes
            are put into effecient use.
          </p>
          <button
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="w-[260px] text-start h-[64px] cursor-pointer hover:scale-105 transition duration-500 ease-in-out font-bold uppercase text-2xl bg-[#F26334] text-white flex justify-center items-center rounded-lg mt-4"
          >
            Make an Inquiry
          </button>
        </div>
      </div>

      <div
        className="flex bg-cover my-16 bg-center h-[415px] justify-center items-center"
        style={{
          backgroundImage: `url(${unlockservice})`,
        }}
      />

      <div className="flex flex-col mt-8 p-8 gap-12">
        <h1 className="text-[60px] w-[824px] font-bold">
          Upgrade Your Company with Standards Training
        </h1>
        <p className="w-[918px] text-2xl">
          For over 10 years we've trained thousands of companies on our
          standards and solutions
        </p>
        <button
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          className="w-[197px] text-start h-[64px] cursor-pointer hover:scale-105 transition duration-500 ease-in-out font-bold uppercase text-2xl bg-[#F26334] text-white flex justify-center items-center rounded-lg mt-4"
        >
          Learn More
        </button>
      </div>

      <div className="flex mt-8 gap-12">
        <img src={bvr} alt="needabarcode" className="w-[380px] h-[380px]" />
        <div className="flex  flex-col  justify-between">
          <h1 className="text-5xl font-bold w-[50%]">
            Is Your Barcode Verification Report Genuine?
          </h1>
          <p className="w-[65%] leading-[24px] text-xl">
            Not all barcode verification reports are created equal. To ensure
            that you receive a genuine GS1 Barcode Verification Report, you
            should only use a GS1-accredited verification service.
            GS1-accredited verification services are authorized to test and
            verify your barcodes against global standards, ensuring that your
            report is accurate and reliable.
          </p>
          <button
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="w-[331px] text-start h-[64px] cursor-pointer hover:scale-105 transition duration-500 ease-in-out font-bold uppercase text-2xl bg-[#F26334] text-white flex justify-center items-center rounded-lg mt-4"
          >
            BVR AUTHENTIFICATION
          </button>
        </div>
      </div>

      <p className="bg-black h-[3px] mx-auto w-[80%] my-12" />

          <div className="w-[70%] my-8 mx-auto">
              
              <h1 className="text-5xl text-center my-4 font-bold">Fraud Alert!</h1>
                  
          
        <div className="flex justify-between">
          <div
            style={{
              backgroundImage: `url(${fraud1})`,
            }}
            className="w-[420px] flex   justify-start items-end p-8 h-[420px] bg-cover bg-center bg-no-repeat"
          >
            <div className="flex flex-col text-white">
              <p className="font-bold text-3xl">Arnold Polycarp Okello</p>
              <p>ID Number 32473146</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${fraud2})`,
            }}
            className="w-[420px] flex   justify-start items-end p-8 h-[420px] bg-cover bg-center bg-no-repeat"
          >
            <div className="flex flex-col text-white">
              <p className="font-bold text-3xl">James Macharia</p>
              <p>ID Number 31559820</p>
            </div>
          </div>
        </div>

        <p className="w-[95%] text-xl">
          It is notified for the general public that the two named persons
          herein ceased to be employees of GS1 Kenya. The management hereby
          denies to accept any responsibility for transactions done and the
          company will not be liable in any manner whatsoever with respect to
          transactions conducted by the above two named persons.
        </p>
        <button
          className="w-[226px] text-start h-[64px] cursor-pointer hover:scale-105 transition duration-500 ease-in-out font-bold uppercase text-2xl bg-[#F26334] text-white flex justify-center items-center rounded-lg mt-4"
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Report Fraud
        </button>
      </div>
    </div>
  );
};

export default AllServices;
