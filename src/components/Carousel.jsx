/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Link } from "lucide-react";

const Carousel = ({
  slides,
  autoPlay = false,
  autoPlayInterval = 3000,
  showIndicators = true,
  showArrows = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <section>
            <div className="w-full container mx-auto max-w-6xl px-4 flex mt-[5rem] items-center justify-center md:h-screen overflow-hidden">
              <div className="flex flex-col justify-between gap-4 md:flex-row items-center w-full">
                <div className={`md:w-1/2 flex flex-col`}>
                  <h2 className="text-4xl lg:text-5xl font-[600]">
                    Our Services
                  </h2>
                  <h3 className="mt-6 md:mt-10 text-md lg:text-[16px] md:text-left font-light tracking-wider leading-relaxed">
                    We offer personalized care for individuals with
                    Alzheimer&apos;s or dementia, including daily living
                    support, medication management, and specialized care.
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
        ))}
      </div>
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 border text-black"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 border text-black "
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
      {/* {showIndicators && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Carousel;
