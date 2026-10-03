// // import React from "react";
// // import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native";
// // import Icon from "react-native-vector-icons/MaterialIcons";
// // import { useRoute, useNavigation } from "@react-navigation/native";
// // 
// // const { width } = Dimensions.get("window");

// // export default function SubscriptionDetailsScreen() {
// //   const route = useRoute();
// //   const _navigation = useNavigation();
// //   const { plan, isYearly, userId } = route.params;

 
// //   // const extraBejnefits = [
// //   //   "Priority customer support",
// //   //   "Access to premium tutorials",
// //   //   "Exclusive webinars and workshops",
// //   //   "Downloadable resources & guides",
// //   //   "Early access to new features",
// //   // ];

// //   const faqs = [
// //     { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time from your account settings." },
// //     { q: "Can I switch plans?", a: "Yes, you can upgrade or downgrade your plan at any time." },
// //   ];
// // const extraBenefits=plan.extraBenefits
// //   return (
// //     <LinearGradient colors={['#f3f7ff', '#d0eaff']} style={{ flex: 1 }}>
// //       <ScrollView contentContainerStyle={styles.card}>
    

// //         {/* Plan Card */}
// //         <View style={[styles.card]}>
// //           <View style={[styles.iconWrap, { backgroundColor: plan.color + "20" }]}>
// //             <Icon name={plan.icon} size={36} color={plan.color} />
// //           </View>
// //           <Text style={styles.title}>{plan.name} Plan</Text>
// //           <Text style={styles.description}>{plan.description}</Text>

// //           <Text style={styles.price}>
// //             ${isYearly ? plan.yearlyPrice : plan.price}/{isYearly ? "year" : "month"}
// //           </Text>
// //           {isYearly && (
// //             <Text style={styles.saveText}>
// //               Save ${(plan.price * 12 - plan.yearlyPrice).toFixed(0)} yearly
// //             </Text>
// //           )}

// //           {/* Features */}
// //           <View style={{ marginTop: 20 }}>
// //             <Text style={styles.sectionTitle}>Included Features:</Text>
// //             {plan.features.map((f, i) => (
// //               <View key={i} style={styles.featureItem}>
// //                 <Icon name="check-circle" size={20} color="#10B981" />
// //                 <Text style={styles.featureText}>{f}</Text>
// //               </View>
// //             ))}
// //           </View>

// //           {/* Extra Benefits */}
// //           <View style={{ marginTop: 20 }}>
// //             <Text style={styles.sectionTitle}>Extra Benefits:</Text>
// //             {extraBenefits.map((f, i) => (
// //               <View key={i} style={styles.featureItem}>
// //                 <Icon name="star" size={20} color="#F59E0B" />
// //                 <Text style={styles.featureText}>{f}</Text>
// //               </View>
// //             ))}
// //           </View>

// //           {/* FAQs */}
// //           <View style={{ marginTop: 20 }}>
// //             <Text style={styles.sectionTitle}>FAQs:</Text>
// //             {faqs.map((faq, i) => (
// //               <View key={i} style={{ marginBottom: 10 }}>
// //                 <Text style={styles.faqQ}>{faq.q}</Text>
// //                 <Text style={styles.faqA}>{faq.a}</Text>
// //               </View>
// //             ))}
// //           </View>

// //           {/* Subscribe Button */}
// //           <TouchableOpacity
// //             style={[styles.subscribeBtn, { backgroundColor: plan.color }]}
// //             onPress={() =>
// //               navigation.navigate("PaymentWebView", {
// //                 paymentUrl: plan.paymentUrl,
// //                 planId: plan.id,
// //                 planName: plan.name,
// //                 userId,
// //               })
// //             }
// //           >
// //             <Text style={styles.subscribeBtnText}>Subscribe Now</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </LinearGradient>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //     minHeight: "100%",
// //   },
// //   backBtn: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: 20,
// //   },
// //   backText: {
// //     color: "#374151",
// //     fontSize: 16,
// //     marginLeft: 6,
// //   },
// //   card: {

