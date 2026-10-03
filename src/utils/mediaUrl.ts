import { IMAGE_BASE } from "../constants/Constant";

const CMS_HOST = "vintagecms.cloud";

/** Fix legacy CMS URLs that omit the /api/api prefix. */
function normalizeCmsHostUrl(url: string): string {
  if (!url.includes(CMS_HOST)) return url;

  const uploadsMatch = url.match(/vintagecms\.cloud(\/uploads\/[^?#]+)/i);
  if (uploadsMatch) {
    const base = IMAGE_BASE.replace(/\/$/, "");
    return `${base}${uploadsMatch[1]}`;
  }

  const imagesMatch = url.match(/vintagecms\.cloud(\/images\/[^?#]+)/i);
  if (imagesMatch) {
    const base = IMAGE_BASE.replace(/\/$/, "");
    return `${base}${imagesMatch[1]}`;
  }

  return url;
}

/** Pull a path or URL string out of nested CMS upload objects. */
export function extractImageSource(value: unknown): string | null {
  if (value == null) return null;

  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed || null;
  }

  if (Array.isArray(value)) {
    for (const entry of value) {
      const found = extractImageSource(entry);
      if (found) return found;
    }
    return null;
  }

  if (typeof value === "object") {
    const obj = value as Record<string, unknown>;
    const directKeys = [
      "url",
      "uri",
      "path",
      "imagePath",
      "imageUrl",
      "filename",
      "file",
      "src",
      "location",
      "secure_url",
      "image",
      "thumbnail",
      "photo",
    ];

    for (const key of directKeys) {
      const found = extractImageSource(obj[key]);
      if (found) return found;
    }
  }

  return null;
}

/** Resolve CMS image/file paths the same way ProfileScreen does. */
export function resolveAssetUrl(url?: unknown): string | null {
  const extracted = extractImageSource(url);
  if (!extracted) return null;

  const trimmed = extracted.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith("file") || trimmed.startsWith("content") || trimmed.startsWith("data:")) {
    return trimmed;
  }

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return normalizeCmsHostUrl(trimmed);
  }

  if (trimmed.startsWith("//")) {
    return normalizeCmsHostUrl(`https:${trimmed}`);
  }

  const base = IMAGE_BASE.replace(/\/$/, "");

  if (!trimmed.includes("/")) {
    return `${base}/uploads/${trimmed}`;
  }

  const cleanPath = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return `${base}${cleanPath}`;
}

/** Banner/category videos use the same /uploads paths as images. */
export function resolveVideoUrl(path?: string | null): string | null {
  return resolveAssetUrl(path);
}
