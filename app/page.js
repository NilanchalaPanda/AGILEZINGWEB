import Hero from "@/components/Hero";
import { InfiniteDevelopmentStrip } from "@/components/InfinteDevelopmentStrip";
import Toolstack from "@/components/Toolstack";
import NavBar from "@/components/NavBar";
import Process from "@/components/Process";
import Features from "@/components/Features";
import CTAText from "@/components/CTAText";
import Footer from "@/components/Footer";
import { Services } from "@/components/Services";
import MovingBorder from "@/components/MovingBorder";

export default function Home() {
  return (
    <>
      <div className="mb-20">
        <NavBar />
        <Hero />
        <Toolstack />
        <Services />
        <InfiniteDevelopmentStrip />
        <Features />
        <Process />
        <MovingBorder />
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
SERVICES 🟨
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
