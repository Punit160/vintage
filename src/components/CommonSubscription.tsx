// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
//   ActivityIndicator,
//   StyleSheet,
//   Modal,
//   TextInput,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather'; 
// import Colors from '../constants/Colors';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AuthStackRoutes } from '../navigation/Routes';

// const CommonSubscription = () => {
//   const [selectedPlan, setSelectedPlan] = useState('basic');
//   const [isLoading, setIsLoading] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [unlockCode, setUnlockCode] = useState('');
// const navigation=useNavigation();

  // const plans = [
  //   {
  //     id: 'basic',
  //     name: 'Basic',
  //     price: 9.95,
  //     yearlyPrice: 99.95,
  //     description: 'Informational only',
  //     period: '/month',
  //     savings: 'Save 20%',
  //     popular: false,
  //     features: ['Access to informational content'],
  //     color: '#6B7280',
  //     icon: 'shield',
  //       paymentUrl: 'https://buy.stripe.com/test_7sY28q1YfdJf6r303e7g404',
  //        extraBenefits:[
  //   "Priority customer support",
  //   "Access to premium tutorials",
  //   "Exclusive webinars and workshops",
  //   "Downloadable resources & guides",
  //   "Early access to new features",
  // ]
  //   },
  //   {
  //     id: 'silver',
  //     name: 'Silver',
  //     price: 19.95,
  //     yearlyPrice: 199.95,
  //     period: '/month',
  //     savings: 'Save 15%',
  //     popular: false,
  //     description:
  //       'Informational + 1 online consult per month via text (response within 24 hrs)',
  //     features: [
  //       'Access to informational content',
  //       '1 online consult per month via text',
  //       'Response within 24 hrs',
  //       'Covers up to 3 questions/scenarios',
  //     ],
  //       paymentUrl: 'https://buy.stripe.com/test_28EbJ0byP7kR2aNcQ07g405',
        
     
  //     // icon:'award',
  //     color: '#3B82F6',
  //   icon: 'military-tech',
  //      extraBenefits:[
  //   "Priority customer support",
  //   "Access to premium tutorials",
  //   "Exclusive webinars and workshops",
  //   "Downloadable resources & guides",
  //   "Early access to new features",
  // ],
  //   },
  //   {
  //     id: 'gold',
  //     name: 'Gold',
  //     price: 29.95,
  //     yearlyPrice: 299.95,
  //     period: '/month',
  //     savings: 'Save 40%',
  //     popular: true,
  //         paymentUrl: 'https://buy.stripe.com/test_6oU9ASbyPeNj5mZcQ07g406',
  //     description:
  //       'Informational + 1 online consult per week via text (response within 24 hrs)',
  //     features: [
  //       'Access to informational content',
  //       '1 online consult per week via text',
  //       'Response within 24 hrs',
  //       'Covers up to 3 questions/scenarios',
  //     ],
  //        extraBenefits:[
  //   "Priority customer support",
  //   "Access to premium tutorials",
  //   "Exclusive webinars and workshops",
  //   "Downloadable resources & guides",
  //   "Early access to new features",
  // ],
  //     color: '#dbba00ff',
  //     icon: 'star',
  //   },
  //   {
  //     id: 'platinum',
  //     name: 'Platinum',
  //     price: 49.95,
  //     yearlyPrice: 499.95,
  //     period: '/month',
  //     popular: null,
  //      paymentUrl: 'https://buy.stripe.com/test_3cI7sK9qH34BdTv4ju7g407',
  //     description:
  //       'Informational + weekly online consults + monthly face-to-face consult (30 mins)',
  //     features: [
  //       'Access to informational content',
  //       '1 online consult per week via text',
  //       'Response within 24 hrs',
  //       'Covers up to 3 questions/scenarios',
  //       '1 face-to-face consult per month (30 minutes)',
  //       'Must be scheduled 1 week in advance',
  //     ],
  //        extraBenefits:[
  //   "Priority customer support",
  //   "Access to premium tutorials",
  //   "Exclusive webinars and workshops",
  //   "Downloadable resources & guides",
  //   "Early access to new features",
  // ],
  //     color: '#8B5CF6',
  //     icon: 'diamond',
  //   },
  // ];

//   const features = [
//     'Unlimited access to premium content',
//     'Exclusive features and updates',
//     '1 online consult per month via text',
//     'Response within 24 hrs',
//     'Covers up to 3 questions/scenarios',
//   ];
  
// const handleSubscribe1 = async (plan) => {
//   try {
//     const userId = await AsyncStorage.getItem('userId'); // get saved userId
//     if (!userId) {
//       Alert.alert('Error', 'User not found. Please login again.');
//       return;
//     }

