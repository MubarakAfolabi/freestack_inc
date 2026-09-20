import CallToAction from "@/components/home/CallToAction";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <CallToAction />
    </main>
  );
}
