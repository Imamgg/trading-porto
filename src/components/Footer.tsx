"use client";

import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    company: {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Blog"],
    },
    products: {
      title: "Products",
      links: ["Trading Platform", "Mobile App", "API", "Analytics"],
    },
    support: {
      title: "Support",
      links: ["Help Center", "Contact Us", "FAQ", "Community"],
    },
    legal: {
      title: "Legal",
      links: [
        "Terms of Service",
        "Privacy Policy",
        "Cookie Policy",
        "Disclaimer",
      ],
    },
  };

  return (
    <footer className="relative bg-[#0d0d15] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  className="rounded-full"
                  src="/Images/image.png"
                  alt="Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight">
                  Shadow <span className="text-[#ff1654]">FX</span>
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in the world of trading. Join thousands of
              traders who achieve their financial goals with our platform.
            </p>
          </div>

          {/* Links Sections */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-white font-bold text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#ff1654] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Shadow FX. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-[#ff1654] transition-colors"
              >
                Risk Warning
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ff1654] transition-colors"
              >
                Regulatory Information
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ff1654] transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff1654] to-transparent opacity-50"></div>
    </footer>
  );
}