//     navigation.navigate(AuthStackRoutes.SubscriptionDetails, {
//       plan,
//       isYearly: false,
//       userId, // use AsyncStorage value
//     });
    
//   } catch (error) {
//     console.error('Failed to get userId from storage:', error);
//     Alert.alert('Error', 'Something went wrong. Please try again.');
//   }
// };

//   const handleSubscribe = (plan) => {
//      navigation.navigate("SubscriptionDetails", {
//     plan,
//     isYearly:false,
//     userId:"kjajjlfn",

//   });
//   };

//   const handleUnlockSubscription = () => {
//     setModalVisible(true);
//   };

//   const handleConfirmUnlock = () => {
//     if (unlockCode.trim() !== '') {
//       Alert.alert('Success', 'Your subscription has been unlocked successfully!');
//       setModalVisible(false);
//       setUnlockCode('');
//     } else {
//       Alert.alert('Error', 'Please enter a valid code.');
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Icon name="award" size={40} color="#FFD700" />
//         <Text style={styles.headerTitle}>Upgrade to Premium</Text>
//         <Text style={styles.headerSubtitle}>
//           Unlock all features and get the best experience
//         </Text>
//       </View>

//       {/* Features */}
//       <View style={styles.features}>
//         <Text style={styles.sectionTitle}>What you'll get:</Text>
//         {features.map((feature, index) => (
//           <View key={index} style={styles.featureItem}>
//             <Icon name="check" size={20} color="#4CAF50" />
//             <Text style={styles.featureText}>{feature}</Text>
//           </View>
//         ))}
//       </View>

//       {/* Plans */}
//       <View style={styles.plans}>
//         <Text style={styles.sectionTitle}>Choose your plan:</Text>
//         {plans.map(plan => (
//           <TouchableOpacity
//             key={plan.id}
//             style={[
//               styles.planCard,
//               selectedPlan === plan.id
//                 ? { borderColor: plan.color, backgroundColor: '#EFF6FF' }
//                 : { borderColor: '#E5E7EB', backgroundColor: 'white' },
//               plan.popular ? styles.planCardPopular : null,
//             ]}
//             onPress={() => setSelectedPlan(plan.id)}
//           >
//             {/* Most Popular badge */}
//             {plan.popular && (
//               <View style={[styles.popularBadge, selectedPlan === plan?.id?{backgroundColor:plan?.color ,borderRadius:12}:{backgroundColor:Colors.darkBlueP1 ,borderRadius:12}]}>
//                 <Icon name="star" size={12} color="white" />
//                 <Text style={styles.popularText}> Most Popular</Text>
//               </View>
//             )}

//             {/* Savings badge */}
//             {plan.savings && (
//               <View style={styles.savingsBadge}>
//                 <Text style={styles.savingsText}>{plan.savings}</Text>
//               </View>
//             )}

//             <View style={styles.planHeader}>
//               <View
//                 style={[
//                   styles.radioOuter,
//                   selectedPlan === plan.id && { borderColor: plan.color },
//                 ]}
//               >
//                 {selectedPlan === plan.id && <View style={[styles.radioInner, { backgroundColor: plan.color }]} />}
//               </View>

//               <View style={{ flex: 1 }}>
//                 <View style={styles.planTitleRow}>
//                   <Text style={styles.planTitle}>{plan.name}</Text>
//                   <Text style={styles.planPrice}>
//                     ${plan.price} <Text style={styles.planPeriod}>{plan.period}</Text>
//                   </Text>
//                 </View>
//                 <Text style={styles.planDescription}>{plan.description}</Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Action Buttons */}
//       <View style={styles.actions}>
//       <TouchableOpacity
//     activeOpacity={0.8}
//   style={[styles.subscribeBtn, isLoading && styles.btnDisabled]}
//   onPress={() => handleSubscribe1(plans.find(p => p.id === selectedPlan))}
//   disabled={isLoading}
// >
//           {isLoading ? <ActivityIndicator color="white" /> : <Text style={styles.subscribeText}>View Subscription</Text>}
//           {/* {isLoading ? <ActivityIndicator color="white" /> : <Text style={styles.subscribeText}>Start Subscription</Text>} */}
//         </TouchableOpacity>

