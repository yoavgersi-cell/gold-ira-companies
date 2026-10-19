import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gold IRA Planet - Compare the Best Gold IRA Companies 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              background: "#B8862B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              color: "white",
            }}
          >
            +
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "white",
            }}
          >
            goldiraplanet.com
          </span>
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}
        >
          Best Gold IRA Companies 2026
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.5,
          }}
        >
          Compare gold IRA companies side by side. Minimums, real fees, storage and buyback terms.
        </div>
      </div>
    ),
    { ...size }
  );
}
