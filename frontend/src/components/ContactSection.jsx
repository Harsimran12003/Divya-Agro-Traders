import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const contacts = [
    "+91-9936846667",
    
  ];

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  }

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const eObj = validate();
    if (Object.keys(eObj).length) {
      setErrors(eObj);
      return;
    }

    // Simulate submit (replace with real API call)
    setSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 900)); // fake delay
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      // handle real error
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white py-20"
    id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT: FORM */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              Contact Us
            </span>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold text-green-900">
              Get in touch with Divya Agro Traders
            </h3>
            <p className="mt-3 text-gray-600 max-w-xl">
              Have a question about our combine harvesters or need a quote? Fill the form and we will contact you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full rounded-lg border px-4 py-3 focus:outline-none ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </label>

              <label className="block">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className={`w-full rounded-lg border px-4 py-3 focus:outline-none ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className={`w-full rounded-lg border px-4 py-3 focus:outline-none ${
                    errors.phone ? "border-red-400" : "border-gray-200"
                  }`}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
              </label>

              <label className="block">
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject (optional)"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none"
                />
              </label>
            </div>

            <label className="block">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={2}
                className={`w-full rounded-lg border px-4 py-3 focus:outline-none resize-none ${
                  errors.message ? "border-red-400" : "border-gray-200"
                }`}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </label>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-3 px-6 py-3 bg-green-700 text-white rounded-full shadow hover:bg-green-800 transition disabled:opacity-60 cursor-pointer"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <div className="flex items-center text-green-700 bg-green-50 px-3 py-2 rounded-full">
                  <FiCheckCircle className="mr-2" /> Message sent
                </div>
              )}
            </div>
          </form>
        </motion.div>

        {/* RIGHT: CONTACT INFO PANEL */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-8 bg-green-50 border border-green-100 shadow-sm"
        >
          <div className="mb-6">
            <h4 className="text-green-900 font-semibold">Contact Information</h4>
            <p className="mt-2 text-gray-700">
              <span className="block font-semibold">Mr. Vivek Patel</span>
              <span className="text-sm text-gray-600">Proprietor</span>
            </p>
          </div>

          <div className="space-y-4">
            {/* Phones */}
            <div>
              <h5 className="text-sm text-gray-600 mb-2">Phone</h5>
              <ul className="space-y-2">
                {contacts.map((num, idx) => {
                  const raw = num.replace(/[^+\d]/g, "");
                  const waLink = `https://wa.me/${raw.replace("+", "")}`;
                  return (
                    <li key={idx} className="flex items-center gap-3">
                      <a
                        href={`tel:${raw}`}
                        className="inline-flex items-center gap-2 text-green-800 hover:underline"
                      >
                        <FiPhone /> <span className="font-medium">{num}</span>
                      </a>

                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Email */}
            <div>
              <h5 className="text-sm text-gray-600 mb-2">Email</h5>
              <a
                href="mailto:info@divyaagrotraders.com"
                className="inline-flex items-center gap-2 text-green-800 hover:underline"
              >
                <FiMail /> <span className="font-medium">info@divyaagrotraders.com</span>
              </a>
            </div>

            {/* Address */}
<div>
  <h5 className="text-sm text-gray-600 mb-2">Locations</h5>

  {/* Location 1 */}
  <a
    href="https://www.google.com/maps/place/Bindki,+Uttar+Pradesh+212635/@26.0267075,80.5783103,14z/data=!3m1!4b1!4m6!3m5!1s0x399c893e9543f5c9:0xc30e080e72942f3f!8m2!3d26.0285577!4d80.5771737!16zL20vMGYwamdr?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-2 text-gray-700 hover:text-green-700 transition cursor-pointer"
  >
    <FiMapPin className="mt-1 text-green-700" />
    <span>Bundawa Bundawa Bindki, UP 212635</span>
  </a>

  {/* Location 2 */}
  <a
    href="https://maps.app.goo.gl/XiuyWNaDt38nG6uf7"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-2 text-gray-700 hover:text-green-700 transition cursor-pointer mt-2"
  >
    <FiMapPin className="mt-1 text-green-700" />
    <span>Navipur Road Gajner Kanpur Dehat 209121</span>
  </a>

  {/* Location 3 */}
  <a
    href="https://maps.app.goo.gl/ymXzDyZ8zwAgMJ6B9"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-2 text-gray-700 hover:text-green-700 transition cursor-pointer mt-2"
  >
    <FiMapPin className="mt-1 text-green-700" />
    <span>Pahadi Road Karvi Chitracoot 210205</span>
  </a>
</div>

          </div>

          
        </motion.aside>
      </div>
    </section>
  );
}