//         <TouchableOpacity activeOpacity={0.8} style={styles.unlockBtn} onPress={handleUnlockSubscription}>
//           <Icon name="unlock" size={20} color="#6366F1" />
//           <Text style={styles.unlockText}> Unlock with Code</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Footer */}
//       {/* <View style={styles.footer}>
//         <Text style={styles.footerText}>Cancel anytime. Terms and conditions apply.</Text>
//         <Text style={styles.footerLink}>Privacy Policy</Text>
//       </View> */}

//       {/* Unlock Modal */}
//       <Modal
//         visible={modalVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Enter Unlock Code</Text>
//             <TextInput
//               style={styles.modalInput}
//               placeholder="Enter code"
//               value={unlockCode}
//               onChangeText={setUnlockCode}
//             />
//             <View style={styles.modalButtons}>
//               <TouchableOpacity style={styles.modalBtn} onPress={handleConfirmUnlock}>
//                 <Text style={styles.modalBtnText}>Unlock</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={[styles.modalBtn, styles.modalCancelBtn]} onPress={() => setModalVisible(false)}>
//                 <Text style={[styles.modalBtnText, { color: '#6366F1' }]}>Cancel</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F9FAFB' },
//   header: { backgroundColor: 'white', alignItems: 'center', paddingVertical: 20 },
//   headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1F2937', marginTop: 8 },
//   headerSubtitle: { fontSize: 14, color: '#4B5563', textAlign: 'center', marginTop: 4 },
//   features: { backgroundColor: 'white', marginTop: 10, padding: 15 },
//   sectionTitle: { fontSize: 18, fontWeight: '600', color: '#1F2937', marginBottom: 10 },
//   featureItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
//   featureText: { marginLeft: 8, fontSize: 14, color: '#374151', flexShrink: 1 },
//   plans: { padding: 15 },
//   planCard: { borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 2, position: 'relative' },
//   planCardPopular: { elevation: 3 },
//   popularBadge: { position: 'absolute', top: -10, left: 16, backgroundColor: '#F59E0B', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 12 },
//   popularText: { color: 'white', fontSize: 10, fontWeight: '600', marginLeft: 4 },
//   savingsBadge: { position: 'absolute', top: 5, right: 12, backgroundColor: '#10B981', paddingHorizontal: 4, paddingVertical: 1, borderRadius: 8 },
//   savingsText: { color: 'white', fontSize: 10, fontWeight: '600' },
//   planHeader: { flexDirection: 'row', alignItems: 'center' },
//   radioOuter: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#D1D5DB', marginRight: 12, alignItems: 'center', justifyContent: 'center' },
//   radioInner: { width: 10, height: 10, borderRadius: 5 },
//   planTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
//   planTitle: { fontSize: 16, fontWeight: '600', color: '#1F2937' },
//   planPrice: { fontSize: 18, fontWeight: 'bold', color: '#1F2937' },
//   planPeriod: { fontSize: 12, color: '#6B7280' },
//   planDescription: { fontSize: 12, color: '#6B7280', marginTop: 4 },
//   actions: { padding: 15 },
//   subscribeBtn: { backgroundColor: '#6366F1', paddingVertical: 14, borderRadius: 16, alignItems: 'center', marginBottom: 10 },
//   btnDisabled: { opacity: 0.6 },
//   subscribeText: { color: 'white', fontSize: 16, fontWeight: '600' },
//   unlockBtn: { flexDirection: 'row', borderWidth: 2, borderColor: '#6366F1', paddingVertical: 14, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
//   unlockText: { color: '#6366F1', fontWeight: '600', fontSize: 14, marginLeft: 6 },
//   footer: { padding: 15, alignItems: 'center' },
//   footerText: { fontSize: 12, color: '#6B7280', marginBottom: 4 },
//   footerLink: { fontSize: 12, color: '#6366F1', textDecorationLine: 'underline' },
//   modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
//   modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 16, width: '80%' },
//   modalTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10, textAlign: 'center' },
//   modalInput: { borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 8, padding: 10, marginBottom: 15 },
//   modalButtons: { flexDirection: 'row', justifyContent: 'space-between' },
//   modalBtn: { backgroundColor: '#6366F1', padding: 12, borderRadius: 8, flex: 1, marginRight: 5, alignItems: 'center' },
//   modalCancelBtn: { backgroundColor: '#E5E7EB', marginRight: 0, marginLeft: 5 },
//   modalBtnText: { color: 'white', fontWeight: '600' },
// });

// export default CommonSubscription;
// ;




// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
//   ActivityIndicator,
//   StyleSheet,
//   Modal,
//   TextInput,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather'; 
// import Colors from '../constants/Colors';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import API from '../utils/apiClient'; // axios instance

