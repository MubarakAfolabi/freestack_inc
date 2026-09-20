import CallToAction from "@/components/home/CallToAction";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <CallToAction />
    </main>
  );
}
