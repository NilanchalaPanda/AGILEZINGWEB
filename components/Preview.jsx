"use client";

import React, { useState } from "react";

const Preview = ({ selectedFile }) => {
  const [device, setDevice] = useState("desktop");

  const getDeviceStyle = () => {
    switch (device) {
      case "mobile":
        return { width: "375px", height: "667px" };
      case "tablet":
        return { width: "768px", height: "1024px" };
      default:
        return { width: "100%", height: "100%" };
    }
  };

  return (
    <div
      style={{
        width: "50%",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      <h3>Output Panel</h3>
      <div>
        <button onClick={() => setDevice("desktop")}>Desktop</button>
        <button onClick={() => setDevice("tablet")}>Tablet</button>
        <button onClick={() => setDevice("mobile")}>Mobile</button>
      </div>
      <div
        style={{
          ...getDeviceStyle(),
          overflow: "auto",
          border: "1px solid #ccc",
          marginTop: "1rem",
        }}
      >
        {selectedFile === "weekly-digest.tsx" && (
          <div>
            <h1>Weekly Digest for you from ACME</h1>
            <p>Understanding Photosynthesis: A Deep Dive...</p>
          </div>
        )}
        {/* Add similar blocks for other files */}
      </div>
    </div>
  );
};

export default Preview;
