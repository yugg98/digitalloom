import About from "@/components/Aboutus";
import Button from "@/components/Button";
import Cta, { Ctar } from "@/components/Cta";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Ourclients from "@/components/Ourclients";
import Steps from "@/components/Steps";
import Story from "@/components/Story";
import Values from "@/components/Values";
import Carousel from "@/components/services/Services";
import Image from "next/image";

export default function Home() {
  
  return (
  <main>
    <Hero/>
    <div className="mt-16">
    <Carousel/>
    </div>
    <div className="mb-24">
    <Story/>
    </div>
    <Ourclients/>
    <Steps/>
    <Ctar/>
    <Industries/>
    <Cta/>
  </main>
  );
}
