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
      url: "https://vercel-meta-swipe.vercel.app"
    },
    twitter: {
      card: "summary_large_image",
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
