"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a2e]/60 border border-[#ff1654]/30 rounded-full">
              <div className="w-2 h-2 bg-[#ff1654] rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">
                Professional Trader Portfolio
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Building Wealth
                <br />
                Through <span className="text-[#ff1654]">Smart</span>
                <br />
                Trading
              </h1>

              <div className="flex items-center gap-3">
                <div className="h-1 w-16 bg-[#ff1654]"></div>
                <div className="h-1 w-8 bg-[#ff4d8b]"></div>
              </div>
            </div>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Professional trader specializing in cryptocurrency and forex
              markets with a proven track record of consistent returns and risk
              management excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-[#ff1654] hover:bg-[#ff1654]/90 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#ff1654]/30">
                View My Portfolio
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-gray-700 hover:border-[#ff1654] text-white rounded-lg font-semibold transition-all duration-300">
                Contact Me
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: "85%", label: "Win Rate" },
                { value: "3Y+", label: "Experience" },
                { value: "$500K+", label: "Managed" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-[#ff1654]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Trading Stats Card */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50">
              {/* Performance Chart Mockup */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">
                    Portfolio Performance
                  </h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm font-semibold">
                    +45.3%
                  </span>
                </div>

                {/* Line Chart Mockup */}
                <div className="relative h-48 flex items-end justify-between gap-2">
                  {[30, 45, 35, 60, 50, 75, 65, 80, 70, 85, 90, 95].map(
                    (height, i) => (
                      <div key={i} className="flex-1 flex flex-col justify-end">
                        <div
                          className="w-full bg-gradient-to-t from-[#ff1654] to-[#ff4d8b] rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    )
                  )}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800/50">
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400">Total Profit</p>
                    <p className="text-lg font-bold text-green-500">
                      +$125,450
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400">Total Trades</p>
                    <p className="text-lg font-bold text-white">1,247</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400">Best Month</p>
                    <p className="text-lg font-bold text-[#ff1654]">+18.5%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400">Avg. Return</p>
                    <p className="text-lg font-bold text-white">+3.8%</p>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff1654]/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
