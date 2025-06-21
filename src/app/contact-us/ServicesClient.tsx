"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_hbeusdr",
          "template_ggu0tua",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          setStatusType("success");
          form.current?.reset();
        },
        () => {
          setStatusMessage("❌ Message not sent. Please try again.");
          setStatusType("error");
        }
      );

    // Remove the toast after 4 seconds
    setTimeout(() => {
      setStatusMessage("");
      setStatusType("");
    }, 4000);
    }
  };

  return (
    <div
      className="bg-white text-gray-800 dark:bg-dark1 dark:text-black min-h-screen"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <nav className="bg-black text-white px-4 sm:px-6 py-4 flex items-center justify-between shadow-md fixed top-0 left-0 w-full z-50 dark:bg-dark2">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/home">
            <Image
              src="/footer-logo.png"
              alt="Ultimate Graphics Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 text-sm sm:text-base">
          <Link
            href="/home"
            className="whitespace-nowrap px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base font-extrabold uppercase tracking-wide font-sans gradient-glow-text animate-pulseSlow"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="whitespace-nowrap px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base font-extrabold uppercase tracking-wide font-sans gradient-glow-text animate-pulseSlow"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="whitespace-nowrap px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base font-extrabold uppercase tracking-wide font-sans gradient-glow-text animate-pulseSlow"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="whitespace-nowrap px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base font-extrabold uppercase tracking-wide font-sans gradient-glow-text animate-pulseSlow"
          >
            Gallery
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        {isClient && (
          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {/* Top Line */}
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 top-3.5" : "top-2"
              }`}
            ></span>
            {/* Middle Line */}
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "top-4"
              }`}
            ></span>
            {/* Bottom Line */}
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 top-3.5" : "top-6"
              }`}
            ></span>
          </button>
        )}

        {/* Mobile Menu with animation */}
       <AnimatePresence>
  {menuOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="md:hidden absolute top-[70px] left-0 w-full bg-black text-white px-4 py-4 flex flex-col gap-4 z-40 dark:bg-dark2"
    >
      {["home", "services", "about", "gallery"].map((page) => (
        <Link
          key={page}
          href={`/${page}`}
          onClick={() => setMenuOpen(false)}
          className="whitespace-nowrap px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm font-extrabold uppercase tracking-wide font-sans gradient-glow-text animate-pulseSlow"
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </Link>
      ))}
    </motion.div>
  )}
</AnimatePresence>
      </nav>

      {/* Banner */}
      <div className="contact-banner">
        <div className="about-container bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 text-white text-center py-20 animate__animated animate__fadeInDown">
          <h1 className="text-7xl mt-2 p-6 font-bold mb-4">Contact us</h1>
          <p className="text-lg animate__animated animate__fadeInUp animate__delay-1s">
            we&rsquo;d love to hear from you!
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section
        className="py-12 px-4 md:px-16"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-left space-y-10">
            <div>
              <h2 className="text-5xl font-extrabold uppercase tracking-wide font-sans gradient-glow-text animate-pulseSlow">
                Let&rsquo;s Talk
              </h2>
              <p className="text-gray-600 text-lg">
                We&rsquo;d love to hear your feedback or answer any questions you may
                have.
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-red-400 to-pink-500 text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM8.711,4.3l5.7,5.766L8.7,15.711,7.3,14.289l4.289-4.242L7.289,5.7Z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  JP nagar 9th phase amruthnagar road, opposite to axis bank
                  <br />
                  Bangalore, Pincode 560062
                </p>
                <button
                  onClick={() => {
                    window.open(
                      "https://www.google.com/maps?q=12.870583,77.566083",
                      "_blank"
                    );
                  }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-tr mt-2 items-center justify-center from-red-400 to-pink-500 text-white font-medium shadow-md hover:shadow-lg transition duration-300"
                >
                  Click Here For Map
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm16 2H6v.01L12 13l6-6.99V6z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <a
                  href="mailto:ultimategraphics74@gmail.com"
                  className="text-gray-600 text-base hover:text-black transition duration-200"
                >
                  ultimategraphics74@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 1H7C5.897 1 5 1.897 5 3v18c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V3c0-1.103-.897-2-2-2zM12 21c-.553 0-1-.447-1-1s.447-1 1-1 1 .447 1 1-.447 1-1 1zm5-4H7V4h10v13z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <a
                  href="tel:+918050093019"
                  className="text-gray-600 text-base hover:text-black transition duration-200"
                >
                  +91 8050093019
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <section
            id="contact"
            className="bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-300 transform hover:scale-105"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
            >
              <div className="md:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Full Name
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-5 py-3 rounded-lg bg-gray-100 text-black"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-5 py-3 rounded-lg bg-gray-100 text-black"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  name="phone"
                  id="phone"
                  type="tel"
                  required
                  placeholder="+91 9999900000"
                  className="w-full px-5 py-3 rounded-lg bg-gray-100 text-black"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Business Location
                </label>
                <input
                  name="location"
                  id="location"
                  type="text"
                  required
                  placeholder="Business Location"
                  className="w-full px-5 py-3 rounded-lg bg-gray-100 text-black"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  City
                </label>
                <input
                  name="city"
                  id="city"
                  type="text"
                  required
                  placeholder="Your City Name"
                  className="w-full px-5 py-3 rounded-lg bg-gray-100 text-black"
                  suppressHydrationWarning
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="Subject (optional)"
                  className="w-full px-5 py-3 rounded-lg bg-gray-100 text-black"
                  suppressHydrationWarning
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  placeholder="Type your message..."
                  className="w-full px-5 py-3 rounded-lg bg-gray-100 text-black resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  suppressHydrationWarning
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>

      {/* Footer Section */}
      <section className="relative bottom-0 left-0 w-full bg-[#070f2b] text-white py-10 px-6 sm:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/footer-logo.png"
                alt="ultimategraphics Logo"
                width={160}
                height={100}
              />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Reshaping your brand&rsquo;s identity with custom signage solutions.
            </p>

            <p className="text-sm text-gray-400 mb-4">
              Ultimate Graphics delivers premium, custom signage solutions
              designed to enhance your brand visibility. From design to
              installation, we ensure every sign reflects quality, creativity,
              and impact.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white hover:text-red-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-red-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-red-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 border-b-2 border-red-600 w-fit pb-1">
              Quicklinks
            </h3>
            <ul className="space-y-2 text-sm mt-3">
              <li>
                <Link href="/about" className="hover:text-red-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-red-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-red-400">
                  Contact Us
                </Link>
              </li>
            </ul>
            <br />
            <div className="text-white">
              <h2 className="text-lg font-semibold border-b-2 border-red-600 inline-block mb-4">
                Follow us on
              </h2>
              <div className="flex space-x-4">
                {/* Instagram */}
                <a
                  href="https://instagram.com/ultimategraphics_india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M16 1.999H8A6.006 6.006 0 0 0 2 7.999v8a6.006 6.006 0 0 0 6 6h8a6.006 6.006 0 0 0 6-6v-8a6.006 6.006 0 0 0-6-6Zm4 14a4.005 4.005 0 0 1-4 4H8a4.005 4.005 0 0 1-4-4v-8a4.005 4.005 0 0 1 4-4h8a4.005 4.005 0 0 1 4 4ZM12 7.999a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2ZM17.5 6.499a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 border-b-2 border-red-600 w-fit pb-1">
              Get in touch
            </h3>
            <p className="text-sm text-gray-400 mt-3">
              <span className="font-semibold text-white">Address:</span>
              <br />
              JP nagar 9th phase
              <br />
              amruthnagar road, opposite to axis bank
              <br />
              Bangalore, Pincode 560062
            </p>
            <p className="mt-3 text-sm">
              <a
                href="tel:+918050093019"
                className="text-white text-base hover:text-gray-400 transition duration-200"
              >
                +91 8050093019
              </a>
            </p>
{statusMessage && <Toast message={statusMessage} type={statusType} />}
            <p className="mt-2 text-sm">
              <span className="font-semibold">Email:</span>
              <br />
              <a
                href="mailto:ultimategraphics74@gmail.com"
                className="text-red-600 text-base hover:text-gray-400 transition duration-200"
              >
                ultimategraphics74@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-400 mb-4">
              Reach out to us for creative and customized signage solutions
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M4,21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3ZM12,7.5a2,2,0,1,1-2,2A2,2,0,0,1,12,7.5ZM8.211,16.215a4,4,0,0,1,7.578,0A.993.993,0,0,1,14.83,17.5H9.18A1,1,0,0,1,8.211,16.215Z" />
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <footer className="relative bottom-0 left-0 w-full bg-black text-gray-600 text-center py-6 mt-0 dark:bg-dark2 dark:text-white">
        <p>&copy; 2025 Ultimate Graphics. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Toast({ message, type }: { message: string; type: "success" | "error" | "" }) {
  if (!message) return null; // Don&rsquo;t render if no message

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-3 rounded-md text-white shadow-lg animate-slideIn
        ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
    >
      {message}
    </div>
  );
}
