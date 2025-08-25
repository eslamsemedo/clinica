"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const BlueSpace = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <div ref={ref} className="overflow-hidden pt-12">
      <div className="BlueSpace-con bg-[#ffffff] py-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="BlueInner lg:w-[80%] flex-col lg:flex-row w-[90%] flex m-auto justify-between items-center gap-6"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="img w-[200px]"
          >
            <Image
              src={"/doc2.jpg"}
              width={500}
              height={500}
              alt="doc"
              className="rounded-full"
            />
          </motion.div>

          {/* Info Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="BlueInfos text-center"
          >
            <h2 className="font-bold text-2xl text-main">
              Meet The Team Support Medical Service.
            </h2>
            <p className="text-gray-700">
              For us, there are no minor aspects, because a quality
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bluebut"
          >
            <button className="cursor-pointer animated-button bg-main py-3 px-5 rounded-full border-dotted border-2 border-white text-white font-bold">
              Book Now
            </button>
          </motion.div>
        </motion.div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default BlueSpace;
