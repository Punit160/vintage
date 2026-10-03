import type { AuthStackParamList, MainTabParamList } from '../navigation/Routes';

// Makes useNavigation() / navigate() aware of app routes app-wide
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, MainTabParamList {}
  }
}

export {};
