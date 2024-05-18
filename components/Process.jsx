"use client";

// pages/index.js
import React, { useState } from "react";
import FileExplorer from "./FileExplorer";
import CodeViewer from "./CodeViewer";
import Preview from "./Preview";
import Head from "next/head";
import { GoDotFill } from "react-icons/go";

const Process = () => {
  const [selectedFile, setSelectedFile] = useState(
    "initial-work.jsx"
  );
  const [code, setCode] = useState("");

  return (
    <div className="mt-10 border w-[95%] mx-auto border-gray-600/80 rounded-2xl lg:w-[85%]">
      <div className="p-2 border-b border-gray-600 flex lg:px-4 lg:py-3">
        <ul className="flex">
          <li>
            <GoDotFill className="text-red-500 text-2xl" />
          </li>
          <li>
            <GoDotFill className="text-yellow-500 text-2xl" />
          </li>
          <li>
            <GoDotFill className="text-green-500 text-2xl" />
          </li>
        </ul>
      </div>
      <Head>
        <title>Marketing for SaaS Product</title>
      </Head>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="py-2 border-b border-r-0 border-gray-600 lg:border-r lg:border-b-0">
          <FileExplorer
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        </div>
        <div className="hidden border-r border-gray-600 lg:block">
          <CodeViewer
            selectedFile={selectedFile}
            code={code}
            setCode={setCode}
          />
        </div>
        <Preview selectedFile={selectedFile} code={code} />
      </div>
    </div>
  );
};

export default Process;
