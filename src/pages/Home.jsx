import FormSection from "../sections/FormSection";
import HeroSection from "../sections/HeroSection";
import RoomSection from "../sections/RoomSection";
import ServicesSection from "../sections/ServicesSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <RoomSection />
      <ServicesSection />
      <FormSection />
    </div>
  );
};

export default Home;
