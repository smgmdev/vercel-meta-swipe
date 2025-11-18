// app/_document.js
import { Html, Head, Main, NextScript } from "next/document";

const SHEET =
  "https://docs.google.com/spreadsheets/d/1p2cGXEEdCoEG9hCBKEhxcQVCuiAhX9T5d87yrQ3H8BY/gviz/tq?tqx=out:json&gid=1116443545";

async function getMeta() {
  try {
    const res = await fetch(SHEET, { cache: "no-store" });
    const text = await res.text();
    const json = JSON.parse(text.substring(47).slice(0, -2));
    const rows = json.table.rows;

    const data = {};
    rows.forEach((r) => {
      const key = r.c[0]?.v;
      const val = r.c[1]?.v;
      if (key && val) data[key] = val;
    });

    return data;
  } catch (e) {
    return {};
  }
}

export default async function Document() {
  const meta = await getMeta();

  const title = meta.title || "Default Title";
  const desc = meta.description || "Default Description";
  const img = meta.og_image || "";
  const icon = meta.favicon || "";

  return (
    <Html lang="en">
      <Head>
        <title>{title}</title>

        <meta name="description" content={desc} />
        <meta name="keywords" content={meta.keywords || ""} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={img} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={img} />

        {icon && <link rel="icon" href={icon} />}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
