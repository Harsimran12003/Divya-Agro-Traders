import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-green-600 text-white p-3 rounded-full shadow-xl hover:bg-green-700 transition z-50 cursor-pointer"
      >
        <FiArrowUp size={24} />
      </button>
    )
  );
}
