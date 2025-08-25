"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      link: "https://www.facebook.com/profile.php?id=61558122182882&locale=ar_AR",
      value: <Facebook />,
    },
    {
      link: "https://www.instagram.com/clinica_egypt1?igsh=MmxkbnVvc2xpazI1",
      value: <Instagram />,
    },
    {
      link: "https://www.linkedin.com/company/107921665/admin/dashboard/",
      value: <Linkedin />,
    },
  ];
  useEffect(() => {
    // Optionally setup scroll observers
    return () => {};
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020014] text-white relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              className=""
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold">Clinica</h3>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Providing exceptional healthcare services with compassion,
                expertise, and personalized care. Your health and well-being are
                our top priority.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((element, inx) => {
                  return (
                    <motion.a
                      href={element.link}
                      key={inx}
                      whileHover={{ scale: 1.1 }}
                      className="transition-transform duration-200"
                      target="_blank"
                    >
                      {element.value}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  {
                    link: "#",
                    value: "Home",
                  },
                  {
                    link: "#about",
                    value: "About Us",
                  },
                  {
                    link: "#services",
                    value: "Our Services",
                  },
                  {
                    link: "#team",
                    value: "Our Team",
                  },
                  {
                    link: "#contact",
                    value: "Contact Us",
                  },
                ].map((label, i) => (
                  <li key={i}>
                    <a
                      href={label.link}
                      className="text-gray-200 hover:text-white transition-colors duration-200 inline-block hover:translate-x-1"
                    >
                      {label.value}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {[
                  "General Consultation",
                  "Telemedicine",
                  "Nursing Care",
                  "Laboratory Services",
                  "Pharmacy",
                ].map((label, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-200 hover:text-white transition-colors duration-200 inline-block hover:translate-x-1"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                {[
                  {
                    icon: <Phone className="h-5 w-5 text-secondary mt-1" />,
                    label: "Phone",
                    value: "+20 1070771668",
                    link: "tel:+201070771668",
                  },
                  {
                    icon: <Mail className="h-5 w-5 text-secondary mt-1" />,
                    label: "Email",
                    value: "info@clinica-egypt.com",
                    link: "mailto:info@clinica-egypt.com",
                  },
                  {
                    icon: <MapPin className="h-5 w-5 text-secondary mt-1" />,
                    label: "Address",
                    value: "Red Sea, Hurghada, Elhadaba",
                  },
                  {
                    icon: <Clock className="h-5 w-5 text-secondary mt-1" />,
                    label: "Working Hours",
                    value: "24/7 Available",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    {item.icon}
                    <div>
                      <p className="text-gray-200">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-white hover:text-secondary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/20">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-200 text-center md:text-left mb-4 md:mb-0">
                © 2024 Clinica. All rights reserved. Made with{" "}
                <Heart className="inline h-4 w-4 text-red-400" /> by Clinica
                Team
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  className="bg-amber-300 hover:bg-secondary text-main p-2 rounded-full transition-all duration-200"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
