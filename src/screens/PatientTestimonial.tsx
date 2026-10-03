import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 32;
const CARD_SPACING = 12;

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  initials: string;
  context: string;
  rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Jennifer and her team are outstanding. Her knowledge saved me in so many ways. I would not have accomplished my health and weight goals without her. She has become part of my family.",
    name: "S.B.",
    initials: "SB",
    context: "Weight & wellness care",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "I was feeling like a big, swollen mess. Jennifer is kind, empathetic, and takes the time to explore different solutions. For the first time in a long time, I feel like I'm on the right track.",
    name: "J.S.",
    initials: "JS",
    context: "Hormone & lifestyle support",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "I'm always traveling for work. My online consultation was amazing — warm, kind, and quite frankly, brilliant. I'm so thankful for this experience.",
    name: "T.M.",
    initials: "TM",
    context: "Virtual consultation",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Hands down, one of the best clinicians I've worked with. I truly enjoy the one-on-one compassion she delivers, whether face-to-face or virtually. She goes above and beyond to help everyone reach their goals.",
    name: "S.K.",
    initials: "SK",
    context: "Long-term patient",
    rating: 5,
  },
];

const SectionHeader = () => (
  <View style={styles.sectionHeader}>
    <View style={styles.sectionIconWrap}>
      <Icon name="account-heart" size={20} color={Colors.medicalBlue} />
    </View>
    <View style={styles.sectionTextWrap}>
      <Text style={styles.sectionTitle}>Patient Stories</Text>
      <Text style={styles.sectionSubtitle}>Trusted by families nationwide</Text>
    </View>
  </View>
);

const StarRow = ({ rating }: { rating: number }) => (
  <View style={styles.starRow}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Icon
        key={star}
        name={star <= rating ? "star" : "star-outline"}
        size={14}
        color="#F59E0B"
      />
    ))}
  </View>
);

const StoryCard = ({ item }: { item: Testimonial }) => (
  <View style={styles.card}>
    <View style={styles.cardTopRow}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.initials}</Text>
      </View>
      <View style={styles.metaWrap}>
        <Text style={styles.patientName}>{item.name}</Text>
        <Text style={styles.patientContext}>{item.context}</Text>
      </View>
      <View style={styles.verifiedChip}>
        <Icon name="check-decagram" size={11} color={Colors.medicalTeal} />
        <Text style={styles.verifiedText}>Verified</Text>
      </View>
    </View>

    <StarRow rating={item.rating} />

    <Text style={styles.quoteText}>{item.quote}</Text>
  </View>
);

const PatientTestimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<FlatList<Testimonial>>(null);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (CARD_WIDTH + CARD_SPACING));
    if (index !== activeIndex && index >= 0 && index < TESTIMONIALS.length) {
      setActiveIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <SectionHeader />

      <FlatList
        ref={listRef}
        data={TESTIMONIALS}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled={false}
        snapToInterval={CARD_WIDTH + CARD_SPACING}
        snapToAlignment="start"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled
        contentContainerStyle={styles.listContent}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => <StoryCard item={item} />}
      />

      <View style={styles.dotsRow}>
        {TESTIMONIALS.map((item, index) => (
          <View
            key={item.id}
            style={[styles.dot, index === activeIndex && styles.dotActive]}
          />
        ))}
      </View>

      <View style={styles.trustRow}>
        <Icon name="shield-check-outline" size={14} color="#94A3B8" />
        <Text style={styles.trustText}>Shared with patient permission · HIPAA compliant care</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8FAFC",
    paddingTop: 8,
    paddingBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal: 16,
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
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 4,
  },
  card: {
    width: CARD_WIDTH,
    marginRight: CARD_SPACING,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderLeftWidth: 3,
    borderLeftColor: Colors.medicalTeal,
    shadowColor: "#0B4365",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  cardTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.medicalBlueLight,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 13,
    fontWeight: "700",
    color: Colors.medicalBlue,
    letterSpacing: 0.5,
  },
  metaWrap: {
    flex: 1,
  },
  patientName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
  },
  patientContext: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 1,
  },
  verifiedChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: Colors.medicalTealLight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  verifiedText: {
    fontSize: 10,
    fontWeight: "600",
    color: Colors.medicalTeal,
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  starRow: {
    flexDirection: "row",
    gap: 2,
    marginBottom: 12,
  },
  quoteText: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 22,
  },
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 14,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#CBD5E1",
  },
  dotActive: {
    width: 18,
    backgroundColor: Colors.medicalBlue,
  },
  trustRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 12,
    marginHorizontal: 24,
  },
  trustText: {
    flex: 1,
    fontSize: 11,
    color: "#94A3B8",
    lineHeight: 15,
    textAlign: "center",
  },
});

export default PatientTestimonial;
