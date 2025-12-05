import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import vishalProducts from "../data/vishalProducts";
import bullProducts from "../data/bullProducts";
import agrizoneProducts from "../data/agrizoneProducts";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const { id } = useParams();

  const allProducts = [...vishalProducts, ...bullProducts, ...agrizoneProducts];

  const product = allProducts.find((p) => p.id === id);

  if (!product)
    return (
      <h2 className="pt-32 px-6 text-red-600 text-center text-xl font-semibold">
        Product Not Found
      </h2>
    );

  const gallery = product.gallery || [];
  const initialMain = product.mainImage || gallery[0];

  const [mainImage, setMainImage] = useState(initialMain);
  useEffect(() => {
  window.scrollTo(0, 0);
}, [id]);

  // Identify category for breadcrumb
  let category = "products";
  if (vishalProducts.includes(product)) category = "vishal";
  if (bullProducts.includes(product)) category = "bull";
  if (agrizoneProducts.includes(product)) category = "agrizone";

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 max-w-6xl mx-auto px-6">

        {/* 🔹 Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-700">Home</Link> &gt;{" "}
          <Link
            to={`/products/${category}`}
            className="hover:text-green-700 capitalize"
          >
            {category}
          </Link>{" "}
          &gt;{" "}
          <span className="text-green-800 font-semibold">{product.name}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-10 mb-10 text-center">
          {product.name}
        </h1>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT: Main Image + Gallery */}
          <div>
            {/* Main Product Image */}
            <motion.img
              key={mainImage}
              src={mainImage}
              alt={product.name}
              className="w-full h-[400px] object-contain rounded-3xl shadow-xl bg-green-50 p-6"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />

            {/* Mini Gallery */}
{gallery.length > 1 && (
  <div className="grid grid-cols-3 gap-4 mt-6">
    {gallery.slice(0, 3).map((img, i) => (
      <motion.img
        key={i}
        src={img}
        className={`h-28 w-full object-contain p-3 rounded-xl shadow-md cursor-pointer transition-all 
          ${
            mainImage === img
              ? "border-2 border-green-600 bg-green-50"
              : "bg-white hover:shadow-xl"
          }
        `}
        whileHover={{ scale: 1.05 }}
        onClick={() => {
          setMainImage(img);

          // Swap logic — replace clicked thumbnail with previous main image
          const newGallery = [...gallery];
          const clickedIndex = i;

          // Replace the clicked image with old main image
          newGallery[clickedIndex] = mainImage;

          product.gallery = newGallery; // Update gallery reference
        }}
      />
    ))}
  </div>
)}

          </div>

          {/* RIGHT: Description */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Product Description
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-6 whitespace-pre-line">
              {product.description}
            </p>

            {/* Contact Button */}
            <a
              href="#contact"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-800 transition w-fit"
            >
              Enquire About This Product
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 w-full h-[2px] bg-green-200 rounded-full"></div>

        {/* Contact Section */}
        <ContactSection />
      </section>
    </>
  );
}
