import Image from "next/image";
import TopNav from "@/components/Navbar/TopNav";
import Hero from "@/components/Hero";
import About from "@/components/About"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <TopNav />
      <Hero />
      <div className="px-12">
        <About />
      </div>
      <Footer />
    </div>
  );
}
// 
// font-[family-name:var(--font-geist-sans)]