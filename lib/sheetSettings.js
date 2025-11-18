export async function getSiteSettings() {
  const CSV_URL =
    "https://docs.google.com/spreadsheets/d/1p2cGXEEdCoEG9hCBKEhxcQVCuiAhX9T5d87yrQ3H8BY/gviz/tq?tqx=out:csv&gid=1116443545";

  try {
    const res = await fetch(CSV_URL, { cache: "no-store" });
    const text = await res.text();

    // --- Robust CSV parser (supports quotes + commas) ---
    const rows = [];
    let current = "";
    let insideQuotes = false;
    let row = [];

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      if (char === '"') {
        insideQuotes = !insideQuotes;
        continue;
      }

      if (char === "," && !insideQuotes) {
        row.push(current.trim());
        current = "";
      } else if (char === "\n" && !insideQuotes) {
        row.push(current.trim());
        rows.push(row);
        row = [];
        current = "";
      } else {
        current += char;
      }
    }

    // push last row if needed
    if (current.length > 0 || row.length > 0) {
      row.push(current.trim());
      rows.push(row);
    }

    // --- Convert key/value rows into object ---
    const settings = {};
    rows.forEach((r) => {
      if (r.length >= 2) {
        const key = r[0]?.trim();
        const value = r[1]?.trim();
        if (key) settings[key] = value;
      }
    });

    return {
      title: settings.title || "Mullana Brand",
      description:
        settings.description ||
        "A new Apple-style swipe shopping experience.",
      keywords: settings.keywords || "fashion, luxury, shop",
      og_image:
        settings.og_image ||
        "https://corporate.stankeviciusgroup.com/assets/swipe/mbb.png",
      favicon:
        settings.favicon ||
        "https://corporate.stankeviciusgroup.com/assets/swipe/mbb.png",
    };
  } catch (e) {
    console.error("Failed to load Sheet settings", e);

    // Fallback defaults
    return {
      title: "Mullana Brand",
      description: "Swipe to shop.",
      keywords: "fashion, luxury, shop",
      og_image:
        "https://corporate.stankeviciusgroup.com/assets/swipe/mbb.png",
      favicon:
        "https://corporate.stankeviciusgroup.com/assets/swipe/mbb.png",
    };
  }
}
