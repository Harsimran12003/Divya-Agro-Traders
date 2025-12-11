import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll handler that works from ANY PAGE
  const handleNavigation = (target) => {
    setMobileOpen(false);

    if (location.pathname !== "/") {
      // Redirect to home and pass the target section
      navigate("/", { state: { scrollTo: target } });
    } else {
      // Already on home → scroll smoothly
      if (target === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="shadow-sm bg-white fixed top-0 left-0 w-full z-50 border-b border-green-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">

        {/* LOGO + TEXT */}
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => handleNavigation("home")}
        >
          <div className="flex items-center gap-4">
            <img
              src="/logo.avif"
              alt="Divya Agro Traders Logo"
              className="h-16 w-auto drop-shadow-md"
            />
            <div>
              <h1 className="text-2xl font-bold text-green-700 tracking-wide">
                Divya Agro Traders
              </h1>
              <p className="text-[14px] text-gray-600 -mt--3">
                GST: <span className="font-semibold">09BKJPK2464E1Z4</span>
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-[18px] font-semibold text-gray-700">
          <li className="hover:text-green-600 cursor-pointer" onClick={() => handleNavigation("home")}>
            Home
          </li>
          <li className="hover:text-green-600 cursor-pointer" onClick={() => navigate("/about")}>
            About Us
          </li>
          <li className="hover:text-green-600 cursor-pointer" onClick={() => navigate("/products")}>
            Our Products
          </li>
          <li className="hover:text-green-600 cursor-pointer" onClick={() => navigate("/contact")}>
            Contact Us
          </li>

          {/* DROPDOWN */}
          <li
            className="relative cursor-pointer flex items-center gap-1 hover:text-green-600"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            More <FiChevronDown size={18} />

            {dropdownOpen && (
              <div className="absolute top-8 right-0 bg-white shadow-lg rounded-lg py-3 w-60 border border-green-100 animate-fadeIn z-50">
                <p
                  className="py-2 px-4 hover:bg-green-50 hover:text-green-700 cursor-pointer rounded-md"
                  onClick={() => navigate("/terms-and-conditions")}
                >
                  Terms & Conditions
                </p>
                <p
                  className="py-2 px-4 hover:bg-green-50 hover:text-green-700 cursor-pointer rounded-md"
                  onClick={() => navigate("/privacy-policy")}
                >
                  Privacy Policy
                </p>
              </div>

              
            )}
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl text-green-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-5 space-y-4 text-lg font-medium border-t border-green-100">
          <p className="hover:text-green-600" onClick={() => handleNavigation("home")}>Home</p>
          <p className="hover:text-green-600" onClick={() => { setMobileOpen(false); navigate("/about"); }}>About Us</p>
          <p className="hover:text-green-600" onClick={() => { setMobileOpen(false); navigate("/products"); }}>Our Products</p>
          <p className="hover:text-green-600" onClick={() => { setMobileOpen(false); navigate("/contact"); }}>Contact Us</p>

          <details className="border-t pt-3">
            <summary className="cursor-pointer flex items-center justify-between">
              More
            </summary>

            <p
              className="mt-3 pl-3 hover:text-green-600 cursor-pointer"
              onClick={() => navigate("/terms-and-conditions")}
            >
              Terms & Conditions
            </p>
            <p
              className="mt-3 pl-3 hover:text-green-600 cursor-pointer"
              onClick={() => navigate("/privacy-policy")}
            >
              Privacy Policy
            </p>
          </details>
        </div>
      )}
    </header>
  );
}
