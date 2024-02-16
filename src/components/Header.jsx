import React, { useState } from "react";
// Icons



import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
  <div className="xl:w-1/6 text-center -mt-4">
  <a href="#" className="text-xl font-bold relative p-1 bg-white">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/mybucket-55405.appspot.com/o/rysolf%20(1).jpg?alt=media&token=fbe9f22f-adb4-4bef-b9eb-3e8a1e522198"
      alt="Rysolf"
      className="inline-block w-16 h-16 text-2xl font-bold relative p-1 bg-white"
      style={{ marginTop: '20px' }}
    />
  </a>
</div>

      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <a href="#home" className="">
          Home
        </a>
        <a href="#aboutUs" className="">
          About Us
        </a>
        <a href="#services" className="">
          Services
        </a>
        <a href="#aboutUs" className="">
          Products
        </a>
        <a href="/contact" className="">
          Contact us
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
    
    
  );
};

export default Header;
