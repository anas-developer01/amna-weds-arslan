import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#6e2f3c", color: "#fbf3de", border: "8px solid #c8a96a", borderRadius: 90, fontFamily: "serif", fontSize: 62 }}>A&A</div>,
    size,
  );
}
