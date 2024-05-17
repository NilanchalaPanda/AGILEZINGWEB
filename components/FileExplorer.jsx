// components/FileExplorer.js
import React from "react";

const files = [
  "initial-work.js",
  "dashboard-work.js",
  "advanced-thing.js",
  "final-prod.js",
];

const FileExplorer = ({ selectedFile, setSelectedFile }) => {
  return (
    <div className="overflow-x-auto px-2 no-scrollbar w-full flex flex-row lg:flex-col lg:px-4 lg:start-0 lg:h-[40rem]">
      {files.map((file, idx) => (
        <div
          key={idx}
          onClick={() => setSelectedFile(file)}
          className={`cursor-pointer p-2 rounded-md transition-all ease-in-out duration-200 whitespace-nowrap ${
            file === selectedFile ? "text-secondary" : "text-slate-300"
          } lg:hover:bg-gray-300/15`}
        >
          {file}
        </div>
      ))}
    </div>
  );
};

export default FileExplorer;
