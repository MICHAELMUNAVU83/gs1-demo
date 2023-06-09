import React from "react";
import sectorsheaderbg from "../images/sectorsheaderbg.png";
const SectorsHeader = ({ setSelectedsector, selectedsector }) => {
  const sectors = [
    {
      id: 1,
      name: "Food",
    },
    {
      id: 2,
      name: "HealthCare",
    },
    {
      id: 3,
      name: "Transport",
    },
    {
      id: 4,
      name: "Retail",
    },
  ];
  return (
    <div
      className="flex md:p-8 p-2 flex-col  bg-cover bg-center bg-no-repeat h-[250px] md:h-[200px]"
      style={{
        backgroundImage: `url(${sectorsheaderbg})`,
      }}
    >
      <h1 className="text-white text-5xl font-bold">GS1 Sectors</h1>
      <div className="flex flex-wrap justify-between md:py-8 py-2 items-center">
        {sectors.map((sector) => (
          <div
            className={
              selectedsector === sector.name
                ? "  bg-[#F26334] text-white md:w-[123px] my-2 w-[180px]  md:h-[60px]  cursor-pointer  rounded-lg flex  items-center justify-center   p-4"
                : "bg-white md:w-[123px] w-[180px] my-2 gap-2 md:h-[60px]  cursor-pointer  rounded-lg flex items-center justify-center p-4  "
            }
            onClick={() => setSelectedsector(sector.name)}
          >
            <p className="font-bold text-xs  md:text-xl  text-center">
              {sector.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorsHeader;
