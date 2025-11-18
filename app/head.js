// app/head.js

const SHEET =
  "https://docs.google.com/spreadsheets/d/1p2cGXEEdCoEG9hCBKEhxcQVCuiAhX9T5d87yrQ3H8BY/gviz/tq?tqx=out:json&gid=1116443545";

async function getSheetMeta() {
  try {
    const res = await fetch(SHEET, { cache: "no-store" });
    const text = await res.text();
    const json = JSON.parse(text.substring(47).slice(0, -2));
    const rows = json.table.rows;

    const meta = {};
    rows.forEach(r => {
      const k = r.c[0]?.v;
      const v = r.c[1]?.v;
      if (k && v) meta[k] = v;
    });

    return meta;
  } catch (e) {
    return {};
  }
}

export default async function Head() {
  const meta = await getSheetMeta();

  const title = meta.title || "Default Title";
  const desc = meta.description || "Default description";
  const og = meta.og_image || "";
  const icon = meta.favicon || "";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={meta.keywords || ""} />

      {/* OG */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={og} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={og} />

      {/* Favicon */}
      {icon && <link rel="icon" href={icon} />}
    </>
  );
}
