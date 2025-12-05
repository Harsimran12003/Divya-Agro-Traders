import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">

        {/* COMPANY NAME */}
        <p className="text-xl font-semibold tracking-wide mb-6">
          Divya Agro Traders
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.facebook.com/people/Divya-Agro-Traders/61579790738132/"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://www.instagram.com/divya_agro_traders/"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://www.youtube.com/@divya_agro_traders"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
          >
            <FaYoutube size={20} />
          </a>
        </div>

        {/* POLICY LINKS */}
        <div className="flex justify-center gap-6 text-sm text-white/80 mb-4">
          <Link
            to="/terms-and-conditions"
            className="hover:text-white transition"
          >
            Terms & Conditions
          </Link>

          <span>|</span>

          <Link
            to="/privacy-policy"
            className="hover:text-white transition"
          >
            Privacy Policy
          </Link>
        </div>

        {/* COPYRIGHT */}
        <p className="text-white/90 text-sm">
          © {new Date().getFullYear()} Divya Agro Traders • All Rights Reserved
        </p>
        <p className="text-white/70 text-[12px] mt-10 mb-0">
         Powered by Excellence Web Services
        </p>
      </div>
    </footer>
  );
}
