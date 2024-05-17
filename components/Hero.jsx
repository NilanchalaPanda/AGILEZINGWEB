import React from "react";
import Image from 'next/image';

function Hero() {
  return (
    <div className="m-6 lg:m-20">
      <div className="flex flex-col-reverse gap-10 lg:items-center lg:flex-row lg:gap-20">
      <div className="flex flex-col lg:items-start items-center justify-center lg:justify-start gap-6">
        <h1 className="text-center text-4xl font-bold lg:text-5xl lg:text-start text-gray-300 ">
          Gain your market <br /> advantage with <br /> customized digital solutions
        </h1>
        <p className="text-center text-md font-semibold text-gray-400 lg:text-2xl lg:text-start">
          Step into the future of your business with Agilezingweb, where your
          vision is transformed into dynamic digital reality. Engage with a
          partner that listens and translates your brand's essence into a
          dynamic digital presence.
        </p>
        <button className="px-10 py-2  bg-white font-semibold text-black rounded-3xl">Get started</button>
      </div>
      <Image src="/image.png" width={500} className="bg-black" height={100} alt="coding guy" />
      </div>
    </div>
  );
}

export default Hero;
