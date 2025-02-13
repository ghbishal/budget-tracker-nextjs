import { Navbar } from "@/components/Navbar";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex w-full h-screen flex-col">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
}
