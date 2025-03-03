import React from "react";

const SectionDesc = ({ text1, text2 }) => {
  return (
    <div className="text-center text-4xl font-semibold text-[#3d3f3f]">
      <h2
        className="italic"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        {text1}
      </h2>
      <h3 className="text-5xl">{text2}</h3>
    </div>
  );
};

export default SectionDesc;
