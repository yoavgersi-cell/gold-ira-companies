import { ImageResponse } from "next/og";
import { getConfig } from "@/lib/config-store";

export const runtime = "edge";
export const alt = "Gold IRA Guide - goldiraplanet.com";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let title = "Article";
  let category = "";
  try {
    const config = await getConfig();
    const article = (config.articles ?? []).find((a) => a.slug === slug);
    if (article) {
      title = article.title;
      category = article.category ?? "";
    }
  } catch {
    // fallback
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0F2540 0%, #1B3A63 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#D9B66A",
            }}
          >
            goldiraplanet.com
          </span>
          {category && (
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "white",
                background: "#B8862B",
                padding: "4px 14px",
                borderRadius: "20px",
              }}
            >
              {category}
            </span>
          )}
        </div>
        <div
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
      </div>
    ),
    { ...size }
  );
}
