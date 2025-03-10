import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
const Herotop = () => {
  return (
    <>
      <div className="flex justify-between bg-white text-black  py-3  px-11">
        <div className="flex gap-7">
          <div className="flex items-center gap-3.5">
            <CiLocationOn />
            <span className="flex items-center gap-3.5  text-md  ">
              45 New Eskton Road Austarlia
            </span>
          </div>
          <p className=" border-r-2 border-r-gray-300 mt-2 mb-1"></p>

          <div className="">
            <span className="flex items-center gap-3.5 text-md ">
              <MdAccessTime />
              Sun to Friday:8.00 am-7.00,austria
            </span>
          </div>
        </div>
        <div className="flex justify-evenly gap-5 text-md">
          <select name="" id="">
            <option>Language</option>
            <option value="">EngUk</option>
            <option>Hindi</option>
          </select>
          <div className="flex justify-evenly gap-6 text-md">
            <span>Faq</span>
            <p className=" border-r-2 border-r-gray-300 mt-2 mb-1"></p>

            <span>Support</span>
            <p className=" border-r-2 border-r-gray-300 mt-2 mb-1"></p>

            <select>
              <option value="">
                <span>Signin/Regisster</span>
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herotop;
