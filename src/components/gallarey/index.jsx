import React from "react";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img1 from "../../assets/img1.jpg";
import img6 from "../../assets/img6.webp";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/selfie.jpg";

const images = [img2, img3, img4, img6, img7, img1, img8];

const RecentGallery = () => {
  return (
    <section className="text-center py-12 bg-gray-100">
      <h2
        className=" text-gray-600 mb-2 text-4xl "
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Make Your Tour More Pleasure
      </h2>
      <h3 className="text-3xl font-bold text-gray-800 mb-6">Recent Gallery</h3>
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">
          <img
            src={images[0]}
            alt="Gallery 1"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src={images[1]}
            alt="Gallery 2"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        </div>
        <div>
          <img
            src={images[2]}
            alt="Gallery 3"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <img
            src={images[3]}
            alt="Gallery 4"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src={images[4]}
            alt="Gallery 5"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <img
          src={images[5]}
          alt="Gallery 6"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
        <img
          src={images[6]}
          alt="Gallery 7"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
      </div>
    </section>
  );
};

export default RecentGallery;
