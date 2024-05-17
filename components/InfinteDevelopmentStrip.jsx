import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteDevelopmentStrip() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-black border-t-2 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={SERVICES}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const SERVICES = [
  {
    quote: "REACT DEVELOPMENT",
  },
  {
    quote: "APP DEVELOPMENT",
  },
  {
    quote: "UI/UX DESIGNS",
  },
  {
    quote: "SaaS PRODUCTS",
  },
];
