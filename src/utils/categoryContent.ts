import axios from "axios";
import { API_BASE } from "../constants/Constant";
import API from "./apiClient";
import { resolveAssetUrl } from "./mediaUrl";

export type NormalizedSubcategory = {
  id: string;
  title: string;
  image?: string;
  shortDescription?: string;
  detailedContent: string[];
};

export type NormalizedCategory = {
  id: string;
  title: string;
  description?: string;
  image?: string;
  icon?: string;
  color?: string;
  detailedContent: string[];
  subcategories: NormalizedSubcategory[];
};

export const resolveMediaUri = resolveAssetUrl;

export const normalizeContentLines = (content: unknown): string[] => {
  if (!content) return [];
  if (Array.isArray(content)) {
    return content
      .map((entry) => {
        if (typeof entry === "string") return entry.trim();
        if (entry && typeof entry === "object" && "text" in entry) {
          return String((entry as { text?: string }).text ?? "").trim();
        }
        return String(entry ?? "").trim();
      })
      .filter(Boolean);
  }
  if (typeof content === "string") {
    const trimmed = content.trim();
    if (!trimmed) return [];
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) return normalizeContentLines(parsed);
    } catch {
      // plain text / markdown-ish content from CMS
    }
    return trimmed
      .split(/\n+/)
      .map((line) => line.replace(/^[-*•]\s*/, "").trim())
      .filter(Boolean);
  }
  return [];
};

const pickSubcategoryList = (raw: Record<string, unknown>): unknown[] => {
  const candidates = [
    raw.subcategories,
    raw.subCategories,
    raw.sub_categories,
    raw.children,
    raw.topics,
    raw.items,
  ];
  for (const candidate of candidates) {
    if (Array.isArray(candidate) && candidate.length > 0) {
      return candidate.filter((entry) => entry && typeof entry === "object");
    }
  }
  return [];
};

const pickImageField = (raw: Record<string, unknown>): string | null => {
  const value =
    raw.image ??
    raw.imagePath ??
    raw.imageUrl ??
    raw.img ??
    raw.thumbnail ??
    raw.photo ??
    raw.coverImage ??
    raw.banner ??
    raw.media ??
    raw.file ??
    raw.picture;

  return resolveAssetUrl(value);
};

export const normalizeSubcategory = (raw: any, index: number): NormalizedSubcategory => {
  const content =
    raw?.detailedContent ??
    raw?.content ??
    raw?.details ??
    raw?.points ??
    raw?.bullets ??
    raw?.body;

  return {
    id: String(raw?._id ?? raw?.id ?? `sub-${index}`),
    title: String(raw?.title ?? raw?.name ?? `Topic ${index + 1}`),
    image: pickImageField(raw ?? {}) ?? undefined,
    shortDescription:
      raw?.shortDescription ??
      raw?.shortDesc ??
      raw?.summary ??
      raw?.subtitle ??
      raw?.description ??
      undefined,
    detailedContent: normalizeContentLines(content),
  };
};

export const normalizeCategory = (raw: any): NormalizedCategory => {
  if (!raw) {
    return {
      id: "",
      title: "Health Topic",
      detailedContent: [],
      subcategories: [],
    };
  }

  const subcategories = pickSubcategoryList(raw).map(normalizeSubcategory);
  const overview =
    raw?.detailedContent ??
    raw?.content ??
    raw?.details ??
    raw?.body ??
    raw?.overview ??
    raw?.detail;

  return {
    id: String(raw?._id ?? raw?.id ?? raw?.title ?? ""),
    title: String(raw?.title ?? raw?.name ?? "Health Topic"),
    description: raw?.description ?? raw?.summary ?? raw?.subtitle ?? undefined,
    image: pickImageField(raw) ?? undefined,
    icon: raw?.icon ?? undefined,
    color: raw?.color ?? undefined,
    detailedContent: normalizeContentLines(overview),
    subcategories,
  };
};

export const findCategoryInList = (list: any[], id?: string, title?: string) => {
  if (!Array.isArray(list)) return null;
  return (
    list.find((entry) => String(entry?._id ?? entry?.id ?? "") === String(id ?? "")) ??
    list.find((entry) => String(entry?.title ?? entry?.name ?? "") === String(title ?? "")) ??
    null
  );
};

const unwrapCategoryPayload = (payload: any) => {
  if (!payload) return null;
  if (payload.category) return payload.category;
  if (payload.item) return payload.item;
  if (Array.isArray(payload)) return payload[0] ?? null;
  return payload;
};

