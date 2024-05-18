import React from "react";
import InitialSetupMarketing from "@/files/initial-work";
import DashboardMarketing from "@/files/dashboard-work";
import AdvancedFeaturesMarketing from "@/files/advanced-thing";
import FinalProductMarketing from "@/files/final-prod";

const Preview = ({ selectedFile }) => {
  console.log(selectedFile);
  const renderComponent = () => {
    switch (selectedFile) {
      case "initial-work.jsx":
        return <InitialSetupMarketing />;
      case "dashboard-work.jsx":
        return <DashboardMarketing />;
      case "advanced-thing.jsx":
        return <AdvancedFeaturesMarketing />;
      case "final-prod.jsx":
        return <FinalProductMarketing />;
      default:
        return <div>File not found or unsupported file type.</div>;
    }
  };

  return <div className="px-2 py-5">{renderComponent()}</div>;
};

export default Preview;
