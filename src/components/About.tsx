"use client";

export default function About() {
  const expertise = [
    {
      icon: "📈",
      title: "Technical Analysis",
      description:
        "Expert in chart patterns, indicators, and market structure analysis for precise entry and exit points.",
    },
    {
      icon: "💰",
      title: "Risk Management",
      description:
        "Strict risk-to-reward ratios and position sizing to protect capital and maximize returns.",
    },
    {
      icon: "🎯",
      title: "Strategy Development",
      description:
        "Creating and backtesting profitable trading strategies across multiple timeframes.",
    },
    {
      icon: "🤖",
      title: "Algorithmic Trading",
      description:
        "Developing automated trading systems and bots for efficient market execution.",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-black text-white">
                About <span className="text-[#ff1654]">My Trading</span>
              </h2>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-[#ff1654]"></div>
                <div className="h-1 w-6 bg-[#ff4d8b]"></div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              With over 3 years of active trading experience in cryptocurrency
              and forex markets, I have developed a disciplined approach to
              trading that focuses on consistent profitability and capital
              preservation.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My trading philosophy combines technical analysis, fundamental
              insights, and strict risk management to achieve sustainable
              returns. I specialize in swing trading and day trading strategies,
              with a focus on high-probability setups.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff1654]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-[#ff1654]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Certified Technical Analyst
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Professional certification in technical analysis and market
                    psychology
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff1654]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-[#ff1654]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Consistent Performance
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Maintained positive returns for 24+ consecutive months
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff1654]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-[#ff1654]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Risk Management Expert
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Never risk more than 2% per trade with strict stop-loss
                    discipline
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Expertise Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#16161e]/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-[#ff1654]/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
