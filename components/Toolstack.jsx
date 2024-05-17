import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
function Toolstack() {
  return (
    <div className="flex flex-col px-4 py-10 items-center justify-center gap-8 bg-white">
      <h2 className="text-xl font-semibold text-black">Tools we use</h2>
      <div className="grid grid-cols-2 gap-6 lg:flex lg:gap-24">
      <div className="flex items-center gap-2">
        <FaReact  size={50} color="black"/>
        <p className="text-black font-semibold text-2xl">React</p>
      </div>
      <div className="flex items-center gap-2">
        <RiTailwindCssFill size={50} color="black"/>
        <p className="text-black font-semibold text-2xl">Tailwind CSS</p>
      </div>
      <div className="flex items-center gap-2">
        <RiNextjsFill size={50} color="black"/>
        <p className="text-black font-semibold text-2xl">Next js</p>
      </div>
      <div className="flex items-center gap-2">
        <SiMongodb size={50} color="black"/>
        <p className="text-black font-semibold text-2xl">Mongo DB</p>
      </div>
      </div>
    </div>
  );
}

export default Toolstack;
