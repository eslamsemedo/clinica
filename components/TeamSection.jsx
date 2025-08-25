"use client";

import React from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
  const team = [
    {
      name: "DR. Steffi Allysa",
      title: "Chief Creative Officer",
      image: "/doctor3.jpg",
    },
    {
      name: "DR. Delilah Mierre",
      title: "Chief Talent Officer",
      image: "/doctor3.jpg",
    },
    {
      name: "DR. Adelle Smith",
      title: "Chief Marketing Officer",
      image: "/doctor3.jpg",
    },
    {
      name: "DR. Adelle Smith",
      title: "Chief Marketing Officer",
      image: "/doctor3.jpg",
    },
    {
      name: "DR. Adelle Smith",
      title: "Chief Marketing Officer",
      image: "/doctor3.jpg",
    },
    {
      name: "DR. Adelle Smith",
      title: "Chief Marketing Officer",
      image: "/doctor3.jpg",
    },
    {
      name: "DR. Adelle Smith",
      title: "Chief Marketing Officer",
      image: "/doctor3.jpg",
    },
    {
      name: "DR. Adelle Smith",
      title: "Chief Marketing Officer",
      image: "/doctor3.jpg",
    },
  ];

  return (
    <div
      id="team"
      className="from-blue-100 to-white TeamSection overflow-hidden"
    >
      <motion.section
        className="py-16 lg:w-[80%] w-[80%] md:w-[90%] m-auto bg-gradient-to-b text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-light mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          MEET OUR <span className="font-bold">BEST TEAM</span>
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-gray-600 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Cras eu dignissim mauris. Duis imperdiet erat sapien, molestie aliquet
          arcu tincidunt id. Mauris sit amet quam mi. Duis porttitor lectus quis
          turpis malesuada, eu luctus elit dignissim.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-white border-1 border-main rounded-2xl overflow-hidden p-5 flex flex-col items-center shadow-md group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "#006bb3",
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-auto object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-lg text-black group-hover:text-secondary transition-colors duration-200">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-white transition-colors duration-200">
                {member.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default TeamSection;
