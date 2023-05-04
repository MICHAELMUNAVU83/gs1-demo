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
      className="flex p-8 flex-col  bg-cover bg-center bg-no-repeat h-[200px]"
      style={{
        backgroundImage: `url(${sectorsheaderbg})`,
      }}
    >
      <h1 className="text-white text-5xl font-bold">GS1 Sectors</h1>
      <div className="flex justify-between py-8 items-center">
        {sectors.map((sector) => (
          <div
            className={
              selectedsector === sector.name
                ? "  bg-[#F26334] text-white w-[123px] h-[60px] cursor-pointer  rounded-lg flex items-center justify-center p-4"
                : "bg-white w-[123px] h-[60px] cursor-pointer  rounded-lg flex items-center justify-center p-4"
            }
            onClick={() => setSelectedsector(sector.name)}
          >
            <p className="font-bold  text-xl  text-center">
              {sector.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorsHeader;
