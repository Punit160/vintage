import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import ClinicianAvatar from '../components/ClinicianAvatar';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const PAD = 20;

const CREDENTIALS = [
  { label: 'Board certification', value: 'FNP-BC' },
  { label: 'Clinical experience', value: '28+ years' },
  { label: 'Military service', value: '15 years' },
];

const SECTIONS = [
  {
    title: 'Clinical background',
    text: 'Jennifer Mooneyham is a board-certified Family Nurse Practitioner (FNP-BC) with decades of diverse clinical experience spanning internal medicine, pediatrics, surgical care, emergency medicine, and critical care.',
  },
  {
    title: 'Military and critical care',
    text: 'Her career includes 15 years of service in the United States Armed Forces, where her experience included emergency medicine, deployment operations, and critical care air transport—experiences that helped shape the calm, practical, and individualized approach she brings to patient care today.',
  },
  {
    title: '4 The Family Healthcare',
    text: 'As the founder of 4 The Family Healthcare, Jennifer has spent years caring for patients through every stage of life. Her clinical focus has evolved to include women\u2019s health, menopause and perimenopause, men\u2019s health, hormone replacement and optimization, and overall wellness.',
  },
  {
    title: 'Patient-centered care at Vintage',
    text: 'Jennifer created Vintage to bring that experience directly to you. Her approach goes beyond treating a lab value or a single symptom. She looks at the whole person—your symptoms, history, lifestyle, goals, and laboratory findings—to help you better understand your health and your options.',
  },
];

const SPECIALTIES = [
  "Women's health",
  'Menopause and perimenopause',
  "Men's health",
  'Hormone replacement and optimization',
  'General wellness',
];

const ClinicianProfileScreen = () => (
  <ScrollView
    style={styles.root}
    contentContainerStyle={styles.content}
    showsVerticalScrollIndicator={false}
  >
    <View style={styles.providerCard}>
      <ClinicianAvatar size={108} borderWidth={3} borderColor={Colors.medicalBlueLight} />
      <Text style={styles.name}>Jennifer Mooneyham</Text>
      <Text style={styles.title}>Family Nurse Practitioner</Text>
      <Text style={styles.certification}>FNP-BC</Text>

      <View style={styles.divider} />

      <View style={styles.credentialsTable}>
        {CREDENTIALS.map((item) => (
          <View key={item.label} style={styles.credentialRow}>
            <Text style={styles.credentialLabel}>{item.label}</Text>
            <Text style={styles.credentialValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.complianceRow}>
        <View style={styles.complianceItem}>
          <Icon name="shield-check-outline" size={15} color={Colors.medicalBlue} />
          <Text style={styles.complianceText}>HIPAA compliant</Text>
        </View>
        <View style={styles.complianceItem}>
          <Icon name="video-outline" size={15} color={Colors.medicalBlue} />
          <Text style={styles.complianceText}>Secure telehealth</Text>
        </View>
      </View>
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionLabel}>Overview</Text>
      <Text style={styles.sectionHeading}>Who you&apos;ll be talking to</Text>
      <Text style={styles.bodyText}>
        Jennifer provides personalized clinical care through secure messaging and video
        visits. Her practice emphasizes clear communication, thoughtful evaluation, and
        collaborative decision-making at every step of your care.
      </Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionLabel}>Professional background</Text>
      {SECTIONS.map((block, index) => (
        <View
          key={block.title}
          style={[styles.proseBlock, index < SECTIONS.length - 1 && styles.proseBlockBorder]}
        >
          <Text style={styles.proseTitle}>{block.title}</Text>
          <Text style={styles.bodyText}>{block.text}</Text>
        </View>
      ))}
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionLabel}>Clinical focus</Text>
      <Text style={styles.sectionHeading}>Areas of practice</Text>
      {SPECIALTIES.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <View style={styles.bulletDot} />
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>

    <View style={styles.footerCard}>
      <Text style={styles.footerText}>
        Vintage is care rooted in experience, but centered on you.
      </Text>
      <Text style={styles.footerBrand}>Vintage</Text>
    </View>
  </ScrollView>
);

export default ClinicianProfileScreen;

const text = Platform.select({
  android: { includeFontPadding: false },
  default: {},
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingBottom: 36,
    width: SCREEN_WIDTH,
  },
  providerCard: {
    alignItems: 'center',
    paddingTop: 28,
    paddingBottom: 24,
    paddingHorizontal: PAD,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  name: {
    ...text,
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 16,
    lineHeight: 30,
    textAlign: 'center',
  },
  title: {
    ...text,
    fontSize: 15,
    fontWeight: '500',
    color: '#334155',
    marginTop: 4,
    lineHeight: 21,
    textAlign: 'center',
  },
  certification: {
    ...text,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.medicalBlue,
    marginTop: 2,
    lineHeight: 20,
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 20,
  },
  credentialsTable: {
    width: '100%',
    gap: 10,
  },
  credentialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  credentialLabel: {
    ...text,
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#64748B',
    lineHeight: 20,
    marginRight: 12,
  },
  credentialValue: {
    ...text,
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
    lineHeight: 20,
    textAlign: 'right',
  },
  complianceRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    marginTop: 18,
  },
  complianceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  complianceText: {
    ...text,
    fontSize: 13,
    fontWeight: '500',
    color: '#475569',
    lineHeight: 18,
  },
  section: {
    paddingHorizontal: PAD,
    paddingTop: 28,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  sectionLabel: {
    ...text,
    fontSize: 11,
    fontWeight: '600',
    color: Colors.medicalBlue,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    lineHeight: 14,
    marginBottom: 6,
  },
  sectionHeading: {
    ...text,
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
    lineHeight: 24,
    marginBottom: 12,
  },
  bodyText: {
    ...text,
    fontSize: 15,
    fontWeight: '400',
    color: '#475569',
    lineHeight: 24,
  },
  proseBlock: {
    paddingBottom: 18,
    marginBottom: 18,
  },
  proseBlockBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    marginBottom: 0,
  },
  proseTitle: {
    ...text,
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    lineHeight: 22,
    marginBottom: 8,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 10,
    paddingRight: 8,
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.medicalBlue,
    marginTop: 8,
  },
  bulletText: {
    ...text,
    flex: 1,
    fontSize: 15,
    fontWeight: '400',
    color: '#475569',
    lineHeight: 22,
  },
  footerCard: {
    marginHorizontal: PAD,
    marginTop: 28,
    paddingVertical: 20,
    paddingHorizontal: 18,
    backgroundColor: '#F8FAFC',
    borderLeftWidth: 3,
    borderLeftColor: Colors.medicalBlue,
    borderRadius: 4,
  },
  footerText: {
    ...text,
    fontSize: 15,
    fontWeight: '500',
    color: '#334155',
    lineHeight: 23,
  },
  footerBrand: {
    ...text,
    fontSize: 13,
    fontWeight: '600',
    color: Colors.medicalBlue,
    marginTop: 10,
    lineHeight: 18,
  },
});
