// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { authRoutes, mainRoutes, AuthStackParamList, MainTabParamList } from './Routes';
// import AppHeader from '../components/AppHeader';
// import SplashScreen from '../screens/SplashScreen';

// const Stack = createStackNavigator<AuthStackParamList>();
// const Tab = createBottomTabNavigator<MainTabParamList>();

// function MainjTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => {
//         const current = mainRoutes.find(r => r.name === route.name);
//         return {
//           header: (props: any) => <AppHeader {...props} title={current?.options?.title ?? current?.name} />,
//           tabBarIcon: ({ color, size }: { color: string; size: number }) => (
//             <Icon name={current?.icon ?? 'circle'} size={size} color={color} />
//           ),
//         };
//       }}
//     >
//       {mainRoutes.map(route => (
//         <Tab.Screen key={route.name} name={route.name as any} component={route.component} options={route.options} />
//       ))}
//     </Tab.Navigator>
//   );
// }
// function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false, // hide default header, since you use AppHeader
//       }}
//     >
//       {mainRoutes.map(route => (
//         <Tab.Screen
//           key={route.name}
//           name={route.name as any}
//           component={route.component}
//           options={{
//             ...route.options,
//             tabBarIcon: ({ color, size }) => (
//               <Icon name={route.icon ?? 'circle'} size={size} color={color} />
//             ),
//           }}
//         />
//       ))}
//     </Tab.Navigator>
//   );
// }


// export default function AppNavigator() {
//   return (
//     <Stack.Navigator initialRouteName='Splash'>
//         <Stack.Screen
//         name="Splash"
//         component={SplashScreen}
//         options={{ headerShown: false }}
//       />
      
//       {authRoutes.map(route => (
//         <Stack.Screen
//           key={route.name}
//           name={route.name as any}
//           component={route.component}
//           options={{
//             ...route.options,
//             header: (props: any) => <AppHeader {...props} title={route.options?.title ?? route.name} showBackButton={route.options?.showBackButton ?? false} />,
//           }}
//         />
//       ))}

//       <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );
// }

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { authRoutes, mainRoutes, AuthStackParamList, MainTabParamList } from './Routes';
import AppHeader from '../components/AppHeader';
import SplashScreen from '../screens/SplashScreen';
import Colors from '../constants/Colors';
import CustomTabButton from '../components/TabIconTOOL';
import { Platform } from 'react-native';

const Stack = createStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  const insets = useSafeAreaInsets();
  const bottomInset = Platform.OS === 'ios' ? Math.max(insets.bottom, 8) : 10;
  const tabBarHeight = 54 + bottomInset;

  return (
   <Tab.Navigator
  id={undefined}
  screenOptions={({ route }) => {
    const current = mainRoutes.find(r => r.name === route.name);
    return {
      header: (props: any) => <AppHeader {...props} title={current?.options?.title ?? current?.name}  showBackButton={current?.options.back}/>,
      tabBarIcon: ({ color: _color, size: _size, focused }) => (
        <Icon 
          name={current?.icon ?? 'circle'} 
          size={26} 
          color={focused ? Colors.medicalBlue : '#94A3B8'} 
        />
      ),
     
            tabBarButton: (props) => (
        <CustomTabButton {...props} routeName={route.name} />
      ),
          tabBarStyle: {
            height: tabBarHeight,
            paddingBottom: bottomInset,
            paddingTop: 6,
            borderTopWidth: 1,
            borderTopColor: '#E2E8F0',
            backgroundColor: '#FFFFFF',
          },
          tabBarLabelStyle: { fontSize: 11, fontWeight: '500', paddingBottom: Platform.OS === 'ios' ? 0 : 10 },
          headerShown: true,
          headerStyle: { backgroundColor: Colors.medicalBlue },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
      tabBarActiveTintColor: Colors.medicalBlue,
      tabBarInactiveTintColor: '#94A3B8',
    };
  }}
>
  {mainRoutes.map(route => (
    <Tab.Screen key={route.name} name={route.name as any} component={route.component} options={route.options} />
  ))}
</Tab.Navigator>

  );
}

export default function AppNavigator() {
  // if (!isConnected) {
  //   return <NoInternetScreen/>;
  // }
  return (
      <Stack.Navigator 
        id={undefined}
        initialRouteName='Splash'
             
          screenOptions={{
  headerShown: false,
  animation: 'slide_from_right',
  cardStyle: { backgroundColor: '#FFFFFF' },
  gestureEnabled: true,
  ...(Platform.OS === 'ios' && { fullScreenGestureEnabled: true }),
}}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        
        {authRoutes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name as any}
            component={route.component}
            options={{
              ...route.options,
              header: (props: any) => (
                <AppHeader 
                  {...props} 
                  title={route.options?.title ?? route.name} 
                  showBackButton={route.options?.showBackButton ?? true} 
                />
              ),
            }}
          />
        ))}

        <Stack.Screen 
          name="Main" 
          component={MainTabs} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
  );
}