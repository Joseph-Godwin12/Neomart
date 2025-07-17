import { motion } from "framer-motion";
import joseph from "../assets/joseph.jpg";
import about from "../assets/cart.jpg";
import { Link } from "react-router-dom";



export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">
      {/* Hero Banner - Styled Like Home Page */}
      <motion.section
        className="relative bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-700 text-white overflow-hidden py-60 px-6 md:flex items-center justify-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(67,56,202,0.85) 0%, rgba(37,99,235,0.85) 50%, rgba(139,92,246,0.85) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 drop-shadow"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About <span className="text-yellow-300">NeoMart</span>
          </motion.h1>
          <p className="mt-4 text-lg text-white max-w-xl mx-auto drop-shadow-md">
            Your go-to destination for stylish, affordable, and trusted shopping experiences.
          </p>
          
        </div>
      </motion.section>

      {/* Page Content */}
      <div className="py-16 px-4 sm:px-8">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <motion.div
            className="bg-white p-6 rounded-lg shadow"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p>To offer a seamless online shopping experience with quality products at unbeatable prices.</p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p>To be Africa’s most trusted e-commerce destination, empowering shoppers through innovation and integrity.</p>
          </motion.div>
        </div>

        {/* Our Story */}
        <motion.div
          className="mb-20 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600">
            NeoMart was born from a simple idea: make quality shopping accessible to everyone. From humble beginnings as a small tech-driven shop, we've grown into a platform trusted by thousands. Every product we showcase, every feature we build, is driven by our love for good design, great deals, and happy customers.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-center mb-6">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Integrity", "Customer First", "Innovation", "Affordability"].map((value, i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
                <span className="block text-lg font-semibold text-blue-600">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Meet the Team */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-center mb-6">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
            {[{ name: "Joseph Godwin", role: "Frontend Engineer", image: joseph }].map(
              (member, i) => (
                <div key={i} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition">
                  <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" />
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              )
            )}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-center mb-6">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-gray-700">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-2">“NeoMart is my favorite online shop. Delivery is fast and products are original. Highly recommend!”</p>
              <p className="text-sm font-semibold text-blue-600">— Chukwuemeka O.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-2">“I love how easy it is to browse and check out. Great UX and affordable deals.”</p>
              <p className="text-sm font-semibold text-blue-600">— Sarah E.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to explore NeoMart?</h3>
          <p className="mb-6 text-gray-600">Join thousands of happy shoppers today and get amazing deals.</p>
         <Link
          to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full shadow transition"
          >
            Shop Now
          </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
