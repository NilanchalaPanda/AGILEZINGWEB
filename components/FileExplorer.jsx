// components/FileExplorer.js
import React from "react";

const files = [
  "user-welcome.tsx",
  "reset-password.tsx",
  "user-invite.tsx",
  "weekly-digest.tsx",
];

const FileExplorer = ({ selectedFile, setSelectedFile }) => {
  return (
    <div className="w-[20%] mr-1 border-1 border-white p-[1rem]">
      {files.map((file) => (
        <div
          key={file}
          onClick={() => setSelectedFile(file)}
          style={{
            cursor: "pointer",
            padding: "0.5rem",
            borderRadius: "10px",
            backgroundColor: file === selectedFile ? "#c27272" : "transparent",
          }}
        >
          {file}
        </div>
      ))}
    </div>
  );
};

export default FileExplorer;
