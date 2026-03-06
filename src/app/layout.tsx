import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Script from "next/script";
import { ReduxProvider } from "./app/ReduxProvider"; // import the provider

export const metadata: Metadata = {
  metadataBase: new URL("https://ultimategraphicsindia.in"),
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
        url: "main-UG-LOGO.jpg",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K4F5KF35');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-2G0J7LZZGJ"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-2G0J7LZZGJ');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <div className="deep-space-container" />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K4F5KF35"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
