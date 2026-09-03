import http from "node:http";
import { createReadStream } from "node:fs";
import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = __dirname;
const publicDir = path.join(rootDir, "public");
const port = Number(process.env.PORT ?? 3000);

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".woff2", "font/woff2"],
]);

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function resolveRequestPath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const candidates = [];

  if (cleanPath === "/") {
    candidates.push(path.join(rootDir, "index.html"));
  } else {
    candidates.push(path.join(rootDir, cleanPath));
    candidates.push(path.join(publicDir, cleanPath));

    if (!path.extname(cleanPath)) {
      candidates.push(path.join(rootDir, "index.html"));
    }
  }

  for (const candidate of candidates) {
    const resolved = path.resolve(candidate);

    if (resolved.startsWith(rootDir) && (await fileExists(resolved))) {
      return resolved;
    }
  }

  return null;
}

const server = http.createServer(async (req, res) => {
  if (!req.url) {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bad request");
    return;
  }

  const filePath = await resolveRequestPath(req.url);

  if (!filePath) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const extension = path.extname(filePath);
  const contentType = mimeTypes.get(extension) ?? "application/octet-stream";

  res.writeHead(200, { "Content-Type": contentType });
  createReadStream(filePath).pipe(res);
});

server.listen(port, () => {
  console.log(`Vanilla starter running at http://localhost:${port}`);
});
