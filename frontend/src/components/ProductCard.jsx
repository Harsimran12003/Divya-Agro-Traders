import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative"
    >
      <Link
        to={`/product/${product.id}`}
        className="
          block rounded-2xl bg-white shadow-md hover:shadow-xl
          transition-all duration-300 overflow-hidden relative group
          border border-green-100 w-full h-[280px]
        "
      >
        {/* IMAGE AREA — INCREASED HEIGHT */}
        <div
          className="
            relative px-0 pt-2 pb-0
            bg-gradient-to-b from-green-50 to-white rounded-t-2xl
            flex justify-center items-center h-[220px] overflow-hidden
          "
        >
          <div className="absolute w-36 h-36 bg-green-300/20 rounded-full blur-2xl -z-10"></div>

          <motion.img
            src={product.mainImage}
            alt={product.name}
            className="w-[85%] h-full drop-shadow-xl"
            whileHover={{ scale: 1.13 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* TEXT AREA — REMOVED EXTRA SPACE */}
        <div className="px-2 pt-0 pb-2 relative text-center">
          <h3
            className="
              text-lg font-semibold text-green-900 
              leading-tight group-hover:text-green-700 transition
            "
          >
            {product.name}
          </h3>
        </div>

        {/* Bottom Glow */}
        <div
          className="
            absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-2
            bg-green-300/40 blur-md opacity-60 
            group-hover:opacity-100 transition duration-300
          "
        ></div>
      </Link>
    </motion.div>
  );
}
