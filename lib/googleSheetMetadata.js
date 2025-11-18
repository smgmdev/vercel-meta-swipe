export async function fetchSheetMeta() {
  try {
    const url =
      "https://docs.google.com/spreadsheets/d/1p2cGXEEdCoEG9hCBKEhxcQVCuiAhX9T5d87yrQ3H8BY/gviz/tq?tqx=out:json&gid=1116443545";

    const res = await fetch(url, { cache: "no-store" });
    const text = await res.text();

    const json = JSON.parse(text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1));

    const rows = json.table.rows;

    const meta = {};
    rows.forEach((row) => {
      const key = row.c[0]?.v || "";
      const val = row.c[1]?.v || "";
      if (key && val) meta[key] = val;
    });

    return meta;
  } catch (err) {
    console.error("Metadata fetch error:", err);
    return {
      title: "Default Title",
      description: "Default description",
      og_image: "",
      keywords: "",
      favicon: ""
    };
  }
}
