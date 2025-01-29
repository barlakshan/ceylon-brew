import React from "react";
import coffee from "../../assets/bg/tea.png";
import Bean1 from "../../assets/bg/bean1.png";
import Bean2 from "../../assets/bg/bean2.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="from-slate-100 to-amber-950 bg-gradient-to-r mt-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 place-items-center h-[700px] md:h-[650px] relative pt-10 md:pt-0">
        {/* text section */}
        <div className="space-y-5 px-4 md:px-0">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-amber-900 font-semibold font-pacifico text-lg"
          >
            Welcome to Ceylon Brew___
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-aladin"
          >
            Experience Artisanal <span className="text-amber-900">Coffee</span>{" "}
            at Ceylon Brew
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="font-poppins">
            Indulge in our carefully crafted brews, made from ethically sourced
            ceylon coffee beans and brewed to perfection.
          </motion.p>
          <motion.div 
          initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.8 }}
          className="flex gap-2">
            <a href="#menu">
              <button className="bg-amber-900 border-white text-white hover:bg-amber-700 px-3 py-2 rounded-md">
                View Menu
              </button>
            </a>
            <a href="#store">
              <button className="bg-transparent border border-amber-900 text-amber-900 rounded-md px-3 py-2">
                Our Store
              </button>
            </a>
          </motion.div>
        </div>
        {/* Image section */}
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.8 }}
            src={coffee}
            alt="coffee"
            className="w-[600px]"
          />
        </div>
        <motion.img
          initial={{ opacity: 0, x: 100, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, scale: 0.7, rotate: 45 }}
          transition={{ duration: 1, delay: 0.8 }}
          src={Bean2}
          alt="coffee bean top left"
          className="absolute hidden md:block bottom-20 left-36 w-20 rotate-45"
        />
        <motion.img
          initial={{ opacity: 0, y: 100, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 100, y: 0, scale: 0.8 }}
          transition={{ duration: 1.8, delay: 0.8 }}
          src={Bean1}
          alt="coffee bean top"
          className="absolute hidden md:block top-14 left-0 w-20"
        />
        <motion.img
          initial={{ opacity: 0, x: 100, y: 100, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 0.8, rotate: 65 }}
          transition={{ duration: 1.8, delay: 0.8 }}
          src={Bean1}
          alt="coffee bean top"
          className="absolute hidden md:block top-14 left-0 w-20"
        />
        <motion.img
          initial={{ opacity: 0, x: -100, y: 100, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 0.6, rotate: 45 }}
          transition={{ duration: 1.8, delay: 0.8 }}
          src={Bean2}
          alt="coffee bean right"
          className="absolute hidden md:block right-0 top-0 w-20 -rotate-45"
        />
      </div>
    </div>
  );
};

export default Hero;