// const CommonSubscription = () => {
//   const [plansd, setPlans] = useState([]);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [unlockCode, setUnlockCode] = useState('');
//   const navigation = useNavigation();

//   const plans = [
//     {
//       id: 'basic',
//       name: 'Basic',
//       price: 9.95,
//       yearlyPrice: 99.95,
//       description: 'Informational only',
//       period: '/month',
//       savings: 'Save 20%',
//       popular: false,
//       features: ['Access to informational content'],
//       color: '#6B7280',
//       icon: 'shield',
//         paymentUrl: 'https://buy.stripe.com/test_7sY28q1YfdJf6r303e7g404',
//          extraBenefits:[
//     "Priority customer support",
//     "Access to premium tutorials",
//     "Exclusive webinars and workshops",
//     "Downloadable resources & guides",
//     "Early access to new features",
//   ]
//     },
//     {
//       id: 'silver',
//       name: 'Silver',
//       price: 19.95,
//       yearlyPrice: 199.95,
//       period: '/month',
//       savings: 'Save 15%',
//       popular: false,
//       description:
//         'Informational + 1 online consult per month via text (response within 24 hrs)',
//       features: [
//         'Access to informational content',
//         '1 online consult per month via text',
//         'Response within 24 hrs',
//         'Covers up to 3 questions/scenarios',
//       ],
//         paymentUrl: 'https://buy.stripe.com/test_28EbJ0byP7kR2aNcQ07g405',
        
     
//       // icon:'award',
//       color: '#3B82F6',
//     icon: 'military-tech',
//        extraBenefits:[
//     "Priority customer support",
//     "Access to premium tutorials",
//     "Exclusive webinars and workshops",
//     "Downloadable resources & guides",
//     "Early access to new features",
//   ],
//     },
//     {
//       id: 'gold',
//       name: 'Gold',
//       price: 29.95,
//       yearlyPrice: 299.95,
//       period: '/month',
//       savings: 'Save 40%',
//       popular: true,
//           paymentUrl: 'https://buy.stripe.com/test_6oU9ASbyPeNj5mZcQ07g406',
//       description:
//         'Informational + 1 online consult per week via text (response within 24 hrs)',
//       features: [
//         'Access to informational content',
//         '1 online consult per week via text',
//         'Response within 24 hrs',
//         'Covers up to 3 questions/scenarios',
//       ],
//          extraBenefits:[
//     "Priority customer support",
//     "Access to premium tutorials",
//     "Exclusive webinars and workshops",
//     "Downloadable resources & guides",
//     "Early access to new features",
//   ],
//       color: '#dbba00ff',
//       icon: 'star',
//     },
//     {
//       id: 'platinum',
//       name: 'Platinum',
//       price: 49.95,
//       yearlyPrice: 499.95,
//       period: '/month',
//       popular: null,
//        paymentUrl: 'https://buy.stripe.com/test_3cI7sK9qH34BdTv4ju7g407',
//       description:
//         'Informational + weekly online consults + monthly face-to-face consult (30 mins)',
//       features: [
//         'Access to informational content',
//         '1 online consult per week via text',
//         'Response within 24 hrs',
//         'Covers up to 3 questions/scenarios',
//         '1 face-to-face consult per month (30 minutes)',
//         'Must be scheduled 1 week in advance',
//       ],
//          extraBenefits:[
//     "Priority customer support",
//     "Access to premium tutorials",
//     "Exclusive webinars and workshops",
//     "Downloadable resources & guides",
//     "Early access to new features",
//   ],
//       color: '#8B5CF6',
//       icon: 'diamond',
//     },
//   ];
//   // Fetch subscription plans from API
//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         setIsLoading(true);
//         const res = await API.get('/subscriptions'); // your GET endpoint
//         if (res.data.success && Array.isArray(res.data.data)) {
//           setPlans(res.data.data);
//           setSelectedPlan(res.data.data[0]?.id); // select first plan by default
//         } else {
//          // Alert.alert('Error', 'Failed to fetch subscription plans.');
//         }
//       } catch (err) {
//         console.error('Error fetching plans:', err);
//        // Alert.alert('Error', 'Something went wrong fetching subscription plans.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPlans();
//   }, []);

//   const handleSubscribe = async (plan) => {
//     try {
//       const userId = await AsyncStorage.getItem('userId');
//       if (!userId) {
//        // Alert.alert('Error', 'User not found. Please login again.');
//         return;
//       }
//       navigation.navigate('SubscriptionDetails', {
//         plan,
//         isYearly: false,
//         userId,
//       });
//     } catch (err) {
//       console.error(err);
//    //   Alert.alert('Error', 'Failed to subscribe.');
//     }
//   };

