import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [width, setWidth] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1400) {
        setWidth(true);
      } else {
        setWidth(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <section>
      <div
        className={`${
          width
            ? "container mx-auto max-w-6xl px-4 sm:px-8 lg:px-18"
            : "w-full "
        }
          } flex mt-[5rem] items-center justify-center md:h-screen overflow-hidden`}
      >
        <div className="flex flex-col-reverse justify-between gap-4 md:flex-row items-center w-full">
          <div
            className={`w-full ${width ? "w-1/1" : "lg:ml-20 md:w-[20rem]"} `}
          >
            <h2 className="text-4xl lg:text-7xl text-center md:text-left font-[600]">
              Crown2 Adult Family Home
            </h2>
            <h3
              className={`${
                width ? "w-[30rem]" : "w-[20rem]"
              } mt-6 md:mt-10 text-md lg:text-[16px] text-center md:text-left font-light tracking-wider leading-relaxed`}
            >
              Providing specialized memory care and medical services in a
              family-friendly environment.
            </h3>
            <div className="mt-14 flex flex-col sm:flex-row justify-center md:justify-start">
              <Link to="#">
                <img
                  src="/public/svgs/svgexport-7.svg"
                  className="rotate-180 w-10 h-10"
                />
              </Link>
            </div>
          </div>
          <div className="relative flex  md:w-1/2 justify-center md:justify-end">
            <img src="/public/pngs/hero-bg.png" />
            <img
              className="absolute lg:top-[40%] lg:-left-24 lg:translate-y-[-50%]"
              src="/public/pngs/hero-up.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
