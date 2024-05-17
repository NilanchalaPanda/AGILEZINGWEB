"use client";

import React, { useState } from "react";
import FileExplorer from "../components/FileExplorer";
import CodeViewer from "../components/CodeViewer";
import Preview from "../components/Preview";
import Head from "next/head";

const Steps = () => {
  const [selectedFile, setSelectedFile] = useState("step1.jsx");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Head>
        <title>Code Viewer with Output</title>
      </Head>
      <FileExplorer
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      <div style={{ width: "40%", padding: "1rem" }}>
        <CodeViewer selectedFile={selectedFile} />
      </div>
      <Preview selectedFile={selectedFile} />
    </div>
  );
};

export default Steps;
