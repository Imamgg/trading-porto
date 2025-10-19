"use client";

export default function Contact() {
  const contactMethods = [
    {
      title: "Telegram",
      value: "@ShadowFX",
      link: "https://t.me/shadowfxAF",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.093.036.306.02.472z" />
        </svg>
      ),
    },
    {
      title: "Tiktok",
      value: "ShadowFX",
      link: "https://www.tiktok.com/@shadowfx06",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
        </svg>
      ),
    },
    {
      title: "Twitter",
      value: "@ShadowFX",
      link: "https://twitter.com/shadowfx",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Get In <span className="text-[#ff1654]">Touch</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-[#ff1654]"></div>
            <div className="h-1 w-8 bg-[#ff4d8b]"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Open to collaboration opportunities, trading consultations, and
            professional networking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Contact Methods */}
            <div className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#16161e]/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#0d0d15]/50 rounded-xl border border-gray-800/50 hover:border-[#ff1654]/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#ff1654]/10 rounded-lg flex items-center justify-center text-[#ff1654] group-hover:bg-[#ff1654]/20 transition-colors flex-shrink-0">
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-400 mb-1">
                        {method.title}
                      </div>
                      <div className="text-white font-semibold truncate">
                        {method.value}
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-600 group-hover:text-[#ff1654] transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#16161e]/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                Follow My Journey
              </h3>
              <div className="flex gap-4">
                {["Telegram", "Tiktok", "X"].map((platform, index) => (
                  <button
                    key={index}
                    className="flex-1 py-3 bg-[#0d0d15]/50 rounded-xl border border-gray-800/50 hover:border-[#ff1654]/50 text-white font-semibold transition-all duration-300 hover:transform hover:-translate-y-1"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#16161e]/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[#0d0d15] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff1654] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-[#0d0d15] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff1654] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 bg-[#0d0d15] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#ff1654] transition-colors">
                  <option value="">Select a subject</option>
                  <option value="collaboration">
                    Collaboration Opportunity
                  </option>
                  <option value="mentorship">Trading Mentorship</option>
                  <option value="consultation">
                    Professional Consultation
                  </option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Please provide details about your inquiry..."
                  className="w-full px-4 py-3 bg-[#0d0d15] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff1654] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#ff1654] hover:bg-[#ff1654]/90 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#ff1654]/30 hover:shadow-[#ff1654]/50 flex items-center justify-center gap-2"
              >
                Send Message
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
