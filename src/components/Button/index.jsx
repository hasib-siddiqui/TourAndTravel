import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Btn = ({ text, bgColor, color = "#fff", border }) => {
  return (
    <button
      className="px-8 py-4 rounded-full flex items-center justify-center gap-2"
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        border: `${border}`,
      }}
    >
      <span className=" text-md">{text}</span>
      <FaArrowRight className="flex text-center" />
    </button>
  );
};

export default Btn;
