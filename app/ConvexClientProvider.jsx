"use client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import dynamic from "next/dynamic";

const Provider = dynamic(() => import("./Provider"), { ssr: false });

export const ConvexClientProvider = ({ children }) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <ConvexProvider client={convex}>
      <Provider>{children}</Provider>
    </ConvexProvider>
  );
};
