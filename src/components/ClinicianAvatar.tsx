import React from 'react';
import { View, Image, StyleSheet, ViewStyle } from 'react-native';

export const CLINICIAN_PROFILE_IMAGE =
  'https://vintagehealthbody.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-12-at-08.56.17_5fe3d2f7.jpg';

type ClinicianAvatarProps = {
  size?: number;
  borderWidth?: number;
  borderColor?: string;
  style?: ViewStyle;
};

/**
 * Circular clinician photo. Uses padding for the ring so the image fills the
 * inner clip area and stays visually centered.
 */
const ClinicianAvatar: React.FC<ClinicianAvatarProps> = ({
  size = 128,
  borderWidth = 4,
  borderColor = '#FFFFFF',
  style,
}) => {
  const innerSize = size - borderWidth * 2;

  return (
    <View style={[styles.root, { width: size, height: size }, style]}>
      <View
        style={[
          styles.ring,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            padding: borderWidth,
            backgroundColor: borderColor,
          },
        ]}
      >
        <View
          style={[
            styles.clip,
            {
              width: innerSize,
              height: innerSize,
              borderRadius: innerSize / 2,
            },
          ]}
        >
          <Image
            source={{ uri: CLINICIAN_PROFILE_IMAGE }}
            style={[
              styles.photo,
              {
                width: innerSize,
                height: innerSize * 1.22,
                marginTop: -(innerSize * 0.06),
              },
            ]}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
  },
  ring: {
    overflow: 'hidden',
  },
  clip: {
    overflow: 'hidden',
    backgroundColor: '#E8F4FA',
  },
  photo: {
    alignSelf: 'center',
  },
});

export default ClinicianAvatar;
