import React from "react";
import { Link } from 'react-router-dom';

import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";
import Contact from "./Contact";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            We Create transformative Digital{" "}
            <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">
              Products
        
             
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
           <div className="">
  <p>
   We help find solutions with intitutive and in accordance with client
  </p>
  <p>
    business goals. we provide high-quality services.
  </p>
</div>

          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link to="/contact">
            <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
              Contact us
            </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
        <img
  src="https://firebasestorage.googleapis.com/v0/b/uber-515a8.appspot.com/o/4380747.jpg?alt=media&token=36b30a8d-3da9-4578-abc4-7f59d776ab43"
  className="w-[240px] h-[240px] md:w-[440px] md:h-[440px] object-cover xl:-mt-28 rounded-full"
/>

        
        </div>
        {/* Circle */}
      
        {/* Logos */}
        <img
          src="figma.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[12%] right-[20%] xl:right-[10%]"
        />
        <img
          src="https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-icono-del-lenguaje-de-programacion-java.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full   absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]"
        />
        <img
          src="https://cdn.icon-icons.com/icons2/1508/PNG/512/python_104451.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[15%] xl:left-[3%] -rotate-12"
        />
      </div>
    </section>
  );
};

export default Hero;

