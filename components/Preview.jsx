"use client";

import React, { useState } from "react";

const Preview = ({ selectedFile }) => {
  return (
    <div className="px-2 py-5">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aspernatur, et dignissimos veritatis nisi, architecto assumenda laboriosam obcaecati ipsa velit, impedit maxime deleniti ipsam! Possimus aliquam quisquam maiores, placeat laborum earum ad quod ipsa repudiandae dolorum, aspernatur atque officia totam.</p>
    </div>
  );
};

export default Preview;

// ---------------------------------------------------------------------------------

// components/Preview.js
// "use client";

// import React, { useState, useEffect } from "react";
// import { promises as fs } from "fs";

// const Preview = ({ selectedFile }) => {
//   const [Component, setComponent] = useState(null);

//   useEffect(() => {
//     const loadComponent = async () => {
//       try {
//         const file = await fs.readFile(
//           process.cwd() + `/files/${selectedFile}`,
//           "utf-8"
//         );
//         const importedComponent = await import(file);
//         setComponent(() => importedComponent.default);
//       } catch (error) {
//         console.error("Error loading component:", error);
//         setComponent(null);
//       }
//     };

//     loadComponent();
//   }, [selectedFile]);

//   return (
//     <div className="px-2 py-5">
//       {Component ? <Component /> : <p>Loading preview...</p>}
//     </div>
//   );
// };

// export default Preview;
