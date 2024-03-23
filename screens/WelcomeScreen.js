import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Image
          style={styles.logo}
          source={require("../assets/little-lemon-logo.png")}
        />
        <Text style={styles.textStyle}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Pressable
        onPress={() => nav.navigate("Subscribe")}
        style={styles.bottom}
      >
        <Text style={styles.buttonStyle}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
  },
  logo: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  textStyle: {
    marginTop: 100,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 150,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#006600",
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottom: {
    marginBottom: 30,
  },
});
