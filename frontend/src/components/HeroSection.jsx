import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#e7f4db] md:pt-36 pt-20 pb-5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          {/* Small tagline */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="uppercase tracking-wide text-green-700 font-semibold"
          >
            Trusted Agricultural Partner
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight mt-3"
          >
            Empowering Farmers Daily
          </motion.h1>

          {/* Sub Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-700 mt-4 max-w-md md:max-w-sm mx-auto md:mx-0 text-lg"
          >
            Reliable supplier of premium agricultural machinery & equipment in UP.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-7 px-8 py-3 bg-green-700 text-white rounded-full font-medium hover:bg-green-800 shadow-md transition"
                     >
            Contact Us Now            
          </motion.button>
        </div>

        {/* RIGHT SINGLE IMAGE — Enhanced Greenaura Effects */}
<motion.div
  className="flex justify-center relative"
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

  {/* MAIN IMAGE WITH FLOATING EFFECT */}
  <motion.img
    src="/equipment/10.avif"
    alt="Agriculture Machine"
    className="w-[450px] md:w-[500px] relative z-20 drop-shadow-2xl"
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* GREEN AURA BACKGLOW (similar to Greenaura theme) */}
  <div className="absolute w-[480px] h-[480px] bg-green-300 rounded-full blur-[120px] opacity-40 -z-10"></div>

  {/* RADIAL HIGHLIGHT GRADIENT */}
  <div className="absolute w-[520px] h-[520px] bg-gradient-to-b from-green-200 to-transparent rounded-full blur-[100px] opacity-70 -z-20"></div>

  {/* GLOW RING UNDER IMAGE (premium effect) */}
  <div className="absolute bottom-[-40px] w-[300px] h-[40px] bg-green-600/20 blur-2xl rounded-full"></div>

  {/* SUBTLE WHITE SPOTLIGHT OVERLAY */}
  <div className="absolute w-[350px] h-[350px] bg-white/20 rounded-full blur-[80px] -z-10"></div>

</motion.div>

      </div>
    </section>
  );
}