// //     backgroundColor: "#fff",
// //     borderRadius: 20,
// //     padding: 20,
// //     alignSelf: "center",
// //   },
// //   iconWrap: {
// //     alignSelf: "center",
// //     padding: 16,
// //     borderRadius: 50,
// //     marginBottom: 16,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     textAlign: "center",
// //     color: "#111827",
// //     marginBottom: 10,
// //   },
// //   description: {
// //     fontSize: 16,
// //     color: "#6B7280",
// //     textAlign: "center",
// //     marginBottom: 15,
// //   },
// //   price: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     textAlign: "center",
// //     marginBottom: 10,
// //   },
// //   saveText: {
// //     fontSize: 14,
// //     color: "#10B981",
// //     textAlign: "center",
// //     marginBottom: 20,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: "600",
// //     marginBottom: 10,
// //     color: "#111827",
// //   },
// //   featureItem: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
// //   featureText: { marginLeft: 8, color: "#374151", fontSize: 15 },
// //   faqQ: { fontWeight: "600", fontSize: 15, color: "#111827" },
// //   faqA: { fontSize: 14, color: "#6B7280", marginLeft: 10 },
// //   subscribeBtn: {
// //     marginTop: 30,
// //     padding: 16,
// //     borderRadius: 12,
// //     alignItems: "center",
// //   },
// //   subscribeBtnText: {
// //     color: "#fff",
// //     textAlign: "center",
// //     fontWeight: "bold",
// //     fontSize: 16,
// //   },
// // });


// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, LayoutAnimation, UIManager, Platform } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import { useRoute, useNavigation } from "@react-navigation/native";
// // 
// const { width } = Dimensions.get("window");

// // Enable LayoutAnimation for Android
// if (Platform.OS === "android") {
//   UIManager.setLayoutAnimationEnabledExperimental?.(true);
// }

// export default function SubscriptionDetailsScreen() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { plan, isYearly, userId } = route.params;

//   const extraBenefits = plan.extraBenefits || [];

//   const faqs = [
//     { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time from your account settings." },
//     { q: "Can I switch plans?", a: "Yes, you can upgrade or downgrade your plan at any time." },
//   ];

//   const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

//   const toggleFaq = (index: number) => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//     if (expandedFaqs.includes(index)) {
//       setExpandedFaqs(expandedFaqs.filter(i => i !== index));
//     } else {
//       setExpandedFaqs([...expandedFaqs, index]);
//     }
//   };

//   return (
//     <LinearGradient colors={['#f3f7ff', '#d0eaff']} style={{ flex: 1 }}>
//       <ScrollView contentContainerStyle={styles.card}>
//         {/* Plan Card */}
      
//           <View style={[styles.iconWrap, { backgroundColor: plan.color + "20" }]}>
//             <Icon name={plan.icon} size={36} color={plan.color} />
//           </View>
//           <Text style={styles.title}>{plan.name} Plan</Text>
//           <Text style={styles.description}>{plan.description}</Text>

//           <Text style={styles.price}>
//             ${isYearly ? plan.yearlyPrice : plan.price}/{isYearly ? "year" : "month"}
//           </Text>
//           {isYearly && (
//             <Text style={styles.saveText}>
//               Save ${(plan.price * 12 - plan.yearlyPrice).toFixed(0)} yearly
//             </Text>
//           )}

//           {/* Features */}
//           <View style={{ marginTop: 20 }}>
//             <Text style={styles.sectionTitle}>Included Features:</Text>
//             {plan.features.map((f, i) => (
//               <View key={i} style={styles.featureItem}>
//                 <Icon name="check-circle" size={20} color="#10B981" />
//                 <Text style={styles.featureText}>{f}</Text>
//               </View>
//             ))}
//           </View>

//           {/* Extra Benefits */}
//           {extraBenefits.length > 0 && (
//             <View style={{ marginTop: 20 }}>
//               <Text style={styles.sectionTitle}>Extra Benefits:</Text>
//               {extraBenefits.map((f, i) => (
//                 <View key={i} style={styles.featureItem}>
//                   <Icon name="star" size={20} color="#F59E0B" />
//                   <Text style={styles.featureText}>{f}</Text>
//                 </View>
//               ))}
//             </View>
//           )}

