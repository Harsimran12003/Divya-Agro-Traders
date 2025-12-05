import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-white pb-28 pt-32 overflow-hidden"
    id="about">

      {/* CURVED TOP DIVIDER (premium Greenaura style) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 0L0 0 0 16.48C224.72 65.63 542.32 91.68 862.19 57.41 1035.17 38.74 1158.58 12.94 1200 0z"
            fill="#e9f5df"
          />
        </svg>
      </div>

      {/* WATERCOLOR BACKGROUND SPLASH */}
      <img
        src="/decor/watercolor.png"
        className="absolute top-20 left-0 w-[420px] opacity-25 pointer-events-none -z-10"
        alt=""
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-20 items-center relative">

        {/* FLOATING DECORATIVE TOOL */}
        <motion.img
          src="/decor/tool.png"
          alt="decor tool"
          className="absolute -top-10 left-5 w-24 opacity-50 pointer-events-none"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* GREEN ACCENT LINE */}
          <div className="absolute -left-6 top-0 h-full w-1 bg-green-700 rounded-full hidden md:block"></div>

          <h2 className="text-4xl md:text-5xl font-title font-bold text-green-900 leading-tight mb-5">
            About Us
          </h2>

          <p className="text-green-700 font-semibold mb-6 text-lg">
            Delivering trusted agricultural machinery with excellence & care.
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            Divya Agro Traders is known in the market as a leading supplier and trader 
            of Agriculture Combine Harvesters and essential agricultural machinery. 
            We procure all items from trusted manufacturers after thorough market 
            research to ensure top-quality sourcing.
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            Every product undergoes rigorous quality checks so that it meets 
            international standards. Backed by our dedicated team of professionals, 
            we ensure smooth operations, timely deliveries, and exceptional service.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Our customer support team remains in constant touch with clients, ensuring 
            all queries are addressed promptly. Their commitment ensures our clients 
            are always satisfied with our products and services.
          </p>

          {/* CALL-US INFO BOX (Greenaura style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 bg-green-50 p-5 rounded-xl shadow border border-green-100 max-w-sm"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-green-700 text-white rounded-full shadow">
              <i className="fa fa-phone text-xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-green-900 text-lg">Call Us</h4>
              <p className="text-gray-700">+91-9936846667</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE — PREMIUM STYLING */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Decorative leaf (floating) */}
          <motion.img
            src="/decor/leaf.png"
            className="absolute -bottom-12 -left-10 w-32 opacity-40 -z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            alt=""
          />

          {/* Glow behind image */}
          <div className="absolute inset-0 w-[380px] h-[380px] bg-green-200 blur-3xl opacity-40 -z-10 rounded-full"></div>

          {/* Image container */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-green-100">
            <img
              src="/decor/main-image.png"
              alt="About Us"
              className="w-full max-w-md object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
