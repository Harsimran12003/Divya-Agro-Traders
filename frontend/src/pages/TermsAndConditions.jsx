import React from "react";
import Navbar from "../components/Navbar";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto leading-relaxed text-gray-800">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="mb-6">
          Welcome to <strong>Divya Agro Traders</strong>. By accessing or using
          our website, you agree to comply with and be bound by the following
          Terms and Conditions. Please read them carefully before using our
          website.
        </p>

        {/* 1 */}
        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">1. General</h2>
        <p className="mb-4">
          This website is owned and operated by <strong>Divya Agro Traders</strong>.
          The terms “we,” “our,” or “us” refer to Divya Agro Traders, and “you”
          refers to the user of our website.
        </p>
        <p className="mb-4">
          We reserve the right to change or update these Terms at any time
          without prior notice. Continued use of the website implies acceptance
          of the updated Terms.
        </p>

        {/* 2 */}
        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">
          2. Products & Services
        </h2>
        <p className="mb-4">
          Divya Agro Traders is a supplier and trader of Vishal Harvesters and
          other agricultural machinery.
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>
            Product descriptions, specifications, and prices displayed on our
            website are for general information purposes only.
          </li>
          <li>
            Actual product features may vary depending on model, updates, and
            customer requirements.
          </li>
        </ul>

        {/* 3 */}
        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">
          3. Orders & Payments
        </h2>
        <ul className="list-disc ml-8 mb-4">
          <li>All bookings or purchases are subject to availability.</li>
          <li>
            Prices listed are indicative and may change based on customization,
            location, or applicable taxes.
          </li>
          <li>
            Payments must be made only through authorized channels communicated
            by Divya Agro Traders.
          </li>
          <li>
            We reserve the right to refuse or cancel orders in case of suspected
            fraud or misuse.
          </li>
        </ul>

        {/* 4 */}
        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">
          4. Delivery & Shipping
        </h2>
        <ul className="list-disc ml-8 mb-4">
          <li>
            Delivery timelines are approximate and may vary due to logistics and
            external factors.
          </li>
          <li>
            Risk of loss or damage shifts to the buyer once the product is
            delivered.
          </li>
          <li>Customers must provide accurate delivery details.</li>
        </ul>

        {/* 5 */}
        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">
          5. Warranty & Service
        </h2>
        <p className="mb-4">
          Warranty terms (if applicable) are provided by the manufacturer or as
          specified during purchase.
        </p>
        <p className="mb-4">
          We may assist with service support, but we are not liable for delays
          or limitations in warranty services offered by third-party companies.
        </p>

        {/* 6 */}
        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">
          6. Limitation of Liability
        </h2>
        <p className="mb-4">
          While we strive for accuracy, we do not guarantee that all content on
          the website is free from errors or omissions.
        </p>
        <p className="mb-4">
          Divya Agro Traders will not be liable for any direct, indirect,
          incidental, or consequential damages resulting from the use of our
          products or website.
        </p>

        {/* 7 */}
        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">
          7. Intellectual Property
        </h2>
        <p className="mb-4">
          All content, product images, logos, trademarks, and designs displayed
          on the website belong to Divya Agro Traders or their respective
          manufacturers. Unauthorized use, reproduction, or modification is
          strictly prohibited.
        </p>

        {/* 8 */}
        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">
          8. Privacy & Data Use
        </h2>
        <p className="mb-4">
          By using our website, you agree to our Privacy Policy regarding data
          collection and usage. Customer information is used only for order
          processing and improving services.
        </p>

        {/* 9 */}
        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">
          9. Governing Law & Jurisdiction
        </h2>
        <p className="mb-4">
          These Terms & Conditions are governed by the laws of India. Any
          disputes shall be handled under the jurisdiction of courts in Uttar
          Pradesh, India.
        </p>

        {/* 10 */}
        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">
          10. Contact Us
        </h2>
        <p className="mb-4">
          For queries or clarifications, contact:
        </p>
        <p className="mb-1 font-semibold">Divya Agro Traders</p>
        <p>📍 Bindki, Uttar Pradesh 212635, India</p>
        <p>📞 +91-9936846667</p>
        <p className="mb-8">✉️ info@divyaagrotraders.com</p>
      </section>
    </>
  );
}
