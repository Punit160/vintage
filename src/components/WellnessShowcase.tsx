import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import API from "../utils/apiClient";
import Colors from "../constants/Colors";
import CategoryIcon from "./CategoryIcon";
import { resolveAssetUrl } from "../utils/mediaUrl";

const ACCENTS = [Colors.medicalBlue, Colors.medicalTeal, "#0369A1", "#0E7490"];

const InsightCard = ({
  image,
  imagePath,
  imageUrl: imageUrlField,
  icon,
  title,
  subtitle,
  detail,
  color,
  index = 0,
}: {
  image?: string;
  imagePath?: string;
  imageUrl?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
  detail?: string;
  color?: string;
  index?: number;
}) => {
  const accent = color?.startsWith("#") ? color : ACCENTS[index % ACCENTS.length];
  const resolvedImage =
    resolveAssetUrl(image) ??
    resolveAssetUrl(imagePath) ??
    resolveAssetUrl(imageUrlField);
  const hasImage = Boolean(resolvedImage);

  return (
    <View style={styles.card}>
      {hasImage ? (
        <View style={styles.imageWrap}>
          <Image source={{ uri: resolvedImage! }} style={styles.headerImage} resizeMode="cover" />
          <View style={styles.imageGradient} />
          <View style={[styles.topicChip, { backgroundColor: accent }]}>
            <Text style={styles.topicChipText}>Clinical note</Text>
          </View>
        </View>
      ) : (
        <View style={[styles.iconBanner, { backgroundColor: `${accent}12` }]}>
          <View style={[styles.iconCircle, { backgroundColor: `${accent}20` }]}>
            <CategoryIcon title={title} icon={icon} size={22} color={accent} allowImage={false} />
          </View>
          <View style={[styles.topicChipInline, { borderColor: `${accent}40` }]}>
            <Text style={[styles.topicChipInlineText, { color: accent }]}>Clinical note</Text>
          </View>
        </View>
      )}

      <View style={styles.cardBody}>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {title || "Insight"}
        </Text>
        {subtitle ? (
          <Text style={styles.cardLead} numberOfLines={2}>
            {subtitle}
          </Text>
        ) : null}
        {detail ? (
          <Text style={styles.cardDetail} numberOfLines={3}>
            {detail}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

const SkeletonCard = () => {
  const fadeAnim = useRef(new Animated.Value(0.35)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 0.35, duration: 700, useNativeDriver: true }),
      ])
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.card, styles.skeletonCard, { opacity: fadeAnim }]}>
      <View style={styles.skeletonBanner} />
      <View style={styles.cardBody}>
        <View style={[styles.skeletonLine, { width: "55%", height: 14 }]} />
        <View style={[styles.skeletonLine, { width: "85%", marginTop: 10 }]} />
        <View style={[styles.skeletonLine, { width: "70%", marginTop: 8 }]} />
      </View>
    </Animated.View>
  );
};

const SectionHeader = () => (
  <View style={styles.sectionHeader}>
    <View style={styles.sectionIconWrap}>
      <Icon name="clipboard-pulse" size={20} color={Colors.medicalBlue} />
    </View>
    <View style={styles.sectionTextWrap}>
      <Text style={styles.sectionTitle}>Clinical Insights</Text>
      <Text style={styles.sectionSubtitle}>Evidence-based guidance from your care team</Text>
    </View>
  </View>
);

export default function WellnessDashboard({
  items,
  skipFetch = false,
}: {
  items?: any[];
  skipFetch?: boolean;
}) {
  const [wellnessData, setWellnessData] = useState<any[]>(items ?? []);
  const [loading, setLoading] = useState(!skipFetch && !items?.length);

  const fetchWellnessData = async () => {
    try {
      setLoading(true);
      const res = await API.get("/wellness");
      setWellnessData(Array.isArray(res.data?.data) ? res.data.data : []);
    } catch (err: any) {
      console.error("Error fetching wellness data:", err?.message);
      setWellnessData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (items?.length) {
      setWellnessData(items);
      setLoading(false);
    }
  }, [items]);

  useEffect(() => {
    if (skipFetch) return;
    fetchWellnessData();
  }, [skipFetch]);

  if (!loading && wellnessData.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionIconWrap, { backgroundColor: "#E2E8F0" }]} />
            <View style={styles.sectionTextWrap}>
              <View style={[styles.skeletonLine, { width: 140, height: 16 }]} />
              <View style={[styles.skeletonLine, { width: 220, height: 12, marginTop: 8 }]} />
            </View>
          </View>
          {[0, 1, 2].map((i) => (
            <SkeletonCard key={`sk-${i}`} />
          ))}
        </>
      ) : (
        <>
          <SectionHeader />
          {wellnessData.map((item, index) => (
            <InsightCard
              key={item._id ?? item.id ?? index}
              {...item}
              index={index}
            />
          ))}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: "#F8FAFC",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 12,
  },
  sectionIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: Colors.medicalBlueLight,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTextWrap: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0F172A",
    letterSpacing: -0.2,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 2,
    lineHeight: 18,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#0B4365",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  imageWrap: {
    height: 128,
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  imageGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(11, 67, 101, 0.18)",
  },
  topicChip: {
    position: "absolute",
    top: 12,
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  topicChipText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#FFFFFF",
    letterSpacing: 0.3,
    textTransform: "uppercase",
  },
  iconBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  topicChipInline: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
  },
  topicChipInlineText: {
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 0.3,
    textTransform: "uppercase",
  },
  cardBody: {
    padding: 16,
    paddingTop: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
    lineHeight: 22,
    marginBottom: 6,
  },
  cardLead: {
    fontSize: 14,
    fontWeight: "500",
    color: "#334155",
    lineHeight: 20,
    marginBottom: 6,
  },
  cardDetail: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 19,
  },
  skeletonCard: {
    overflow: "hidden",
  },
  skeletonBanner: {
    height: 100,
    backgroundColor: "#E2E8F0",
  },
  skeletonLine: {
    borderRadius: 6,
    backgroundColor: "#E2E8F0",
  },
});
