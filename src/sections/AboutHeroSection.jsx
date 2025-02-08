import { Link } from "react-router-dom";

const AboutHeroSection = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="mt-[10rem] flex w-full flex-col mx-auto px-4 md:flex-row ">
        <div className="md:w-1/2">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Providing exceptional
            <br className="hidden md:block" />
            care services
          </h1>
        </div>
        <div className="md:w-1/2  mt-10 md:mt-auto flex flex-col justify-center">
          <p>
            Crown2 ADF, a 6-bed residential care facility in Lynnwood,
            specializes in memory care and medical services. Led by Aklilu B
            Alene, we offer a family-like environment with personalized care for
            individuals with Alzheimer&apos;s or dementia. Our goal is to ensure
            the well-being of our residents and provide specialized support.
            Join us in our mission to enhance the lives of seniors and their
            families.
          </p>
          <Link className="px-3 w-fit py-3 mt-4 border rounded-full" to="/">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
