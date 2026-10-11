import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Arsalan weds Amna — Wedding Invitation";

export default function WeddingImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#efd1c8", padding: 24, color: "#6e2f3c" }}>
      <div style={{ width: "100%", height: "100%", border: "2px solid #c8a96a", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#fbf3de" }}>
        <div style={{ fontSize: 36, color: "#b88a3e", marginBottom: 28 }}>A & A</div>
        <div style={{ fontSize: 20, letterSpacing: 6 }}>YOU ARE INVITED TO THE WEDDING OF</div>
        <div style={{ fontSize: 92, fontFamily: "serif", marginTop: 28, marginBottom: 36 }}>Arsalan & Amna</div>
        <div style={{ fontSize: 28 }}>12 Nov · Mehndi　 14 Nov · Barat　 15 Nov · Walima</div>
        <div style={{ fontSize: 20, letterSpacing: 6, marginTop: 28 }}>HASILPUR · 2026</div>
      </div>
    </div>,
    size,
  );
}
