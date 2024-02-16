import React from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-white text-black p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="w-1/6">
                <a
          href="#"
          className="text-xl font-bold text-black text-center md:text-left"
        >
          Rysolf
        </a>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="https://www.instagram.com/rysolf_oficial/" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="https://www.facebook.com/profile.php?id=61550190514462" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          <a href="https://twitter.com/rysolf" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiTwitterLine />{" "}
          </a>
        </nav>
      </div>
      <div className="mt-8">
       
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="https://docs.google.com/document/d/1EtwEKqWs2PApNzMgy3tZjlo46-5muNyd2lBpSOTs9a0/edit?usp=sharing"
            className="text-lg  text-black text-center md:text-left"
          >
           Contact us directly
          </a>
        
          <a
            href="https://docs.google.com/document/d/1Pd4f4bjP7LJIoIJXUAt-2__ARjGnHOPrg4n3Caumt7Q/edit?usp=sharing"
            className="text-lg ftext-black text-center md:text-left"
          >
            Terms of use
          </a>
          <a
            href="https://docs.google.com/document/d/1D4joHdBixrP4MgtLJc8GlYKq5ecUcPSVO7VoVRs1XX8/edit?usp=sharing"
            className="text-lg  text-black text-center md:text-left"
          >
            Privacy policy
          </a>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-black  text-center">
          © Rysolf 2024 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
