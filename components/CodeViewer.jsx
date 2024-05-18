"use client";

import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { material } from "@uiw/codemirror-theme-material";
import { javascript } from "@codemirror/lang-javascript";

const CodeViewer = ({ selectedFile }) => {
  const [error, setError] = useState(null);
  const [code, setCode] = useState("");

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(`/api/files?filename=${selectedFile}`);
        if (!response.ok) {
          throw new Error(`Error fetching file: ${response.statusText}`);
        }
        const data = await response.json();
        setCode(data.content);
        setError(null); // Clear any previous errors
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCode();
  }, [selectedFile]);

  return (
    <div className="h-full">
      {error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <CodeMirror
          value={code}
          extensions={[javascript({ jsx: true })]}
          theme={material}
          readOnly
          className="h-full"
        />
      )}
    </div>
  );
};

export default CodeViewer;
