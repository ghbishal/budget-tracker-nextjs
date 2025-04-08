import { ReactNode } from "react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  isLoading: boolean;
  fullWidth?: boolean;
};
export function SkeletonWrapper({
  children,
  isLoading,
  fullWidth = true,
}: Props) {
  if (!isLoading) return children;
  return (
    <Skeleton className={cn(fullWidth && "w-full")}>
      <div className="opacity-0">{children}</div>
    </Skeleton>
  );
}
