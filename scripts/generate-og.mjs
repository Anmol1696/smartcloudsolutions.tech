// Generates public/og.png (1200x630) from an inline SVG.
// Re-run after wordmark or tagline changes: npm run generate:og

import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "og.png");
const svgPath = join(__dirname, "..", "public", "og.svg");

// Approximations of brand.md OKLCH tokens in hex (sRGB).
const BG = "#fbfcff";
const SURFACE = "#f3f5f9";
const FG = "#20242c";
const MUTED = "#626b7a";
const SUBTLE = "#8791a0";
const BORDER = "#d9dee7";
const ACCENT = "#2f75d6";
const ACCENT_SOFT = "#e8f1ff";

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <style>
      .sans  { font-family: -apple-system, "Helvetica Neue", "Inter", system-ui, Arial, sans-serif; }
      .mono  { font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; }
    </style>
  </defs>

  <rect width="1200" height="630" fill="${BG}"/>

  <g transform="translate(72, 78)">
    <circle cx="10" cy="10" r="7" fill="${ACCENT}"/>
    <circle cx="10" cy="10" r="16" fill="none" stroke="${ACCENT_SOFT}" stroke-width="8"/>
    <text class="sans" font-size="24" font-weight="700" fill="${FG}" x="36" y="19">SmartCloud</text>
  </g>

  <text class="sans" font-size="66" font-weight="700" fill="${FG}" x="72" y="210">Senior engineers for</text>
  <text class="sans" font-size="66" font-weight="700" fill="${FG}" x="72" y="286">agent systems and</text>
  <text class="sans" font-size="66" font-weight="700" fill="${FG}" x="72" y="362">infra platforms.</text>

  <text class="sans" font-size="23" fill="${MUTED}" x="72" y="430">Production artifacts across Starship, KubernetesJS, schema-sdk, SSV tooling, and Constructive.</text>

  <g transform="translate(72, 494)">
    <rect width="1056" height="72" rx="16" fill="${SURFACE}" stroke="${BORDER}"/>
    <text class="mono" font-size="18" font-weight="700" fill="${FG}" x="28" y="45">2.1k+ commits</text>
    <text class="mono" font-size="18" font-weight="700" fill="${FG}" x="310" y="45">4 ecosystems</text>
    <text class="mono" font-size="18" font-weight="700" fill="${FG}" x="570" y="45">10+ years on call</text>
    <text class="sans" font-size="18" font-weight="700" fill="${ACCENT}" x="902" y="45">smartcloudsolutions.tech</text>
  </g>
</svg>`;

writeFileSync(svgPath, svg);

await sharp(Buffer.from(svg))
  .resize(1200, 630)
  .png({ quality: 92, compressionLevel: 9 })
  .toFile(outPath);

console.log("✓ public/og.png");
console.log("✓ public/og.svg");
