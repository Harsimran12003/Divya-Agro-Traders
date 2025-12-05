import React from "react";
import { motion } from "framer-motion";

export default function OurStorySection() {
  return (
    <section className="w-full py-24 bg-[#eef5ef] overflow-hidden relative">

      {/* Decorative background swirl pattern */}
      <img
        src="/decor/pattern.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full opacity-10 object-cover pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center relative">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Section Icon */}
          <div className="flex items-center gap-3">
            <img src="/decor/leaves-icon.png" alt="icon" className="w-10 opacity-90" />
            <span className="uppercase tracking-wide text-green-700 font-semibold">
              Our Story
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-title font-bold text-green-900 leading-tight">
            Who We Are
          </h2>

          {/* Text */}
          <p className="text-gray-700 leading-relaxed text-lg max-w-lg">
            Divya Agro Traders, founded in 2017 in Bindki, Uttar Pradesh,
            specializes in supplying agriculture combine harvesters. 
            Our commitment to timely delivery and large inventory, combined with 
            sourcing from reliable manufacturers, reflects our dedication to 
            customer satisfaction.
          </p>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          
          {/* Big image */}
          <div className="relative">
            <div className="absolute inset-0 bg-green-200 blur-2xl opacity-30 rounded-3xl -z-10"></div>

            <img
              src="/decor/story.webp"
              alt="Our Story"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
