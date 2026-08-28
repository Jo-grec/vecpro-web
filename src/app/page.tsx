import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />

      <section id="home" className="min-h-screen">
        {/* Hero will go here */}
      </section>
    </main>
  );
}