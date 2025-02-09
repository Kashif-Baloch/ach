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
        className={`container mx-auto max-w-6xl px-4 flex mt-[1rem] lg:mt-[5rem] items-center justify-center md:h-full overflow-hidden`}
      >
        <div className="flex colf gap-12 md:flex-row justify-between md:items-center w-full">
          <div className={`lg:w-1/5 mt-6 md:mt-0`}>
            <h2 className="text-4xl lg:text-7xl md:text-left font-[600]">
              Crown2 Adult Family Home
            </h2>
            <h3
              className={`${
                width ? "w-[27rem]" : "w-[20rem]"
              }  md:mt-10 text-md my-4 md:h-auto lg:text-[16px] md:text-left font-light tracking-wider leading-relaxed`}
            >
              Providing specialized memory care and medical services in a
              family-friendly environment.
            </h3>
            <div className="md:mt-14 relative flex flex-col sm:flex-row justify-start">
              <a href="#rooms">
                <img
                  src="/svgs/svgexport-7.svg"
                  className="rotate-180 w-10 h-10"
                />
              </a>
            </div>
          </div>
          <div className="relative max-h-[300px] md:max-h-fit flex md:w-1/2 justify-center md:justify-end">
            <img src="/pngs/imghero.jpg" />
            <img
              className="absolute bottom-[-30px] w-[20rem] md:w-fit max-h-[170px] md:max-h-fit md:top-[40%] md:-left-24 md:translate-y-[-50%]"
              src="/pngs/imagetop.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
