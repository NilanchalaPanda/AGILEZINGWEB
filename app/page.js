import Hero from "@/components/Hero";
import { InfiniteDevelopmentStrip } from "@/components/InfinteDevelopmentStrip";
import Toolstack from "@/components/Toolstack";
import Process from "@/components/Process";
import Features from "@/components/Features";
import CTAText from "@/components/CTAText";
import Footer from "@/components/Footer";

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
        <Features />
        <Process />
        <CTAText />
        <Footer />
      </div>
    </>
  );
}

{
  /*
HERO ✅
TOOLSTACK ✅
SERVICES --> Nilanchal
INFINITESTRIP ✅
FEATURES ✅
PROCESS 🟨
PROJECTS --> Usmaan
FAQ'S (Optional)
ABOUT US --> Usmaan
CTA 🟨
FOOTER ✅
*/
}
