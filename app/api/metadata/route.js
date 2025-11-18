import { NextResponse } from "next/server";

const SHEET_SETTINGS_URL =
  "https://docs.google.com/spreadsheets/d/1p2cGXEEdCoEG9hCBKEhxcQVCuiAhX9T5d87yrQ3H8BY/gviz/tq?tqx=out:csv&gid=1116443545";

export async function GET() {
  try {
    const res = await fetch(SHEET_SETTINGS_URL, { cache: "no-store" });
    const text = await res.text();

    const lines = text.split("\n").map((l) => l.trim());
    const obj = {};

    for (const line of lines) {
      const [key, value] = line.split(",");
      if (key && value) obj[key] = value;
    }

    return NextResponse.json(obj);
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to load Google Sheet settings", details: e.message },
      { status: 500 }
    );
  }
}
