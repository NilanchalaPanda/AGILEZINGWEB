import Hero from "@/components/Hero";
import { InfiniteDevelopmentStrip } from "@/components/InfinteDevelopmentStrip";
import Toolstack from "@/components/Toolstack";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <div className="my-20">
      <Hero/>
      <Toolstack/>
      <InfiniteDevelopmentStrip />
      <Steps/>
    </div>
  );
}
