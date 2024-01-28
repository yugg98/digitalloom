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
    <Carousel/>
    <Story/>
    <About/>
    <Ourclients/>
    <Steps/>
    <Ctar/>
    <Industries/>
    <Cta/>
  </main>
  );
}
