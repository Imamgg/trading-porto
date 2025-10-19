"use client";

export default function Welcome() {
  return (
    <section id="welcome" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              {/* Decorative Star Icons */}
              <div className="absolute -top-8 -left-8 text-5xl animate-pulse">
                ✨
              </div>
              <div
                className="absolute -bottom-8 -right-8 text-5xl animate-pulse"
                style={{ animationDelay: "1s" }}
              >
                ⭐
              </div>

              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16161e]/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-800/50">
                {/* Trading Illustration */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Person Icon */}
                    <div className="relative z-10">
                      <div className="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                        <svg
                          className="w-20 h-20 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      {/* Shirt detail */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-12 bg-white rounded-t-full"></div>
                    </div>

                    {/* Arrow Up */}
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 animate-float">
                      <div className="w-24 h-32 bg-gradient-to-t from-[#ff1654] to-[#ff4d8b] transform -skew-y-12 rounded-t-3xl relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-[#ff4d8b]"></div>
                      </div>
                    </div>

                    {/* Coins */}
                    <div className="absolute -bottom-8 -left-12">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-[#ff1654] flex items-center justify-center font-bold text-white text-2xl shadow-lg">
                          $
                        </div>
                        <div className="absolute top-2 left-2 w-16 h-16 rounded-full bg-[#ff4d8b] flex items-center justify-center font-bold text-white text-2xl shadow-lg -z-10">
                          $
                        </div>
                      </div>
                    </div>

                    {/* Chart Bars */}
                    <div className="absolute -bottom-4 -right-16 flex items-end gap-1">
                      {[60, 40, 80, 50].map((height, i) => (
                        <div
                          key={i}
                          className="w-6 bg-gradient-to-t from-pink-600 to-pink-400 rounded-t"
                          style={{ height: `${height}px` }}
                        ></div>
                      ))}
                    </div>

                    {/* Trading Icon */}
                    <div className="absolute -top-4 -right-16 w-12 h-12 bg-[#ff1654] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <svg
                        className="w-6 h-6 text-white"
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
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className="space-y-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Section Title */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-5xl">✨</div>
                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                  <span className="text-[#ff1654]">Welcome</span> to IFX
                </h2>
                <div className="text-5xl">⭐</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-[#ff1654]"></div>
                <div className="h-1 w-6 bg-[#ff4d8b]"></div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ff1654]/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#ff1654]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    It's all about trading
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Because that's what we do. Trading is at the core of our
                    business. We are dedicated to providing traders with the
                    tools, resources, and support they need to navigate the
                    dynamic world of financial markets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ff1654]/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#ff1654]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Top Trading Platform
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    We facilitate a one-stop trading experience for retail and
                    institutional clients, providing access to global markets
                    and a broad range of asset classes and tradeable
                    instruments. There's a reason why we are the best. It's
                    Simple. Talent meets technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
