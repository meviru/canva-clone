"use client";

import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import emptyStateImage from "@/public/01f7f458bbbcae4163382d28175f527d.webp";
import { Button } from "@/components/ui/button";
import CustomCanvasDialog from "./CustomCanvasDialog";

const RecentDesigns = () => {
  const [designList, setDesignList] = useState([]);
  return (
    <div className="mt-7">
      <h2 className="text-2xl font-semibold">Recent Designs</h2>
      {designList.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={emptyStateImage}
            alt="Empty state"
            width={150}
            height={150}
          />
          <h2 className="text-xl font-semibold mt-4">No designs found</h2>
          <p className="text-center mt-1 mb-5">
            You don't have any designs created.
          </p>
          <CustomCanvasDialog>
            <Button className="flex items-center justify-center cursor-pointer">
              <IconPlus />
              Create new
            </Button>
          </CustomCanvasDialog>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RecentDesigns;
