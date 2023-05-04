import React from "react";
import sectorsheaderbg from "../images/sectorsheaderbg.png";
const SectorsHeader = () => {
  return (
    <div
      className="flex p-8 flex-col  bg-cover bg-center bg-no-repeat h-[200px]"
      style={{
        backgroundImage: `url(${sectorsheaderbg})`,
      }}
    >
      <h1 className="text-white text-5xl font-bold">GS1 Sectors</h1>
    </div>
  );
};

export default SectorsHeader;
