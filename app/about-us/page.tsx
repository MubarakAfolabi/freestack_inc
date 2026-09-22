import CompanyGoal from "@/components/about-us/CompanyGoal";
import CoreAreas from "@/components/about-us/CoreAreas";
import Hero from "@/components/about-us/Hero";
import OurStory from "@/components/about-us/OurStory";
import Team from "@/components/about-us/Team";
import CallToAction from "@/components/layout/CallToAction";

export default function AboutUs() {
  return (
    <main>
      <Hero />
      <CompanyGoal />
      <OurStory />
      <CoreAreas />
      <Team />
      <CallToAction />
    </main>
  );
}
