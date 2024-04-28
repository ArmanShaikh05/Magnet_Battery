import Brands from "../components/Home/Brands";
import HeroSection from "../components/Home/HeroSection";
import ServeYou from "../components/Home/ServeYou";
import Branches from "../components/Home/Branches";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Testimonial from "../components/Home/Testimonial";
import FaqSection from "../components/Home/FaqSection";
import { useEffect } from "react";

const HomePage = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  return (
    <>
      <HeroSection />
      <ServeYou />
      <Branches />
      <Brands />
      <WhyChooseUs />
      <Testimonial />
      <FaqSection />
    </>
  );
};

export default HomePage;
