import { ModeToggle } from "@/components/ModeToggle";
import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function page() {
  return (
    <div className="flex gap-4">
      HomePage
      <UserButton />
      <ModeToggle />
    </div>
  );
}
