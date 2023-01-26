import React from "react";
import { SafeAreaView, StyleSheet, Image, useColorScheme } from "react-native";
import {
  Text,
  View,
  Input,
  Press,
  Link,
  InputPassword,
} from "../../components/Themed";

export default function LoginScreen({ navigation }: any) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const theme = useColorScheme();

  return (
    <>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: "``#FFF5E6``",
        }}
      />
      <View style={styles.header}>
        <View style={styles.container}>
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
              onChangeText={onChangeEmail}
              value={email}
              placeholderTextColor="#c1c1c1"
              placeholder="e-mail"
              keyboardType="email-address"
            />
            <InputPassword
              onChangeText={onChangePassword}
              value={password}
              preview
              placeholderTextColor="#c1c1c1"
              placeholder="senha"
              textContentType={"password"}
              multiline={false}
            />
          </View>
          <Link
            onPress={() => navigation.navigate("Create")}
            style={styles.link}
            title="criar uma nova conta"
          />
          <Press title="acessar" />
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
    justifyContent: "center",
  },
  logo: {
    flex: 0,
    marginBottom: 30,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 30,
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 40,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
