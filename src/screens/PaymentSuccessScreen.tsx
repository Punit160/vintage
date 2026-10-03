// import React, { useEffect, useRef } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Animated,
//   Easing,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import SoundPlayer from "react-native-sound-player";
// import Colors from "../constants/Colors";

// export default function PaymentSuccessScreen() {
//   const navigation = useNavigation<any>();

//   const scaleAnim = useRef(new Animated.Value(0)).current;
//   const opacityAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     try {
//       // ✅ Option 1: Play local file in assets
//       SoundPlayer.playSoundFile("phone", "mp3"); // phone.mp3 inside android/app/src/main/res/raw + iOS bundle

//       // ✅ Option 2: Play remote free sound
//     // SoundPlayer.playUrl("https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3");
//     } catch (e) {
//       console.log("Error playing sound:", e);
//     }

//     // Animate checkmark
//     Animated.sequence([
//       Animated.spring(scaleAnim, {
//         toValue: 1,
//         friction: 4,
//         useNativeDriver: true,
//       }),
//       Animated.timing(opacityAnim, {
//         toValue: 1,
//         duration: 500,
//         easing: Easing.ease,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[styles.circle, { transform: [{ scale: scaleAnim }] }]}
//       >
//         <Text style={styles.checkmark}>✓</Text>
//       </Animated.View>

//       <Animated.Text style={[styles.title, { opacity: opacityAnim }]}>
//         Payment Successful!
//       </Animated.Text>

//       <Text style={styles.subtitle}>
//         Your subscription has been activated 🎉
//       </Text>

//       <TouchableOpacity
//         style={styles.button}
//         activeOpacity={0.7}
//         onPress={() => navigation.replace("Main")}
//       >
//         <Text style={styles.buttonText}>Done</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#a9ffabea" },
//   circle: { width: 120, height: 120, borderRadius: 60, backgroundColor: "green", justifyContent: "center", alignItems: "center" },
//   checkmark: { fontSize: 60, color: "white", fontWeight: "bold" },
//   title: { fontSize: 24, fontWeight: "700", color: Colors.darkBlueP1, marginTop: 20 },
//   subtitle: { fontSize: 16, color: "#555", marginVertical: 10, textAlign: "center" },
//   button: { marginTop: 30,  paddingVertical: 12, paddingHorizontal: 30, borderRadius: 25,borderWidth:1,borderColor:Colors.darkBlueP1 },
//   buttonText: { color: Colors.darkBlueP1, fontSize: 16, fontWeight: "600" },
// });

import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import { AuthStackRoutes } from "../navigation/Routes";
import API from "../utils/apiClient";

export default function PaymentSuccessScreen() {
  const navigation = useNavigation<any>();

  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    // try {
    //   // Play local sound
    //   SoundPlayer.playSoundFile("phone", "mp3");
    // } catch (e) {
    //   console.log("Error playing sound:", e);
    // }

    // Animate checkmark
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();

  }, []);
 useEffect(() => {
  let cancelled = false;

  const verifySubscription = async () => {
    for (let attempt = 0; attempt < 5; attempt += 1) {
      if (cancelled) return;

      try {
        const res = await API.get("/subscriptions/my-subscription", { timeout: 20000 });
        const subscription = res.data?.data;
        const isActive =
          res.data?.success &&
          subscription &&
          subscription.isActive !== false &&
          (!subscription.endDate || new Date(subscription.endDate) > new Date());

        if (isActive) {
          if (!cancelled) {
            setTimeout(() => {
              navigation.reset({
                index: 0,
                routes: [{ name: AuthStackRoutes.Main }],
              });
            }, 1500);
          }
          return;
        }
      } catch (err) {
        console.log("Waiting for payment confirmation", err);
      }

      await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    }
  };

  verifySubscription();

  return () => {
    cancelled = true;
  };
}, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, { transform: [{ scale: scaleAnim }] }]}
      >
        <Text style={styles.checkmark}>✓</Text>
      </Animated.View>

      <Animated.Text style={[styles.title, { opacity: opacityAnim }]}>
        Payment Successful!
      </Animated.Text>

      <Text style={styles.subtitle}>
        Your subscription has been activated 🎉
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.replace(AuthStackRoutes.Main)}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#a9ffabea" },
  circle: { width: 120, height: 120, borderRadius: 60, backgroundColor: "green", justifyContent: "center", alignItems: "center" },
  checkmark: { fontSize: 60, color: "white", fontWeight: "bold" },
  title: { fontSize: 24, fontWeight: "700", color: Colors.darkBlueP1, marginTop: 20 },
  subtitle: { fontSize: 16, color: "#555", marginVertical: 10, textAlign: "center" },
  button: { marginTop: 30, paddingVertical: 12, paddingHorizontal: 30, borderRadius: 25, borderWidth:1, borderColor:Colors.darkBlueP1 },
  buttonText: { color: Colors.darkBlueP1, fontSize: 16, fontWeight: "600" },
});
