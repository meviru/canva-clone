"use client";

import { useParams } from "next/navigation";
import DesignHeader from "../_components/DesignHeader";

const DesignEditor = () => {
  const { designId } = useParams();
  return (
    <>
      <DesignHeader />
    </>
  );
};

export default DesignEditor;
