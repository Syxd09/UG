"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaTimes,
  FaDownload,
  FaSearchPlus,
  FaSearchMinus,
  FaExpand,
  FaWhatsapp,
} from "react-icons/fa";

export default function GalleryModal() {
  const images = [
    {
      src: "img (3).jpg",
      title: "Backlit Sign",
      description: "Custom signage with LED glow for premium look.",
    },
    {
      src: "img (17).jpg",
      title: "Neon Art",
      description: "Café-inspired neon wall art.",
    },
    {
      src: "img (10).jpg",
      title: "Office Branding",
      description: "Corporate space with branded signage.",
    },
    {
      src: "img (24).jpg",
      title: "Creative Concept",
      description: "Bold concepts for your business identity.",
    },
    {
      src: "img (1).jpg",
      title: "Pylon Sign",
      description: "Eye-catching outdoor pylon signage.",
    },
    {
      src: "img (13).jpg",
      title: "Directional Board",
      description: "Elegant and functional directional signs.",
    },
    {
      src: "img (34).jpg",
      title: "Office Directional Board",
      description: "simple and functional directional signs.",
    },
    {
      src: "img (8).jpg",
      title: "Avertisement Board",
      description: "Promotional signage for events.",
    },
    {
      src: "img (4).jpg",
      title: "Office Sign Board",
      description: "Professional office sign board.",
    },
    {
      src: "img (7).jpg",
      title: "cardboard standees",
      description: "Custom cardboard standees for events.",
    },
    {
      src: "img (6).jpg",
      title: "Shop Signage",
      description: "Stylish shop signage for retail spaces.",
    },
    {
      src: "img (18).jpg",
      title: "Retail Signage",
      description: "Modern retail signage with vibrant colors.",
    },
    {
      src: "img (15).jpg",
      title: "Retail Signage",
      description: "Modern retail signage with vibrant colors.",
    },
    {
      src: "img (21).jpg",
      title: "Office interior Signage",
      description: "Elegant office interior signage.",
    },
    {
      src: "img (22).jpg",
      title: "Directional Signage",
      description: "Clear and concise directional signage.",
    },
    {
      src: "img (30).jpg",
      title: "Company Reception Signage",
      description: "Sleek reception signage for corporate spaces.",
    },
    {
      src: "img (26).jpg",
      title: "Custom Signage",
      description: "Tailored signage solutions for your brand.",
    },
    {
      src: "img (25).jpg",
      title: "Vehicle Branding And Advertisement",
      description: "Mobile advertising with vehicle branding.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [fade, setFade] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const currentImage = currentIndex !== null ? images[currentIndex] : null;

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setZoom(1);
    setFade(true);
    setTimeout(() => setFade(false), 300);
  };

  const closeModal = () => setCurrentIndex(null);

  const goNext = () => {
    if (currentIndex !== null) {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev! + 1) % images.length);
        setZoom(1);
        setFade(false);
      }, 200);
    }
  };

  const goPrev = () => {
    if (currentIndex !== null) {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev! - 1 + images.length) % images.length);
        setZoom(1);
        setFade(false);
      }, 200);
    }
  };

  const zoomIn = () => setZoom((z) => z + 0.1);
  const zoomOut = () => setZoom((z) => Math.max(0.5, z - 0.1));

  const downloadImage = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const shareWhatsApp = (url: string) => {
  // Step 1: Remove any weird/invisible characters
  const cleaned = url
    .normalize("NFKC")                  // normalize special characters
    .replace(/[^\x20-\x7E]/g, "")       // strip non-visible ASCII (like \u00A0)
    .trim();

  // Step 2: Force leading slash
  const path = cleaned.startsWith("/") ? cleaned : `/${cleaned}`;

  // Step 3: Encode only the path part (excluding domain)
  const encodedPath = encodeURI(path); // encodes spaces and () correctly

  // Step 4: Construct the full URL
  const fullUrl = `${window.location.origin}${encodedPath}`;

  // Step 5: Open WhatsApp share link
  window.open(
    `https://api.whatsapp.com/send?text=Check this signage: ${fullUrl}`,
    "_blank"
  );
};






  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) goNext();
    else if (diff < -50) goPrev();
    setTouchStartX(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <>
      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-16 mt-10">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => openModal(i)}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
          >
            <Image
              src={img.src}
              alt={img.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentImage && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-95 flex flex-col items-center justify-center">
          {/* Top Bar */}
          <div className="w-full flex justify-between items-center text-white px-6 py-3 bg-black/50 backdrop-blur">
            <span className="text-sm font-light">
              {currentIndex !== null ? currentIndex + 1 : 0} / {images.length}
            </span>
            <div className="flex gap-3 text-xl">
              <button onClick={zoomIn} title="Zoom In">
                <FaSearchPlus />
              </button>
              <button onClick={zoomOut} title="Zoom Out">
                <FaSearchMinus />
              </button>
              <button
                onClick={() => document.documentElement.requestFullscreen()}
                title="Full Screen"
              >
                <FaExpand />
              </button>
              <button
                onClick={() => downloadImage(currentImage.src)}
                title="Download"
              >
                <FaDownload />
              </button>
              <button
                onClick={() => shareWhatsApp(currentImage.src)}
                title="Share"
              >
                <FaWhatsapp />
              </button>
              <button onClick={closeModal} title="Close">
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Image display */}
          <div
            className={`relative flex items-center justify-center mt-6 transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={goPrev}
              className="absolute left-0 text-white text-4xl font-bold px-2"
            >
              &#10094;
            </button>
            <Image
              key={currentImage.src}
              src={currentImage.src}
              alt={currentImage.title}
              width={800}
              height={600}
              style={{ transform: `scale(${zoom})` }}
              className="transition-transform duration-300 max-h-[80vh] rounded-md shadow-xl"
            />
            <button
              onClick={goNext}
              className="absolute right-0 text-white text-4xl font-bold px-2"
            >
              &#10095;
            </button>
          </div>

          {/* Caption */}
          <div className="text-white text-center mt-6 px-4">
            <h3 className="text-2xl font-semibold">{currentImage.title}</h3>
            <p className="text-sm mt-1 max-w-md mx-auto opacity-80">
              {currentImage.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
