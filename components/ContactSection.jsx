"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Email sent successfully!");
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex py-16 bg-gray-100 relative overflow-hidden"
    >
      <Toaster position="top-right" />
      <motion.div
        className="paintBg bg-main rounded-2xl absolute h-full top-0 left-0 lg:left-[-350px] w-[100%] lg:w-[70%] lg:skew-y-[15deg] lg:skew-x-[50deg] z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>

      <div className="justify-center items-center relative z-10 flex flex-col lg:flex-row m-auto w-[90%] md:w-[80%] lg:w-[80%] gap-8">
        <motion.div
          className="flex-1 text-white z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="ClinicaLogo">
            <img
              src="/clinicaLogo.png"
              alt="Clinica Logo"
              className="w-40 mb-4 rounded-3xl"
            />
            <p className="text-white text-4xl font-bold">Your trusted clinic</p>
            <p className="mt-4">
              Book your consultation today and discover the care and support you
              deserve.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 bg-white p-6 rounded-2xl shadow-2xl w-[100%]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-2xl"
              required
              whileHover={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-2xl"
              required
              whileHover={{ scale: 1.02 }}
            />
            <motion.input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Your Number"
              className="p-3 border border-gray-300 rounded-2xl"
              required
              whileHover={{ scale: 1.02 }}
            />
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="p-3 border border-gray-300 rounded-2xl"
              required
              whileHover={{ scale: 1.02 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-main hover:bg-[#005899] text-white py-2 px-4 rounded transition-colors flex items-center justify-center"
              transition={{ type: "spring", stiffness: 300 }}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
