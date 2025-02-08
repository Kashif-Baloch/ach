import React from "react";

const AboutUserSection = () => {
  const teamMembers = [
    {
      name: "Akilu B Alene",
      role: "Co-owner/caregiver",
      description:
        "With nearly two decades of care giving experience and a love and passion for helping others you can trust him to get the job done",
      socialLinks: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Mulualem A. Humeta",
      role: "Co-owner/caregiver",
      description:
        "With over a decade of care giving experience, her dedication and love for the people she works with is unmatchable",
      socialLinks: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "David Lee",
      role: "Medical Specialist",
      description:
        "We are committed to promoting well-being and enhancing the quality of life for all residents under our care.",
      socialLinks: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Maria Garcia",
      role: "Dietician",
      description:
        "Our diverse team members are united in their dedication to providing personalized and compassionate care to each individual.",
      socialLinks: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="flex items-center w-[80%] max-w-5xl mx-auto mt-[5rem] justify-center flex-col gap-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Meet Our Team</h1>
        <p>Dedicated professionals committed to compassionate care</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {teamMembers.map((elem, index) => {
            return (
              <div
                key={index}
                className="bg-white flex items-center flex-col gap-1 rounded-lg p-6 my-6 text-center"
              >
                <img
                  src="/pngs/servicesbg1.png"
                  alt="Team Member 1"
                  className="w-40 h-40 rounded-full mb-4"
                />
                <h1 className="text-xl font-bold">{elem.role}</h1>
                <h3 className="font-thin mb-2">{elem.name}</h3>
                <p className="text-center w-[95%]">{elem.description}</p>
                <div className="flex items-center mt-2 gap-2">
                  <a href="#">
                    <img
                      className="w-4 h-4"
                      src="/pngs/insta.png"
                      alt={elem.socialLinks.instagram}
                    />
                  </a>
                  <a href="#">
                    <img
                      className="w-4 h-4"
                      src="/pngs/fb.png"
                      alt={elem.socialLinks.facebook}
                    />
                  </a>
                  <a href="#">
                    <img
                      className="w-4 h-4"
                      src="/pngs/x.png"
                      alt={elem.socialLinks.twitter}
                    />
                  </a>
                  <a href="#">
                    <img
                      className="w-4 h-4"
                      src="/pngs/in.png"
                      alt={elem.socialLinks.linkedin}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUserSection;
