import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useAppSelector } from "../store/hooks";
import Colors from "../constants/Colors";

export default function Greeting() {
  const user = useAppSelector((state) => state.auth.user);
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 17) setGreeting("Good afternoon");
    else if (hour < 21) setGreeting("Good evening");
    else setGreeting("Good night");
  }, []);

  const name = user?.name?.split(" ")[0] || "there";

  return (
    <View style={styles.container}>
      <Text style={styles.greeting} numberOfLines={1}>
        {greeting}, {name}
      </Text>
      <Text style={styles.subtitle} numberOfLines={1}>
        Your care team is here when you need them
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 6,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0F172A",
    letterSpacing: -0.2,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.medicalTeal,
    marginTop: 3,
    fontWeight: "400",
  },
});
