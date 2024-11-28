import React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

const spinnerVariants = cva(
  "absolute inset-0 flex items-center justify-center", // Căn giữa toàn màn hình
  {
    variants: {
      show: {
        true: "flex",
        false: "hidden",
      },
    },
    defaultVariants: {
      show: true,
    },
  }
);

const loaderVariants = cva("animate-spin text-primary", {
  variants: {
    size: {
      small: "h-6 w-6", // Đặt kích thước nhỏ
      medium: "h-8 w-8", // Đặt kích thước trung bình
      large: "h-12 w-12", // Đặt kích thước lớn
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string;
  children?: React.ReactNode;
}

export default function Spinner({
  size,
  show,
  children,
  className,
}: SpinnerContentProps) {
  return (
    <div className="relative h-screen w-screen"> {/* Chiếm toàn bộ màn hình */}
      <span className={spinnerVariants({ show })}>
        <Loader2 className={cn(loaderVariants({ size }), className)} />
        {children}
      </span>
    </div>
  );
}
