"use client";
import { ConvexProvider, ConvexReactClient } from "convex/react";

export const ConvexClientProvider = ({ children }) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}