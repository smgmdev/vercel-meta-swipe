import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.nextUrl;

  // Only rewrite root page HTML
  if (url.pathname !== "/") {
    return NextResponse.next();
  }

  // Fetch metadata
  const metaRes = await fetch(`${url.origin}/api/meta-proxy`, {
    cache: "no-store",
  });

  const meta = await metaRes.json();

  const title = meta.title || "Default Title";
  const desc = meta.description || "Default Description";
  const img = meta.og_image || "";
  const keywords = meta.keywords || "";
  const icon = meta.favicon || "";

  // Load original HTML
  const htmlRes = await fetch(url.origin + "/index", {
    headers: { "x-middleware-html": "1" },
  });

  let html = await htmlRes.text();

  // Replace title tag
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

  // Replace meta tags
  html = html.replace(
    "</head>",
    `
<meta name="description" content="${desc}">
<meta name="keywords" content="${keywords}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${img}">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${desc}">
<meta name="twitter:image" content="${img}">
<link rel="icon" href="${icon}">
</head>`
  );

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
}

export const config = {
  matcher: ["/"],
};
