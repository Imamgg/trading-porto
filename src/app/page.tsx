import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TradingStats from "@/components/TradingStats";
import TradingStrategy from "@/components/TradingStrategy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <TradingStats />
      <TradingStrategy />
      <Contact />
      <Footer />
    </main>
  );
}