//   const _handleUnlockSubscription = () => setModalVisible(true);

//   const handleConfirmUnlock = () => {
//     if (unlockCode.trim() !== '') {
//       Alert.alert('Success', 'Your subscription has been unlocked successfully!');
//       setModalVisible(false);
//       setUnlockCode('');
//     } else {
//       Alert.alert('Error', 'Please enter a valid code.');
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Icon name="award" size={40} color="#FFD700" />
//         <Text style={styles.headerTitle}>Upgrade to Premium</Text>
//         <Text style={styles.headerSubtitle}>
//           Unlock all features and get the best experience
//         </Text>
//       </View>

//       {isLoading && <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 20 }} />}

//       {!isLoading && plans.length > 0 && (
//         <View style={styles.plans}>
//           <Text style={styles.sectionTitle}>Choose your plan:</Text>
//           {plans.map(plan => (
//             <TouchableOpacity
//               key={plan.id}
//               style={[
//                 styles.planCard,
//                 selectedPlan === plan.id
//                   ? { borderColor: plan.color || Colors.primary, backgroundColor: '#EFF6FF' }
//                   : { borderColor: '#E5E7EB', backgroundColor: 'white' },
//                 plan.popular ? styles.planCardPopular : null,
//               ]}
//               onPress={() => setSelectedPlan(plan.id)}
//             >
//               {plan.popular && (
//                 <View style={[styles.popularBadge, selectedPlan === plan.id ? { backgroundColor: plan.color } : { backgroundColor: Colors.darkBlueP1 }]}>
//                   <Icon name="star" size={12} color="white" />
//                   <Text style={styles.popularText}> Most Popular</Text>
//                 </View>
//               )}
//               {plan.savings && (
//                 <View style={styles.savingsBadge}>
//                   <Text style={styles.savingsText}>{plan.savings}</Text>
//                 </View>
//               )}
//               <View style={styles.planHeader}>
//                 <View
//                   style={[
//                     styles.radioOuter,
//                     selectedPlan === plan.id && { borderColor: plan.color },
//                   ]}
//                 >
//                   {selectedPlan === plan.id && <View style={[styles.radioInner, { backgroundColor: plan.color }]} />}
//                 </View>
//                 <View style={{ flex: 1 }}>
//                   <View style={styles.planTitleRow}>
//                     <Text style={styles.planTitle}>{plan.name}</Text>
//                     <Text style={styles.planPrice}>
//                       ${plan.price} <Text style={styles.planPeriod}>{plan.period}</Text>
//                     </Text>
//                   </View>
//                   <Text style={styles.planDescription}>{plan.description}</Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}

//       <View style={styles.actions}>
//         <TouchableOpacity
//           activeOpacity={0.8}
//           style={[styles.subscribeBtn, isLoading && { opacity: 0.6 }]}
//           onPress={() => handleSubscribe(plans.find(p => p.id === selectedPlan))}
//           disabled={isLoading}
//         >
//           <Text style={styles.subscribeText}>View Subscription</Text>
//         </TouchableOpacity>

