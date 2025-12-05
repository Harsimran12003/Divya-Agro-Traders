import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+919415920902"; 

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-5 bg-green-500 text-white p-3 rounded-full shadow-xl hover:bg-green-600 transition z-50 flex items-center justify-center"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
