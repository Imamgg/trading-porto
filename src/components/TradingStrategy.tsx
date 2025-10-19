"use client";

export default function TradingStrategy() {
  const strategies = [
    {
      name: "Breakout Trading",
      description:
        "Identifying and trading key support/resistance breakouts with high volume confirmation.",
      winRate: "82%",
      avgReturn: "+3.5%",
      timeframe: "4H - Daily",
    },
    {
      name: "Trend Following",
      description:
        "Riding strong trends using moving averages and momentum indicators for maximum profit.",
      winRate: "78%",
      avgReturn: "+4.2%",
      timeframe: "Daily - Weekly",
    },
    {
      name: "Scalping",
      description:
        "Quick trades on lower timeframes exploiting small price movements with tight stops.",
      winRate: "88%",
      avgReturn: "+1.2%",
      timeframe: "5M - 15M",
    },
  ];

  const tools = [
    { name: "TradingView", icon: "📊" },
    { name: "MetaTrader 5", icon: "💹" },
    { name: "Python", icon: "🐍" },
    { name: "Custom Indicators", icon: "🔧" },
    { name: "Binance API", icon: "🔗" },
    { name: "Risk Calculator", icon: "🎯" },
  ];

  return (
    <section id="strategy" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Trading <span className="text-[#ff1654]">Strategies</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-[#ff1654]"></div>
            <div className="h-1 w-8 bg-[#ff4d8b]"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proven trading strategies that deliver consistent results across
            different market conditions
          </p>
        </div>

        {/* Strategies Grid */}
        <div
          className="grid lg:grid-cols-3 gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-[#ff1654]/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {strategy.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {strategy.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-[#0d0d15]/50 rounded-lg">
                  <span className="text-gray-400 text-sm">Win Rate</span>
                  <span className="text-green-500 font-bold">
                    {strategy.winRate}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#0d0d15]/50 rounded-lg">
                  <span className="text-gray-400 text-sm">Avg Return</span>
                  <span className="text-[#ff1654] font-bold">
                    {strategy.avgReturn}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#0d0d15]/50 rounded-lg">
                  <span className="text-gray-400 text-sm">Timeframe</span>
                  <span className="text-white font-semibold text-sm">
                    {strategy.timeframe}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div
          className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Trading Tools & Platforms
            </h3>
            <p className="text-gray-400">
              Technologies I use for market analysis and execution
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#0d0d15]/50 rounded-xl p-4 border border-gray-800/50 hover:border-[#ff1654]/50 transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <div className="text-white text-sm font-semibold">
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
