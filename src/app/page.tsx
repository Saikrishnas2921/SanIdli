import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import PopularItems from "@/components/PopularItems";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import OrderBanner from "@/components/OrderBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <PopularItems />
      <MenuSection />
      <About />
      <Reviews />
      <OrderBanner />
      <Contact />
      <Footer />
    </main>
  );
}
