import Clients from "./Clients";
import Header from "./Header";
import Hero from "./Hero";
import Works from "./Works";
import Reviews from "./Reviews";
import Services from "./Services";
import Footer from "./Footer";
import React from "react";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
    
      <Works />

      <Services />
      <Footer />
    </div>
  );
}

export default Home;