import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));
export default defineConfig({
  base: (() => {
    const raw = process.env.VITE_BASE_URL;
    const rawTrimmed = raw?.trim();

    if (!rawTrimmed) return "/";

    return rawTrimmed;
  })()
});
