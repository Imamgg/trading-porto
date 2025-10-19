"use client";

export default function TradingStats() {
  const monthlyPerformance = [
    { month: "Jan", profit: 8.5, trades: 45 },
    { month: "Feb", profit: 12.3, trades: 52 },
    { month: "Mar", profit: -2.1, trades: 38 },
    { month: "Apr", profit: 15.7, trades: 61 },
    { month: "May", profit: 9.4, trades: 48 },
    { month: "Jun", profit: 18.5, trades: 67 },
    { month: "Jul", profit: 11.2, trades: 54 },
    { month: "Aug", profit: 14.8, trades: 59 },
  ];

  const tradingMetrics = [
    {
      label: "Total Return",
      value: "+145.3%",
      icon: "📊",
      color: "text-green-500",
    },
    { label: "Win Rate", value: "85.2%", icon: "🎯", color: "text-blue-500" },
    {
      label: "Sharpe Ratio",
      value: "2.34",
      icon: "📈",
      color: "text-purple-500",
    },
    {
      label: "Max Drawdown",
      value: "-5.8%",
      icon: "⚠️",
      color: "text-yellow-500",
    },
    { label: "Avg Trade", value: "+2.3%", icon: "💹", color: "text-green-500" },
    { label: "Trades/Month", value: "52", icon: "🔄", color: "text-blue-500" },
  ];

  return (
    <section id="stats" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Trading <span className="text-[#ff1654]">Performance</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-[#ff1654]"></div>
            <div className="h-1 w-8 bg-[#ff4d8b]"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparent track record of trading performance and key metrics
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {tradingMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-[#ff1654]/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{metric.icon}</span>
                <span className={`text-2xl font-black ${metric.color}`}>
                  {metric.value}
                </span>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Monthly Performance Chart */}
        <div
          className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Monthly Returns</h3>
              <p className="text-gray-400 text-sm">
                Last 8 months performance breakdown
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-green-500">+88.2%</div>
              <div className="text-gray-400 text-sm">YTD Return</div>
            </div>
          </div>

          {/* Chart */}
          <div className="space-y-4">
            {monthlyPerformance.map((data, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 font-medium w-12">
                    {data.month}
                  </span>
                  <div className="flex-1 mx-4">
                    <div className="h-8 bg-gray-800/50 rounded-lg overflow-hidden">
                      <div
                        className={`h-full ${
                          data.profit > 0
                            ? "bg-gradient-to-r from-green-500 to-green-600"
                            : "bg-gradient-to-r from-red-500 to-red-600"
                        } rounded-lg flex items-center justify-end px-3 transition-all duration-500`}
                        style={{ width: `${Math.abs(data.profit) * 5}%` }}
                      >
                        <span className="text-white text-xs font-bold">
                          {data.profit > 0 ? "+" : ""}
                          {data.profit}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs w-16 text-right">
                    {data.trades} trades
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-800/50">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-gray-400 text-sm">Profitable Month</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-gray-400 text-sm">Loss Month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
