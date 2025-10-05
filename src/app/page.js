import Image from "next/image";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-11/12 mx-auto">
        <Hero></Hero>
      </div>
      <OurServices></OurServices>
    </div>
  );
}
