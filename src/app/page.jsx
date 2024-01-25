import About from "@/components/Aboutus";
import Button from "@/components/Button";
import Cta, { Ctar } from "@/components/Cta";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Steps from "@/components/Steps";
import Values from "@/components/Values";
import Carousel from "@/components/services/Services";
import Image from "next/image";

export default function Home() {
  
  return (
  <main>
    <Hero/>
    <Carousel/>
    <About/>
    <Steps/>
    <Ctar/>
    <Industries/>
    <Values/>
    <Cta/>
  </main>
  );
}
