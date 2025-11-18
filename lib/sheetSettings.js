export async function fetchSheetSettings() {
  const SETTINGS_URL =
    "https://docs.google.com/spreadsheets/d/1p2cGXEEdCoEG9hCBKEhxcQVCuiAhX9T5d87yrQ3H8BY/gviz/tq?tqx=out:csv&gid=1116443545";

  const res = await fetch(SETTINGS_URL, { cache: "no-store" });
  const text = await res.text();

  const cleaned = text.replace(/\r/g, "");
  const lines = cleaned.split("\n").filter(Boolean);
  if (!lines.length) return {};

  const firstRow = lines[0]
    .split(",")
    .map((s) => s.replace(/^\"(.*)\"$/, "$1").trim());

  // CASE 1: Sheet uses "key,value" rows
  if (firstRow[0].toLowerCase() === "key") {
    const map = {};
    for (let i = 1; i < lines.length; i++) {
      const [k, v] = lines[i].split(/,(.+)/); // split on first comma
      if (!k) continue;
      const key = k.replace(/^\"(.*)\"$/, "$1").trim().toLowerCase();
      const val = (v || "").replace(/^\"(.*)\"$/, "$1").trim();
      map[key] = val;
    }
    return map;
  }

  // CASE 2: Sheet uses headers on row 1 and values on row 2
  const headers = firstRow.map((h) => h.toLowerCase());
  const values = (lines[1] || "")
    .split(",")
    .map((s) => s.replace(/^\"(.*)\"$/, "$1").trim());

  const map = {};
  headers.forEach((h, i) => {
    map[h] = values[i] || "";
  });

  return map;
}
