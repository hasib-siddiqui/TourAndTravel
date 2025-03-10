import hiking from "../../assets/hiking.avif";
import boating from "../../assets/boating.jpeg";
import selfie from "../../assets/selfie.jpg";
import btn from "../Button";

import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { TbArrowGuide } from "react-icons/tb";
import Btn from "../Button";

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white px-8 py-12">
      <div className="flex flex-row md:w-1/2 items-center gap-6">
        <div className="w-80 h-[420px] overflow-hidden rounded-t-[200px] rounded-b-[0] shadow-lg">
          <img
            src={hiking}
            alt="Hiking"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-36 h-36 overflow-hidden rounded-full shadow-md">
            <img
              src={boating}
              alt="Kayaking"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-36 h-36 overflow-hidden rounded-full shadow-md">
            <img
              src={selfie}
              alt="Tourists"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="md:w-1/2 text-gray-800 px-8 mt-8 md:mt-0 text-center md:text-left">
        <h2
          className="text-black text-5xl font-semibold italic"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Let's Go Together
        </h2>

        <h1 className="text-4xl  mt-2 font-extrabold flex flex-col text-#3f626b">
          Plan Your Trip
          <span>With Us</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-lg leading-relaxed">
          There are many variations of passages available, but the majority have
          suffered alteration in some form by injected randomised words. There
          are many variations of passages available, but the majority have
        </p>

        {/* Features */}
        <div className="mt-8 space-y-6">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-[linear-gradient(to_right,_rgb(71,_183,_211),_rgb(53,_153,_181))] text-white flex items-center justify-center rounded-full shadow-md">
              <TbArrowGuide />
            </div>
            <div>
              <h3 className="text-2xl ">Exclusive Trip</h3>
              <p className="text-gray-500 text-base leading-snug flex flex-col">
                There are many variations of passages
                <span>available but the majority.</span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-[linear-gradient(to_right,_rgb(71,_183,_211),_rgb(53,_153,_181))] text-white flex items-center justify-center rounded-full shadow-md">
              <FaUserGraduate />
            </div>

            <div>
              <h3 className="text-2xl">Professional Guide</h3>
              <p className="text-gray-500 text-base leading-snug flex flex-col">
                There are many variations of passages
                <span>available but the majority.</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-start mt-6">
          <Btn text="Learn More" bgColor="#3f626b" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
