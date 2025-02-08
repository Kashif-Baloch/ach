import { Link } from "react-router-dom";

const AboutQualitySection = () => {
  const services = [
    {
      img: "/svgs/pin.svg",
      title: "Personal Attention",
      desc: "A compassionate approach is at the heart of everything we do, ensuring our residents feel supported and cared for.",
      btn: "Learn More",
    },
    {
      img: "/svgs/upload.svg",
      title: "Specialized Programs",
      desc: "Each resident receives personal attention from our team, creating meaningful and trusting relationships.",
      btn: "Explore Programs",
    },
    {
      img: "/svgs/download.svg",
      title: "Individualized Support",
      desc: "Our specialized programs are designed to meet the unique needs of individuals with Alzheimer's or dementia.",
      btn: "Get Personalized Care",
    },
    {
      img: "/svgs/circle.svg",
      title: "24/7 Assistance",
      desc: "We provide individualized support to ensure that each resident receives the care and attention they deserve.",
      btn: "Contact Us",
    },
  ];
  return (
    <div>
      <div className="container max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-5xl font-bold text-center text-black mb-12">
          Quality Care
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((elem, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center p-4 flex-col text-center"
              >
                <img className="w-8 my-3 h-8" src={elem.img} alt="" />
                <h2 className="text-xl font-semibold mb-2">{elem.title}</h2>
                <p className="text-gray-600 mb-6 pt-2">{elem.desc}</p>
                <Link
                  className="border py-2 px-2 rounded-full w-fit bg-transparent"
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

export default AboutQualitySection;
