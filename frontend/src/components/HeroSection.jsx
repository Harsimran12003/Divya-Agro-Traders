import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-green-50 via-white to-green-100 pt-20 md:pt-40 pb-16 overflow-hidden">

      {/* Decorative Leaf Pattern */}
      <img
        src="/decor/leaf.png"
        className="absolute top-10 left-10 w-32 opacity-10 rotate-12"
        alt=""
      />
      <img
        src="/decor/leaf.png"
        className="absolute bottom-10 right-10 w-40 opacity-10 -rotate-12"
        alt=""
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-300 rounded-full opacity-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              y: [-40, 40],
              x: [0, 20, -20, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-wide text-green-700 font-semibold text-sm">
            Trusted Agricultural Partner
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
            Empowering Farmers Daily.
          </h1>

          <p className="text-gray-700 mt-6 max-w-md md:text-lg text-base">
            A leading supplier of premium agricultural machinery, delivering
            reliability, performance and innovation to fields across Uttar Pradesh.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold shadow-lg hover:bg-green-800 transition relative overflow-hidden"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-green-500 opacity-20 blur-xl"></span>
            </motion.a>

            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-white border border-green-700 text-green-700 rounded-full font-semibold shadow hover:bg-green-50 transition"
            >
              Explore Products
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT VISUAL (Machine + Glows) */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Behind Glow */}
          <div className="absolute w-[500px] h-[500px] bg-green-300 rounded-full blur-[120px] opacity-40"></div>
          <div className="absolute w-[600px] h-[600px] bg-green-200/70 rounded-full blur-[150px] opacity-40 -z-10"></div>
          <div className="absolute w-[380px] h-[380px] bg-white/30 rounded-full blur-[90px] opacity-40"></div>

          {/* MACHINE IMAGE */}
          <motion.img
            src="/equipment/vishal/14.avif"            
            alt="Agriculture Machine"
            className="w-[480px] md:w-[500px] z-20 drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Glow under machine */}
          <div className="absolute bottom-[-30px] w-[330px] h-[40px] bg-green-700/30 blur-2xl rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
}
