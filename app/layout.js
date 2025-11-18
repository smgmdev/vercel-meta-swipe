import "./globals.css";

async function getSheetMeta() {
  try {
    const res = await fetch(
      "https://vercel-meta-swipe.vercel.app/api/metadata",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to load sheet metadata");

    return await res.json();
  } catch (e) {
    console.error("Sheet metadata error:", e);
    return {
      title: "Default Title",
      description: "Default description",
      keywords: "",
      og_image: "",
      favicon: "",
    };
  }
}

export async function generateMetadata() {
  const meta = await getSheetMeta();

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [meta.og_image],
    },
    icons: {
      icon: meta.favicon,
      shortcut: meta.favicon,
      apple: meta.favicon,
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
