import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import { AuthStackRoutes } from '../../navigation/Routes';
import { useNavigation } from '@react-navigation/native';
import ClinicianAvatar from '../../components/ClinicianAvatar';

const SettingsScreen: React.FC<{ hasSubscription?: boolean; compact?: boolean }> = ({
  hasSubscription,
  compact = false,
}) => {
  const navigation = useNavigation();

  const openClinicianProfile = () => {
    navigation.navigate(AuthStackRoutes.ClinicianProfile as never);
  };

  if (compact) {
    return (
      <View style={styles.compactCard}>
        <TouchableOpacity
          activeOpacity={0.92}
          onPress={openClinicianProfile}
          accessibilityRole="button"
          accessibilityLabel="Learn about Jennifer Mooneyham"
        >
          <View style={styles.compactAccentBar} />
          <View style={styles.compactTop}>
            <ClinicianAvatar size={76} borderWidth={2} borderColor="#FFFFFF" />
            <View style={styles.compactInfo}>
              <Text style={styles.compactEyebrow}>Your clinician</Text>
              <Text style={styles.compactName}>Jennifer Mooneyham</Text>
              <Text style={styles.compactRole}>Family Nurse Practitioner · FNP-BC</Text>
              <View style={styles.badgeRow}>
                <View style={styles.badge}>
                  <Icon name="shield-check" size={11} color={Colors.medicalTeal} />
                  <Text style={styles.badgeText}>HIPAA compliant</Text>
                </View>
                <View style={styles.badge}>
                  <Icon name="clock-outline" size={11} color={Colors.medicalTeal} />
                  <Text style={styles.badgeText}>28+ years of experience</Text>
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.compactBio}>
            Personalized wellness, hormone care, and clinical support — available by secure message or video visit.
          </Text>

          <View style={styles.profileLink}>
            <Text style={styles.profileLinkText}>Who you&apos;ll be talking to</Text>
          </View>
        </TouchableOpacity>

        {!hasSubscription && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.compactSubscribe}
            onPress={() => navigation.navigate(AuthStackRoutes.Subscription)}
          >
            <Icon name="lock-open-variant" size={16} color="#fff" />
            <Text style={styles.compactSubscribeText}>Unlock care plans</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <View style={styles.emptyContainer}>
      <View style={styles.fullCard}>
        <TouchableOpacity
          style={styles.heroSection}
          activeOpacity={0.92}
          onPress={openClinicianProfile}
          accessibilityRole="button"
          accessibilityLabel="Learn about Jennifer Mooneyham"
        >
          <ClinicianAvatar
            size={136}
            borderWidth={3}
            borderColor="#FFFFFF"
            style={styles.settingsAvatar}
          />
          <Text style={styles.compactEyebrow}>Your clinician</Text>
          <Text style={styles.heroName}>Jennifer Mooneyham</Text>
          <Text style={styles.heroRole}>Family Nurse Practitioner · FNP-BC</Text>
          <View style={styles.pillRow}>
            <View style={styles.pill}>
              <Icon name="message-outline" size={14} color={Colors.medicalBlue} />
              <Text style={styles.pillText}>Secure messaging</Text>
            </View>
            <View style={styles.pill}>
              <Icon name="calendar-check" size={14} color={Colors.medicalBlue} />
              <Text style={styles.pillText}>Consult updates</Text>
            </View>
          </View>
          <View style={styles.profileLinkFull}>
            <Text style={styles.profileLinkText}>Who you&apos;ll be talking to</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.aboutCard}>
        <Text style={styles.aboutText}>
          Board-certified FNP with 28+ years of experience in wellness, hormone care, and personalized support.
        </Text>
        {!hasSubscription && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.subscribeButton}
            onPress={() => navigation.navigate(AuthStackRoutes.Subscription)}
          >
            <Icon name="lock-open-variant" size={20} color="#fff" />
            <Text style={styles.subscribeText}>Unlock care plans</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.subscribeHint}>Secure access · HIPAA compliant</Text>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  compactCard: {
    marginHorizontal: 16,
    marginTop: 4,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0B4365',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  compactAccentBar: {
    height: 4,
    backgroundColor: Colors.medicalBlue,
  },
  compactTop: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 14,
  },
  compactInfo: {
    flex: 1,
  },
  compactEyebrow: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.medicalTeal,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  compactName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: 0.1,
  },
  compactRole: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 3,
    lineHeight: 17,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 10,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.medicalTealLight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.medicalTeal,
  },
  compactBio: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
    marginTop: 14,
    paddingHorizontal: 16,
  },
  profileLink: {
    alignSelf: 'flex-start',
    marginTop: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.medicalBlueLight,
    borderWidth: 1,
    borderColor: '#C5E4F3',
  },
  profileLinkText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.medicalBlue,
  },
  compactSubscribe: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.medicalBlue,
    paddingVertical: 14,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    gap: 8,
  },
  compactSubscribeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  emptyContainer: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#F8FAFC',
    flex: 1,
  },
  fullCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0B4365',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  aboutCard: {
    padding: 20,
    paddingTop: 0,
    marginBottom: 0,
  },
  aboutTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14.5,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 8,
  },
  subscribeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.medicalBlue,
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 8,
  },
  subscribeText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  subscribeHint: {
    textAlign: 'center',
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 30,
  },
  heroSection: {
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  settingsAvatar: {
    marginBottom: 12,
  },
  heroName: {
    fontSize: 21,
    fontWeight: '700',
    color: '#0F172A',
  },
  heroRole: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
    textAlign: 'center',
  },
  profileLinkFull: {
    marginTop: 16,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: Colors.medicalBlueLight,
    borderWidth: 1,
    borderColor: '#C5E4F3',
  },
  pillRow: {
    flexDirection: 'row',
    marginTop: 14,
    gap: 10,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.medicalBlueLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  pillText: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.medicalBlue,
  },
});