//           {/* FAQs with collapsible answers */}
//           <View style={{ marginTop: 20 }}>
//             <Text style={styles.sectionTitle}>Frequently Asked Questions:</Text>
//             {faqs.map((faq, i) => {
//               const isExpanded = expandedFaqs.includes(i);
//               return (
//                 <View key={i} style={{ marginBottom: 8, borderBottomWidth: 0.5, borderBottomColor: "#E5E7EB", paddingBottom: 8 }}>
//                   <TouchableOpacity onPress={() => toggleFaq(i)} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//                     <Text style={styles.faqQ}>{faq.q}</Text>
//                     <Icon name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="#374151" />
//                   </TouchableOpacity>
//                   {isExpanded && <Text style={styles.faqA}>{faq.a}</Text>}
//                 </View>
//               );
//             })}
//           </View>

//           {/* Subscribe Button */}
//           <TouchableOpacity
//             style={[styles.subscribeBtn, { backgroundColor: plan.color }]}
//             activeOpacity={0.8}
//             onPress={() =>
//               navigation.navigate(AuthStackRoutes.PaymentWebView, {
//                 paymentUrl: plan.paymentUrl,
//                 planId: plan.id,
//                 planName: plan.name,
//                 userId,
//               })
//             }
//           >
//             <Text style={styles.subscribeBtnText}>Subscribe Now</Text>
//           </TouchableOpacity>
        
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     minHeight: "100%",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 20,
//     padding: 32,
//     alignSelf: "center",
//   },
//   iconWrap: {
//     alignSelf: "center",
//     padding: 16,
//     borderRadius: 50,
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#111827",
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: "#6B7280",
//     textAlign: "center",
//     marginBottom: 15,
//   },
//   price: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   saveText: {
//     fontSize: 14,
//     color: "#10B981",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 10,
//     color: "#111827",
//   },
//   featureItem: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
//   featureText: { marginLeft: 8, color: "#374151", fontSize: 15 },
//   faqQ: { fontWeight: "600", fontSize: 15, color: "#111827", flex: 1 },
//   faqA: { fontSize: 14, color: "#6B7280", marginTop: 4, marginLeft: 8 },
//   subscribeBtn: {
//     marginTop: 30,
//     padding: 16,
//     borderRadius: 12,
//     alignItems: "center",
//   },
//   subscribeBtnText: {
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });


import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  LayoutAnimation,
  UIManager,
  Platform,
  Alert,
  Linking,
  ActivityIndicator,
  AppState,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import API from "../utils/apiClient";
import { AuthStackRoutes } from "../navigation/Routes";
import {
  formatPlanPrice,
  cleanFeatureText,
  getPlanIconName,
  getPlanFeatures,
  getPlanExtraBenefits,
  getPlanExtraAmount,
  getPlanExtraAmountText,
  getPlanExtraAddonBenefits,
  normalizeSubscriptionPlan,
} from "../constants/subscription";
// import RazorpayCheckout from "react-native-razorpay";
const { width: _width } = Dimensions.get("window");
import InAppBrowser from "react-native-inappbrowser-reborn";

// Enable LayoutAnimation for Android
if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const STRIPE_SUCCESS_URL = "myapp://payment-success";
const STRIPE_CANCEL_URL = "myapp://payment-cancel";

const extractCheckoutUrl = (payload: any): string | undefined => {
  const candidates = [
    payload?.url,
    payload?.checkoutUrl,
    payload?.sessionUrl,
    payload?.data?.url,
    payload?.data?.checkoutUrl,
    payload?.data?.sessionUrl,
  ];

  return candidates.find(
    (value) => typeof value === "string" && value.startsWith("http")
  );
};

const subscriptionRecord = (payload: any) => payload?.data ?? payload?.subscription ?? null;

const isActiveSubscription = (subscription: any) => {
  if (!subscription || typeof subscription !== "object") return false;
  if (subscription.isActive === false) return false;
  if (subscription.endDate && new Date(subscription.endDate) <= new Date()) return false;
  return Boolean(subscription.isActive || subscription.status === "active" || subscription._id);
};

const subscriptionKey = (subscription: any) =>
  subscription
    ? [subscription._id, subscription.planId, subscription.subscriptionId, subscription.updatedAt, subscription.endDate]
        .filter(Boolean)
        .join(":")
    : "";

