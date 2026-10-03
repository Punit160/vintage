import React, { useEffect, useMemo, useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import CategoryIcon from "../components/CategoryIcon";
import {
  NormalizedCategory,
  NormalizedSubcategory,
  fetchCategoryDetail,
} from "../utils/categoryContent";

const InsightBlock = ({
  sub,
  accent,
  index,
  icon,
}: {
  sub: NormalizedSubcategory;
  accent: string;
  index: number;
  icon?: string;
}) => (
  <View style={styles.card}>
    {sub.image ? (
      <View style={styles.imageWrap}>
        <Image source={{ uri: sub.image }} style={styles.cardImage} resizeMode="cover" />
        <View style={styles.imageOverlay} />
        <View style={[styles.indexBadge, { backgroundColor: accent }]}>
          <Text style={styles.indexBadgeText}>{String(index + 1).padStart(2, "0")}</Text>
        </View>
      </View>
    ) : (
      <View style={[styles.iconBanner, { backgroundColor: `${accent}12` }]}>
        <View style={[styles.iconCircle, { backgroundColor: `${accent}22` }]}>
          <CategoryIcon title={sub.title} icon={icon} size={22} color={accent} allowImage={false} />
        </View>
      </View>
    )}

    <View style={styles.cardBody}>
      <Text style={styles.cardTitle}>{sub.title}</Text>
      {sub.shortDescription ? <Text style={styles.cardLead}>{sub.shortDescription}</Text> : null}

      {sub.detailedContent.length > 0 && (
        <View style={styles.pointsWrap}>
          {sub.detailedContent.map((line, i) => (
            <View key={`${sub.id}-line-${i}`} style={styles.pointRow}>
              <View style={[styles.pointDot, { backgroundColor: accent }]} />
              <Text style={styles.pointText}>{line}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  </View>
);

const LoadingSkeleton = () => (
  <View style={styles.loadingWrap}>
    <ActivityIndicator size="large" color={Colors.medicalBlue} />
    <Text style={styles.loadingText}>Loading topic from your care library…</Text>
  </View>
);

export default function CategoryDetailScreen({ route }: { route: any }) {
  const navigation = useNavigation<any>();
  const categoryId = route?.params?.categoryId ?? route?.params?.item?._id ?? route?.params?.item?.id;
  const categoryTitle = route?.params?.item?.title ?? route?.params?.item?.name;
  const seedItem = route?.params?.item;

  const [category, setCategory] = useState<NormalizedCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const loadCategory = useCallback(async () => {
    try {
      setLoading(true);
      setLoadError(false);

      const detail = await fetchCategoryDetail(categoryId, categoryTitle, seedItem);
      if (detail) {
        setCategory(detail);
        return;
      }

      setCategory(null);
      setLoadError(true);
    } catch (error) {
      console.log("Category detail load error:", error);
      setCategory(null);
      setLoadError(true);
    } finally {
      setLoading(false);
    }
  }, [categoryId, categoryTitle, seedItem]);

  useEffect(() => {
    loadCategory();
  }, [loadCategory]);

  useEffect(() => {
    if (category?.title) {
      navigation.setOptions({ title: category.title });
    }
  }, [category?.title, navigation]);

  const accent = useMemo(() => {
    const raw = category?.color?.replace(/ff$/, "") || Colors.medicalBlue;
    return raw.startsWith("#") ? raw : Colors.medicalBlue;
  }, [category?.color]);

  if (loading) {
    return (
      <View style={styles.root}>
        <LoadingSkeleton />
      </View>
    );
  }

  if (!category) {
    return (
      <View style={styles.emptyRoot}>
        <Icon name="cloud-off-outline" size={40} color="#94A3B8" />
        <Text style={styles.emptyTitle}>
          {loadError ? "Could not load topic" : "Topic not found"}
        </Text>
        <Text style={styles.emptySubtitle}>
          {loadError
            ? "Check your connection and try again."
            : "Go back and select a health topic again."}
        </Text>
        {loadError && (
          <TouchableOpacity style={styles.retryButton} onPress={loadCategory}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  const { subcategories, detailedContent: overviewLines } = category;

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.hero}>
          <View style={[styles.heroIconWrap, { backgroundColor: Colors.medicalBlueLight }]}>
            <CategoryIcon
              title={category.title}
              icon={category.icon}
              size={26}
              color={accent}
              allowImage={false}
              preferVector
            />
          </View>
          <Text style={styles.heroTitle}>{category.title}</Text>
          {category.description ? (
            <Text style={styles.heroSubtitle}>{category.description}</Text>
          ) : null}
          <View style={styles.heroMetaRow}>
            <View style={styles.metaChip}>
              <Icon name="cloud-download-outline" size={12} color={Colors.medicalTeal} />
              <Text style={styles.metaChipText}>From care library</Text>
            </View>
            {subcategories.length > 0 && (
              <View style={styles.metaChip}>
                <Icon name="layers-outline" size={12} color={Colors.medicalTeal} />
                <Text style={styles.metaChipText}>{subcategories.length} topics</Text>
              </View>
            )}
          </View>
        </View>

        {overviewLines.length > 0 && (
          <View style={styles.overviewCard}>
            <Text style={styles.sectionLabel}>Overview</Text>
            {overviewLines.map((line, i) => (
              <View key={`overview-${i}`} style={styles.pointRow}>
                <View style={[styles.pointDot, { backgroundColor: accent }]} />
                <Text style={styles.pointText}>{line}</Text>
              </View>
            ))}
          </View>
        )}

        {subcategories.length > 0 && (
          <>
            <Text style={styles.sectionLabel}>What to know</Text>
            {subcategories.map((sub, index) => (
              <InsightBlock
                key={sub.id}
                sub={sub}
                accent={accent}
                index={index}
                icon={category.icon}
              />
            ))}
          </>
        )}

        {subcategories.length === 0 && overviewLines.length === 0 && (
          <View style={styles.emptyCard}>
            <Icon name="information-outline" size={28} color="#94A3B8" />
            <Text style={styles.emptyCardText}>
              No detailed content has been published for this topic yet.
            </Text>
          </View>
        )}

        <View style={styles.disclaimer}>
          <Icon name="information-outline" size={14} color="#94A3B8" />
          <Text style={styles.disclaimerText}>
            Content is provided for general education. For personalized guidance, message your clinician.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    paddingBottom: 32,
  },
  loadingWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 12,
  },
  loadingText: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
  },
  hero: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    alignItems: "center",
  },
  heroIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  heroEmoji: {
    fontSize: 28,
    lineHeight: 32,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#0F172A",
    textAlign: "center",
    letterSpacing: -0.3,
  },
  heroSubtitle: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 21,
    marginTop: 8,
    paddingHorizontal: 8,
  },
  heroMetaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginTop: 14,
  },
  metaChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: Colors.medicalTealLight,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  metaChipText: {
    fontSize: 11,
    fontWeight: "500",
    color: Colors.medicalTeal,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#94A3B8",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginTop: 20,
    marginBottom: 12,
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#0B4365",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  imageWrap: {
    height: 160,
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(11, 67, 101, 0.12)",
  },
  indexBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  indexBadgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  iconBanner: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 6,
  },
  cardLead: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
    marginBottom: 10,
  },
  pointsWrap: {
    marginTop: 4,
    gap: 8,
  },
  pointRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 7,
  },
  pointText: {
    flex: 1,
    fontSize: 13,
    color: "#64748B",
    lineHeight: 19,
  },
  overviewCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    gap: 8,
  },
  emptyRoot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8FAFC",
    padding: 24,
    gap: 8,
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#0F172A",
    marginTop: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
  },
  retryButton: {
    marginTop: 12,
    backgroundColor: Colors.medicalBlue,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  retryButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
  emptyCard: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    gap: 10,
  },
  emptyCardText: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 20,
  },
  disclaimer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    marginHorizontal: 16,
    marginTop: 8,
    padding: 14,
    backgroundColor: "#F1F5F9",
    borderRadius: 12,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 12,
    color: "#64748B",
    lineHeight: 17,
  },
});