//         <TouchableOpacity activeOpacity={0.8} style={styles.unlockBtn} onPress={handleUnlockSubscription}>
//           <Icon name="unlock" size={20} color="#6366F1" />
//           <Text style={styles.unlockText}> Unlock with Code</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Unlock Modal */}
//       <Modal
//         visible={modalVisible}
//         transparent
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Enter Unlock Code</Text>
//             <TextInput
//               style={styles.modalInput}
//               placeholder="Enter code"
//               value={unlockCode}
//               onChangeText={setUnlockCode}
//             />
//             <View style={styles.modalButtons}>
//               <TouchableOpacity style={styles.modalBtn} onPress={handleConfirmUnlock}>
//                 <Text style={styles.modalBtnText}>Unlock</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={[styles.modalBtn, styles.modalCancelBtn]} onPress={() => setModalVisible(false)}>
//                 <Text style={[styles.modalBtnText, { color: '#6366F1' }]}>Cancel</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F9FAFB' },
//   header: { backgroundColor: 'white', alignItems: 'center', paddingVertical: 20 },
//   headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1F2937', marginTop: 8 },
//   headerSubtitle: { fontSize: 14, color: '#4B5563', textAlign: 'center', marginTop: 4 },
//   plans: { padding: 15 },
//   sectionTitle: { fontSize: 18, fontWeight: '600', color: '#1F2937', marginBottom: 10 },
//   planCard: { borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 2, position: 'relative' },
//   planCardPopular: { elevation: 3 },
//   popularBadge: { position: 'absolute', top: -10, left: 16, backgroundColor: '#F59E0B', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 12 },
//   popularText: { color: 'white', fontSize: 10, fontWeight: '600', marginLeft: 4 },
//   savingsBadge: { position: 'absolute', top: 5, right: 12, backgroundColor: '#10B981', paddingHorizontal: 4, paddingVertical: 1, borderRadius: 8 },
//   savingsText: { color: 'white', fontSize: 10, fontWeight: '600' },
//   planHeader: { flexDirection: 'row', alignItems: 'center' },
//   radioOuter: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#D1D5DB', marginRight: 12, alignItems: 'center', justifyContent: 'center' },
//   radioInner: { width: 10, height: 10, borderRadius: 5 },
//   planTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
//   planTitle: { fontSize: 16, fontWeight: '600', color: '#1F2937' },
//   planPrice: { fontSize: 18, fontWeight: 'bold', color: '#1F2937' },
//   planPeriod: { fontSize: 12, color: '#6B7280' },
//   planDescription: { fontSize: 12, color: '#6B7280', marginTop: 4 },
//   actions: { padding: 15 },
//   subscribeBtn: { backgroundColor: '#6366F1', paddingVertical: 14, borderRadius: 16, alignItems: 'center', marginBottom: 10 },
//   subscribeText: { color: 'white', fontSize: 16, fontWeight: '600' },
//   unlockBtn: { flexDirection: 'row', borderWidth: 2, borderColor: '#6366F1', paddingVertical: 14, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
//   unlockText: { color: '#6366F1', fontWeight: '600', fontSize: 14, marginLeft: 6 },
//   modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
//   modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 16, width: '80%' },
//   modalTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10, textAlign: 'center' },
//   modalInput: { borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 8, padding: 10, marginBottom: 15 },
//   modalButtons: { flexDirection: 'row', justifyContent: 'space-between' },
//   modalBtn: { backgroundColor: '#6366F1', padding: 12, borderRadius: 8, flex: 1, marginRight: 5, alignItems: 'center' },
//   modalCancelBtn: { backgroundColor: '#E5E7EB', marginRight: 0, marginLeft: 5 },
//   modalBtnText: { color: 'white', fontWeight: '600' },
// });

// export default CommonSubscription;


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../utils/apiClient';
import {
  formatPlanPrice,
  cleanFeatureText,
  getPlanIconName,
  getPlanFeatures,
  getPlanExtraAmount,
  getPlanExtraAmountText,
  getPlanExtraAddonBenefits,
  normalizeSubscriptionPlans,
} from '../constants/subscription';

const getPlanId = (plan: any) => String(plan?._id ?? plan?.id ?? '');

