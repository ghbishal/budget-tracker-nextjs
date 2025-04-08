import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center p-5">
      {children}
    </div>
  );
}
