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
      change: "+12.3%",
      period: "YTD",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      bgColor: "bg-green-500/10",
      iconColor: "text-green-500",
      valueColor: "text-green-500",
    },
    {
      label: "Win Rate",
      value: "85.2%",
      change: "+2.1%",
      period: "vs Last Month",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
      valueColor: "text-blue-500",
    },
    {
      label: "Sharpe Ratio",
      value: "2.34",
      change: "Excellent",
      period: "Risk-Adjusted",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-500",
      valueColor: "text-purple-500",
    },
    {
      label: "Max Drawdown",
      value: "-5.8%",
      change: "Low Risk",
      period: "12 Months",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
          />
        </svg>
      ),
      bgColor: "bg-yellow-500/10",
      iconColor: "text-yellow-500",
      valueColor: "text-yellow-500",
    },
    {
      label: "Avg Trade",
      value: "+2.3%",
      change: "+0.4%",
      period: "Per Trade",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      bgColor: "bg-green-500/10",
      iconColor: "text-green-500",
      valueColor: "text-green-500",
    },
    {
      label: "Total Trades",
      value: "1,247",
      change: "52/month",
      period: "Average",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      bgColor: "bg-cyan-500/10",
      iconColor: "text-cyan-500",
      valueColor: "text-cyan-500",
    },
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
              className="group bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-[#ff1654]/30 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 ${metric.bgColor} rounded-xl flex items-center justify-center ${metric.iconColor} group-hover:scale-110 transition-transform duration-300`}
                >
                  {metric.icon}
                </div>
                <div className="text-right">
                  <div
                    className={`text-2xl font-black ${metric.valueColor} mb-1`}
                  >
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500">{metric.change}</div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  {metric.label}
                </h4>
                <p className="text-gray-500 text-xs">{metric.period}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Performance Chart */}
        <div
          className="grid lg:grid-cols-3 gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Monthly Returns
                </h3>
                <p className="text-gray-400 text-sm">
                  Performance breakdown over the last 8 months
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#0d0d15]/50 rounded-lg">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">2025</span>
              </div>
            </div>

            {/* Chart - Combined Bar & Line Visualization */}
            <div className="relative">
              {/* Background Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between py-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-px bg-gray-800/20"></div>
                ))}
              </div>

              {/* Line Chart Overlay */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ height: "320px" }}
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ff1654" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ff4d8b" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <polyline
                  points={monthlyPerformance
                    .map((data, index) => {
                      const x = (index / (monthlyPerformance.length - 1)) * 100;
                      const normalizedProfit = ((data.profit + 20) / 40) * 100;
                      const y = 100 - normalizedProfit;
                      return `${x}%,${y}%`;
                    })
                    .join(" ")}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(255, 22, 84, 0.5))",
                  }}
                />
                {/* Data Points */}
                {monthlyPerformance.map((data, index) => {
                  const x = (index / (monthlyPerformance.length - 1)) * 100;
                  const normalizedProfit = ((data.profit + 20) / 40) * 100;
                  const y = 100 - normalizedProfit;
                  return (
                    <circle
                      key={index}
                      cx={`${x}%`}
                      cy={`${y}%`}
                      r="5"
                      fill={data.profit > 0 ? "#10b981" : "#ef4444"}
                      stroke="#0d0d15"
                      strokeWidth="2"
                      style={{
                        filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
                      }}
                    />
                  );
                })}
              </svg>

              {/* Bar Chart */}
              <div className="space-y-3 pt-2">
                {monthlyPerformance.map((data, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-center gap-4">
                      <div className="w-12 text-sm font-bold text-gray-300">
                        {data.month}
                      </div>
                      <div className="flex-1 relative">
                        <div className="h-12 bg-[#0d0d15]/30 rounded-xl overflow-hidden relative backdrop-blur-sm border border-gray-800/30">
                          {/* Zero line indicator */}
                          <div className="absolute left-0 top-1/2 w-full h-px bg-gray-700/30"></div>

                          <div
                            className={`absolute top-0 h-full ${
                              data.profit > 0
                                ? "bg-gradient-to-r from-green-500/70 via-green-500/60 to-green-600/70"
                                : "bg-gradient-to-r from-red-500/70 via-red-500/60 to-red-600/70"
                            } rounded-xl flex items-center px-4 transition-all duration-700 ease-out group-hover:brightness-110`}
                            style={{
                              width: `${Math.min(
                                Math.abs(data.profit) * 5,
                                100
                              )}%`,
                              boxShadow:
                                data.profit > 0
                                  ? "0 0 20px rgba(16, 185, 129, 0.3)"
                                  : "0 0 20px rgba(239, 68, 68, 0.3)",
                            }}
                          >
                            <div className="flex items-center justify-between w-full">
                              <span className="text-white text-sm font-bold">
                                {data.profit > 0 ? "+" : ""}
                                {data.profit}%
                              </span>
                              {Math.abs(data.profit) > 10 && (
                                <div
                                  className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                                    data.profit > 0
                                      ? "bg-green-900/50 text-green-200"
                                      : "bg-red-900/50 text-red-200"
                                  }`}
                                >
                                  {data.profit > 0 ? "🔥" : "⚠️"}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-24 text-right">
                        <div className="text-sm font-bold text-white">
                          {data.trades}
                        </div>
                        <div className="text-xs text-gray-500">trades</div>
                      </div>
                    </div>

                    {/* Tooltip on Hover */}
                    <div className="absolute left-16 -top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                      <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg px-3 py-2 shadow-xl">
                        <div className="text-xs text-gray-400">Return</div>
                        <div
                          className={`text-sm font-bold ${
                            data.profit > 0 ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {data.profit > 0 ? "+" : ""}
                          {data.profit}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-gray-800/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm">Profitable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-400 text-sm">Loss</span>
              </div>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="space-y-6">
            {/* YTD Card */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-black text-green-500 mb-1">
                +88.2%
              </div>
              <div className="text-sm text-gray-400">Year to Date Return</div>
            </div>

            {/* Best Month Card */}
            <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-400">Best Month</div>
                <div className="text-xs px-2 py-1 bg-green-500/20 text-green-500 rounded-full">
                  June 2025
                </div>
              </div>
              <div className="text-2xl font-black text-white mb-1">+18.5%</div>
              <div className="text-sm text-gray-500">67 successful trades</div>
            </div>

            {/* Consistency Card */}
            <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
              <div className="text-sm text-gray-400 mb-4">Consistency</div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-400">Profitable Months</span>
                    <span className="text-white font-semibold">87.5%</span>
                  </div>
                  <div className="h-2 bg-[#0d0d15]/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                      style={{ width: "87.5%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-400">Avg Monthly Return</span>
                    <span className="text-white font-semibold">+11.0%</span>
                  </div>
                  <div className="h-2 bg-[#0d0d15]/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{ width: "73%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
