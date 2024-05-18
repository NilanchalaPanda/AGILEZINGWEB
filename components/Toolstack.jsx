import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
function Toolstack() {
  return (
    <div className="flex flex-col px-4 py-10 items-center justify-center gap-8">
      <h2 className="text-xl font-semibold text-slate-400">Tools we use</h2>
      <div className="grid grid-cols-2 gap-y-6 lg:flex lg:gap-24">
        <div className="flex items-center gap-2 text-slate-300 hover:text-secondary/70 transition-all ease-in-out duration-200 text-xl lg:text-3xl">
          <FaReact />
          <p className="font-semibold">React</p>
        </div>
        <div className="flex items-center gap-2 text-slate-300 hover:text-secondary/70 transition-all ease-in-out duration-200 text-xl lg:text-3xl">
          <RiTailwindCssFill />
          <p className="font-semibold">Tailwind CSS</p>
        </div>
        <div className="flex items-center gap-2 text-slate-300 hover:text-secondary/70 transition-all ease-in-out duration-200 text-xl lg:text-3xl">
          <RiNextjsFill />
          <p className="font-semibold">Next js</p>
        </div>
        <div className="flex items-center gap-2 text-slate-300 hover:text-secondary/70 transition-all ease-in-out duration-200  text-xl lg:text-3xl">
          <SiMongodb />
          <p className="font-semibold">Mongo DB</p>
        </div>
      </div>
    </div>
  );
}

export default Toolstack;
