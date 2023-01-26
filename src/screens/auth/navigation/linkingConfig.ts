/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootAuthParamList } from "../../../../types";

const linking: LinkingOptions<RootAuthParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Login: {
            screens: {
              LoginScreen: "Login",
            },
          },
          Create: {
            screens: {
              CreateAccountScreen: "Create",
            },
          },
          Forgot: {
            screens: {
              ForgotPasswordScreen: "Forgot",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};

export default linking;
