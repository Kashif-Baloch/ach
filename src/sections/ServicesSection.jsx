import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
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
          width ? "container mx-auto max-w-6xl px-4 sm:px-8 lg:px-18" : "w-full"
        }
          } flex mt-[5rem] items-center justify-center md:h-screen overflow-hidden`}
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row items-center w-full">
          <div
            className={`w-full ${width ? "w-1/1" : "lg:ml-20 md:w-[20rem]"} `}
          >
            <h2 className="text-4xl lg:text-5xl text-center md:text-left font-[600]">
              Our Services
            </h2>
            <h3 className="mt-6 md:mt-10 text-md lg:text-[16px] text-center md:text-left font-light tracking-wider leading-relaxed">
              We offer personalized care for individuals with Alzheimer&apos;s
              or dementia, including daily living support, medication
              management, and specialized care.
            </h3>
            <div className="mt-14 border w-fit rounded-full py-2 px-6 flex flex-col sm:flex-row justify-center md:justify-start">
              <Link to="#">Explore</Link>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <img src="/public/pngs/servicesbg1.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
