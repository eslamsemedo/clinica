'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const AboutList = [
  "24/7 Medical Services through online and offline.",
  "Using modern technology to diagnose disease.",
  "Easy and flexible to appoint a doctor.",
];

const About = () => {
  return (
    <div id='about' className='py-12 '>
    <div className="about px-4  bg-main overflow-hidden" >
      
      <div className="about_con text-white">
        <motion.div
          className="about_inner flex flex-col 2xl:flex-row mx-auto gap-8 justify-between items-center lg:w-[80%] w-[90%] p-2 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side */}
          <motion.div
            className="  h-[100%] about_left_side flex flex-col xl:flex-row gap-6 items-center xl:items-start justify-center xl:justify-between"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-[100%] md:w-110 flex-shrink-0">
              <Image
                src="/doctor3.jpg"
                alt="doctor"
                width={300}
                height={300}
                className="w-full h-auto aboutImgLeft "
              />
            </div>
            <div className="md:text-left lg:self-center  ">
              <h2 className="text-2xl font-semibold mb-4">Welcome to Clinica</h2>
              <p className="text-gray-300 mb-4">
                Welcome to Clinica, where your well-being is our priority. Our mission is to provide exceptional
                healthcare services with a focus on compassion, expertise, and personalized care. At Clinica,
                we understand that your health is invaluable, and we are committed to ensuring that you receive the
                highest standard of medical attention.
              </p>

              <ul className="mb-6">
                {AboutList.map((element, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start text-amber-300 mb-2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                  >
                    <span className="text-white mr-2 mt-1">✔</span>
                    {element}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-black px-4 py-2 rounded hover:bg-secondary transition cursor-pointer"
              >
              <a href="#services">Learn More </a>  
              </motion.button>
            </div>
          </motion.div>

          {/* Right side image */}
          {/* <motion.div
            className="about_right_side w-full lg:w-[90%] self-center  lg:h-[250px] h-[auto]"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/bgClin1.jpg"
              alt="clinic"
              width={500}
              height={500}
              className="w-full h-full rounded-md aboutImgRight"
            />
          </motion.div> */}
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default About;
