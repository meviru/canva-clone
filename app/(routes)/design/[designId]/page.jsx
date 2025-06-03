"use client";

import { useParams } from "next/navigation";
import DesignHeader from "../_components/DesignHeader";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import DesignSidebar from "../_components/DesignSidebar";
import CanvasEditor from "../_components/CanvasEditor";

const DesignEditor = () => {
  const { designId } = useParams();

  const DesignInfo = useQuery(api.designs.GetDesign, {
    id: designId,
  });

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <DesignHeader DesignInfo={DesignInfo} />
      {/* Main content area with scroll context */}
      <div className="flex flex-1 overflow-hidden">
        <DesignSidebar />
        {/* Canvas area scrolls if needed */}
        <div className="flex-1 overflow-auto">
          <CanvasEditor DesignInfo={DesignInfo} />
        </div>
      </div>
    </div>
  );
};

export default DesignEditor;
