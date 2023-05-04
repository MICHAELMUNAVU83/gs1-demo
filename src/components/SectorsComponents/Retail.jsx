import React from "react";
import retailpic from "../images/retailpic.jpeg";
const Retail = () => {
  return (
    <div>
      <div
        className="bg-cover  h-[500px] bg-top "
        style={{
          backgroundImage: `url(${retailpic})`,
        }}
      />

      <div className="p-8">
        <h1 className="text-5xl font-bold">Retail</h1>
        <p className="md:w-[90%] w-[95%] mx-auto md:mx-0 text-xl my-8">
          As a fiercely competitive, multi-trillion-dollar industry, Foodservice
          is driving forward at an accelerated rate. This forever evolving
          segment is on the cusp of expansion, encompassing any business,
          institution or company responsible for meals prepared outside of the
          home. This extensive market includes manufacturers, distributors and
          operators, all of whom are tasked and responsible for increased
          visibility, efficiency and food safety, among other regulatory
          demands. The Foodservice supply chain is known to be complex, dynamic,
          and consumer driven, but with the help of GS1 standards, the process
          becomes simplified. GS1 enables users to speak a common language and
          begin to share trusted information, which allows for stronger
          communication between trading partners, ultimately benefiting the
          consumer.
        </p>
        <button className="w-[217px] md:mx-0 mx-auto text-start h-[64px] font-bold uppercase text-2xl bg-[#F26334] text-white flex justify-center items-center rounded-lg mt-4">
          Make Inquiry
        </button>
      </div>
    </div>
  );
};

export default Retail;
