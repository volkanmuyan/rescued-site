"use client";

import { Leaf } from "lucide-react";

interface RescuedBadgeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function RescuedBadge({ size = "md", className = "" }: RescuedBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-sm px-3 py-1 gap-1.5",
    lg: "text-base px-4 py-1.5 gap-2",
  };
  const iconSizes = { sm: 10, md: 12, lg: 14 };

  return (
    <span
      className={`inline-flex items-center bg-olive text-white font-bold rounded-full ${sizeClasses[size]} ${className}`}
    >
      <Leaf size={iconSizes[size]} className="flex-shrink-0" />
      Rescued
    </span>
  );
}
