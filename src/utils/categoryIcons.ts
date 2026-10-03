import { resolveAssetUrl } from "./mediaUrl";

export type ResolvedCategoryIcon = {
  emoji?: string;
  iconUrl?: string;
  iconName: string;
};

const FALLBACK_ICON = "help-circle-outline";

const TITLE_ICON_MAP: Record<string, string> = {
  "GLP-1": "needle",
  Hormones: "dna",
  Fitness: "dumbbell",
  Exercise: "dumbbell",
  GYM: "weight-lifter",
  Supplements: "pill",
  Sleep: "sleep",
  Mindfulness: "brain",
  Stress: "brain",
  Diet: "food-apple",
  Hydration: "cup-water",
  Nutrition: "food-croissant",
  Wellness: "heart-pulse",
  Meditation: "meditation",
  Yoga: "yoga",
  Cardio: "heart-outline",
  Sukoon: "emoticon-happy-outline",
  Game: "gamepad-variant",
};

/** Icons saved from CMS Categories form (react-icons/md names — not valid in MaterialCommunityIcons). */
const CMS_MD_ICON_MAP: Record<string, string> = {
  MdFavorite: "heart-pulse",
  MdFitnessCenter: "dumbbell",
  MdSpa: "flower-outline",
  MdLocalDining: "food-apple",
  MdSelfImprovement: "meditation",
  MdLocalHospital: "hospital-building",
  MdPsychology: "brain",
};

const EMOJI_TO_MCI: Record<string, string> = {
  "💊": "pill",
  "🥗": "food-apple",
  "🥦": "food-apple",
  "💪": "dumbbell",
  "🧬": "dna",
  "🧠": "brain",
  "😴": "sleep",
  "💧": "cup-water",
  "🏃": "run",
  "❤️": "heart-pulse",
  "🍎": "food-apple",
};

const FALLBACK_ICONS = [
  "star",
  "leaf",
  "lightbulb-on-outline",
  "run",
  "meditation",
  "umbrella",
  "account-heart",
  "dumbbell",
  "food-apple",
  "heart-pulse",
  "sleep",
  "cup-water",
];

const looksLikeImagePath = (value: string): boolean =>
  /^(https?:)?\/\//i.test(value) ||
  value.startsWith("/") ||
  value.includes("/uploads/") ||
  value.includes("/images/") ||
  /\.(png|jpe?g|gif|webp|svg)$/i.test(value);

export const isEmojiIcon = (value?: string | null): boolean =>
  Boolean(value && /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu.test(value));

export const getIconForTitle = (title?: string): string => {
  const trimmedTitle = title?.trim();
  if (trimmedTitle && TITLE_ICON_MAP[trimmedTitle]) {
    return TITLE_ICON_MAP[trimmedTitle];
  }

  if (trimmedTitle) {
    const index =
      trimmedTitle.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      FALLBACK_ICONS.length;
    return FALLBACK_ICONS[index];
  }

  return FALLBACK_ICON;
};

const isCmsMaterialIconName = (value: string): boolean =>
  /^Md[A-Z]/.test(value) || /^Fi[A-Z]/.test(value) || /^Io[A-Z]/.test(value);

/** Grid uses vector icons (like the original design), not emoji. */
export const resolveGridIconName = (title?: string, rawIcon?: string | null): string => {
  const trimmed = rawIcon?.trim();
  if (trimmed) {
    if (isEmojiIcon(trimmed)) {
      return EMOJI_TO_MCI[trimmed] ?? getIconForTitle(title);
    }
    if (looksLikeImagePath(trimmed)) {
      return getIconForTitle(title);
    }
    if (CMS_MD_ICON_MAP[trimmed]) {
      return CMS_MD_ICON_MAP[trimmed];
    }
    if (isCmsMaterialIconName(trimmed)) {
      return getIconForTitle(title);
    }
    return trimmed;
  }
  return getIconForTitle(title);
};

/** Detail/hero views can still show CMS emoji when provided. */
export const resolveCategoryIcon = (
  title?: string,
  rawIcon?: string | null,
  options?: { allowImage?: boolean; preferVector?: boolean }
): ResolvedCategoryIcon => {
  const allowImage = options?.allowImage ?? true;
  const preferVector = options?.preferVector ?? false;
  const trimmed = rawIcon?.trim();

  if (preferVector || !trimmed) {
    return { iconName: resolveGridIconName(title, rawIcon) };
  }

  if (isEmojiIcon(trimmed)) {
    return { emoji: trimmed, iconName: resolveGridIconName(title, rawIcon) };
  }

  if (allowImage && looksLikeImagePath(trimmed)) {
    const iconUrl = resolveAssetUrl(trimmed) ?? undefined;
    if (iconUrl) {
      return { iconUrl, iconName: resolveGridIconName(title, rawIcon) };
    }
  }

  return { iconName: resolveGridIconName(title, rawIcon) };
};
