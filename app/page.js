import Hero from "@/components/Hero";
import { InfiniteDevelopmentStrip } from "@/components/InfinteDevelopmentStrip";
import Toolstack from "@/components/Toolstack";
import Steps from "@/components/Steps";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <>
      <div className="mb-20">
        <NavBar/>
        <Hero />
        <Toolstack />
        <InfiniteDevelopmentStrip />
        <Steps />
      </div>
    </>
  );
}
