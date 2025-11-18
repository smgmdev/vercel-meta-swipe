// app/layout.js
import "./globals.css";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1p2cGXEEdCoEG9hCBKEhxcQVCuiAhX9T5d87yrQ3H8BY/gviz/tq?tqx=out:json&gid=1116443545";

async function getMetadataFromSheet() {
  try {
    const res = await fetch(SHEET_URL, { cache: "no-store" });
    const text = await res.text();

    // SAFEST way to parse Google Sheets GViz JSON
    const json = JSON.parse(text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1));

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
    return {
      title: "Default Title",
      description: "Default description",
      keywords: "",
      og_image: "",
      favicon: ""
    };
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
      description: meta.description || "",
      images: meta.og_image ? [meta.og_image] : [],
    },

    twitter: {
      card: "summary_large_image",
      title: meta.title || "Default Title",
      description: meta.description || "",
      images: meta.og_image ? [meta.og_image] : [],
    },

    icons: {
      icon: meta.favicon || "/favicon.ico",
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
