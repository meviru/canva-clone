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
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <DesignHeader DesignInfo={DesignInfo} />
      <div className="flex grow-1">
        <DesignSidebar />
        <div className="grow-1">
          <CanvasEditor />
        </div>
      </div>
    </div>
  );
};

export default DesignEditor;
