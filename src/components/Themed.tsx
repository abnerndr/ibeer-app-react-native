/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultInput,
  TouchableOpacity as DefaultButton,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
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

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};
type TitleProps = {
  title: string;
  color?: string;
  style?: any;
  preview?: boolean;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type InputProps = ThemeProps & DefaultInput["props"];
export type ButtonProps = ThemeProps & TitleProps & DefaultButton["props"];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
// buttons
export function Press(props: ButtonProps) {
  const { onPress, title = "Save", ...otherProps } = props;

  return (
    <DefaultButton onPress={onPress} style={styles.button} {...otherProps}>
      <Text style={styles.textButton}>{title}</Text>
    </DefaultButton>
  );
}

export function Link(props: ButtonProps) {
  const {
    onPress,
    style,
    title = "Save",
    lightColor,
    darkColor,
    ...otherProps
  } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <DefaultButton style={style} onPress={onPress} {...otherProps}>
      <Text style={[{ color }, styles.link]}>{title}</Text>
    </DefaultButton>
  );
}

// inputs
export function Input(props: InputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <DefaultInput
      style={[{ color, backgroundColor }, style, styles.input]}
      {...otherProps}
    />
  );
}

export function InputPassword(props: InputProps & { preview?: boolean }) {
  const theme = useColorScheme();
  const { style, lightColor, darkColor, preview, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const background = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const [passwordVisibility, setPasswordVisibility] = React.useState(true);
  const [rightIcon, setRightIcon] =
    React.useState<React.ComponentProps<typeof FontAwesome>["name"]>("eye");
  const [rightIconColor, setRightIconColor] = React.useState(
    theme === "dark" ? "#fefefe" : "#1C1C1C"
  );

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-slash");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-slash") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string | any;
  }) {
    return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
  }

  return (
    <View
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <DefaultInput
        style={[
          { color, backgroundColor: background },
          style,
          styles.inputPass,
        ]}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        enablesReturnKeyAutomatically
        {...otherProps}
      />
      {preview ? (
        <TouchableOpacity
          style={styles.visiblePass}
          onPress={handlePasswordVisibility}
        >
          <TabBarIcon name={rightIcon} color={rightIconColor} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderWidth: 1,
    opacity: 0.8,
    borderRadius: 10,
    borderColor: "#fcc971",
    width: "100%",
    height: 50,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  visiblePass: {
    position: "absolute",
    bottom: 0,
    right: 0,
    top: 12,
    paddingEnd: 14,
  },
  inputPass: {
    fontSize: 20,
    borderWidth: 1,
    opacity: 0.8,
    borderRadius: 10,
    borderColor: "#fcc971",
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFA000",
    borderRadius: 5,
  },
  textButton: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFF",
  },
  link: {
    fontSize: 18,
    fontWeight: "500",
  },
});
