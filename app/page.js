import Hero from "@/components/Hero";
import { InfiniteDevelopmentStrip } from "@/components/InfinteDevelopmentStrip";
import Toolstack from "@/components/Toolstack";
import Steps from "@/components/Steps";
import NavBar from "@/components/NavBar";
import Process from "@/components/Process";
import Features from "@/components/Features";
import CTAText from "@/components/CTAText";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="mb-20">
        <NavBar/>
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
