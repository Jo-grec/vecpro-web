import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Platform from "@/components/platform";
import Faqs from "@/components/faqs";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Platform />
      <Faqs />

      <section id="home" className="min-h-screen">
        {/* Hero will go here */}
      </section>
    </main>
  );
}