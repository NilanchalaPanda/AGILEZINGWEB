"use client";

import React, { useState } from "react";

const Preview = ({ selectedFile }) => {
  return (
    <div className="px-2 py-5">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aspernatur, et dignissimos veritatis nisi, architecto assumenda laboriosam obcaecati ipsa velit, impedit maxime deleniti ipsam! Possimus aliquam quisquam maiores, placeat laborum earum ad quod ipsa repudiandae dolorum, aspernatur atque officia totam.</p>
      {/* {selectedFile === "initial.js" && (
        <div>
          <h1>Weekly Digest for you from ACME</h1>
          <p>Understanding Photosynthesis: A Deep Dive...</p>
        </div>
      )} */}
      {/* Add similar blocks for other files */}
    </div>
  );
};

export default Preview;
