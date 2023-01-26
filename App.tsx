import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Platform, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AndroidAreaView from "./AndroidAreaView";
import IosAreaView from "./IosAreaView";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import AuthNavigation from "./src/screens/auth/navigation/AuthNavigation";
import LoginScreen from "./src/screens/auth/LoginScreen";
import Navigation from "./src/navigation";
import Colors from "./src/constants/Colors";

function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export default function App(props: any) {
  const { lightColor, darkColor } = props;
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const background = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <SafeAreaView
          style={[
            { backgroundColor: background },
            Platform.OS === "android"
              ? AndroidAreaView.droidSafeArea
              : IosAreaView.iosSafeArea,
          ]}
        >
          <SafeAreaProvider>
            {/* <Navigation colorScheme={colorScheme} /> */}
            <AuthNavigation />
            {/* <LoginScreen /> */}
            <StatusBar />
          </SafeAreaProvider>
        </SafeAreaView>
      </>
    );
  }
}
