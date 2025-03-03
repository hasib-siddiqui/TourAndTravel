import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img12 from "../../assets/img12.avif";
import Img1 from "../../assets/img11.avif";
import Img3 from "../../assets/img3.jpg";
import Img4 from "../../assets/img4.jpg";
import Btn from "../Button";

const Hero = () => {
  const images = [Img1, Img12, Img3, Img4];

  return (
    <>
      <div className="w-full h-[500px]">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-overlay h-[100%] w-[100%]">
                <img src={item} alt={`Slide ${i + 1}`} />
              </div>
              <div className="absolute inset-0 z-10 flex items-start justify-center bg-opacity-100 flex-col p-14">
                <h1
                  className="text-white text-4xl font-semibold italic"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  Get unforgettable pleasure with us
                </h1>
                <p className="text-white text-7xl font-extrabold flex flex-col gap-3">
                  Explore beauty of
                  <span className="mr-8">the whole world</span>
                </p>
                <div className="flex gap-2 pt-10">
                  <Btn text="Explore Tours" bgColor="#47b7d3" />
                  <Btn text="Our Services" border="1px solid white" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
