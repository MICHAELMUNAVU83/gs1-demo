import React, { useState } from "react";
import SectorsHeader from "../components/SectorsComponents/SectorsHeader";
import Food from "../components/SectorsComponents/Food";
import HealthCare from "../components/SectorsComponents/HealthCare";
import Retail from "../components/SectorsComponents/Retail";
import Transport from "../components/SectorsComponents/Transport";
const Sectors = () => {
  const [selectedsector, setSelectedsector] = useState("Food");
  return (
    <div className="md:ml-[280px] mx-auto ">
      <SectorsHeader
        setSelectedsector={setSelectedsector}
        selectedsector={selectedsector}
      />
      {selectedsector === "Food" && <Food />}
      {selectedsector === "HealthCare" && <HealthCare />}

      {selectedsector === "Retail" && <Retail />}
      {selectedsector === "Transport" && <Transport />}
    </div>
  );
};

export default Sectors;
