import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function OurProductsSection() {
  const products = [
    {
      title: "Vishal Combine Harvesters",
      slug: "vishal",
      desc: "High-efficiency harvesters designed for maximum field productivity.",
      img: "/vishal.png",
    },
    {
      title: "Agrizone Implements",
      slug: "agrizone",
      desc: "Advanced farming equipment designed to enhance crop production with precision, reliability, and modern engineering.",
      img: "/agrizone.png",
    },
    {
      title: "Bull",
      slug: "bull",
      desc: "High-performance agricultural and construction machinery built for durability and powerful field productivity.",
      img: "/bull.png",
    }
  ];

  return (
    <section
      id="products"
      className="w-full py-24 relative bg-[#0f2b15] text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          // backgroundImage: "url('/decor/pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Title */}
        <div className="text-center mb-14">
          <img
            src="/decor/leaves-icon.png"
            alt="icon"
            className="w-12 mx-auto opacity-100 mb-0"
          />
          <h2 className="text-4xl md:text-5xl font-title font-bold">
            Our Products
          </h2>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {products.map((item, i) => (
            <Link to={`/products/${item.slug}`} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition transform relative cursor-pointer 
                flex flex-col h-[420px]"   // FIXED CARD HEIGHT
              >
                {/* IMAGE */}
                <div className="h-56 w-full overflow-hidden flex items-center justify-center bg-white">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full  hover:scale-110 transition duration-700"
                  />
                </div>

                {/* TEXT */}
                <div className="p-6 text-gray-800 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-green-900 font-title mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {item.desc}
                  </p>

                  
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
