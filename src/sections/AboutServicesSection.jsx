import { Link } from "react-router-dom";

const AboutServicesSection = () => {
  const services = [
    {
      title: "Personalized Care",
      desc: "Each resident receives personalized care tailored to their individual needs and preferences.",
      btn: "Learn About Our Services",
    },
    {
      title: "Medical Services",
      desc: "We offer comprehensive medical services to ensure the well-being and health of all residents.",
      btn: "Meet Our Team",
    },
    {
      title: "Specialized Support",
      desc: "Specialized support is available for individuals with Alzheimer's or dementia to meet their unique requirements.",
      btn: "Contact Us",
    },
  ];
  return (
    <div>
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-5xl font-bold text-center text-black mb-12">
          Our Facility
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((elem, index) => {
            return (
              <div
                key={index}
                className="bg-[#F6F6F6] h-[300px]  p-8 text-center "
              >
                <h2 className="text-xl font-semibold mb-2">{elem.title}</h2>
                <p className="text-gray-600 mb-6 pt-2">{elem.desc}</p>
                <Link
                  className="border p-3 rounded-full w-fit bg-transparent"
                  to="/"
                >
                  {elem.btn}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutServicesSection;
