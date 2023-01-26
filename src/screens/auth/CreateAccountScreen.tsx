import React from "react";
import { TouchableOpacity } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  useColorScheme,
  Keyboard,
} from "react-native";
import {
  Text,
  View,
  Input,
  Press,
  Link,
  InputPassword,
} from "../../components/Themed";

import type { EmitterSubscription } from "react-native";

export default function CreateAccountScreen({ navigation }: any) {
  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfimPassword] = React.useState("");

  const [keyboardStatus, setkeyboardStatus] = React.useState("");

  const theme = useColorScheme();

  const placeColor = theme === "dark" ? "#afafaf" : "#3d3d3d";

  Keyboard.addListener("keyboardDidShow", () => {
    setkeyboardStatus("Show");
  });
  Keyboard.addListener("keyboardDidHide", () => {
    setkeyboardStatus("Hidden");
  });

  Keyboard.removeSubscription;

  return (
    <>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: "``#FFF5E6``",
        }}
      />
      <View style={styles.header}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginTop: keyboardStatus === "Show" ? -50 : 80,
          }}
        >
          <Image
            style={styles.logo}
            source={
              theme === "light"
                ? require("../../assets/images/app/logo-dark.png")
                : require("../../assets/images/app/logo.png")
            }
          />
          <Text style={styles.title}>faça login</Text>
          <View style={{ width: "100%", marginTop: 20 }}>
            <Input
              onChangeText={onChangeName}
              value={name}
              placeholderTextColor={placeColor}
              placeholder="nome"
              keyboardType="default"
              onSubmitEditing={Keyboard.dismiss}
            />
            <Input
              onChangeText={onChangeEmail}
              value={email}
              placeholderTextColor={placeColor}
              placeholder="e-mail"
              keyboardType="email-address"
            />
            <InputPassword
              onChangeText={onChangePassword}
              value={password}
              preview={false}
              placeholderTextColor={placeColor}
              placeholder="crie sua senha"
              textContentType={"password"}
              multiline={false}
            />
            <InputPassword
              onChangeText={onChangeConfimPassword}
              value={confirmPassword}
              preview={true}
              placeholderTextColor={placeColor}
              placeholder="confirme sua senha"
              textContentType={"password"}
              multiline={false}
            />
          </View>
          <Press title="criar conta" />
          <Link
            onPress={() => navigation.navigate("Login")}
            style={styles.link}
            title="já tenho um conta"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
  },
  logo: {
    flex: 0,
    marginBottom: 30,
    justifyContent: "center",
    // marginTop: onPress,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
