import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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
        className={`w-full container mx-auto max-w-6xl px-4 flex mt-[5rem] items-center justify-center md:h-screen overflow-hidden`}
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row items-center w-full">
          <div className={`md:w-1/2 flex flex-col`}>
            <h2 className="text-4xl lg:text-5xl font-[600]">Our Services</h2>
            <h3 className="mt-6 md:mt-10 text-md lg:text-[16px] md:text-left font-light tracking-wider leading-relaxed">
              We offer personalized care for individuals with Alzheimer&apos;s
              or dementia, including daily living support, medication
              management, and specialized care.
            </h3>
            <div className="mt-4 md:mt-8 border w-fit rounded-full py-2 px-6 flex flex-col sm:flex-row justify-center md:justify-start">
              <Link to="#">Explore</Link>
            </div>
          </div>
          <div className="mt-6 w-full relative md:h-auto md:mt-auto h-[300px] md:w-1/2">
            <img
              className="object-cover object-center h-full w-full"
              src="/pngs/servicesbg1.png"
            />
            <div className="absolute flex items-center text-center w-full h-full flex-col justify-center inset-0">
              <h1 className="font-bold text-2xl">24/7 Support</h1>
              <p className="w-[70%] mx-auto">
                Round-the-clock care and assistance for all residents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
