"use client";

import { useParams } from "next/navigation";
import DesignHeader from "../_components/DesignHeader";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const DesignEditor = () => {
  const { designId } = useParams();

  const DesignInfo = useQuery(api.designs.GetDesign, {
    id: designId,
  });

  return (
    <>
      <DesignHeader DesignInfo={DesignInfo} />
    </>
  );
};

export default DesignEditor;
