import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';

type Props = {
  onMessage: () => void;
  onBook: () => void;
};

const QuickActions: React.FC<Props> = ({ onMessage, onBook }) => (
  <View style={styles.row}>
    <TouchableOpacity style={styles.action} onPress={onMessage} activeOpacity={0.85}>
      <View style={[styles.iconWrap, { backgroundColor: Colors.medicalBlueLight }]}>
        <Icon name="message-text-outline" size={22} color={Colors.medicalBlue} />
      </View>
      <Text style={styles.label}>Message</Text>
      <Text style={styles.hint}>Secure chat</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.action} onPress={onBook} activeOpacity={0.85}>
      <View style={[styles.iconWrap, { backgroundColor: Colors.medicalTealLight }]}>
        <Icon name="calendar-clock" size={22} color={Colors.medicalTeal} />
      </View>
      <Text style={styles.label}>Book Visit</Text>
      <Text style={styles.hint}>Face-to-face</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 8,
  },
  action: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0B4365',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
  },
  hint: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 2,
  },
});

export default QuickActions;
