"use client";

export default function TradingPlatforms() {
  const platforms = [
    {
      name: "META TRADER 5",
      color: "from-pink-500 to-pink-600",
      features: [
        { label: "Compare META 5 & META 5", value: "✓" },
        { label: "Partial Order Filling Policies", value: "✓" },
        { label: "Order Fill Policy", value: "✓" },
        { label: "Pending Order Types", value: "4" },
        { label: "Depth of Market", value: "✓" },
        { label: "Time & Sales (Exchange data)", value: "✓" },
        { label: "Technical Indicators", value: "38" },
        { label: "Graphical Objects", value: "44" },
        { label: "Time Frames", value: "21" },
      ],
    },
    {
      name: "META TRADER 4",
      color: "from-purple-500 to-purple-600",
      features: [
        {
          label:
            "IFX Meta Trader 4 provides advanced charting functionality and highly sophisticated order management tools.",
          value: "",
        },
        { label: "Fill or Kill", value: "" },
        { label: "Fill or Kill Immediate or Cancel Return", value: "✓" },
        { label: "", value: "4" },
        { label: "", value: "✓" },
        { label: "", value: "" },
        { label: "", value: "30" },
        { label: "", value: "31" },
        { label: "", value: "9" },
      ],
    },
  ];

  return (
    <section id="platforms" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Trading <span className="text-[#ff1654]">Platforms</span> ✨
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-[#ff1654]"></div>
            <div className="h-1 w-8 bg-[#ff4d8b]"></div>
          </div>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Trading platforms are digital tools that allow traders and investors
            to buy and sell financial assets, such as stocks, bonds, currencies,
            and commodities.
          </p>
        </div>

        {/* Platforms Comparison */}
        <div
          className="relative animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Compare Button */}
          <div className="flex justify-end mb-6">
            <button className="px-6 py-3 bg-[#ff1654] hover:bg-[#ff1654]/90 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#ff1654]/30 flex items-center gap-2">
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Compare Now
            </button>
          </div>

          {/* Comparison Table */}
          <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-3xl border border-gray-800/50 overflow-hidden">
            <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-800/50">
              {/* Description Column */}
              <div className="p-8 space-y-4 bg-[#16161e]/50">
                <div className="h-16 flex items-center">
                  <h3 className="text-lg font-bold text-white">Description</h3>
                </div>
                {platforms[0].features.map((feature, index) => (
                  <div
                    key={index}
                    className="h-12 flex items-center border-b border-gray-800/30"
                  >
                    <p className="text-sm text-gray-400">{feature.label}</p>
                  </div>
                ))}
              </div>

              {/* Platform Cards */}
              {platforms.map((platform, idx) => (
                <div
                  key={idx}
                  className="p-8 space-y-4 hover:bg-[#1a1a2e]/30 transition-all duration-300"
                >
                  <div
                    className={`h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center`}
                  >
                    <h3 className="text-xl font-black text-white">
                      {platform.name}
                    </h3>
                  </div>
                  {platform.features.map((feature, index) => (
                    <div
                      key={index}
                      className="h-12 flex items-center justify-center border-b border-gray-800/30"
                    >
                      <p className="text-sm text-white font-semibold">
                        {feature.value}
                      </p>
                    </div>
                  ))}
                  <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-6">
                    View More
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
