import React from "react";
// Icons
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">How we can help you</h1>
        <p className="text-[20px] text-gray-500">
          Follow our newsletter. We will regulary update our latest project and
          availability.
        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Enter your email address"
            />
            <button  disabled={true}
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Suscribe (disabled)
            </button>
          </div>
        </form>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2  text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Software development</h3>
          <p className="text-gray-500">
          Our software development company is committed to transforming innovative ideas into concrete technological solutions.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2  text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Data Scientist</h3>
          <p className="text-gray-500">
          Our data science company is dedicated to unlocking valuable insights and making informed decisions from data.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2  text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Inteligent Artificial</h3>
          <p className="text-gray-500">
          We are committed to the development and application of artificial intelligence to create innovative solutions and empower various sectors.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Cloud</h3>
          <p className="text-gray-500">
          At our company, we embrace the power of cloud computing to streamline operations, accelerate innovation, and offer unmatched flexibility. We are committed to providing cloud solutions that are tailored to your unique needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