const fetchWellnessTopic = async (categoryId?: string, categoryTitle?: string) => {
  if (categoryId) {
    try {
      const byId = await axios.get(`${API_BASE}/wellness/${categoryId}`);
      if (byId.data?.success && byId.data?.data) return byId.data.data;
    } catch {
      // fall through
    }
  }

  try {
    const list = await axios.get(`${API_BASE}/wellness`);
    if (list.data?.success && Array.isArray(list.data?.data)) {
      return (
        list.data.data.find(
          (entry: any) => String(entry?._id ?? entry?.id ?? "") === String(categoryId ?? "")
        ) ??
        list.data.data.find(
          (entry: any) => String(entry?.title ?? "") === String(categoryTitle ?? "")
        ) ??
        null
      );
    }
  } catch {
    // ignore
  }

  return null;
};

export const mapWellnessToGridItem = (raw: any) => ({
  ...raw,
  _id: raw?._id ?? raw?.id,
  id: raw?._id ?? raw?.id,
  title: String(raw?.title ?? ""),
  description: raw?.subtitle ?? raw?.description,
  subtitle: raw?.subtitle ?? raw?.description,
  icon: raw?.icon,
  color: raw?.color,
  image: resolveAssetUrl(raw?.image) ?? undefined,
});

export const mapCategoryToGridItem = (raw: any) => ({
  ...raw,
  _id: raw?._id ?? raw?.id,
  id: raw?._id ?? raw?.id,
  title: String(raw?.title ?? raw?.name ?? ""),
  description: raw?.description ?? raw?.subtitle,
  subtitle: raw?.description ?? raw?.subtitle,
  icon: raw?.icon,
  color: raw?.color,
  image: resolveAssetUrl(raw?.image) ?? undefined,
  subcategories: raw?.subcategories,
});

const topicTitleKey = (title: string) => title.trim().toLowerCase();

/** Same topic, different CMS labels (Categories vs Daily Thought). */
const WELLNESS_TITLE_ALIASES: Record<string, string[]> = {
  fitness: ["exercise"],
  exercise: ["fitness"],
};

const findWellnessForCategory = (
  categoryTitle: string,
  wellnessByTitle: Map<string, any>
): any | undefined => {
  const key = topicTitleKey(categoryTitle);
  if (wellnessByTitle.has(key)) return wellnessByTitle.get(key);
  for (const alias of WELLNESS_TITLE_ALIASES[key] ?? []) {
    if (wellnessByTitle.has(alias)) return wellnessByTitle.get(alias);
  }
  return undefined;
};

/** CMS Categories list is source of truth; wellness only enriches matching titles (no extra rows). */
export const mergeCategoryAndWellnessLists = (categories: any[], wellness: any[]): any[] => {
  const wellnessByTitle = new Map<string, any>();
  for (const row of wellness) {
    if (row?.title) wellnessByTitle.set(topicTitleKey(String(row.title)), row);
  }

  return categories.map((raw) => {
    const categoryItem = mapCategoryToGridItem(raw);
    const wellnessMatch = findWellnessForCategory(categoryItem.title, wellnessByTitle);
    if (!wellnessMatch) return categoryItem;

    return {
      ...categoryItem,
      ...wellnessMatch,
      _id: categoryItem._id ?? wellnessMatch._id,
      id: categoryItem.id ?? wellnessMatch.id,
      subcategories: raw?.subcategories ?? categoryItem.subcategories,
      description: categoryItem.description ?? wellnessMatch.description,
      subtitle: categoryItem.subtitle ?? wellnessMatch.subtitle,
      icon: categoryItem.icon ?? wellnessMatch.icon,
      color: categoryItem.color ?? wellnessMatch.color,
    };
  });
};

const mergeWellnessRecords = (...records: Array<any | null | undefined>) => {
  const merged: Record<string, any> = {};
  for (const record of records) {
    if (!record || typeof record !== "object") continue;
    for (const [key, value] of Object.entries(record)) {
      if (value !== undefined && value !== null && value !== "") {
        merged[key] = value;
      }
    }
  }
  return Object.keys(merged).length > 0 ? merged : null;
};

export const fetchWellnessTopics = async (): Promise<any[]> => {
  try {
    const res = await axios.get(`${API_BASE}/wellness`);
    if (res.data?.success && Array.isArray(res.data.data)) {
      return res.data.data.map(mapWellnessToGridItem);
    }
  } catch (error) {
    console.log("Wellness topics fetch error:", error);
  }
  return [];
};

export const fetchCategoriesList = async (): Promise<any[]> => {
  try {
    const res = await API.get("/categories", { params: { populate: "subcategories" } });
    if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
      return res.data.data;
    }
  } catch {
    // Categories may require auth on this backend.
  }
  return [];
};

/**
 * Logged in: CMS Categories only (count matches admin), enriched from Wellness when titles match.
 * Logged out: public Wellness list only.
 */
