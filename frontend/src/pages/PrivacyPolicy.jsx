import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-6 text-center">
          Effective Date: {new Date().getFullYear()}
        </p>

        <div className="space-y-8 text-gray-800 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              1. Introduction
            </h2>
            <p>
              Divya Agro Traders (“we,” “our,” “us”) is committed to protecting
              your privacy. This Privacy Policy describes how we collect, use,
              store, and safeguard your personal information when you use our
              website or services.
            </p>
            <p className="mt-2">
              By accessing or using this website, you agree to the terms of this
              Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              2. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold mt-3">A. Information You Provide</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message or inquiry details</li>
              <li>Any additional information shared through contact forms or communication</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">B. Information Collected Automatically</h3>
            <p className="mt-2">
              When you browse our website, we may automatically collect:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>IP address</li>
              <li>Device information</li>
              <li>Browser type</li>
              <li>Pages visited & interaction patterns</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              3. How We Use Your Information
            </h2>

            <ul className="list-disc ml-6 space-y-1">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To process orders or service requests</li>
              <li>To improve our website, services, and customer experience</li>
              <li>To send updates, promotions, or product information (only with consent)</li>
              <li>For internal analytics and website security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              4. Data Sharing & Disclosure
            </h2>
            <p>
              We do NOT sell or rent your personal information to third parties.
              Information may be shared only with:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Manufacturers or service partners for order processing</li>
              <li>Legal authorities when required by law</li>
              <li>Trusted service providers (hosting, email services, analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              5. Cookies & Tracking Technologies
            </h2>
            <p>
              Our website may use cookies to enhance your browsing experience.
              You can disable cookies through your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access, loss,
              or misuse. However, no method of online transmission is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              7. Your Rights
            </h2>
            <p>You may request to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your information (subject to legal compliance)</li>
              <li>Withdraw consent for marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for their privacy practices or content. We recommend
              reviewing their policies before sharing any information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              9. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy at any time. Continued use of
              our website constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact:
            </p>

            <p className="mt-3 font-medium text-green-900">
              Divya Agro Traders
            </p>
            <p>📍 Bindki, Uttar Pradesh 212635, India</p>
            <p>📞 +91-9936846667</p>
            <p>✉️ info@divyaagrotraders.com</p>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
}
