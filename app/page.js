import Hero from "@/components/Hero";
import { InfiniteDevelopmentStrip } from "@/components/InfinteDevelopmentStrip";
import Toolstack from "@/components/Toolstack";
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
      <h1 className="mt-5 text-xl border-b-3 font-bold text-center border-white lg:text-3xl">
        AGILEZINGWEB
      </h1>
      <div className="my-20">
        <Hero />
        <Toolstack />
        <InfiniteDevelopmentStrip />
        <Process />
      </div>
    </>
  );
}


{/*
HERO ✅
TOOLSTACK ✅
SERVICES 
INFINITESTRIP ✅
FEATURES 
PROCESS ✅
PROJECTS 
FAQ'S 
ABOUT US
CTA
FOOTER 
*/}