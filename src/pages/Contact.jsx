import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Reset the alert after 3 seconds
    setTimeout(() => setFormSubmitted(false), 3000);
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get in Touch
        </motion.h2>
        <p className="text-gray-600">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">
        {/* Contact Form */}
        <motion.form
          className="bg-white rounded-lg shadow-lg p-6 space-y-4"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded p-3"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded p-3"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded p-3"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
          >
            Send Message
          </button>

          {formSubmitted && (
            <div className="mt-4 bg-green-100 text-green-700 text-sm p-3 rounded">
              ✅ Your message has been sent successfully!
            </div>
          )}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="space-y-6 text-gray-700"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>support@neomart.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>+234 813 993 5533</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p>Owerri, Imo State, Nigeria</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
