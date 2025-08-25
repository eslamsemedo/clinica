"use client"

import { motion, useScroll } from "framer-motion"
import React from "react";
import Home from "./Home";
import BlueSpace from "./BlueSpace";
import About from "./About";
import ServicesSec from "./servicesSec";
import Testimonial from "./Testimonial";
import Testimonial2 from "./Testimonial2";
import TeamSection from "./TeamSection";
// import OurTeam from "./OurTeam";
import ContactSection from "./ContactSection";

const Main = () => {
  const { scrollYProgress } = useScroll()

  return (
    <div>
       <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    backgroundColor: "#ffd230",
                    zIndex:'100'
                }}
            />
      <Home />
      <BlueSpace />
      <About />
      <ServicesSec />
      <Testimonial2 />
      <TeamSection />
      <ContactSection />

     
    </div>
  );
};

export default Main;
