"use client";

import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { material } from "@uiw/codemirror-theme-material";
import { javascript } from "@codemirror/lang-javascript";

const CodeViewer = ({ selectedFile }) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch(`/files/${selectedFile}`)
      .then((response) => response.text())
      .then(setCode);
  }, [selectedFile]);

  return (
    <CodeMirror
      //   value={code}
      value="console.log('hello world!');"
      extensions={[javascript({ jsx: true })]}
      theme={material}
    />
  );
};

export default CodeViewer;
