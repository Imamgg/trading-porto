"use client";

export default function Community() {
  const stats = [
    {
      icon: "👥",
      value: "15,000+",
      label: "Active Traders",
      description: "Join thousands of traders worldwide",
    },
    {
      icon: "💹",
      value: "$2.5B+",
      label: "Trading Volume",
      description: "Monthly trading volume across all markets",
    },
    {
      icon: "🏆",
      value: "98%",
      label: "Success Rate",
      description: "Client satisfaction and profitability",
    },
    {
      icon: "🌍",
      value: "150+",
      label: "Countries",
      description: "Global community across continents",
    },
  ];

  const benefits = [
    {
      icon: "📚",
      title: "Educational Resources",
      description:
        "Access comprehensive trading courses, webinars, and market analysis from industry experts.",
    },
    {
      icon: "🤝",
      title: "Community Support",
      description:
        "Connect with fellow traders, share strategies, and learn from experienced professionals.",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description:
        "Utilize cutting-edge tools and real-time data to make informed trading decisions.",
    },
    {
      icon: "🔔",
      title: "Market Signals",
      description:
        "Receive instant notifications on market opportunities and trading signals.",
    },
    {
      icon: "💬",
      title: "Live Chat Support",
      description:
        "24/7 multilingual support team ready to assist you with any questions.",
    },
    {
      icon: "🎯",
      title: "Performance Tracking",
      description:
        "Monitor your progress with detailed analytics and performance metrics.",
    },
  ];

  return (
    <section id="community" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Stats Section */}
        <div className="text-center space-y-12 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Join Our Global{" "}
              <span className="text-[#ff1654]">Trading Community</span>
            </h2>

            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-16 bg-[#ff1654]"></div>
              <div className="h-1 w-8 bg-[#ff4d8b]"></div>
            </div>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Be part of a thriving community of traders who are achieving their
              financial goals together.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-[#ff1654]/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-[#ff1654] mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div
          className="space-y-12 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="text-center space-y-4">
            <h3 className="text-3xl lg:text-4xl font-black text-white">
              Why Choose <span className="text-[#ff1654]">Our Platform</span>
            </h3>

            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-12 bg-[#ff1654]"></div>
              <div className="h-1 w-6 bg-[#ff4d8b]"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#1a1a2e]/60 to-[#16161e]/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-[#ff1654]/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center space-y-8 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-800/50">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Ready to Start Your Trading Journey?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Join thousands of successful traders and take control of your
              financial future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#ff1654] hover:bg-[#ff1654]/90 text-white rounded-lg font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#ff1654]/30 hover:shadow-[#ff1654]/50">
                Create Free Account
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-gray-700 hover:border-[#ff1654] text-white rounded-lg font-semibold text-base transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
