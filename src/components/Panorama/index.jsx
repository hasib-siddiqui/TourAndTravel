import React, { useEffect } from "react";

const Panorama = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Walking",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mecca",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Burjkhalifa",
      link: "#",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1694475228850-27acdd4e925a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ife",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Airbirds",
      subTitle: "AIRP",
      link: "#",
    },

    {
      image:
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Airbirds",
      subTitle: "AIRP",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Airbirds",
      subTitle: "AIRP",
      link: "#",
    },
  ];

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://panorama-slider.uiinitiative.com/assets/index.c1d53924.css";
    document.head.appendChild(link);

    const preloadLink = document.createElement("link");
    preloadLink.rel = "modulepreload";
    preloadLink.href =
      "https://panorama-slider.uiinitiative.com/assets/vendor.dba6b2d2.js";
    document.head.appendChild(preloadLink);

    const script = document.createElement("script");
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.src =
      "https://panorama-slider.uiinitiative.com/assets/index.d2ce9dca.js";
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(preloadLink);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="panorama-slider relative">
      <div className="swiper">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div
              className="swiper-slide relative h-120 rounded-3xl overflow-hidden"
              key={index}
            >
              <img
                className="slide-image w-full h-full object-cover"
                src={slide.image}
                alt={`Slide ${index + 1}`}
              />

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-1">
                      {slide.title}
                    </h3>
                    {slide.subTitle && (
                      <p className="text-white/80 text-lg">{slide.subTitle}</p>
                    )}
                  </div>
                  <a
                    href={slide.link}
                    className="px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                  >
                    See More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Panorama;
