// components/FileExplorer.js
import React from "react";

const files = [
  "initial-work.jsx",
  "dashboard-work.jsx",
  "advanced-thing.jsx",
  "final-prod.jsx",
];

const FileExplorer = ({ selectedFile, setSelectedFile }) => {
  return (
    <div className="overflow-x-auto px-2 no-scrollbar w-full flex flex-row lg:flex-col lg:px-4 lg:start-0 lg:h-[35rem]">
      {files.map((file) => (
        <div
          key={file}
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
