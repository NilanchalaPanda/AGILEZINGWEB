import Hero from "@/components/Hero";
import { InfiniteDevelopmentStrip } from "@/components/InfinteDevelopmentStrip";
import Toolstack from "@/components/Toolstack";
import Steps from "@/components/Steps";

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
        <Steps />
      </div>
    </>
  );
}
