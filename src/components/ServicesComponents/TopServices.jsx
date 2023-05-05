import React from "react";
import topservicesbg from "../images/topservicesbg.png";
import "../splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const TopServices = () => {
  const services = [
    {
      id: 1,
      name: "Barcode Services",
    },
    {
      id: 2,
      name: "Training",
    },

    {
      id: 3,
      name: "Fixed Asset Solutions",
    },
    {
      id: 4,
      name: "Our Standards",
    },
    {
      id: 5,
      name: "Digital Calculator",
    },
  ];

  return (
    <div>
      <div
        className="flex flex-col  bg-cover bg-center bg-no-repeat h-[200px]"
        style={{
          backgroundImage: `url(${topservicesbg})`,
        }}
      >
        <h1 className="p-4 font-bold text-5xl text-white">Top Services</h1>
        <div className="p-4">
          <Splide
            className="px-16 hidden py-4 md:block h-[80px]"
            options={{
              perPage: 4,
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
            {services.map((service) => (
              <SplideSlide className="w-[257px] h-[60px]" key={service.id}>
                <div className="bg-white cursor-pointer h-[60px]  rounded-lg p-4">
                  <p className="text-black font-bold  text-2xl  text-center">
                    {service.name}
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>

          <Splide
            className="px-16 md:hidden  h-[70px]"
            options={{
              perPage: 1,
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
            {services.map((service) => (
              <SplideSlide className="w-[257px] h-[60px]" key={service.id}>
                <div className="bg-white cursor-pointer  h-[60px] rounded-lg p-4">
                  <p className="text-black font-bold    text-center">
                    {service.name}
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
