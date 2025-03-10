import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const destinations = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1684917943020-5201274250bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9hdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Ghorepani Poon Hill Trek",
    location: "@Bhutan, Pokhara",
    price: "$569.00",
    days: "5 Days",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Langtang Valley Trekking",
    location: "@Bhutan, India, Pokhara",
    price: "$600.00",
    days: "6 Days",
  },
  {
    image:
      "https://images.unsplash.com/photo-1473711789055-df5beb0e35ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Short Trek around Pokhara",
    location: "@Nepal, Pokhara, Tibet",
    price: "$250.00",
    days: "6 Days",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661576660703-d29f0d5b7a9f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Island Peak Climbing",
    location: "@Nepal, Pokhara, Tibet",
    price: "$569.00",
    days: "3 Days",
  },
  {
    image:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Island",
    location: "@Nepal, Pokhara, Tibet",
    price: "$569.00",
    days: "3 Days",
  },
];

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-[280px] h-[400px] flex flex-col">
      <img
        src={destination.image}
        alt={destination.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-left flex-grow">
        <h3 className="text-base font-semibold text-black mt-1 py-1.5">
          {destination.title}
        </h3>
        <p className="text-gray-500 text-sm">{destination.location}</p>
        <p className="font-bold text-lg text-black">
          {destination.price}{" "}
          <span className="text-gray-500 text-sm font-normal">/Person</span>
        </p>
        <div className="flex justify-between items-center mt-3 py-2.5">
          <span className="text-black text-sm">⏳ {destination.days}</span>
          <button className="bg-white text-black px-4 py-2 rounded-xl text-sm border border-gray-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularDestinations = () => {
  return (
    <section className="text-center py-12 bg-[#e9f7f8]">
      <h2
        data-aos="fade-up"
        className="text-black text-4xl font-semibold italic"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Best Recommended Places
      </h2>
      <p className="text-black text-4xl font-bold max-w-xl mx-auto mt-2">
        Popular Destination we offer for all
      </p>
      <p
        data-aos="fade-up"
        className="text-xl text-gray-600 leading-relaxed tracking-wide max-w-xl font-extrabold text-center mt-2 mx-auto"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ex alias
        quis magni at optio.
      </p>
      <div className="mt-8 px-6 relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-5xl mx-auto pb-8"
        >
          {destinations.map((destination, index) => (
            <SwiperSlide key={index}>
              <DestinationCard destination={destination} />
            </SwiperSlide>
          ))}
        </Swiper>
        <style>
          {`
            .swiper-pagination {
              bottom: -10px !important;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default PopularDestinations;
