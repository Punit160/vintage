import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../../constants/Colors";
import Icon1 from "react-native-vector-icons/Feather";

type Props = {
  title?: string;
  subtitle?: string;
  onMessagePress?: () => void; // callback for right icon press
    chatCount?: number;
};

const BrandHeader: React.FC<Props> = ({
  title = "Vintage",
  subtitle = "Care rooted in experience",
  onMessagePress,
  chatCount = 0,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={require('../../assets/applogo.jpg')} style={styles.logo} />
        <View style={styles.textBlock}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          {subtitle ? (
            <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text>
          ) : null}
        </View>
      </View>

      <TouchableOpacity onPress={onMessagePress} style={styles.rightIcon} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
        <Icon1 name="send" size={20} color={Colors.medicalBlue} />
        {chatCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{chatCount > 9 ? '9+' : chatCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E7EB",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 8,
  },
  logo: {
    height: 28,
    width: 28,
    borderRadius: 6,
  },
  textBlock: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.1,
    color: Colors.medicalBlue,
  },
  subtitle: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 1,
    fontWeight: "400",
  },
  rightIcon: {
    padding: 4,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#EF4444",
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    paddingHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 9,
    fontWeight: "600",
  },
});

export default BrandHeader;
