import Image from "next/image";
import { cn } from "@/lib/utils";
import { Landmark, ShieldCheck, Star } from "lucide-react";

interface HeroSectionProps {
  backgroundImageUrl: string;
  imageAlt: string;
  updatedLabel?: string;
  h1: string;
  /** Substring of h1 drawn with a soft highlight (e.g. "Gold IRA"). */
  h1Highlight?: string;
  h2?: string;
  description?: string;
  overlayOpacity?: number;
  textAlign?: "left" | "center";
  maxTextWidth?: string;
}

export function HeroSection({
  backgroundImageUrl,
  imageAlt,
  updatedLabel,
  h1,
  h1Highlight,
  h2,
  description,
  textAlign = "left",
  maxTextWidth = "640px",
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[120px] py-4 sm:py-2 sm:min-h-[200px] lg:min-h-[220px] overflow-hidden bg-gradient-to-r from-[#FAF6EC] via-[#FAF7F0] to-[#FDFCF8]">
      {/* Content */}
      <div
        className={cn(
          "relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-center px-4 py-2 sm:px-10 sm:py-4 lg:px-16 lg:py-5",
          textAlign === "center" && "items-center text-center",
          backgroundImageUrl && "lg:flex-row lg:items-center lg:justify-between lg:gap-8"
        )}
      >
        <div className="max-w-[640px] lg:max-w-[900px]" style={{ maxWidth: maxTextWidth !== "640px" ? maxTextWidth : undefined }}>
          {updatedLabel && (
            <span className="mb-1.5 sm:mb-2 inline-flex items-center gap-1.5 text-[12px] text-gray-600">
              <svg className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              {updatedLabel.includes(":") ? (
                <>
                  {updatedLabel.slice(0, updatedLabel.indexOf(":") + 1)}
                  <strong className="font-bold text-[#191919]">{updatedLabel.slice(updatedLabel.indexOf(":") + 1)}</strong>
                </>
              ) : (
                updatedLabel
              )}
            </span>
          )}

          <h1 className="text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.15] font-extrabold text-[#191919]">
            {renderHighlighted(h1, h1Highlight)}
          </h1>

          {h2 && (
            <h2 className="mt-1.5 text-[15px] sm:text-[18px] lg:text-[19px] leading-[1.3] font-semibold text-[#191919]">
              {h2}
            </h2>
          )}

          {description && (
            <p className="mt-2 sm:mt-2.5 text-[13px] sm:text-[14px] leading-[1.55] text-gray-700 max-w-[600px]">
              {description}
            </p>
          )}

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 sm:gap-x-4">
            {[
              { label: "Fees Compared Side by Side", icon: ShieldCheck },
              { label: "Top-Rated Companies", icon: Star },
              { label: "IRA Rollover Guides", icon: Landmark },
            ].map(({ label, icon: Icon }) => (
              <span key={label} className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-gray-600 whitespace-nowrap">
                <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-[#1E3A5F]" strokeWidth={1.5} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Hero illustration on the right - desktop only (omitted when no image is set) */}
        {backgroundImageUrl && (
          <div className="relative hidden h-[160px] w-[160px] shrink-0 lg:block xl:h-[190px] xl:w-[190px]">
            <Image
              src={backgroundImageUrl}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 190px, 160px"
              className="object-contain object-right"
            />
          </div>
        )}
      </div>
    </section>
  );
}

// Wraps the first occurrence of `highlight` in a soft blue mark, as in "Our
// Best <mark>Gold IRA</mark> Companies of 2026".
function renderHighlighted(text: string, highlight?: string) {
  const at = highlight ? text.indexOf(highlight) : -1;
  if (!highlight || at < 0) return text;
  return (
    <>
      {text.slice(0, at)}
      <mark className="rounded-sm bg-[#E8F1FA] px-1.5 text-[#1E4E79]">{highlight}</mark>
      {text.slice(at + highlight.length)}
    </>
  );
}