const CommonSubscription = ({ embedded = false }: { embedded?: boolean }) => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [unlockCode, setUnlockCode] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setIsLoading(true);
        const res = await API.get('/subscriptions');
        const normalizedPlans = normalizeSubscriptionPlans(res.data);
        if (res.data?.success && normalizedPlans.length > 0) {
          setPlans(normalizedPlans);
          setSelectedPlan(getPlanId(normalizedPlans[0]));
        } else {
          setPlans([]);
          setSelectedPlan(null);
        }
      } catch (err) {
        console.error('Error fetching plans:', err);
        setPlans([]);
        setSelectedPlan(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleSubscribe = async (plan) => {
    if (!plan) return;
    try {
      const userId = await AsyncStorage.getItem('userId');
      navigation.navigate('SubscriptionDetails', {
        plan,
        isYearly: false,
        userId,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const _handleUnlockSubscription = () => setModalVisible(true);

  const handleConfirmUnlock = () => {
    if (unlockCode.trim() !== '') {
      Alert.alert('Success', 'Your subscription has been unlocked successfully!');
      setModalVisible(false);
      setUnlockCode('');
    } else {
      Alert.alert('Error', 'Please enter a valid code.');
    }
  };

  const selectedPlanData = plans.find((p) => getPlanId(p) === selectedPlan);

  const Wrapper = embedded ? View : ScrollView;

  return (
    <Wrapper
      style={styles.container}
      {...(!embedded ? { contentContainerStyle: styles.scrollContent, showsVerticalScrollIndicator: false } : {})}
    >
      <View style={styles.header}>
        <View style={styles.headerIconWrap}>
          <MIcon name="clipboard-pulse" size={24} color={Colors.medicalBlue} />
        </View>
        <Text style={styles.headerTitle}>Subscription Plan</Text>
        <Text style={styles.headerSubtitle}>
          Ongoing clinical support, messaging, and visits tailored to your needs
        </Text>
        <View style={styles.trustRow}>
          <View style={styles.trustChip}>
            <MIcon name="shield-check-outline" size={12} color={Colors.medicalTeal} />
            <Text style={styles.trustChipText}>HIPAA compliant</Text>
          </View>
          <View style={styles.trustChip}>
            <MIcon name="calendar-remove-outline" size={12} color={Colors.medicalTeal} />
            <Text style={styles.trustChipText}>Cancel at any time</Text>
          </View>
        </View>
      </View>

      {isLoading && (
        <ActivityIndicator size="large" color={Colors.medicalBlue} style={styles.loader} />
      )}

      {!isLoading && plans.length === 0 && (
        <View style={styles.emptyPlans}>
          <MIcon name="cloud-off-outline" size={32} color="#94A3B8" />
          <Text style={styles.emptyPlansText}>No subscription plans available right now.</Text>
        </View>
      )}

      {!isLoading && plans.length > 0 && (
        <View style={styles.plans}>
          {plans.map((plan) => {
            const planId = getPlanId(plan);
            const isSelected = selectedPlan === planId;
            const accent = plan.color || Colors.medicalBlue;
            const planFeatures = getPlanFeatures(plan);
            const extraAmount = getPlanExtraAmount(plan);
            const extraDescription = getPlanExtraAmountText(plan);
            const extraAddonBenefits = getPlanExtraAddonBenefits(plan);
            const hasExtraAddon = extraAmount > 0;

            return (
              <TouchableOpacity
                key={planId}
                activeOpacity={0.9}
                style={[
                  styles.planCard,
                  isSelected && styles.planCardSelected,
                  isSelected && { borderColor: accent, backgroundColor: '#F0F9FF' },
                  plan.popular && styles.planCardPopular,
                ]}
                onPress={() => {
                  setSelectedPlan(planId);
                }}
              >
                {isSelected && (
                  <View style={[styles.selectedPlanBadge, { backgroundColor: accent }]}>
                    <Text style={styles.selectedPlanBadgeText}>Selected</Text>
                  </View>
                )}

                {plan.popular && (
                  <View style={[styles.popularBadge, { backgroundColor: accent }]}>
                    <MIcon name="star" size={11} color="#FFFFFF" />
                    <Text style={styles.popularText}>Most popular</Text>
                  </View>
                )}

                <View style={styles.planTopRow}>
                  <View style={[styles.planIconWrap, { backgroundColor: `${accent}18` }]}>
                    <MIcon name={getPlanIconName(plan.icon)} size={22} color={accent} />
                  </View>

                  <View style={styles.planMeta}>
                    <View style={styles.planTitleRow}>
                      <Text style={styles.planTitle}>{plan.name}</Text>
                      <View style={styles.pricePill}>
                        <Text style={styles.planPrice}>${plan.price}</Text>
                        <Text style={styles.planPeriod}>{plan.period || '/mo'}</Text>
                      </View>
                    </View>
                    <Text style={styles.planDescription}>{plan.description}</Text>
                  </View>

                  <View style={[styles.radioOuter, isSelected && { borderColor: accent }]}>
                    {isSelected && <View style={[styles.radioInner, { backgroundColor: accent }]} />}
                  </View>
                </View>

                {planFeatures.length > 0 && (
                  <View style={styles.featurePreview}>
                    {planFeatures.map((feature: string, index: number) => (
                      <View key={`${planId}-feature-${index}`} style={styles.featureRow}>
                        <MIcon name="check-circle" size={14} color={Colors.medicalTeal} />
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>
                )}

                {isSelected && hasExtraAddon && (
                  <View style={styles.consultationNoteBox}>
                    <MIcon name="information-outline" size={16} color={Colors.medicalBlue} />
                    <View style={styles.consultationNoteContent}>
                      {!!extraDescription && (
                        <Text style={styles.consultationNoteText}>{extraDescription}</Text>
                      )}
                      {extraAddonBenefits.map((benefit, index) => {
                        const text = cleanFeatureText(benefit);
                        if (!text) return null;
                        return (
                          <View key={`${planId}-extra-${index}`} style={styles.extraInfoRow}>
                            <MIcon name="check-circle" size={13} color={Colors.medicalTeal} />
                            <Text style={styles.extraInfoText}>{text}</Text>
                          </View>
                        );
                      })}
                      <Text style={styles.extraAmountText}>
                        +${formatPlanPrice(extraAmount)}
                      </Text>
                    </View>
                  </View>
                )}

                {isSelected && (
                  <TouchableOpacity
                    style={styles.viewDetailsRow}
                    onPress={() => handleSubscribe(plan)}
                  >
                    <Text style={styles.viewDetailsText}>View full plan details</Text>
                    <MIcon name="chevron-right" size={18} color={Colors.medicalBlue} />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      <View style={styles.actions}>
        <TouchableOpacity
          activeOpacity={0.85}
          style={[styles.subscribeBtn, (isLoading || !selectedPlanData) && { opacity: 0.6 }]}
          onPress={() => handleSubscribe(selectedPlanData)}
          disabled={isLoading || !selectedPlanData}
        >
          <MIcon name="arrow-right-circle" size={20} color="#FFFFFF" />
          <Text style={styles.subscribeText}>Continue with selected plan</Text>
        </TouchableOpacity>
      </View>

      {/* UNLOCK MODAL */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Unlock Code</Text>

            <TextInput
              style={styles.modalInput}
              placeholder="Enter code"
              value={unlockCode}
              onChangeText={setUnlockCode}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalBtn} onPress={handleConfirmUnlock}>
                <Text style={styles.modalBtnText}>Unlock</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalBtn, styles.modalCancelBtn]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={[styles.modalBtnText, { color: '#6366F1' }]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#F8FAFC', flex: 1 },
  scrollContent: { paddingBottom: 32 },
  header: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: Colors.medicalBlueLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: { fontSize: 20, fontWeight: '600', color: '#0F172A', marginTop: 10 },
  headerSubtitle: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 19,
  },
  trustRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 14,
  },
  trustChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: Colors.medicalTealLight,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  trustChipText: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.medicalTeal,
  },
  loader: { marginTop: 24 },
  emptyPlans: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    gap: 10,
  },
  emptyPlansText: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
  },
  plans: { padding: 16, paddingTop: 12 },
  planCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    position: 'relative',
    shadowColor: '#0B4365',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 1,
  },
  planCardSelected: {
    borderWidth: 2,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  selectedPlanBadge: {
    position: 'absolute',
    top: -10,
    right: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    zIndex: 1,
  },
  selectedPlanBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  planCardPopular: { marginTop: 8 },
  popularBadge: {
    position: 'absolute',
    top: -10,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  popularText: { color: '#FFFFFF', fontSize: 10, fontWeight: '700', textTransform: 'uppercase' },
  planTopRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  planIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planMeta: { flex: 1 },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#CBD5E1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  radioInner: { width: 10, height: 10, borderRadius: 5 },
  planTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  planTitle: { fontSize: 16, fontWeight: '600', color: '#0F172A', flex: 1 },
  pricePill: { alignItems: 'flex-end' },
  planPrice: { fontSize: 18, fontWeight: '700', color: Colors.medicalBlue },
  planPeriod: { fontSize: 11, color: '#64748B' },
  planDescription: { fontSize: 13, color: '#64748B', marginTop: 6, lineHeight: 18 },
  featurePreview: { marginTop: 12, gap: 6, paddingTop: 12, borderTopWidth: 1, borderTopColor: '#F1F5F9' },
  featureRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  featureText: { flex: 1, fontSize: 12, color: '#475569' },
  consultationNoteBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginTop: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.medicalBlueLight,
    borderWidth: 1,
    borderColor: '#C5E4F3',
  },
  consultationNoteContent: {
    flex: 1,
    gap: 4,
  },
  consultationNoteText: {
    flex: 1,
    fontSize: 12,
    color: '#475569',
    lineHeight: 17,
  },
  extraInfoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    marginTop: 2,
  },
  extraInfoText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 17,
    color: '#475569',
  },
  extraAmountText: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '700',
    color: Colors.medicalBlue,
  },
  viewDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  viewDetailsText: { fontSize: 13, fontWeight: '600', color: Colors.medicalBlue },
  actions: { paddingHorizontal: 16, paddingBottom: 16 },
  subscribeBtn: {
    backgroundColor: Colors.medicalBlue,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  subscribeText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 16, width: '80%' },
  modalTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10, textAlign: 'center' },
  modalInput: { borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 8, padding: 10, marginBottom: 15 },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between' },
  modalBtn: { backgroundColor: Colors.medicalBlue, padding: 12, borderRadius: 8, flex: 1, marginRight: 5, alignItems: 'center' },
  modalCancelBtn: { backgroundColor: '#E5E7EB', marginRight: 0, marginLeft: 5 },
  modalBtnText: { color: 'white', fontWeight: '600' },
});

export default CommonSubscription;
