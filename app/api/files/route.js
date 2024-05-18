import { promises as fs } from "node:fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const filename = searchParams.get("filename");
  // console.log(filename);

  if (!filename) {
    return NextResponse.json(
      { error: "Filename is required" },
      { status: 400 }
    );
  }

  try {
    const filePath = path.join(process.cwd(), "files", filename);
    // console.log("Attempting to read file:", filePath);

    const fileContents = await fs.readFile(filePath, "utf8");
    // console.log("File contents read successfully.");

    return NextResponse.json({ content: fileContents });
  } catch (error) {
    console.error("Error reading file:", error);
    if (error.code === "ENOENT") {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    } else {
      return NextResponse.json(
        { error: "Failed to read file" },
        { status: 500 }
      );
    }
  }
}
