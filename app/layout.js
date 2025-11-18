// app/layout.js
import "./globals.css";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1p2cGXEEdCoEG9hCBKEhxcQVCuiAhX9T5d87yrQ3H8BY/gviz/tq?tqx=out:json&gid=1116443545";

async function getMetadataFromSheet() {
  try {
    const res = await fetch(SHEET_URL, { cache: "no-store" });
    const text = await res.text();

    const json = JSON.parse(text.substring(47).slice(0, -2));
    const rows = json.table.rows;

    const meta = {};
    rows.forEach(r => {
      const key = r.c[0]?.v;
      const value = r.c[1]?.v;
      if (key && value) meta[key] = value;
    });

    return meta;
  } catch (err) {
    console.error("Metadata fetch error:", err);
    return {};
  }
}

export async function generateMetadata() {
  const meta = await getMetadataFromSheet();

  return {
    title: meta.title || "Default Title",
    description: meta.description || "Default description",
    keywords: meta.keywords || "",
    openGraph: {
      title: meta.title || "Default Title",
      description: meta.description || "Default description",
      images: [meta.og_image] || [],
    },
    icons: {
      icon: meta.favicon || "",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
