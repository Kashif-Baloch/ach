import Carousel from "../components/Carousel";
import FormSection from "../sections/FormSection";
import HeroSection from "../sections/HeroSection";
import RoomSection from "../sections/RoomSection";
import ServicesSection from "../sections/ServicesSection";
import About from "./About";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <RoomSection />
      <ServicesSection />
      <About />
      <FormSection />
    </div>
  );
};

export default Home;
