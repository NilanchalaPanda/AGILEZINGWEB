import React from "react";
import Image from 'next/image';

function Hero() {
  return (
    <div className="m-6 lg:m-20 ">
      <div className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-20">
      <div className="flex flex-col lg:items-start items-center justify-center lg:justify-start gap-6">
        <h1 className="text-center lg:text-start font-bold text-5xl text-gray-300 ">
          Gain your market <br /> advantage with <br /> customized digital solutions
        </h1>
        <p className="text-center lg:text-start text-2xl font-semibold text-gray-400">
          Step into the future of your business with Agilezingweb, where your
          vision is transformed into dynamic digital reality. Engage with a
          partner that listens and translates your brand's essence into a
          dynamic digital presence.
        </p>
        <button className="px-10 py-2  bg-white font-semibold text-black rounded-3xl">Get started</button>
      </div>
      <Image src="/public/image1.jpeg" width={1500} height={1000} alt="coding guy" />
      </div>
    </div>
  );
}

export default Hero;
