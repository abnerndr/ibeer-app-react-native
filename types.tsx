/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// tabs

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }

  // auth
  namespace ReactAuthentication {
    interface RootParamList extends RootAuthParamList {}
  }
}

// auth
export type RootAuthParamList = {
  Root: NavigatorScreenParams<RootAuthProps> | undefined;
  NotFound: undefined;
};

export type RootAuthScreenProps<Screen extends keyof RootAuthParamList> =
  NativeStackScreenProps<RootAuthParamList, Screen>;

export type RootAuthProps = {
  Login: undefined;
  Create: undefined;
  Forgot: undefined;
};

export type RootAuthenticationScreenProps<Screen extends keyof RootAuthProps> =
  CompositeScreenProps<
    BottomTabScreenProps<RootAuthProps, Screen>,
    NativeStackScreenProps<RootAuthProps>
  >;

// tabs
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabHome: undefined;
  TabCart: undefined;
  TabProfile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
