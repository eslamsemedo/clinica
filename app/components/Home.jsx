"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const carouselSlides = [
  {
    image: "/p6.jpg",
    title: "Home Care for Patients & Families",
    subtitle:
      "Clinica provides top-tier home care services led by professional caregivers. Your comfort and health are our priority.",
    button: {
      text: "Contact Now",
      href: "tel:01070771668",
    },
  },
  {
    image: "/p7.jpg",
    title: "Expert Medical Team",
    subtitle:
      "Our experienced doctors and nurses are available 24/7 to ensure your well-being at home.",
    button: {
      text: "Meet Our Team",
      href: "#team",
    },
  },
  {
    image: "/p9.jpg",
    title: "Comprehensive Services",
    subtitle:
      "From diagnostics to nursing, we offer a full range of home healthcare services tailored to your needs.",
    button: {
      text: "Our Services",
      href: "#services",
    },
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % carouselSlides.length);
  const goToSlide = (idx) => setCurrent(idx);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="relative rounded-b-4xl w-full h-[80vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Slides with Framer Motion */}
      <AnimatePresence>
        {carouselSlides.map((slide, idx) =>
          idx === current ? (
            <motion.img
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              draggable={false}
            />
          ) : null
        )}
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-20" />

      {/* Text Content with Animation */}
      <motion.div
        key={carouselSlides[current].title}
        className="relative z-30 pt-12 w-full flex flex-col items-center justify-center text-center px-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          {carouselSlides[current].title}
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 mb-8">
          {carouselSlides[current].subtitle}
        </p>
        <a
          href={carouselSlides[current].button.href}
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary text-main font-bold px-8 py-3 rounded-full shadow-lg transition hover:scale-105"
        >
          {carouselSlides[current].button.text} <ArrowRight size={20} />
        </a>
      </motion.div>

      {/* Floting Cards with Framer Motion */}
      <motion.div
        className=" w-[90%] flex-wrap justify-center items-center FlotedContent absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex gap-5 z-40"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {[
          { icon: <CalendarMonthIcon />, label: "Book an Appointment" },
          { icon: <AddIcCallIcon />, label: "Doctor on Call" },
          { icon: <MonitorHeartIcon />, label: "Emergency Services" },
          { icon: <FavoriteBorderIcon />, label: "Insurance Partners" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="FlotedCard flex items-center backdrop-blur-md justify-center bg-[#fdffffdd] text-main rounded-3xl border-1 py-2 px-5 text-md gap-2"
          >
            {item.icon} {item.label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Home = () => (
  <div>
    <Carousel />
    {/* <h1 className='text-main'>reyad is here</h1> */}
  </div>
);

export default Home;
