import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0B1120 0%, #111827 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: "bold",
            }}
          >
            Arun Perumal
          </div>

          <div
            style={{
              marginTop: 16,
              color: "#60A5FA",
              fontSize: 40,
            }}
          >
            Full Stack Developer
          </div>

          <div
            style={{
              marginTop: 36,
              width: 550,
              fontSize: 28,
              color: "#CBD5E1",
            }}
          >
            Building modern, scalable and high-performance web
            applications using React, Next.js, TypeScript,
            Tailwind CSS and Supabase.
          </div>
        </div>

        <div
          style={{
            width: 240,
            height: 240,
            borderRadius: 9999,
            background: "#60A5FA",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0B1120",
            fontSize: 120,
            fontWeight: "bold",
          }}
        >
          A
        </div>
      </div>
    ),
    size
  );
}