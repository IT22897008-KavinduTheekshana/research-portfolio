import path from "path";
import fs from "fs";

export async function GET(request, { params }) {
  // Decode the filename in case it was URL-encoded
  const filename = decodeURIComponent(params.filename);
  const filePath = path.join(process.cwd(), "public", "documents", filename);

  if (!fs.existsSync(filePath)) {
    return new Response(`File not found: ${filename}`, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);
  const ext = path.extname(filename).toLowerCase();

  const contentType = ext === ".pdf" ? "application/pdf" : "application/octet-stream";

  // RFC 5987 encoding ensures browser uses the correct filename
  const encodedFilename = encodeURIComponent(filename).replace(/'/g, "%27");

  return new Response(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodedFilename}`,
      "Content-Length": fileBuffer.length.toString(),
      "Cache-Control": "no-store",
    },
  });
}
