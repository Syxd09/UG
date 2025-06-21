"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/menuSlice";
import { RootState } from "../store/store";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Building Signs", image: "/public/IMG-20250520-WA0004.jpg" },
  { title: "Cabinet Signs", image: "/services/cabinet-signs.jpg" },
  { title: "Counter Signs", image: "/services/counter-signs.jpg" },
  { title: "Custom Signs", image: "/services/custom-signs.jpg" },
  { title: "Digital Signage", image: "/services/digital-signage.jpg" },
  { title: "Directional Signs", image: "/services/directional-signs.jpg" },
  { title: "Easel Signs", image: "/services/easel-signs.jpg" },
  { title: "Engraved Signs", image: "/services/engraved-signs.jpg" },
];

export default function ServicesClient() {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state: RootState) => state.menu.menuOpen);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ultimate Graphics",
    url: "https://ultimategraphicsindia.in",
    description:
      "Leading signage company in Bangalore specializing in custom LED signs, acrylic boards, vinyl banners, 3D lettering, and branding.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560062",
      addressCountry: "IN",
    },
    telephone: "+91-8050093019",
    sameAs: [
      "https://www.facebook.com/ultimategraphicsbangalore",
      "https://www.instagram.com/ultimategraphicsindia",
      "https://www.linkedin.com/company/ultimate-graphics-bangalore",
    ],
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center group"
            onClick={() => dispatch(toggleMenu())}
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
                {["home", "about", "gallery"].map((page) => (
                  <Link
                    key={page}
                    href={`/${page}`}
                    onClick={() => dispatch(toggleMenu())}
                    className="whitespace-nowrap px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm font-extrabold uppercase tracking-wide font-sans gradient-glow-text animate-pulseSlow"
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
        <div className="services bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 text-white text-center py-20 animate__animated animate__fadeInDown">
          <h1 className="text-7xl mt-2 p-6 font-bold mb-4">Services</h1>
          <p className="text-lg animate__animated animate__fadeInUp animate__delay-1s">
            Empowering your brand with innovative signage solutions crafted to
            impress.
          </p>
        </div>

        {/* Services Grid Section */}
        <section className="py-12 px-4 sm:px-10 lg:px-20 bg-white dark:bg-dark1">
          <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-white mb-10">
            Our Signage Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="bg-blue-900 text-white text-center py-3 font-semibold text-lg">
                  {service.title}
                </div>
              </div>
            ))}
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
        <footer className="relative bottom-0 left-0 w-full bg-black text-gray-600 text-center py-6 dark:bg-dark2 dark:text-white">
          <p>&copy; 2025 Ultimate Graphics. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
