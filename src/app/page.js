import Image from "next/image";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import LatestWork from "./components/LatestWork";
import WhyChoose from "./components/WhyChoose";
import HowItWorks from "./components/HowItWorks";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import SuccessSection from "./components/SuccessSection";
import PodcastSection from "./components/PodcastSection";
import ContactSection from "./components/ContactSection";
import FaqSection from "./components/FaqSection";
import WorldMapContact from "./components/WorldMapContact";
import NewsletterBanner from "./components/NewsletterBanner";

export default function Home() {
  return (
    <div className="bg-black h-full" style={{
      background: "linear-gradient(160deg, #0D0D1A, #1B1B31, #251F40, #361A67, #412178)"
    }}>
      <div className="max-w-11/12 mx-auto">
        <Hero></Hero>
      </div>
      <OurServices></OurServices>
      <LatestWork></LatestWork>
      <WhyChoose></WhyChoose>
      <HowItWorks></HowItWorks>
      <StatsSection></StatsSection>
      <Testimonials></Testimonials>
      <SuccessSection></SuccessSection>
      <PodcastSection></PodcastSection>
      <ContactSection></ContactSection>
      <FaqSection></FaqSection>
      <WorldMapContact></WorldMapContact>
      <NewsletterBanner></NewsletterBanner>
    </div>
  );
}
