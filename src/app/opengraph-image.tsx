import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top left, rgba(62,154,209,0.24), transparent 34%), linear-gradient(135deg, #0a0a0a 0%, #121212 50%, #0a0a0a 100%)",
          color: "#ededed",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "92px",
              height: "92px",
              borderRadius: "24px",
              alignItems: "center",
              justifyContent: "center",
              background: "#141414",
              border: "3px solid #3e9ad1",
              fontSize: "44px",
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            NL
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "26px",
                fontWeight: 700,
                letterSpacing: "6px",
                color: "#3e9ad1",
              }}
            >
              NEXT LEVEL TOWING
            </div>
            <div
              style={{
                fontSize: "20px",
                color: "#a3a3a3",
                letterSpacing: "2px",
              }}
            >
              24/7 Towing and Roadside Assistance
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "880px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              lineHeight: 1.02,
              fontWeight: 800,
            }}
          >
            Fast towing across Sacramento and surrounding cities
          </div>
          <div
            style={{
              fontSize: "30px",
              lineHeight: 1.35,
              color: "#cfcfcf",
            }}
          >
            Flatbed towing, roadside assistance, vehicle recovery, and long-distance
            transport with 24/7 dispatch.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "24px",
            color: "#9ca3af",
          }}
        >
          <div>{company.fullAddress}</div>
          <div style={{ color: "#3e9ad1", fontWeight: 700 }}>{company.phone}</div>
        </div>
      </div>
    ),
    size
  );
}
