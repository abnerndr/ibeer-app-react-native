import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  RootAuthenticationScreenProps,
  RootAuthParamList,
  RootAuthProps,
  RootAuthScreenProps,
} from "../../../../types";
import useColorScheme from "../../../hooks/useColorScheme";
import NotFoundScreen from "../../NotFoundScreen";

import CreateAccountScreen from "../CreateAccountScreen";
import LoginScreen from "../LoginScreen";
import linkingConfig from "./linkingConfig";

export default function AuthNavigation() {
  const theme = useColorScheme();
  let defaultColor = DefaultTheme;
  let defaultDark = DarkTheme;

  defaultColor.colors.primary = "#FFA000";
  defaultDark.colors.primary = "#FFA000";

  return (
    <>
      <NavigationContainer
        linking={linkingConfig}
        theme={theme === "dark" ? defaultDark : defaultColor}
      >
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}

const Stack = createNativeStackNavigator<RootAuthProps>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Create" component={CreateAccountScreen} />
    </Stack.Navigator>
  );
}
