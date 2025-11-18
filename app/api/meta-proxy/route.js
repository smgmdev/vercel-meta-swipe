export async function GET() {
  const SHEET =
    "https://docs.google.com/spreadsheets/d/1p2cGXEEdCoEG9hCBKEhxcQVCuiAhX9T5d87yrQ3H8BY/gviz/tq?tqx=out:json&gid=1116443545";

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

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
