import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/11062b_1f1b8b8b8b8b4b4b8b8b8b8b8b8b8b8b~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_1f1b8b8b8b8b4b4b8b8b8b8b8b8b8b8b~mv2.jpg')",
        }}
      >
        {/* <!-- Overlay --> */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* <!-- Content --> */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Crown2</h1>
          <p className="text-2xl md:text-3xl mb-2">Adult</p>
          <p className="text-2xl md:text-3xl mb-2">Family</p>
          <p className="text-2xl md:text-3xl mb-8">Home</p>
          <p className="text-xl md:text-2xl mb-4">
            Providing specialized memory care and
          </p>
          <p className="text-xl md:text-2xl">
            medical services in a family-friendly environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
