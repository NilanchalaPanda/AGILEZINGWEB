import CTA from "./sections/CTAText";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import NilFooter from "./sections/NilFooter";
import Features from "./sections/Features";


function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Features/>
      <CTA />
      <hr className="mx-14" />
      <NilFooter />
    </>
  );
}

export default App;
