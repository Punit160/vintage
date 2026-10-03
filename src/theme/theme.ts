import Colors from '../constants/Colors';

export const theme = {
  colors: {
    primary: Colors.medicalBlue,
    primaryLight: Colors.medicalBlueLight,
    accent: Colors.medicalTeal,
    background: '#F8FAFC',
    surface: '#FFFFFF',
    text: '#0F172A',
    textSecondary: '#64748B',
    textMuted: '#94A3B8',
    border: '#E2E8F0',
    borderLight: '#F1F5F9',
    success: '#059669',
    chatSent: '#E0F2FE',
    chatReceived: '#FFFFFF',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    pill: 999,
  },
  typography: {
    h1: { fontSize: 22, fontWeight: '600' as const, color: '#0F172A', letterSpacing: -0.3 },
    h2: { fontSize: 17, fontWeight: '600' as const, color: '#0F172A' },
    h3: { fontSize: 15, fontWeight: '600' as const, color: '#0F172A' },
    body: { fontSize: 14, fontWeight: '400' as const, color: '#475569', lineHeight: 20 },
    caption: { fontSize: 12, fontWeight: '400' as const, color: '#64748B' },
    label: { fontSize: 11, fontWeight: '500' as const, color: '#64748B', letterSpacing: 0.4, textTransform: 'uppercase' as const },
  },
  shadow: {
    card: {
      shadowColor: '#0B4365',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 8,
      elevation: 2,
    },
  },
};

export default theme;
