export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import "./globals.css";
import { getSheetMetadata } from "@/lib/googleSheetMetadata";

export async function generateMetadata() {
  const meta = await getSheetMetadata();

  return {
    title: meta.title || "Default Title",
    description: meta.description || "Default description",
    keywords: meta.keywords || "",
    openGraph: {
      title: meta.title || "Default Title",
      description: meta.description || "Default description",
      images: meta.og_image ? [meta.og_image] : [],
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
