import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
