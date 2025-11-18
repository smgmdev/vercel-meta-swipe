import { NextResponse } from "next/server";

const SHEET_SETTINGS_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQO_tXscW1wdQQkTWI8kqVcPA0AFMtSxH6CulBtDyPisTkF8f25XzZqrQ1TFF49lMzCj8b-gtZrtk49/pub?gid=1116443545&single=true&output=csv";

export async function GET() {
  try {
    const res = await fetch(SHEET_SETTINGS_URL, { cache: "no-store" });
    const csv = await res.text();

    const lines = csv.split("\n").map((l) => l.trim());
    const data = {};

    // skip header: key,value
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;

      const [key, ...rest] = line.split(",");
      const value = rest.join(",").trim();

      if (key && value) {
        data[key.trim()] = value;
      }
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to load Google Sheet settings", details: err.message },
      { status: 500 }
    );
  }
}
