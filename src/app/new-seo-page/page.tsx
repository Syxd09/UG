import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ultimate Graphics Bangalore | Custom Signage, LED Signs & Graphic Design Services',
  description: 'Leading custom signage company in Bangalore offering LED signs, acrylic boards, vinyl banners, 3D lettering, vehicle graphics, and comprehensive branding solutions. 15+ years experience. Free consultation.',
  keywords: [
    'Ultimate Graphics Bangalore',
    'custom signage Bangalore',
    'LED signs Bangalore',
    'signboard manufacturers Bangalore',
    'graphic design services Bangalore',
    'acrylic boards Bangalore',
    'vinyl banners Bangalore',
    '3D lettering Bangalore',
    'vehicle graphics Bangalore',
    'digital printing Bangalore',
    'outdoor signage Bangalore',
    'business signs Bangalore',
    'shop signboards Bangalore',
    'exhibition graphics Bangalore',
    'branding solutions Bangalore',
    'sign installation Bangalore',
    'custom neon signs Bangalore',
    'poster printing Bangalore',
    'banner printing Bangalore',
    'logo design Bangalore'
  ],
  openGraph: {
    title: 'Ultimate Graphics Bangalore | Premier Custom Signage & Design Solutions',
    description: 'Transform your business with premium custom signage, LED displays, and graphic design services in Bangalore. Expert craftsmanship, competitive pricing, and fast turnaround times.',
    url: 'https://ultimategraphicsindia.in',
    type: 'website',
    siteName: 'Ultimate Graphics India',
    images: [{
      url: 'https://ultimategraphicsindia.in/images/ultimate-graphics-showcase.jpg',
      width: 1200,
      height: 630,
      alt: 'Ultimate Graphics Bangalore - Custom Signage and LED Signs Display',
    }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultimate Graphics Bangalore | Custom Signage & LED Signs Experts',
    description: 'Premium signage solutions in Bangalore: LED signs, acrylic boards, vinyl banners, 3D lettering. 15+ years experience. Get free quote today!',
    images: ['https://ultimategraphicsindia.in/images/ultimate-graphics-showcase.jpg'],
  },
  alternates: {
    canonical: 'https://ultimategraphicsindia.in',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bangalore',
    'geo.position': '12.9716;77.5946',
    'ICBM': '12.9716, 77.5946',
  },
};

const services = [
  {
    name: "LED Signs & Digital Displays",
    description: "High-brightness LED signs for maximum visibility and impact",
    icon: "💡",
    features: ["Programmable displays", "Weather-resistant", "Energy efficient"]
  },
  {
    name: "Acrylic Signboards",
    description: "Premium acrylic signs with laser cutting and engraving",
    icon: "🔍",
    features: ["Crystal clear finish", "UV resistant", "Custom shapes"]
  },
  {
    name: "Vinyl Graphics & Banners",
    description: "Durable vinyl solutions for indoor and outdoor applications",
    icon: "📋",
    features: ["Waterproof material", "Fade resistant", "Easy installation"]
  },
  {
    name: "3D Lettering & Signage",
    description: "Dimensional signage that creates powerful brand presence",
    icon: "🏗️",
    features: ["Premium materials", "Backlit options", "Custom fonts"]
  },
  {
    name: "Vehicle Graphics & Wraps",
    description: "Mobile advertising solutions for maximum brand exposure",
    icon: "🚗",
    features: ["Full vehicle wraps", "Partial graphics", "Fleet branding"]
  },
  {
    name: "Digital Printing Services",
    description: "High-quality printing for all your marketing materials",
    icon: "🖨️",
    features: ["Large format printing", "Multiple substrates", "Color accuracy"]
  }
];

