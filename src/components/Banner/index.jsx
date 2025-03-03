import React from "react";
import TravelImg from "../../assets/travelbox.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gray-100 flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div data-aos="flip-up">
            <img
              src={TravelImg}
              alt="travel img"
              className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
            />
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-12">
            <h1
              data-aos="fade-up"
              className="text-black text-5xl font-semibold italic"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Explore all corners of The world with us
            </h1>

            <p
              data-aos="fade-up"
              className="text-xl text-gray-600 leading-relaxed tracking-wide max-w-xl  font-extrabold"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio.
              Ratione ex alias quis magni at optio.
            </p>

            {/* Features Grid */}
            <div data-aos="zoom-in" className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-xl font-semibold text-gray-800">
                  <MdFlight
                    className="text-5xl p-3 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110"
                    style={{
                      background: "linear-gradient(to right, #47B7D3, #3599B5)",
                    }}
                  />
                  <p>Flight</p>
                </div>
                <div className="flex items-center gap-4 text-xl font-semibold text-gray-800">
                  <MdOutlineLocalHotel
                    className="text-5xl p-3 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110"
                    style={{
                      background: "linear-gradient(to right, #47B7D3, #3599B5)",
                    }}
                  />
                  <p>Hotel</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-xl font-semibold text-gray-800">
                  <IoIosWifi
                    className="text-5xl p-3 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110"
                    style={{
                      background: "linear-gradient(to right, #47B7D3, #3599B5)",
                    }}
                  />
                  <p>Wi-Fi</p>
                </div>
                <div className="flex items-center gap-4 text-xl font-semibold text-gray-800">
                  <IoFastFoodSharp
                    className="text-5xl p-3 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110"
                    style={{
                      background: "linear-gradient(to right, #47B7D3, #3599B5)",
                    }}
                  />
                  <p>Foods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
