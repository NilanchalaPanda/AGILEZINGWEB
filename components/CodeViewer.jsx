// "use client";

// import React, { useState, useEffect } from "react";
// import CodeMirror from "@uiw/react-codemirror";
// import { material } from "@uiw/codemirror-theme-material";
// import { javascript } from "@codemirror/lang-javascript";

// const CodeViewer = ({ selectedFile }) => {
//   const [code, setCode] = useState("");

//   useEffect(() => {
//     fetch(`/files/${selectedFile}`)
//       .then((response) => response.text())
//       .then(setCode);
//   }, [selectedFile]);

//   return (
//     <CodeMirror
//       value={code}
//       extensions={[javascript({ jsx: true })]}
//       theme={material}
//     />
//   );
// };

// export default CodeViewer;

// components/CodeViewer.js
"use client";

import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { material } from "@uiw/codemirror-theme-material";
import { javascript } from "@codemirror/lang-javascript";
import { promises as fs } from "fs";

const CodeViewer = ({ selectedFile }) => {
  const [code, setCode] = useState("");

  const data = async (file) => {
    // const file = await fs.readFile(`/files/${selectedFile}`, "utf-8");
    fetch(file)
      .then((response) => {
        console.log(response);
        response.text();
      })
      .then(setCode);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="h-full">
      <CodeMirror
        value={code}
        extensions={[javascript({ jsx: true })]}
        theme={material}
        readOnly={true}
        className="h-full"
      />
    </div>
  );
};

export default CodeViewer;