export default function UltimateGraphicsHomepage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ultimategraphicsindia.in/#organization",
    "name": "Ultimate Graphics",
    "alternateName": "Ultimate Graphics India",
    "description": "Leading custom signage and graphic design company in Bangalore specializing in LED signs, acrylic boards, vinyl banners, 3D lettering, and comprehensive branding solutions.",
    "url": "https://ultimategraphicsindia.in",
    "logo": "https://ultimategraphicsindia.in/main-UG-LOGO.jpg",
    "image": [
      "https://ultimategraphicsindia.in/images/ultimate-graphics-showcase.jpg",
      "https://ultimategraphicsindia.in/main-UG-LOGO.jpg"
    ],
    "telephone": "+91-80-5009-3019",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "JP Nagar 9th Phase, Amruthnagar Road, Opposite to Axis Bank",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560062",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/ultimategraphicsbangalore",
      "https://www.instagram.com/ultimategraphicsindia",
      "https://www.linkedin.com/company/ultimate-graphics-bangalore"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ultimate Graphics Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LED Signs and Digital Displays",
            "description": "Custom LED signage solutions for businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Acrylic Signboards",
            "description": "Premium acrylic signs with professional finishing"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": "Bangalore"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  Ultimate Graphics Bangalore
                  <span className="block text-3xl text-blue-200 mt-2">
                    Premier Custom Signage & Design Solutions
                  </span>
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Transform your business with our expert custom signage, LED signs, acrylic boards, 
                  and comprehensive graphic design services. Serving Bangalore for over 15 years with 
                  premium quality and competitive pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="#contact" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Get Free Quote
                  </Link>
                  <Link 
                    href="tel:+918050093019" 
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Call Now: +91-80-5009-3019
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/signage-showcase.jpg"
                  alt="Ultimate Graphics Bangalore - Custom LED Signs and Signage Display"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50" id="services">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Professional Signage Services in Bangalore
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to installation, we deliver comprehensive signage solutions 
                that enhance your brand visibility and drive business growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <article key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Ultimate Graphics Bangalore?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-blue-600 text-xl">🏆</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">15+ Years Experience</h3>
                      <p className="text-gray-600">Proven track record serving thousands of satisfied customers across Bangalore.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-blue-600 text-xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
                      <p className="text-gray-600">Quick delivery without compromising on quality. Most projects completed within 3-7 days.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <span className="text-blue-600 text-xl">💰</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                      <p className="text-gray-600">Best value for money with transparent pricing and no hidden costs.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/team-work.jpg"
                  alt="Ultimate Graphics Team Working on Custom Signage Projects"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact Section */}
        <section className="py-20 bg-gray-50" id="contact">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Visit Our Bangalore Location
              </h2>
              <p className="text-xl text-gray-600">
                Conveniently located in JP Nagar for easy access across South Bangalore
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-blue-600 text-xl mr-4">📍</span>
                    <div>
                      <strong>Address:</strong><br />
                      JP Nagar 9th Phase, Amruthnagar Road,<br />
                      Opposite to Axis Bank, Bangalore - 560062
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 text-xl mr-4">📞</span>
                    <div>
                      <strong>Phone:</strong> <Link href="tel:+918050093019" className="text-blue-600 hover:underline">+91-80-5009-3019</Link>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 text-xl mr-4">⏰</span>
                    <div>
                      <strong>Hours:</strong><br />
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h4>
                  <div className="grid sm:grid-cols-2 gap-2 text-gray-600">
                    <span>• JP Nagar</span>
                    <span>• BTM Layout</span>
                    <span>• Jayanagar</span>
                    <span>• Koramangala</span>
                    <span>• HSR Layout</span>
                    <span>• Electronic City</span>
                    <span>• Banashankari</span>
                    <span>• Bommanahalli</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Free Quote</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                    <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>LED Signs</option>
                      <option>Acrylic Signboards</option>
                      <option>Vinyl Banners</option>
                      <option>3D Lettering</option>
                      <option>Vehicle Graphics</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Get Free Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">
                  What types of signage do you specialize in?
                </summary>
                <p className="mt-4 text-gray-600">
                  We specialize in LED signs, acrylic signboards, vinyl banners, 3D lettering, vehicle graphics, 
                  digital printing, and comprehensive branding solutions for businesses across Bangalore.
                </p>
              </details>
              
              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">
                  How long does it take to complete a signage project?
                </summary>
                <p className="mt-4 text-gray-600">
                  Most projects are completed within 3-7 business days depending on complexity and size. 
                  We provide exact timelines during the consultation phase.
                </p>
              </details>
              
              <details className="bg-gray-50 rounded-lg p-6">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer">
                  Do you provide installation services?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes, we provide complete installation services with our experienced team. 
                  All installations come with proper warranties and maintenance support.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
