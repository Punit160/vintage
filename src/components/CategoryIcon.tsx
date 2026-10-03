import React from "react";
import { Image, StyleSheet, Text, TextStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { resolveCategoryIcon } from "../utils/categoryIcons";

type CategoryIconProps = {
  title?: string;
  icon?: string | null;
  size?: number;
  color?: string;
  emojiStyle?: TextStyle;
  allowImage?: boolean;
  preferVector?: boolean;
};

export default function CategoryIcon({
  title,
  icon,
  size = 28,
  color = "#0B4365",
  emojiStyle,
  allowImage = true,
  preferVector = false,
}: CategoryIconProps) {
  const resolved = resolveCategoryIcon(title, icon, { allowImage, preferVector });

  if (resolved.emoji) {
    return (
      <Text style={[styles.emoji, { fontSize: size * 0.9 }, emojiStyle]}>{resolved.emoji}</Text>
    );
  }

  if (resolved.iconUrl) {
    return (
      <Image
        source={{ uri: resolved.iconUrl }}
        style={{ width: size, height: size }}
        resizeMode="contain"
      />
    );
  }

  return <Icon name={resolved.iconName} size={size} color={color} />;
}

const styles = StyleSheet.create({
  emoji: {
    textAlign: "center",
  },
});
