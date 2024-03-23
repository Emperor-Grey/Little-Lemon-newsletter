import * as React from "react";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");
  const checkValidEmail = validateEmail(email);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <Text style={styles.textStyle}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>

      <TextInput
        style={styles.inputStyle}
        placeholder="Type your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
      />

      <Button
        onPress={() => Alert.alert("Thanks for subscribing, stay tuned!")}
        title="Subscribe"
        color="#006600"
        disabled={!checkValidEmail}
      />
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
  },
  logo: {
    marginTop: 40,
    marginLeft: 75,
    height: 120,
    width: 200,
    resizeMode: "contain",
  },
  textStyle: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 19,
    textAlign: "center",
  },
  inputStyle: {
    marginBottom: 20,
    fontSize: 16,
    borderColor: "#000000",
    borderWidth: 0.5,
    height: 40,
    borderRadius: 8,
    paddingLeft: 12,
    paddingRight: 12,
  },
});