export const fetchHealthTopics = async (): Promise<any[]> => {
  const [wellnessTopics, categoryRows] = await Promise.all([
    fetchWellnessTopics(),
    fetchCategoriesList(),
  ]);

  if (categoryRows.length > 0) {
    return mergeCategoryAndWellnessLists(categoryRows, wellnessTopics);
  }

  return wellnessTopics;
};

export const normalizeWellnessDetail = (wellness: any): NormalizedCategory => {
  const id = String(wellness?._id ?? wellness?.id ?? "");
  const title = String(wellness?.title ?? "Health Topic");
  const subtitle = wellness?.subtitle ?? wellness?.description ?? undefined;
  const detailLines = normalizeContentLines(
    wellness?.detail ??
      wellness?.detailedContent ??
      wellness?.content ??
      wellness?.body ??
      wellness?.overview
  );
  const image = resolveAssetUrl(wellness?.image) ?? undefined;

  const subcategories: NormalizedSubcategory[] = [];
  if (image) {
    subcategories.push({
      id: `${id}-visual`,
      title,
      image,
      shortDescription: subtitle,
      detailedContent: [],
    });
  } else if (subtitle || detailLines.length > 0) {
    subcategories.push({
      id: `${id}-content`,
      title,
      shortDescription: subtitle,
      detailedContent: detailLines,
    });
  }

  return {
    id,
    title,
    description: subtitle,
    image,
    icon: wellness?.icon ?? undefined,
    color: wellness?.color ?? undefined,
    detailedContent: detailLines,
    subcategories,
  };
};

/** Categories and wellness share topic ids; wellness carries hero images publicly. */
export const enrichCategoryWithWellness = (
  category: NormalizedCategory,
  wellness: any
): NormalizedCategory => {
  if (!wellness) return category;

  const wellnessImage = resolveAssetUrl(wellness.image) ?? undefined;
  const wellnessOverview = normalizeContentLines(
    wellness.detail ?? wellness.detailedContent ?? wellness.content ?? wellness.description
  );
  const wellnessDescription = wellness.subtitle ?? wellness.description ?? undefined;

  let subcategories = category.subcategories;
  if (subcategories.length > 0 && wellnessImage) {
    subcategories = subcategories.map((sub, index) =>
      sub.image ? sub : index === 0 ? { ...sub, image: wellnessImage } : sub
    );
  }

  return {
    ...category,
    image: category.image ?? wellnessImage,
    description: category.description ?? wellnessDescription,
    detailedContent:
      category.detailedContent.length > 0 ? category.detailedContent : wellnessOverview,
    icon: category.icon ?? wellness.icon,
    color: category.color ?? wellness.color,
    subcategories,
  };
};

const matchesTopicRef = (item: any, categoryId?: string, categoryTitle?: string) => {
  if (!item) return false;
  const itemId = String(item._id ?? item.id ?? "");
  const itemTitle = String(item.title ?? item.name ?? "");
  if (categoryId && itemId && itemId === String(categoryId)) return true;
  if (categoryTitle && itemTitle && itemTitle === String(categoryTitle)) return true;
  return false;
};

export const fetchCategoryDetail = async (
  categoryId?: string,
  categoryTitle?: string,
  seedItem?: any
) => {
  const fetchedWellness = await fetchWellnessTopic(categoryId, categoryTitle);
  const wellnessRaw = mergeWellnessRecords(
    matchesTopicRef(seedItem, categoryId, categoryTitle) ? seedItem : null,
    fetchedWellness
  );

  let categoryRaw: any = null;

  if (categoryId) {
    try {
      const byId = await API.get(`/categories/${categoryId}`, {
        params: { populate: "subcategories" },
      });
      if (byId.data?.success) {
        categoryRaw = unwrapCategoryPayload(byId.data.data);
      }
    } catch {
      // fall through to list lookup
    }
  }

  if (!categoryRaw) {
    try {
      const listRes = await API.get("/categories", { params: { populate: "subcategories" } });
      if (listRes.data?.success && Array.isArray(listRes.data?.data)) {
        categoryRaw = findCategoryInList(listRes.data.data, categoryId, categoryTitle);
      }
    } catch {
      // Categories may require auth on this backend.
    }
  }

  if (categoryRaw) {
    const normalized = normalizeCategory(categoryRaw);
    if (normalized.subcategories.length > 0) {
      return enrichCategoryWithWellness(normalized, wellnessRaw);
    }
    if (wellnessRaw) {
      return normalizeWellnessDetail(wellnessRaw);
    }
    return normalized.detailedContent.length > 0 ? normalized : null;
  }

  if (wellnessRaw) {
    return normalizeWellnessDetail(wellnessRaw);
  }

  return null;
};
