"use client";

export default function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "trader@portfolio.com",
      link: "mailto:trader@portfolio.com",
    },
    {
      icon: "💬",
      label: "Telegram",
      value: "@professional_trader",
      link: "https://t.me/professional_trader",
    },
    {
      icon: "🐦",
      label: "Twitter",
      value: "@ProTrader",
      link: "https://twitter.com/ProTrader",
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800/50 animate-fade-in-up">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Let&apos;s <span className="text-[#ff1654]">Connect</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#ff1654]"></div>
              <div className="h-1 w-8 bg-[#ff4d8b]"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Interested in collaboration, mentorship, or discussing trading
              strategies? Feel free to reach out.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0d0d15]/50 rounded-2xl p-6 border border-gray-800/50 hover:border-[#ff1654]/50 transition-all duration-300 hover:transform hover:-translate-y-2 text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <div className="text-gray-400 text-sm mb-1">
                  {contact.label}
                </div>
                <div className="text-white font-semibold">{contact.value}</div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#0d0d15] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff1654] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[#0d0d15] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff1654] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="What would you like to discuss?"
                className="w-full px-4 py-3 bg-[#0d0d15] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff1654] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your inquiry..."
                className="w-full px-4 py-3 bg-[#0d0d15] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff1654] transition-colors resize-none"
              ></textarea>
            </div>

            <button className="w-full px-8 py-4 bg-[#ff1654] hover:bg-[#ff1654]/90 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#ff1654]/30 hover:shadow-[#ff1654]/50">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
