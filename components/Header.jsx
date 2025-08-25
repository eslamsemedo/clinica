"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY >= 500) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="headerCon relative z-50"
    >
      <div
        className={`z-50 header-top bg-main backdrop-blur-md   fixed top-0 left-1/2 transform -translate-x-1/2  w-[100%]  ${scroll ? "hidden" : "block"
          }`}
      >
        <motion.div className="headerTopInner justify-between md:flex hidden  lg:w-[80%] w-[90%] m-auto p-3 ">
          <div className="leftInfos flex text-white gap-x-6">
            <div className="gmail">
              <EmailIcon sx={{ color: "#FFD230" }} />{" "}
              <a
                href="mailto:info@clinica-egypt.com"
                className="font-bold hover:text-amber-300 transition duration-300"
              >
                info@clinica-egypt.com
              </a>
            </div>
            <div className="location font-bold">
              <LocationPinIcon sx={{ color: "#FFD230" }} />
              Red Sea, Hurghada, Elhadaba
            </div>
          </div>
          <div className="rightInfos flex gap-x-8 ">
            <div className="Language  font-bold cursor-pointer text-secondary transition duration-300 ">
              <GTranslateIcon sx={{ color: "#ffd230" }} />
            </div>
            <ul className="flex gap-5 text-white">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61558122182882&locale=ar_AR"
                  target="_blank"
                  className="cursor-pointer hover:text-secondary transition duration-300"
                >
                  <FacebookOutlinedIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/clinica_egypt1?igsh=MmxkbnVvc2xpazI1"
                  target="_blank"
                  className="cursor-pointer hover:text-secondary transition duration-300"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/107921665/admin/dashboard/"
                  target="_blank"
                  className="cursor-pointer hover:text-secondary transition duration-300"
                >
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div
        className={`z-40 header-inner flex justify-between items-center bg-[#fdffff86] backdrop-blur-md p-3 fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[80%] rounded-4xl border-1 border-main ${scroll ? "top-5 " : "top-5 md:top-15"
          }`}
      >
        {/* Logo */}
        <div className="header-logo">
          <Link href="/">
            <div className="header-img cursor-pointer  ">
              <Image src="/logo2.png" alt="Clinica" width={115} height={100} />
            </div>
          </Link>
        </div>

        {/* Mobile menu icon */}
        <div className="menu-icon block md:hidden">
          <button className="cursor-pointer" onClick={() => setMenu(!menu)}>
            <MenuIcon sx={{ fontSize: "35px", color: "#006FB9" }} />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="nav hidden md:block">
          <ul className="flex gap-x-7">
            <li>
              <a
                href="#"
                className="hover:text-main transition-all duration-500 navLinks "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-main transition-all duration-500 navLinks "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-main transition-all duration-500 navLinks "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-main transition-all duration-500 navLinks "
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-main transition-all duration-500 navLinks "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop login/register */}
        <div className="header-login gap-x-2 hidden md:flex">
          {/* <Link href="/login">
            <button className="font-bold text-sm login-btn border-2 border-black py-1.5 px-6 rounded-xl cursor-pointer hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              Login
            </button>
          </Link> */}

          <button className="font-bold text-sm register-btn p-1.5 px-3 rounded-3xl bg-main text-white cursor-pointer hover:bg-[#005899] transition-all duration-300">
            <a href="#contact">Book Now <LoginIcon sx={{ color: "#ffd230" }} /></a>
          </button>

        </div>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 z-50 bg-transparent bg-opacity-50 transition-opacity duration-300 ${menu ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setMenu(false)}
      />

      {/* Mobile nav menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-50 bg-[#fefefe7f] backdrop-blur-sm  transition-transform duration-700 ${menu ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {/* Close Button */}
        <div className="flex justify-end items-center gap-x-5 p-4">
          <div className="  p-2 rounded-2xl Language  font-bold cursor-pointer hover:text-gray-800  text-main transition duration-300 ">
            <GTranslateIcon sx={{ paddingRight: "5px" }} />
            ENG
          </div>
          <button
            onClick={() => setMenu(false)}
            className="text-2xl font-bold text-main hover:text-gray-800 focus:outline-none transition-all duration-300 cursor-pointer"
            aria-label="Close menu"
          >
            <CancelIcon sx={{ fontSize: "45px" }} />
          </button>
        </div>

        <ul className="flex flex-col justify-center items-center h-[80%] gap-y-12 text-lg font-medium">
          <li>
            <a
              href="#"
              onClick={() => setMenu(false)}
              className="hover:text-main  transition-all duration-400 navLinks font-bold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setMenu(false)}
              className="hover:text-main  transition-all duration-400 navLinks font-bold"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setMenu(false)}
              className="hover:text-main  transition-all duration-400 navLinks font-bold"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#team"
              onClick={() => setMenu(false)}
              className="hover:text-main  transition-all duration-400 navLinks font-bold "
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setMenu(false)}
              className="hover:text-main  transition-all duration-400 navLinks font-bold"
            >
              Contact
            </a>
          </li>
          <li>
            {/* <Link href="/login" onClick={() => setMenu(false)}>
              <button className="font-bold border-2 border-black py-1 px-5 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-400">
                Login
              </button>
            </Link> */}
          </li>
          {/* <li>
            <Link href="/register" onClick={() => setMenu(false)}>
              <button className="font-bold p-1 px-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-400">
                Book Now <LoginIcon sx={{ color: "yellow" }} />
              </button>
            </Link>
          </li> */}
        </ul>
      </div>
    </motion.div>
  );
};

export default Header;
