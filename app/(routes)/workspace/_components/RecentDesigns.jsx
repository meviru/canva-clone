"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import emptyStateImage from "@/public/01f7f458bbbcae4163382d28175f527d.webp";
import { IconPlus } from "@tabler/icons-react";
import { useQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CustomCanvasDialog from "./CustomCanvasDialog";

const RecentDesigns = () => {
  const [designList, setDesignList] = useState([]);
  const desingsList = useQuery(api.designs.GetDesignsList);

  useEffect(() => {
    setDesignList(desingsList);
  }, [desingsList]);

  return (
    <div className="mt-7">
      <h2 className="text-2xl font-semibold">Recent Designs</h2>
      {designList?.length === 0 ? (
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
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-2 gap-5 mt-4">
          {designList?.map((design) => (
            <Link href={`/design/${design._id}`} key={design._id}>
              <Card
                key={design._id}
                className="cursor-pointer shadow-none border-0"
              >
                <CardContent className="p-4 flex items-center justify-center bg-gray-200 overflow-hidden rounded-xl">
                  <Image
                    src=""
                    alt={design.name}
                    width={200}
                    height={160}
                    className="object-contain"
                  />
                </CardContent>
                <CardFooter className="p-0 flex flex-col items-start gap-1.5">
                  <CardTitle>{design.name}</CardTitle>
                  <CardDescription>
                    {design.width} x {design.height}
                  </CardDescription>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentDesigns;
