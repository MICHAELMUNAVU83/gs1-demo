import React from "react";
import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";
import slider3 from "../images/slider3.png";
import slider4 from "../images/slider4.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper";
const HeroSliders = () => {
  const slides = [
    {
      id: 1,
      image: slider1,
      title: "Welcome to GS1 Kenya, The Global Language of Business.",
      paragaph: "",
      button: "",
    },
    {
      id: 2,
      image: slider2,
      title:
        "We empower business to grow and to improve efficiency, safety, security and sustainability.",
      paragaph:
        "We achieve this through offering globally acceptable numbers for Barcodes and RFID tags supporting supply chains.",
      button: "",
    },
    {
      id: 3,
      image: slider3,
      title:
        "Over two million companies globally use our barcodes, including all major retailers and online marketplaces, foodservice operators and healthcare organisations",
      paragaph: "",
      button: "",
    },
    {
      id: 4,
      image: slider4,
      title:
        "Whether SMEs or large corporates, our solutions are tailor made to cater for business needs of all sizes.",
      paragaph: "",
      button: "Learn More",
    },
  ];
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-[100%] cursor-pointer"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="flex flex-col justify-center items-center bg-cover bg-right md:bg-center bg-no-repeat h-[100vh]"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="text-start">
                <p className=" md:w-[800px] w-[80%] mx-auto font-bold text-2xl md:text-5xl ">
                  {slide.title}
                </p>
                {slide.paragaph && (
                  <p className=" md:w-[800px] w-[80%] mx-auto text-sm md:text-2xl ">
                    {slide.paragaph}
                  </p>
                )}
                {slide.button && (
                  <button className=" md:w-[197px] w-[60%] mx-auto md:mx-0  text-start h-[64px]  text-xl font-bold uppercase md:text-2xl bg-[white] text-black flex justify-center items-center rounded-lg mt-4">
                    {slide.button}
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSliders;
