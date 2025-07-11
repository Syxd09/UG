"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  {
    const [menuOpen, setMenuOpen] = useState(false);

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
              href="/gallery"
              className="whitespace-nowrap px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base font-extrabold uppercase tracking-wide font-sans gradient-glow-text animate-pulseSlow"
            >
              Gallery
            </Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
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
                {["home", "services", "gallery"].map((page) => (
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

        <div className="about-container bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 text-white text-center py-20 animate__animated animate__fadeInDown">
          <h1 className="text-7xl mt-2 p-6 font-bold mb-4">About us</h1>
          <p className="text-lg animate__animated animate__fadeInUp animate__delay-1s">
            Learn about our journey in crafting impactful designs and signage.
          </p>
        </div>

        {/* Section Wrapper */}
        <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
          {/* First Block */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-xl shadow-xl">
              {/* Use Next.js Image component */}
              <Image
                src="/ug-logo.png"
                alt="Image 1"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />{" "}
              {/* Added width and height, adjust as needed */}
            </div>
            <div>
              <h2 className="text-5xl font-extrabold tracking-wide mb-6 gradient-glow-text drop-shadow-lg leading-tight animate-pulseSlow">
                Your Trusted Signboard & Design Experts
              </h2>
              <p className="text-lg text-gray-300">
                Welcome to Ultimate Graphics; your go-to destination for
                high-quality graphic design and signboard solutions! We
                specialize in creating all types of signboards, from
                eye-catching LED signs and acrylic boards to vinyl banners and
                3D lettering. Our expertise extends beyond signs to branding,
                digital art, and web graphics, ensuring a complete visual
                identity for your business.
              </p>
            </div>
          </div>

          <div className="w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mt-10 rounded-full animate-pulseSlow"></div>

          {/* Second Block */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 overflow-hidden rounded-xl shadow-xl">
              {/* Use Next.js Image component */}
              <Image
                src="img(2).jpg"
                alt="Image 2"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />{" "}
              {/* Added width and height, adjust as needed */}
            </div>
            <div className="md:order-1">
              <h2 className="text-5xl font-extrabold tracking-wide mb-6 gradient-glow-text drop-shadow-lg leading-tight animate-pulseSlow">
                Crafting Signs, Creating Impact
              </h2>
              <p className="text-lg text-gray-300">
                At Ultimate Graphics, we specialize in designing and
                manufacturing all types of signboards that help businesses stand
                out. From LED signs, acrylic boards, vinyl banners, and 3D
                lettering to custom signage solutions, we bring your brand to
                life with eye-catching and durable designs.
              </p>
            </div>
          </div>

          <div className="w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mt-10 rounded-full animate-pulseSlow"></div>

          {/* Third Block */}
          <section className="flex items-center justify-center px-6 py-12 text-white">
            <div className="text-center max-w-6xl w-full">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-12 gradient-glow-text drop-shadow-lg leading-tight animate-pulseSlow">
                Why Choose Us
              </h2>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-semibold tracking-wide mb-2 gradient-glow-text drop-shadow-lg leading-tight animate-pulseSlow">
                    🧠 Innovative Design Thinking
                  </h4>
                  <p className="text-gray-300">
                    Our design approach combines creativity with strategy,
                    ensuring each project resonates with your audience and
                    elevates your brand presence.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold tracking-wide mb-2 gradient-glow-text drop-shadow-lg leading-tight animate-pulseSlow">
                    📦 Complete Visual Solutions
                  </h4>
                  <p className="text-gray-300">
                    From concept development to final execution, we offer
                    full-spectrum services—including signage, digital art,
                    branding, and web graphics—all under one roof.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold tracking-wide mb-2 gradient-glow-text drop-shadow-lg leading-tight animate-pulseSlow">
                    ⏱ Reliable Turnaround & Support
                  </h4>
                  <p className="text-gray-300">
                    We pride ourselves on delivering projects on time and
                    providing ongoing support, ensuring a seamless and
                    hassle-free experience from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mt-10 rounded-full animate-pulseSlow"></div>

          {/* {forth block} */}
          <section className="flex items-center justify-center px-6 py-12 text-white">
            <div className="text-center max-w-6xl w-full">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4 gradient-glow-text drop-shadow-lg leading-tight animate-pulseSlow">
                Take A Look At Our Work
              </h2>
              <p className="text-lg mb-4">
                Explore our creative signage solutions that blend innovation and
                artistry.
              </p>
              <Link
                href="/gallery"
                className="inline-block whitespace-nowrap px-5 py-2 rounded-lg border border-white  text-sm md:text-base font-extrabold leading-tighter uppercase tracking-wide font-sans gradient-glow-text animate-pulseSlow animate__delay-4s"
              >
                Gallery
              </Link>
            </div>
          </section>
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
                Reshaping your brand&rsquo;s identity with custom signage
                solutions.
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

        {/* Footer */}
        <footer className="relative bottom-0 left-0 w-full bg-black text-gray-600 text-center py-6 mt-0 dark:bg-dark2 dark:text-white">
          <p>&copy; 2025 Ultimate Graphics. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}
