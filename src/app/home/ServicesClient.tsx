"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
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
            href="/about"
            className="whitespace-nowrap px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base font-extrabold uppercase tracking-wide font-sans gradient-glow-text animate-pulseSlow"
          >
            About Us
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
      {["about", "services", "gallery"].map((page) => (
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

      {/* Hero Section */}
      <section className="relative bg-black/50 text-white py-24 px-4 sm:px-6 md:px-16 mt-0 flex justify-center items-center">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate__animated animate__fadeInLeft">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tighter uppercase tracking-wide font-sans gradient-glow-text animate-pulseSlow animate__animated animate__fadeInDown animate__delay-10s"
              style={{ lineHeight: "1.1" }}
            >
              Reshaping Your
              <br /> Business Boards
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed animate__animated animate__fadeInUp animate__delay-2s">
              Discover the latest trends and techniques in signage designs.
            </p>
            {/* Use Next.js Link component */}
            <Link
              href="/contact-us"
              className="inline-block whitespace-nowrap px-5 py-2 rounded-lg border border-white  text-sm md:text-base font-extrabold leading-tighter uppercase tracking-wide font-sans gradient-glow-text animate-pulseSlow animate__animated animate__fadeInUp animate__delay-4s"
            >
              Contact Us
            </Link>
          </div>

          {/* Image Content */}
          <div className="flex-1 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto md:mx-0 md:-ml-40 animate__animated animate__zoomIn animate__delay-2s">
            {/* Use Next.js Image component */}
            <Image
              src="/graphics.png"
              alt="Futuristic 3D Art"
              width={600}
              height={400}
              className="w-full h-auto"
            />{" "}
            {/* Added width and height, adjust as needed */}
          </div>
        </div>
      </section>

      {/* Working Hours Section */}
      <section className="bg-transparent text-white py-16 px-4 sm:px-6 md:px-16 text-center">
        <div className="w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mb-10 rounded-full animate-pulseSlow"></div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-16 md:gap-40 text-center">
          {/* Working Days */}
          <div>
            <h2 className="text-3xl font-bold mb-4 gradient-glow-text">
              Working Days
            </h2>
            <p className="text-lg tracking-wide">Monday</p>
            <p className="my-2 text-xl font-semibold">TO</p>
            <p className="text-lg tracking-wide">Saturday</p>
          </div>
          {/* Timings */}
          <div>
            <h2 className="text-3xl font-bold mb-4 gradient-glow-text">
              Timings
            </h2>
            <p className="text-lg tracking-wide">10:00 AM</p>
            <p className="my-2 text-xl font-semibold">TO</p>
            <p className="text-lg tracking-wide">10:00 PM</p>
          </div>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mt-10 rounded-full animate-pulseSlow"></div>
      </section>

      {/* Innovation Section */}
      <section className="relative py-20 px-4 sm:px-6 bg-transparent text-center max-w-4xl mx-auto">
        {/* Heading */}
        <h2
          className="text-5xl font-extrabold tracking-wide mb-6 gradient-glow-text drop-shadow-lg leading-tight animate-pulseSlow"
          style={{ lineHeight: "1.1" }}
        >
          DIMENSIONS OF INNOVATION
        </h2>

        {/* Paragraph */}
        <p
          className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto px-2 sm:px-0"
          style={{ lineHeight: "1.6" }}
        >
          At Ultimate Graphics, we push the boundaries of design and
          craftsmanship, bringing you innovative and high-quality signboards
          that make an impact. From LED displays and acrylic signs to vinyl
          banners and 3D lettering, our cutting-edge techniques and AI-driven
          creativity ensure precision, durability, and stunning visuals.
        </p>

        {/* Animated divider line */}
        <div className="w-3/4 h-1 mx-auto mt-12 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-pulse rounded-full shadow-glow"></div>
      </section>

      {/* Designer Profile Section */}
      <section className="bg-transparent py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:flex-row gap-10 text-center md:text-left">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-floatUp">
            {/* Use Next.js Image component */}
            <Image
              src="/shazeem.png"
              alt="Syed Shazeem"
              width={256} /* w-64 is 256px */
              height={256} /* h-64 is 256px */
              className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-white"
            />
          </div>
          {/* Profile Info */}
          <div>
            <h2
              className="text-4xl font-bold text-white mb-2 gradient-glow-text drop-shadow-md leading-tight"
              style={{ lineHeight: "1.15" }}
            >
              Syed Shazeem
            </h2>
            <p
              className="text-gray-300 text-lg leading-relaxed max-w-xl"
              style={{ lineHeight: "1.6" }}
            >
              A renowned designer with a specialization in character creation
              and designing.
            </p>
          </div>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mt-16 rounded-full animate-pulseSlow"></div>
      </section>

      {/* Gallery Section */}
      <section className="bg-transparent py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        {/* Banner */}
        {/* text-5xl font-extrabold tracking-wide mb-6 gradient-glow-text drop-shadow-lg leading-tight animate-pulseSlow */}
        <h2
          className="text-5xl font-extrabold tracking-wide gradient-glow-text drop-shadow-lg leading-tight animate-pulseSlow text-center mb-6"
          style={{ lineHeight: "1.15" }}
        >
          <span className="inline-block align-baseline mr-2">
            ULTIMATE GRAPHICS
          </span>
          <span className="inline-block align-baseline text-4xl font-bold text-white drop-shadow-md gradient-glow-text">
            Your Signage & Branding Partner
          </span>
        </h2>

        <p
          className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto mb-8 text-center"
          style={{ lineHeight: "1.6" }}
        >
          Discover our creativity in action! At Ultimate Graphics, we design and
          craft all types of signboards with precision and innovation.
        </p>

        {/* View Gallery Button */}
        {/* Use Next.js Link component */}
        <Link
          href="/gallery"
          className="inline-block shadow-lg whitespace-nowrap px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base font-extrabold leading-tighter uppercase tracking-wide font-sans gradient-glow-text animate-pulseSlow"
        >
          View Gallery
        </Link>
        <div className="w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mt-20 rounded-full animate-pulseSlow"></div>
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
              Contact Form
            </a>
          </div>
        </div>
      </section>  

      {/* Footer 2 */}
      <footer className="relative bottom-0 left-0 w-full bg-black text-gray-600 text-center py-6 mt-0 dark:bg-dark2 dark:text-white">
        <p>&copy; 2025 Ultimate Graphics. All rights reserved.</p>
      </footer>
    </div>
  );
}
