import React from "react";
import Btn from "../Button";
import ss from "../../assets/ss.png";

const Nav = () => {
  const navItems = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "ContactUs", path: "#contactUS" },
    { name: "Services", path: "#" },
    { name: "Blog", path: "#blog" },
    { name: "Pages", path: "#pages" },
    { name: "Destination", path: "#destination" },
  ];
  return (
    <>
      <div className="flex justify-between  items-center bg-white text-black pl-0 pt-5">
        <ul className="NavItem flex gap-7 text-md  items-center">
          <p className=" caret-blue-900 text-md">
            <img src={ss} alt="Logo" className=" h-20 w2xl items-center" />
          </p>
          {navItems.map((item, index) => (
            <li className="liItem" key={index}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="px-8">
          <Btn text="Request A Quote" bgColor="#3f626b" />
        </div>
      </div>
    </>
  );
};

export default Nav;
