import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title:
    "Ultimate Graphics Bangalore | Custom Signage, LED Signs & Graphic Design Services",
  description:
    "Leading custom signage company in Bangalore offering LED signs, acrylic boards, vinyl banners, 3D lettering, vehicle graphics, and comprehensive branding solutions. 15+ years experience. Free consultation.",
  keywords: [
    "Ultimate Graphics Bangalore",
    "custom signage Bangalore",
    "LED signs Bangalore",
    "signboard manufacturers Bangalore",
    "graphic design services Bangalore",
    "acrylic boards Bangalore",
    "vinyl banners Bangalore",
    "3D lettering Bangalore",
    "vehicle graphics Bangalore",
    "digital printing Bangalore",
    "outdoor signage Bangalore",
    "business signs Bangalore",
    "shop signboards Bangalore",
    "exhibition graphics Bangalore",
    "branding solutions Bangalore",
    "sign installation Bangalore",
    "custom neon signs Bangalore",
    "poster printing Bangalore",
    "banner printing Bangalore",
    "logo design Bangalore",
  ],
  openGraph: {
    title:
      "Ultimate Graphics Bangalore | Premier Custom Signage & Design Solutions",
    description:
      "Transform your business with premium custom signage, LED displays, and graphic design services in Bangalore. Expert craftsmanship, competitive pricing, and fast turnaround times.",
    url: "https://ultimategraphicsindia.in",
    type: "website",
    siteName: "Ultimate Graphics India",
    images: [
      {
        url: "https://ultimategraphicsindia.in/images/ultimate-graphics-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Ultimate Graphics Bangalore - Custom Signage and LED Signs Display",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate Graphics Bangalore | Custom Signage & LED Signs Experts",
    description:
      "Premium signage solutions in Bangalore: LED signs, acrylic boards, vinyl banners, 3D lettering. 15+ years experience. Get free quote today!",
    images: [
      "https://ultimategraphicsindia.in/images/ultimate-graphics-showcase.jpg",
    ],
  },
  alternates: {
    canonical: "https://ultimategraphicsindia.in",
  },
  icons: {
    icon: "/BT-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bangalore",
    "geo.position": "12.9716;77.5946",
    ICBM: "12.9716, 77.5946",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
