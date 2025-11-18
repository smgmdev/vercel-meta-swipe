import "../styles/globals.css";
import React from "react";
import { Inter } from "next/font/google";
import { fetchSheetSettings } from "../lib/sheetSettings";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // fallback values – real values will come from Google Sheet
  title: "Mullana Brand – Swipe to Buy",
  description: "Swipe to buy curated fashion from Mullana Brand.",
};

export async function generateMetadata() {
  try {
    const settings = await fetchSheetSettings();

    const title = settings.title || "Mullana Brand – Swipe to Buy";
    const description =
      settings.description ||
      "Swipe to buy curated fashion from Mullana Brand.";
    const thumbnail =
      settings.thumbnail ||
      "https://corporate.stankeviciusgroup.com/assets/swipe/mbb-thumb.jpg";
    const themeColor = settings.theme_color || "#000000";

    return {
      title,
      description,
      themeColor,
      openGraph: {
        title,
        description,
        type: "website",
        url: "https://your-domain.com",
        images: [thumbnail],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [thumbnail],
      },
    };
  } catch (error) {
    console.error("Metadata error:", error);
    return metadata;
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
