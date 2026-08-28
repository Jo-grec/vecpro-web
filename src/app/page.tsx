import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Platform from "@/components/platform";
import Faqs from "@/components/faqs";
import Download from "@/components/download";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <Platform />
      <Faqs />
      <Download />
      <Footer />
    </main>
  );
}