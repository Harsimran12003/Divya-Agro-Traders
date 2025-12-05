import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar.jsx";
import ProductCard from "../components/ProductCard";

// Import data
import vishalProducts from "../data/vishalProducts";
import bullProducts from "../data/bullProducts";
import agrizoneProducts from "../data/agrizoneProducts";
import Footer from "../components/Footer.jsx";

export default function CategoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const { category } = useParams();
  
  const categoryMap = {
    vishal: vishalProducts,
    bull: bullProducts,
    agrizone: agrizoneProducts,
  };

  const products = categoryMap[category] || [];
  

  return (
    <>
      <Navbar />

      {/* CATEGORY HEADER SECTION */}
      <section className="relative pt-40 pb-15 bg-gradient-to-b from-green-50 to-white overflow-hidden">

        {/* Decorative background pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/decor/pattern.png')",
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
          }}
        ></div>

        {/* Decorative leaf */}
        <img
          src="/decor/leaf.png"
          className="absolute top-10 right-10 w-32 opacity-30 rotate-12"
          alt="decor"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-title font-bold text-green-900 mb-4 capitalize"
          >
            {category} Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 max-w-2xl"
          >
            Explore our premium selection of {category} machinery, tools, and high-performance
            farming equipment—engineered for reliability, productivity, and long-term durability.
          </motion.p>
        </div>
      </section>

      {/* PRODUCT GRID SECTION */}
      <section className="relative py-10 bg-white">
        
        {/* subtle green circle glow */}
        <div className="absolute -top-20 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* If no products */}
          {products.length === 0 && (
            <p className="text-gray-600 mt-10 text-center text-lg">
              No products found in this category.
            </p>
          )}
        </div>
        
      </section>
      <Footer />
    </>
  );
}
