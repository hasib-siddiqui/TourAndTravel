import React from "react";
import SectionDesc from "../SectionDesc";
import Panorama from "../Panorama";

const Categories = () => {
  return (
    <div className="py-20 bg-white">
      <SectionDesc text1="Wonderfull Place For You" text2="Tour Categories" />
      {/* <SectionDesc text1="Top Destination" text2="Popular Destination" /> */}
      <Panorama />
    </div>
  );
};

export default Categories;
