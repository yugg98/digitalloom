import About from "@/components/Aboutus";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Steps from "@/components/Steps";
import Values from "@/components/Values";
import Image from "next/image";

export default function Home() {
  
  return (
  <main>
    <Hero/>
    <About/>
    <Steps/>
   
    <div className="bg-indigo-100">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight leading-10 text-gray-900 sm:text-4xl">
          Ready to dive in?
          <br />
          Start your free trial today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
         <Button/>
          
        </div>
      </div>
    </div>
    <Industries/>
    <Values/>
  </main>
  );
}
