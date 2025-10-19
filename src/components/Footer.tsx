"use client";

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

  const socialLinks = [
    { name: "Twitter", icon: "𝕏" },
    { name: "Facebook", icon: "f" },
    { name: "Instagram", icon: "📷" },
    { name: "LinkedIn", icon: "in" },
    { name: "Telegram", icon: "✈" },
  ];

  return (
    <footer className="relative bg-[#0d0d15] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff1654] to-[#ff4d8b] rounded-lg flex items-center justify-center transform rotate-12">
                  <span className="text-white font-black text-2xl transform -rotate-12">
                    T
                  </span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight">
                  Trading <span className="text-[#ff1654]">Portfolio</span>
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in the world of trading. Join thousands of
              traders who achieve their financial goals with our platform.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-[#ff1654] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-white font-bold">{social.icon}</span>
                </button>
              ))}
            </div>
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

        {/* Newsletter */}
        <div className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#16161e]/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated 📬
              </h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for trading tips and market
                insights.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#0d0d15] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff1654] transition-colors"
              />
              <button className="px-6 py-3 bg-[#ff1654] hover:bg-[#ff1654]/90 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#ff1654]/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Trading Portfolio. All rights reserved.
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
