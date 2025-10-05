import Image from "next/image";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import LatestWork from "./components/LatestWork";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <div className="bg-black h-full">
      <div className="max-w-11/12 mx-auto">
        <Hero></Hero>
      </div>
      <OurServices></OurServices>
      <LatestWork></LatestWork>
      <WhyChoose></WhyChoose>
    </div>
  );
}
