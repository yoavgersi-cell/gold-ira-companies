import { Star, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingBadgeProps {
  rating: number;
  label: string;
  starRating?: number;
  className?: string;
  /** "lg" is the homepage ranking-card size (big score, larger stars). */
  size?: "md" | "lg";
}

export function RatingBadge({ rating, label, starRating, className, size = "md" }: RatingBadgeProps) {
  const stars = starRating ?? (rating / 2);
  const fullStars = Math.floor(stars);
  const hasHalf = stars % 1 >= 0.5;
  const lg = size === "lg";

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn("flex items-center", lg ? "gap-2.5" : "gap-1.5")}>
        <span className={cn("font-extrabold leading-none tracking-tight text-[#191919]", lg ? "text-[52px]" : "text-[32px]")}>
          {rating.toFixed(1)}
        </span>
        <div>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  lg ? "h-[22px] w-[22px]" : "h-[14px] w-[14px]",
                  i < fullStars
                    ? "fill-[#FDB515] text-[#FDB515]"
                    : i === fullStars && hasHalf
                      ? "fill-[#FDB515]/50 text-[#FDB515]"
                      : "fill-gray-300 text-gray-500"
                )}
                strokeWidth={0}
              />
            ))}
          </div>
          <div className="mt-0.5 flex items-center gap-0.5">
            <span className={cn("font-semibold text-gray-700", lg ? "text-[15px]" : "text-[11px]")}>{label}</span>
            <ChevronDown className="h-3 w-3 text-gray-500" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </div>
  );
}
