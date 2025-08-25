"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import EmergencyIcon from "@mui/icons-material/Emergency";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import HealingIcon from "@mui/icons-material/Healing";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import BiotechIcon from "@mui/icons-material/Biotech";
import AddModeratorIcon from "@mui/icons-material/AddModerator";

const services = [
  { title: "General Consultation", options: 30, Icon: <VaccinesIcon /> },
  {
    title: "Telemedicine & Virtual Visits",
    options: 40,
    Icon: <BloodtypeIcon />,
  },
  { title: "Nursing & Patient Care", options: 17, Icon: <MonitorHeartIcon /> },
  {
    title: "Medical Records & Administration",
    options: 27,
    Icon: <MedicalServicesIcon />,
  },
  {
    title: "Diagnostic & Laboratory Services",
    options: 15,
    Icon: <BiotechIcon />,
  },
  {
    title: "Pharmacy & Prescription Management",
    options: 27,
    Icon: <HealingIcon />,
  },
];

export default function ServicesSection() {
  return (
    <motion.div
      id="services"
      className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 bg-white lg:w-[80%] w-[90%] m-auto overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left: Services List */}
      <div className="max-w-xl">
        <motion.h2
          className="text-2xl font-semibold text-gray-900 mb-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-lg font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Save Time Managing Your Clinic With Our Best Services
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group flex flex-col gap-y-2.5 servicesCard p-4 rounded-md shadow-sm border bg-gray-50"
              // initial={{ opacity: 0, y: 30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // whileHover={{
              //   scale: 1.05,
              //   boxShadow:
              //     "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              //   transition: { duration: 0.2, ease: "easeOut" },
              // }}
              // transition={{ duration: 0.2, ease: "easeOut" }}
              // viewport={{ once: true, amount: 0.3 }}
            >
              <div className="servicesIcon text-secondary bg-main rounded-full w-12 h-12 flex items-center justify-center">
                {service.Icon}
              </div>
              <div className="text-xs font-bold sm:text-lg">
                {service.title}
              </div>
              <div className="text-xs text-gray-500 sm:text-md group-hover:text-gray-200 transition-colors duration-200">
                {service.options} options available
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right: Image */}
      <motion.div
        className="mt-8 lg:mt-0 lg:ml-12 w-full max-w-md"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Image
          src="/doc.png"
          alt="Nurse taking blood pressure"
          className="rounded-xl shadow-md"
          width={500}
          height={500}
        />
      </motion.div>
    </motion.div>
  );
}