const splitDescriptionParts = (description: string): string[] => {
  const normalized = description.trim();
  if (!normalized) return [];

  const parts = normalized
    .split(/\s*\+\s*/)
    .map((part) => part.trim().replace(/^./, (char) => char.toUpperCase()))
    .filter(Boolean);

  return parts.length > 0 ? parts : [normalized];
};

export default function SubscriptionDetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const [paymentLoading, setPaymentLoading] = useState(false);
  type AddonChoice = "none" | "extra";
  const [addonChoice, setAddonChoice] = useState<AddonChoice>("none");
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

  const { plan: routePlan, isYearly, userId: _userId } = route.params as {
    plan?: Record<string, unknown>;
    isYearly: boolean;
    userId: string;
  };
  const plan = (normalizeSubscriptionPlan(routePlan) ?? routePlan) as {
    _id?: string;
    id?: string;
    name: string;
    description: string;
    price: number;
    yearlyPrice: number;
    period: string;
    color: string;
    icon: string;
    features: string[];
    extraBenefits?: string[];
    paymentUrl?: string;
    extraAmount?: number | string;
    extraAmountT?: string;
  };

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        setPaymentLoading(false);
      }
    });

    return () => subscription.remove();
  }, []);

  if (!plan?.name) {
    return null;
  }

  const planRecord = plan as Record<string, unknown>;
  const planPrice = isYearly ? plan.yearlyPrice : plan.price;
  const extraAmount = getPlanExtraAmount(planRecord);
  const extraDescription = getPlanExtraAmountText(planRecord);
  const extraAddonBenefits = getPlanExtraAddonBenefits(planRecord);
  const accent = plan.color || Colors.medicalBlue;

  const addExtra = addonChoice === "extra";
  const extraFee = addExtra ? extraAmount : 0;
  const totalDue = planPrice + extraFee;

  const selectAddon = (choice: AddonChoice) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setAddonChoice(choice);
  };

  const planFeatures = getPlanFeatures(planRecord);
  const extraBenefits = getPlanExtraBenefits(planRecord);
  const descriptionParts = splitDescriptionParts(plan.description ?? '');

  const faqs = [
    {
      q: "Can I cancel at any time?",
      a: "Yes. You can cancel your subscription at any time from your account settings.",
    },
    {
      q: "When am I charged?",
      a: "You are charged when you complete secure checkout. Your plan renews according to your billing cycle.",
    },
    {
      q: "Can I switch plans?",
      a: "Yes. You can upgrade or downgrade your plan at any time.",
    },
  ];

  const readMySubscription = async () => {
    const res = await API.get("/subscriptions/my-subscription", { timeout: 20000 });
    return subscriptionRecord(res?.data);
  };

  const waitForSubscriptionUpdate = async (previousKey: string) => {
    for (let attempt = 0; attempt < 4; attempt += 1) {
      try {
        const subscription = await readMySubscription();
        const nextKey = subscriptionKey(subscription);
        if (isActiveSubscription(subscription) && nextKey && nextKey !== previousKey) {
          return true;
        }
      } catch (error) {
        console.log("[Stripe] Subscription check pending", error);
      }

      await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    }

    return false;
  };

  // Stripe Checkout must return through the app URL scheme. SFSafariViewController
  // stays on the success page and never resumes the app.
  const startStripePayment = async (currency = "usd") => {
  if (paymentLoading) {
    return;
  }

  try {
    setPaymentLoading(true);

    let previousKey: string | null = null;
    try {
      previousKey = subscriptionKey(await readMySubscription());
    } catch {
      previousKey = null;
    }

    const res = await API.post(
      "/subscriptions/stripe-checkout",
      {
        subscriptionId: plan._id || plan.id,
        currency,
        interval: isYearly ? "year" : "month",
        billingCycle: isYearly ? "yearly" : "monthly",
        successUrl: STRIPE_SUCCESS_URL,
        cancelUrl: STRIPE_CANCEL_URL,
        success_url: STRIPE_SUCCESS_URL,
        cancel_url: STRIPE_CANCEL_URL,
        ...(addExtra && extraAmount > 0 ? { extraAmount } : {}),
      },
      { timeout: 30000 }
    );

    const url = extractCheckoutUrl(res?.data);
    if (!url) {
      throw new Error(res?.data?.message || "Checkout URL not received");
    }

    const isBrowserAvailable = await InAppBrowser.isAvailable();
    let returnedUrl = "";

    if (isBrowserAvailable) {
      const result = await InAppBrowser.openAuth(url, STRIPE_SUCCESS_URL, {
        dismissButtonStyle: "cancel",
        preferredBarTintColor: "#0B4365",
        preferredControlTintColor: "#ffffff",
        animated: true,
        modalPresentationStyle: "fullScreen",
        enableUrlBarHiding: false,
        showTitle: true,
        enableDefaultShare: false,
      });

      if (result.type === "success") {
        returnedUrl = result.url || "";
      }
    } else {
      await Linking.openURL(url);
      return;
    }

    if (/payment-cancel|cancel/i.test(returnedUrl) && !/payment-success|success/i.test(returnedUrl)) {
      Alert.alert("Payment cancelled", "No charge was completed. You can try again when you're ready.");
      return;
    }

    if (/payment-success|success/i.test(returnedUrl)) {
      navigation.navigate(AuthStackRoutes.PaymentSuccess);
      return;
    }

    if (previousKey !== null && (await waitForSubscriptionUpdate(previousKey))) {
      navigation.navigate(AuthStackRoutes.PaymentSuccess);
    }
  } catch (err: any) {
    console.error("[Stripe] Payment start failed", {
      message: err?.message,
      status: err?.response?.status,
      apiError: err?.response?.data,
    });

    Alert.alert(
      "Payment Error",
      err?.response?.data?.message || err?.message || "Unable to start payment"
    );
  } finally {
    setPaymentLoading(false);
  }
};

  const toggleFaq = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (expandedFaqs.includes(index)) {
      setExpandedFaqs(expandedFaqs.filter((i) => i !== index));
    } else {
      setExpandedFaqs([...expandedFaqs, index]);
    }
  };



  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heroCard}>
        <View style={[styles.iconWrap, { backgroundColor: `${plan.color || Colors.medicalBlue}18` }]}>
          <Icon name={getPlanIconName(plan.icon)} size={32} color={plan.color || Colors.medicalBlue} />
        </View>
        <Text style={styles.title}>{plan.name}</Text>
        <View style={styles.priceBlock}>
          <Text style={styles.price}>${planPrice}</Text>
          <Text style={styles.pricePeriod}>/{isYearly ? "year" : "month"}</Text>
        </View>
        {isYearly && (
          <Text style={styles.saveText}>
            Save ${(plan.price * 12 - plan.yearlyPrice).toFixed(0)} per year
          </Text>
        )}
      </View>

      {descriptionParts.length > 0 && (
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <View style={[styles.sectionHeaderIcon, { backgroundColor: `${accent}18` }]}>
              <Icon name="clipboard-text-outline" size={18} color={accent} />
            </View>
            <Text style={styles.sectionTitleInline}>What&apos;s included</Text>
          </View>

          <View style={[styles.includedBox, { backgroundColor: `${accent}0D`, borderColor: `${accent}22` }]}>
            {descriptionParts.length > 1 ? (
              descriptionParts.map((part, index) => (
                <View
                  key={`included-${index}`}
                  style={[
                    styles.includedPartRow,
                    index < descriptionParts.length - 1 && styles.includedPartRowBorder,
                  ]}
                >
                  <View style={[styles.includedPartBullet, { backgroundColor: accent }]}>
                    <Icon name="check" size={12} color="#FFFFFF" />
                  </View>
                  <Text style={styles.includedPartText}>{part}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.includedDescription}>{descriptionParts[0]}</Text>
            )}
          </View>
        </View>
      )}

      {planFeatures.length > 0 && (
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Features</Text>
          {planFeatures.map((text, i) => (
            <View key={`feature-${i}`} style={styles.featureItem}>
              <Icon name="check-circle" size={18} color={Colors.medicalTeal} />
              <Text style={styles.featureText}>{text}</Text>
            </View>
          ))}
        </View>
      )}

      {extraBenefits.length > 0 && (
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <View style={[styles.sectionHeaderIcon, { backgroundColor: '#FEF3C7' }]}>
              <Icon name="star-circle" size={18} color="#F59E0B" />
            </View>
            <Text style={styles.sectionTitleInline}>Extra benefits</Text>
          </View>
          {extraBenefits.map((text, i) => (
            <View key={`extra-benefit-${i}`} style={styles.featureItem}>
              <Icon name="star-circle" size={18} color="#F59E0B" />
              <Text style={styles.featureText}>{text}</Text>
            </View>
          ))}
        </View>
      )}

      {extraAmount > 0 && (
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Optional add-on</Text>

          <TouchableOpacity
            activeOpacity={0.85}
            style={[
              styles.radioOptionRow,
              addonChoice === "none" && styles.radioOptionRowSelected,
            ]}
            onPress={() => selectAddon("none")}
            accessibilityRole="radio"
            accessibilityState={{ selected: addonChoice === "none" }}
          >
            <View style={styles.radioOptionMain}>
              <View
                style={[
                  styles.radioOuter,
                  addonChoice === "none" && { borderColor: accent },
                ]}
              >
                {addonChoice === "none" && (
                  <View style={[styles.radioInner, { backgroundColor: accent }]} />
                )}
              </View>
              <View style={styles.radioOptionCopy}>
                <Text
                  style={[
                    styles.radioOptionTitle,
                    addonChoice === "none" && { color: accent },
                  ]}
                >
                  {plan.name}
                </Text>
                <Text style={styles.radioOptionSub}>
                  ${formatPlanPrice(planPrice)}/{isYearly ? "year" : "month"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            style={[
              styles.radioOptionRow,
              addonChoice === "extra" && styles.radioOptionRowSelected,
            ]}
            onPress={() => selectAddon("extra")}
            accessibilityRole="radio"
            accessibilityState={{ selected: addonChoice === "extra" }}
          >
            <View style={styles.radioOptionMain}>
              <View
                style={[
                  styles.radioOuter,
                  addonChoice === "extra" && { borderColor: accent },
                ]}
              >
                {addonChoice === "extra" && (
                  <View style={[styles.radioInner, { backgroundColor: accent }]} />
                )}
              </View>
              <View style={styles.radioOptionCopy}>
                {!!extraDescription && (
                  <Text
                    style={[
                      styles.radioOptionTitle,
                      addonChoice === "extra" && { color: accent },
                    ]}
                  >
                    {extraDescription}
                  </Text>
                )}
                {extraAddonBenefits.map((benefit, index) => {
                  const text = cleanFeatureText(benefit);
                  if (!text) return null;
                  return (
                    <View key={`extra-benefit-${index}`} style={styles.extraBenefitRow}>
                      <Icon name="check-circle" size={14} color={Colors.medicalTeal} />
                      <Text style={styles.extraBenefitText}>{text}</Text>
                    </View>
                  );
                })}
              </View>
              <Text
                style={[
                  styles.radioOptionPrice,
                  addonChoice === "extra" && { color: accent },
                ]}
              >
                +${formatPlanPrice(extraAmount)}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Price breakdown</Text>
        <View style={styles.breakdownRow}>
          <Text style={styles.breakdownLabel}>Plan price</Text>
          <Text style={styles.breakdownValue}>${formatPlanPrice(planPrice)}</Text>
        </View>
        {addExtra && extraAmount > 0 && (
          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownLabel}>
              {extraDescription || plan.name}
            </Text>
            <Text style={styles.breakdownValue}>${formatPlanPrice(extraAmount)}</Text>
          </View>
        )}
        <View style={styles.divider} />
        <View style={styles.breakdownRow}>
          <Text style={styles.totalLabel}>Total due today</Text>
          <Text style={styles.totalValue}>${formatPlanPrice(totalDue)}</Text>
        </View>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Common questions</Text>
        {faqs.map((faq, i) => {
          const isExpanded = expandedFaqs.includes(i);
          return (
            <View key={i} style={styles.faqItem}>
              <TouchableOpacity onPress={() => toggleFaq(i)} style={styles.faqHeader}>
                <Text style={styles.faqQ}>{faq.q}</Text>
                <Icon name={isExpanded ? "chevron-up" : "chevron-down"} size={20} color="#64748B" />
              </TouchableOpacity>
              {isExpanded && <Text style={styles.faqA}>{faq.a}</Text>}
            </View>
          );
        })}
      </View>

      <TouchableOpacity
        style={[styles.subscribeBtn, { opacity: paymentLoading ? 0.7 : 1 }]}
        disabled={paymentLoading}
        onPress={() => startStripePayment("usd")}
      >
        {paymentLoading ? (
          <View style={styles.payLoadingRow}>
            <ActivityIndicator color="#fff" size="small" />
            <Text style={styles.subscribeBtnText}>Redirecting to secure checkout…</Text>
          </View>
        ) : (
          <>
            <Icon name="lock-outline" size={18} color="#FFFFFF" />
            <Text style={styles.subscribeBtnText}>Continue to secure payment</Text>
          </>
        )}
      </TouchableOpacity>

      <View style={styles.secureNote}>
        <Icon name="shield-check-outline" size={14} color="#94A3B8" />
        <Text style={styles.secureNoteText}>Payments processed securely via Stripe</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F8FAFC" },
  scrollContent: { padding: 16, paddingBottom: 40 },
  heroCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 12,
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#0F172A",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 21,
    marginBottom: 16,
  },
  priceBlock: { flexDirection: "row", alignItems: "flex-end", gap: 4 },
  price: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.medicalBlue,
  },
  pricePeriod: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 6,
  },
  saveText: {
    fontSize: 13,
    color: Colors.medicalTeal,
    marginTop: 8,
    fontWeight: "500",
  },
  sectionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 12,
    color: "#0F172A",
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },
  sectionHeaderIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitleInline: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
    flex: 1,
  },
  includedBox: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
  },
  includedPartRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    paddingVertical: 10,
  },
  includedPartRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  includedPartBullet: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  includedPartText: {
    flex: 1,
    fontSize: 15,
    color: "#334155",
    lineHeight: 22,
    fontWeight: "500",
  },
  featureItem: { flexDirection: "row", alignItems: "flex-start", marginBottom: 10, gap: 10 },
  featureText: { flex: 1, color: "#475569", fontSize: 14, lineHeight: 20 },
  includedDescription: {
    fontSize: 15,
    color: "#334155",
    lineHeight: 24,
    fontWeight: "500",
  },
  breakdownRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 8,
  },
  breakdownLabel: {
    flex: 1,
    flexShrink: 1,
    fontSize: 14,
    color: "#64748B",
    lineHeight: 20,
    paddingRight: 4,
  },
  breakdownValue: {
    flexShrink: 0,
    fontSize: 14,
    color: "#0F172A",
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "right",
  },
  totalLabel: {
    flex: 1,
    flexShrink: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
    lineHeight: 22,
    paddingRight: 4,
  },
  totalValue: {
    flexShrink: 0,
    fontSize: 20,
    fontWeight: "700",
    color: Colors.medicalTeal,
    lineHeight: 24,
    textAlign: "right",
  },
  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 10,
  },
  radioOptionRow: {
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
    padding: 14,
    marginBottom: 10,
  },
  radioOptionRowSelected: {
    borderWidth: 2,
    borderColor: Colors.medicalBlue,
    backgroundColor: "#F0F9FF",
  },
  radioOptionMain: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#CBD5E1",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  radioOptionCopy: {
    flex: 1,
    minWidth: 0,
  },
  radioOptionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
    lineHeight: 20,
  },
  radioOptionSub: {
    fontSize: 12,
    color: "#64748B",
    lineHeight: 17,
    marginTop: 2,
  },
  radioOptionPrice: {
    flexShrink: 0,
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "700",
    color: "#64748B",
    lineHeight: 20,
    marginTop: 2,
    marginLeft: 8,
  },
  extraBenefitRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    marginTop: 6,
  },
  extraBenefitText: {
    flex: 1,
    fontSize: 12,
    color: "#475569",
    lineHeight: 17,
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    paddingBottom: 10,
    marginBottom: 10,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  faqQ: { flex: 1, fontWeight: "600", fontSize: 14, color: "#0F172A" },
  faqA: { fontSize: 13, color: "#64748B", marginTop: 8, lineHeight: 19 },
  subscribeBtn: {
    backgroundColor: Colors.medicalBlue,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  payLoadingRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  subscribeBtnText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
  },
  secureNote: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 12,
  },
  secureNoteText: { fontSize: 12, color: "#94A3B8" },
});
